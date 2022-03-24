import { Router, Request, Response } from "express";
import { read } from '../provider/readFile';
import StatusCode from "../enums/StatusCode";

const NOT_FOUND = 'Livro não encontrado';

const router = Router();

router.get('/books', async (req: Request, res: Response): Promise<Response> => {
  const books = await read();
  return res.status(StatusCode.OK).json(books)

  return res.status(200).json(books);
});

router.get('/books/:isbn', async (req: Request, res: Response): Promise<Response> => {
  const { isbn } = req.params;
  const books = await read();
  const book = books.find((bk) => bk.isbn = isbn);

  if(!book) {
    return res.status(StatusCode.NOT_FOUND).json({ message: NOT_FOUND});
  }

  return res.status(200).json(book);
});

router.post("/books", (req: Request, res: Response) => {

});

router.put("/books/:isbn", (req: Request, res: Response) => {

});

router.delete("/books/:isbn", (req: Request, res: Response) => {

});

export default router;