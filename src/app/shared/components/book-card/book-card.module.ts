import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card.component';
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [
    BookCardComponent
  ],
  exports: [
    BookCardComponent
  ],
    imports: [
        CommonModule,
        ButtonModule
    ]
})
export class BookCardModule { }
