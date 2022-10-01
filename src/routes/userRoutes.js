import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const route = Router();

// Não deveria existir
// route.get('/', userController.index); // Lista usuários
// route.get('/:id', userController.show); // Lista usuário

route.post('/', userController.store);
route.put('/', loginRequired, userController.update);
route.delete('/', loginRequired, userController.delete);

export default route;

/**
 * Métodos (functions):
 * index => Lista todos os usuários - GET
 * store ou create => Cria novo usuário - POST
 * delete => Deleta um usuário - DELETE
 * show => mostra um usuário - GET
 * update => atualiza um usuário - PATCH (altera apenas um valor) OR PUT
 */
