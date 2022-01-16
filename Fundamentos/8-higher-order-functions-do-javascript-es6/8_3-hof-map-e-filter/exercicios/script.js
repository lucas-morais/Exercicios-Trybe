const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expectedString = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

function formatedBookNames() {
  return books.map( book => {
    return `${book.name} - ${book.genre} - ${book.author.name}`;
  });
}

const expectedNameAndAge = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

function nameAndAge() {
  return books.map(book => {
    return {
      age: book.releaseYear - book.author.birthYear, 
      author: book.author.name
    };
  }).sort((author1, author2) => author1.age - author2.age);
}

const expectedFantasyOrScienceFiction = [
  { 
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  }
];

function fantasyOrScienceFiction() {
  return books.filter(book => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
}

const expectedOldBooksOrdered = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];

function oldBooksOrdered() {
  const currentYear = new Date().getFullYear(); 
  return books.filter(book => (currentYear - book.releaseYear) > 60)
    .sort((book1, book2) => book1.releaseYear - book2.releaseYear);
}

const expectedFantasyOrScienceFictionAuthors = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  return books.filter(book => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
    .map(book => book.author.name).sort();
}

const expectedOldBooks = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  const currentYear = new Date().getFullYear(); 
  return books.filter(book => (currentYear - book.releaseYear) > 60)
    .map(book => book.name);
}

const expectedAuthorWith3DotsOnName = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  return books.filter(book => book.author.name.search(/^(\w. ){3}.+/g) !== -1)
    .map(book => book.name)[0];
}

assert.deepStrictEqual(formatedBookNames(), expectedString);
assert.deepStrictEqual(nameAndAge(), expectedNameAndAge);
assert.deepStrictEqual(fantasyOrScienceFiction(), expectedFantasyOrScienceFiction);
assert.deepStrictEqual(oldBooksOrdered(), expectedOldBooksOrdered);
assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedFantasyOrScienceFictionAuthors);
assert.deepStrictEqual(oldBooks(), expectedOldBooks);
assert.deepStrictEqual(authorWith3DotsOnName(), expectedAuthorWith3DotsOnName);
