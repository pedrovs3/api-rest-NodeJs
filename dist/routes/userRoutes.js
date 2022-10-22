"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const route = _express.Router.call(void 0, );

// Não deveria existir
// route.get('/', userController.index); // Lista usuários
// route.get('/:id', userController.show); // Lista usuário

route.post('/', _loginRequired2.default, _UserController2.default.store);
route.put('/', _loginRequired2.default, _UserController2.default.update);
route.delete('/', _loginRequired2.default, _UserController2.default.delete);

exports. default = route;

/**
 * Métodos (functions):
 * index => Lista todos os usuários - GET
 * store ou create => Cria novo usuário - POST
 * delete => Deleta um usuário - DELETE
 * show => mostra um usuário - GET
 * update => atualiza um usuário - PATCH (altera apenas um valor) OR PUT
 */
