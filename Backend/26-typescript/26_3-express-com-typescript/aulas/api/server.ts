import express, { Request, Response } from 'express';
import { book } from './routes';

const PORT = 3000;


const app = express();

app.use(express.json());

app.get('/', (req:Request, res: Response): Response => {
  return res.send('Express + Typescript');
});

app.use('/books', book);


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
