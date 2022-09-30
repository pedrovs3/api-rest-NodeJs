import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Pedro',
      sobrenome: 'Vieira',
      email: 'pedrovs3@hotmail.com',
      idade: 17,
      peso: 64.5,
      altura: 1.75,
    });
    res.status(200).json(novoAluno);
  }
}

export default new HomeController();
