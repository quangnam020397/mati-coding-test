// init index file express
import express from 'express';
import router from './routes';

// setup cors
import cors from 'cors';

// setup body parser

const app = express();

app.use(cors());

app.use(express.json());
app.use('/api/v1', router);

const PORT = 3333;

app.listen(PORT, () => console.log('Server is running on port 3333'));
