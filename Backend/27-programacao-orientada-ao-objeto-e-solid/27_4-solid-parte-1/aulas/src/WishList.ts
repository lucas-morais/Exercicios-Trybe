type Book = {
  book: string;
  author: string;
  genre: string;
}

class Wishlist {
  private wishList: Book[];

  constructor() {
    this.wishList = [];
  }

  addToWishList(book: Book): void {
    this.wishList.push(book);
  }

  showWishlist(): void {
    console.log(this.wishList);
  }
}

const book:Book = {
  author: 'Cormac McCarthy',
  book: 'The Road',
  genre: 'Dystopia',
};

const wishList = new Wishlist();
wishList.addToWishList(book);
wishList.showWishlist();
