import {BookEntity} from "../types/book-entity";

const FAKE_DELAY = 3000;

class Api {
  private data: BookEntity[] = [];

  constructor() {
    this.initialFetch();
  }

  private initialFetch(): void {
    this.data = require('./MOCK_DATA.json');
  }

  public getAll(): Promise<BookEntity[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.data), FAKE_DELAY);
    });
  }

  public buyOne(isbn: string): Promise<BookEntity> {
    return new Promise((resolve, reject) => {
      const item = this.data.find((item) => item.isbn === isbn);
      setTimeout(() => resolve(item as BookEntity), FAKE_DELAY);
    });
  }
}

export default new Api();
