"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);

class AlunoController {
  // Mostra todos os alunos da tabela
  async index(req, res) {
    try {
      const alunos = await _Aluno2.default.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [_Photo2.default, 'id', 'DESC']],
        include: {
          model: _Photo2.default,
          attributes: ['url', 'filename'],
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

      const aluno = await _Aluno2.default.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [_Photo2.default, 'id', 'DESC']],
        include: {
          model: _Photo2.default,
          attributes: ['url', 'filename'],
        },
      });

      if (!aluno) return res.status(400).json({ errors: ['Student do not exists.'] });

      return res.status(400).json(aluno);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // Cria um aluno na tabela
  async store(req, res) {
    try {
      const aluno = await _Aluno2.default.create(req.body);

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

      const aluno = await _Aluno2.default.findByPk(id);
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

      const aluno = await _Aluno2.default.findByPk(id);
      if (!aluno) return res.status(400).json({ errors: ['Student do not exists.'] });

      await aluno.destroy();

      return res.status(400).json({ message: ['Student successfully excluded.'] });
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }
}

exports. default = new AlunoController();
