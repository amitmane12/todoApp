import express, { urlencoded, json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectToDatabase from './db/databaseConnection';
dotenv.config();

connectToDatabase();
const app = express();
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/health', (_, res) => {
  res.send('OK');
});

export default app;
