import { Component, OnInit, ɵɵInheritDefinitionFeature } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Book } from 'src/app/classes/book';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title: string = 'Ein LangweiligesBuchMitExtremLangemUndEinschläferndemTitel';
  public showAlert: boolean = true;
  public readonly maxTitleLength: number = 20;
  public books: Book[] = [];
  public isEditing: number = undefined;
  public newBookForm: FormGroup;
  public submitted = false;

  constructor(private storageService: StorageService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.books = this.storageService.getBooks();
    this.newBookForm = this.formBuilder.group({
      title: new FormControl("", [Validators.required, Validators.minLength(3)]),
      author: new FormControl("", [Validators.required]),
    });
  }

  public addNewBook() {
    if (this.newBookForm.invalid) {
      return;
    }

    const bneu = new Book();
    bneu.title = this.newBookForm.controls.title.value;
    bneu.id = Math.round(Math.random() * 100000);
    bneu.authors = this.newBookForm.controls.author.value.split(', ');
    bneu.price = 10;
    bneu.publishDate = new Date();


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

    this.submitted = true;
    this.isEditing = undefined;
    this.storageService.setBooks(this.books);
    this.newBookForm.controls.title.setValue('');
    this.newBookForm.controls.author.setValue('');
  }

  public deleteBook(book) {
    console.log(book);
    this.books = this.books.filter((b) => {
      if (b.title === book.title) {
        return false;
      }
      return true;
    });
    this.storageService.setBooks(this.books);
  }

  public transformBookTitle(title: string): string {
    return 'Buch: ' + title;
  }

  public editBook(book: Book) {
    this.isEditing = book.id;
    this.newBookForm.controls.title.setValue(book.title);
    this.newBookForm.controls.author.setValue(book.authors.join(', '));
  }

}
