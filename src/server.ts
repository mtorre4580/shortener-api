import * as dotenv from 'dotenv';

dotenv.config();

import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import api from './api/shortener';

const PORT = 3000 || process.env.PORT;

const app: Application = express();

app.disable('x-powered-by');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.listen(PORT, () => {
  return console.log(`API is listening at http://localhost:${PORT}`);
});
