import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/book-search', pathMatch: 'full'},
  {path:'book-search', loadChildren: () => import('./modules/book-search/book-search.module').then(m => m.BookSearchModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
