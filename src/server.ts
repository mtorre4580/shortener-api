import * as dotenv from 'dotenv';

dotenv.config();

import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import compression from 'compression';
import api from './api/shortener';

const PORT = 3000 || process.env.PORT;

const app: Application = express();

app.disable('x-powered-by');

app.use(morgan('dev'));
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (_, res) => {
  res.json({ message: 'ok' });
});

app.use('/api', api);

app.use((err, _, res, next) => {
  if (err) {
    return res.status(500).json({ message: 'Internal server error' });
  }
  next();
});

app.listen(PORT, () => {
  return console.log(`API is listening at http://localhost:${PORT}`);
});
