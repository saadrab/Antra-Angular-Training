import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book, MyBook, RootObject } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookSearchService {
  private readonly booksApi = 'https://www.googleapis.com/books/v1/volumes?q=';

  private books: MyBook[] = [];
  private booksBS$ = new BehaviorSubject<MyBook[]>(this.books);
  books$ = this.booksBS$.asObservable();

  private wishlist: string[] = [];
  private wishesBS$ = new BehaviorSubject<string[]>(this.wishlist);
  wishlist$ = this.wishesBS$.asObservable();

  constructor(private readonly http: HttpClient) {}

  getBooks(bookname: string) {
    return this.http.get<RootObject>(this.booksApi + bookname).pipe(
      filter((res: RootObject) => {
        return res.totalItems !== 0;
      }),
      map(({ items }: RootObject): any => {
        if (items && items.length) {
          return items.map(({ volumeInfo }: Book) => {
            const book: any = {
              bookname: volumeInfo.title,
              publisher: volumeInfo.publisher,
              publishdate: volumeInfo.publishedDate,
              description: volumeInfo.description,
            };
            if (volumeInfo.imageLinks) {
              book.bookpic = volumeInfo.imageLinks.thumbnail || '';
            }
            return book;
          });
        }
      }),
      tap((books: any) => {
        this.books = books;
        this.booksBS$.next(this.books);
      })
    );
  }
}
