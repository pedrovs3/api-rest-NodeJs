import { Router } from 'express';

const route = Router();

route.get('/', (req, res) => {
  res.send('olá mundo!');
});

export default route;
