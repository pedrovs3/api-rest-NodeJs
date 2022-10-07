import { Router } from 'express';
import multer from 'multer';

import photoController from '../controllers/PhotoController';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);

const route = Router();

route.post('/', upload.single('photo'), photoController.store);

export default route;
