import {Component, OnInit} from '@angular/core';
import {BookSearchService} from "../../shared/services/integrations/book-search/book-search.service";
import {BookInterface} from "../../shared/interfaces/book.interface";

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

  listOfBooks: BookInterface[] = [];
  isLoading: boolean = false;
  constructor(private bookSearchService: BookSearchService) {

  }
  ngOnInit() {

  }

  onSearchBooks(keyword: string) {
    this.isLoading = true;
    this.bookSearchService.searchBooks(keyword).then((res) => {
      this.listOfBooks = res.items;
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      this.isLoading = false;
    })
  }
}
