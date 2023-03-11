import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSearchRoutingModule } from './book-search-routing.module';
import { BookSearchComponent } from './book-search.component';
import { BookSearchInputComponent } from './components/book-search-input/book-search-input.component';
import {BookCardModule} from "../../shared/components/book-card/book-card.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {SkeletonModule} from "primeng/skeleton";


@NgModule({
  declarations: [
    BookSearchComponent,
    BookSearchInputComponent
  ],
  imports: [
    CommonModule,
    BookSearchRoutingModule,
    BookCardModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    SkeletonModule
  ]
})
export class BookSearchModule { }
