import express, { urlencoded, json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectToDatabase from './db/databaseConnection';
import { JSON_LIMIT, URL_ENCODED_LIMIT } from './constants';
dotenv.config();

connectToDatabase();
const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(json({
limit: JSON_LIMIT
}));
app.use(urlencoded({ extended: true, limit: URL_ENCODED_LIMIT }));
app.use(express.static('public'));

app.get('/health', (_, res) => {
  res.send('OK');
});

export default app;
