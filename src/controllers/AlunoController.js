import Aluno from '../models/Aluno';
import Photo from '../models/Photo';

class AlunoController {
  // Mostra todos os alunos da tabela
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC']],
        include: {
          model: Photo,
        },
      });
      res.status(200).json({ alunos });
    } catch (error) {
      // res.status(500).json({ errors: [error.errors] });
    }
  }

  // Mostra um aluno da tabela
  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ errors: ['missing ID'] });

      const aluno = await Aluno.findByPk(id);
      if (!aluno) return res.status(400).json({ errors: ['Student do not exists.'] });

      return res.status(400).json(aluno);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // Cria um aluno na tabela
  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);

      return res.status(200).json(aluno);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // Atualiza um aluno
  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ errors: ['missing ID'] });

      const aluno = await Aluno.findByPk(id);
      if (!aluno) return res.status(400).json({ errors: ['Student do not exists.'] });

      const newDataAluno = await aluno.update(req.body);

      return res.status(400).json(newDataAluno);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // Deleta um aluno da tabela
  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ errors: ['missing ID'] });

      const aluno = await Aluno.findByPk(id);
      if (!aluno) return res.status(400).json({ errors: ['Student do not exists.'] });

      await aluno.destroy();

      return res.status(400).json({ message: ['Student successfully excluded.'] });
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }
}

export default new AlunoController();
