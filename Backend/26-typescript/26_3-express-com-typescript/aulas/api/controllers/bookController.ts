import { Request, Response } from "express";
import StatusCode from "../enums/StatusCode";
import Book from "../interfaces/Book";

import BookService from "../services/bookService";

class BookController {

  bookService = new BookService();
  

  public async getAll(_req: Request, res: Response): Promise<Response> {
    const books = await this.bookService.getAll();
    return res.status(StatusCode.OK).json(books);
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    const id = parseInt(req.params.id);
    const book = await this.bookService.getById(id);

    if(!book) {
      return res.status(StatusCode.NOT_FOUND).json({ message: 'Book not found!'});
    }

    return res.status(StatusCode.OK).json(book);
  }


  public async create(req: Request, res: Response): Promise<Response> {
    const book = this.buildBookByParams(req.body);
    const bookCreated = await this.bookService.create(book);
    return res.status(StatusCode.CREATED).json(bookCreated);
  }

  private buildBookByParams(params: any): Book {
    const { title, price, author, isbn } = params;
    return { title, price, author, isbn } as Book;
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const id = parseInt(req.params.id);
    const book = this.buildBookByParams(req.body);
    await this.bookService.update(id, book);

    return res.status(StatusCode.NO_CONTENT).end();
  } 

  public async remove(req: Request, res: Response): Promise<Response> {
    const id = parseInt(req.params.id);

    await this.bookService.remove(id);
    return res.status(StatusCode.NO_CONTENT).end();
  }
}
export default BookController;