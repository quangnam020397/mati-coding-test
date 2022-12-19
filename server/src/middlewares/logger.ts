// logger middleware

import { NextFunction, Request, Response } from 'express';

const logger = (req: Request, res: Response, next: NextFunction) => {
  // log ip address
  console.log(`IP: ${req.ip}, ${req.hostname}`, `${req.method} ${req.path}`);
  next();
};

export default logger;
