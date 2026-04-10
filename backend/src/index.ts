import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.use('/api', routes);

app.use(errorHandler);

const port = process.env.PORT || 4000;
app.listen(Number(port), () => {
  console.log(`Server running on port ${port}`);
});
