import {Component, Input} from '@angular/core';
import {BookInterface} from "../../interfaces/book.interface";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input()  book?: BookInterface;
  constructor() {
  }
}
