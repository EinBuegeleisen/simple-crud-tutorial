import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [
  {
    path: "listBooks",
    component: ListBooksComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "**",
    redirectTo: "/home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
