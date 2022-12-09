// root route

import { Router } from 'express';
// import { authenticate } from '../middlewares';
import calendarRouter from './calendar';

const router = Router();

router.get('/', (request, response) => {
  return response.json({ message: 'Hello World!' });
});

router.use('/calendar', calendarRouter);

export default router;
