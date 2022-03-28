import express from 'express';
import appRouter from './routes'; 

const app = express();

// json parser
app.use(express.json());

// router
appRouter(app);

export default app;