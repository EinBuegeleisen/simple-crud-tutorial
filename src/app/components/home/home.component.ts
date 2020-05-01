import { Component, OnInit, ɵɵInheritDefinitionFeature } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Book } from 'src/app/classes/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title: string = "Ein LangweiligesBuchMitExtremLangemUndEinschläferndemTitel";
  public showAlert: boolean = true;
  public newBookTitle: string = "";
  public newBookAuthor: string = "";
  public readonly maxTitleLength: number = 20;
  public books: Book[] = [];
  public isEditing: number = undefined;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.books = this.storageService.getBooks();
  }

  public onBtnClick() {

    const bneu = new Book();
    bneu.title = this.newBookTitle;
    bneu.id = Math.round(Math.random() * 100000);
    bneu.authors = this.newBookAuthor ? [this.newBookAuthor] : undefined;

    if (this.isEditing) {
      this.books = this.books.map((b) => {
        if (b.id === this.isEditing) {
          return bneu;
        }
        return b;
      });

    } else {
      this.books.push(bneu);
    }

    this.isEditing = undefined;
    this.storageService.setBooks(this.books);
    this.newBookTitle = '';
    this.newBookAuthor = '';
  }

  public deleteBook(book) {
    console.log(book);
    this.books = this.books.filter(function(b) {
      if (b.title == book.title) {
        return false;
      }
      return true;
    });
    this.storageService.setBooks(this.books);
  }

  public transformBookTitle(title: string): string {
    return "Buch: " + title;
  }

  public editBook(book: Book) {
    this.isEditing = book.id;
    this.newBookTitle = book.title;
    this.newBookAuthor = book.authors.join(", ");
  }

}
