import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { registerLocaleData } from '@angular/common';

/*import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/exra/de';
registerLocaleData(localeDe, 'de-DE', localeDeExtra);*/

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListBooksComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [/*{
      provide: LOCALE_ID,
      useValue: 'de-DE'
    }*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
