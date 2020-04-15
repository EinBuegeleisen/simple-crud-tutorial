import { Component, OnInit } from '@angular/core';

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
  public books: string[] = [
    "Buch",
    "LangweiligesBuchMitExtremLangemUndEinschläferndemTitel",
    "Harald Töpfer",
    "Drei !!!"
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public onBtnClick() {
    // this.showAlert = !this.showAlert;
    // this.books.push("Buch Nr. " + Math.round(Math.random() * 100));
    this.books.push(this.newBookTitle);
    this.newBookTitle = "";
  }

  public transformBookTitle(title: string): string {
    return "Buch: " + title;
  }

}
