import { Router } from 'express';
import userController from '../controllers/UserController';

const route = Router();

route.post('/', userController.store);

export default route;

/**
 * Métodos (functions):
 * index => Lista todos os usuários - GET
 * store ou create => Cria novo usuário - POST
 * delete => Deleta um usuário - DELETE
 * show => mostra um usuário - GET
 * update => atualiza um usuário - PATCH (altera apenas um valor) OR PUT
 */
