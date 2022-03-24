import fs from 'fs/promises';
import Book from "../interfaces/Book";

const BOOKS_PATH = './api/mocks/books.json';


async function read(): Promise<Book[]> {
  const data = await fs.readFile(BOOKS_PATH, 'utf-8');

  const books: Book[] = JSON.parse(data);

  return books;
}

export { 
  read 
}