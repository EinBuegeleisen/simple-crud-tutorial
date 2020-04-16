import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title: string = "Ein LangweiligesBuchMitExtremLangemUndEinschläferndemTitel";
  public showAlert: boolean = true;
  public newBookTitle: string = "";
  public readonly maxTitleLength: number = 20;
  public books: string[] = [];

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.books = this.storageService.getBooks();
  }

  public onBtnClick() {
    // this.showAlert = !this.showAlert;
    // this.books.push("Buch Nr. " + Math.round(Math.random() * 100));
    this.books.push(this.newBookTitle);
    this.storageService.setBooks(this.books);
    this.newBookTitle = "";
  }

  public transformBookTitle(title: string): string {
    return "Buch: " + title;
  }

}
