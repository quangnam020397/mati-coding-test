// init index file express
import path from 'path';
import express from 'express';
import router from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

// setup cors
import cors from 'cors';
import { server } from './config';
import fs from 'fs';
import logger from './middlewares/logger';

// setup body parser

const app = express();

app.use(cors());

app.use(express.json());

//
// get path to swagger.json

const swaggerFile: string = path.join(__dirname, './docs/swagger.json');
const swaggerData: any = fs.readFileSync(swaggerFile, 'utf8');
const swaggerDocument = JSON.parse(swaggerData);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// use logger middleware for any request
app.use(logger);

app.use('/api/v1', router);

app.listen(server.port, server.host, () => {
  console.log(`Server is running on port ${server.port}`);
});

export default app;