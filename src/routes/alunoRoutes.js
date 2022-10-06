import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const route = Router();

route.get('/', alunoController.index);
route.get('/:id', alunoController.show);
route.post('/', loginRequired, alunoController.store);
route.put('/:id', loginRequired, alunoController.update);
route.delete('/:id', loginRequired, alunoController.delete);

export default route;
