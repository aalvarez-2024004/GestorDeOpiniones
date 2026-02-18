import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import postRoutes from '../src/publicaciones/publi.routes.js';

export const createApp = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(helmet());

  app.use('/api/posts', postRoutes);

  return app;
};