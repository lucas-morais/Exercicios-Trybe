import express, { Request, Response } from 'express';
import { book } from './routes';

const app = express();

const PORT = 3000;



app.get('/', (req:Request, res: Response): Response => {
  return res.send('Express + Typescript');
});

app.use(book)


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
