import { Express } from 'express';
import userRouter from './userRouter';

export default function appRouter(app: Express) {
  app.use('users', userRouter);
} 