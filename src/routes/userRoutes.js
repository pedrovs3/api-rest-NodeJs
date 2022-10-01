import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const route = Router();

route.post('/', userController.store);
route.get('/', loginRequired, userController.index);
route.get('/:id', userController.show);
route.put('/:id', userController.update);
route.delete('/:id', userController.delete);

export default route;

/**
 * Métodos (functions):
 * index => Lista todos os usuários - GET
 * store ou create => Cria novo usuário - POST
 * delete => Deleta um usuário - DELETE
 * show => mostra um usuário - GET
 * update => atualiza um usuário - PATCH (altera apenas um valor) OR PUT
 */
