// root route

import { Router } from 'express';
import { authenticate } from '../middlewares';

const router = Router();

router.get('/', authenticate, (request, response) => {
  return response.json({ message: 'Hello World!' });
});

router.use('/calendar', );

export default router;
