import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSearchRoutingModule } from './book-search-routing.module';
import { BookSearchComponent } from './book-search.component';
import { BookSearchInputComponent } from './components/book-search-input/book-search-input.component';


@NgModule({
  declarations: [
    BookSearchComponent,
    BookSearchInputComponent
  ],
  imports: [
    CommonModule,
    BookSearchRoutingModule
  ]
})
export class BookSearchModule { }
