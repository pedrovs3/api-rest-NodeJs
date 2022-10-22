"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _AlunoController = require('../controllers/AlunoController'); var _AlunoController2 = _interopRequireDefault(_AlunoController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const route = _express.Router.call(void 0, );

route.get('/', _AlunoController2.default.index);
route.get('/:id', _AlunoController2.default.show);
route.post('/', _loginRequired2.default, _AlunoController2.default.store);
route.put('/:id', _loginRequired2.default, _AlunoController2.default.update);
route.delete('/:id', _loginRequired2.default, _AlunoController2.default.delete);

exports. default = route;
