"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async store(req, res) {
    try {
      const novoUser = await _User2.default.create(req.body);
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
      const users = await _User2.default.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await _User2.default.findByPk(id);
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

      const user = await _User2.default.findByPk(id);

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

      const user = await _User2.default.findByPk(id);

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

exports. default = new UserController();
