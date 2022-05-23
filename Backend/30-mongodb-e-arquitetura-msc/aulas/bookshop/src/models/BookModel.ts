import { model as createModel } from "mongoose";
import BookSchema, { IBook } from "../schemas/BookSchema";

export default class BookModel {
  constructor(private bookModel = createModel('books', BookSchema)) {
  }
  public async getBooks():Promise<IBook[]> {
    const books = await this.bookModel.find();
    return books;
  }

  public async createBook(book: IBook): Promise<IBook> {
    const bookCreated = await this.bookModel.create(book);
    return book;
  } 

  public async getBook(id: string): Promise<IBook | null> {
    const book = await this.bookModel.findById(id);
    return book;
  }

  public async editBook(id: string, data: object): Promise<IBook | null> {
    const book = await this.bookModel.findOneAndUpdate(
      {_id: id},
      {...data},
      {new: true }
    );
    return book
  }

  public async deleteBook(id: string): Promise<IBook | null> {
    const book = await this.bookModel.findOneAndDelete({_id: id});
    return book;
  }
}