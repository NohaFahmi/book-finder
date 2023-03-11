import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-book-search-input',
  templateUrl: './book-search-input.component.html',
  styleUrls: ['./book-search-input.component.scss']
})
export class BookSearchInputComponent {
  bookSearchKeyword: FormControl = new FormControl('', Validators.required);
  @Output() onSearching: EventEmitter<string> = new EventEmitter<string>();
  constructor() {
  }

  onSearch() {
    this.onSearching.emit(this.bookSearchKeyword.value)
  }
}
