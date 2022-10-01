import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.status(200).json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((erro) => erro.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      const { nome, email } = user;

      return res.status(200).json({ id, nome, email });
    } catch (error) {
      return res.status(400).json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const id = req.userId;

      if (!id) {
        return res.status(400).json({ errors: ['Missing ID'] });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({ errors: ['User not exist'] });
      }

      const newData = await user.update(req.body);

      const { nome, email } = newData;

      return res.status(200).json({ id, nome, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((erro) => erro.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const id = req.userId;

      if (!id) {
        return res.status(400).json({ errors: ['Missing ID'] });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({ errors: ['User not exist'] });
      }

      await user.destroy();

      return res.status(200).json(null);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((erro) => erro.message),
      });
    }
  }
}

export default new UserController();
