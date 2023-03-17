import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {BookSearchResult} from "../../../interfaces/book.interface";
import {lastValueFrom} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class BookSearchService {

  constructor(private httpClient: HttpClient) { }

  searchBooks(query: string): Promise<BookSearchResult> {
    return new Promise((resolve, reject) => {
      lastValueFrom(this.httpClient.get(`${environment.serviceUrls.googleAPI}volumes?q=${query}&key=${environment.googleAPIKey}&langRestrict='en'`)).then((books) => {
        resolve(books as BookSearchResult);
      }).catch((error) => {
        reject(error);
      });
    });
  }
}
