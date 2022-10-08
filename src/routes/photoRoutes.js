import { Router } from 'express';
import photoController from '../controllers/PhotoController';

const route = Router();

route.post('/', photoController.store);

export default route;
