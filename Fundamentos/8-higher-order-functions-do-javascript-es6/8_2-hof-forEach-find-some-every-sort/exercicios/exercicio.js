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


function authorBornIn1947() {
  const author = books.find(book => book.author.birthYear === 1947).author;
  return author.name;
}

function smallerName() {
  let nameBook;
  // Solução com sort
  // nameBook = books.sort( (book1, book2) => {
  //   return book1.name.length - book2.name.length 
  // })[0].name;
  // return nameBook;
  books.forEach( book => {
    if(nameBook === undefined || nameBook.length > book.name.length) {
      nameBook = book.name;
    }
  });
  return nameBook;
}

const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  return books.find(book => book.name.length === 26);
}

const expectedBooksByYear = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  return books.sort((book1, book2) => book2.releaseYear - book1.releaseYear);
}

const expectedBirthYear = false;

function everyoneWasBornOnSecXX() {
  return books.every( book => {
    return book.author.birthYear < 2001 && book.author.birthYear > 1900; 
  });
}

const expectedReleaseDecade = true;

function someBookWasReleaseOnThe80s() {
  return books.some( book => {
    return book.releaseYear > 1979 && book.releaseYear < 1990;
  });
}

const expectedAuthorUnique = false;

function authorUnique() {
  let notSameYear = false;
  let lastAuthor;
  books.forEach(book => {
    if(book.author.birthYear === lastAuthor) {
      sameYear = false;
    }
    lastAuthor = book.author.birthYear;
  })
  return notSameYear;
}

assert.strictEqual(authorBornIn1947(), 'Stephen King');
assert.strictEqual(smallerName(), 'Duna');
assert.deepStrictEqual(getNamedBook(), expectedResult);
assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedBooksByYear);
assert.strictEqual(everyoneWasBornOnSecXX(), expectedBirthYear);
assert.strictEqual(someBookWasReleaseOnThe80s(), expectedReleaseDecade);
assert.strictEqual(authorUnique(), expectedAuthorUnique);