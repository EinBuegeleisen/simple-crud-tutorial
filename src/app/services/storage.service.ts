import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
    this.books = JSON.parse(localStorage.getItem("books"));
    if (!this.books)
      this.books = [];
  }

  private books: string[] = [];

  public getBooks(): string[] {
    return this.books;
  }

  public setBooks(books: string[]): void {
    this.books = books;
    localStorage.setItem("books", JSON.stringify(this.books));
  }
}
