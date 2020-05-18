import { Injectable } from '@angular/core';
import { Book } from '../classes/book';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
    this.books = JSON.parse(localStorage.getItem("books"));
    if (!this.books)
      this.books = [];
  }

  private books: Book[] = [];

  public getBooks(): Book[] {
    return this.books;
  }

  public setBooks(books: Book[]): void {
    this.books = books;
    localStorage.setItem("books", JSON.stringify(this.books));
  }
}
