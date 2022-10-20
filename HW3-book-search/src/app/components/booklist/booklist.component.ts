import { Component, OnInit } from '@angular/core';
import { BookSearchService } from 'src/app/services/book-search.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss'],
})
export class BooklistComponent implements OnInit {
  constructor(public bookService: BookSearchService) {}

  ngOnInit(): void {
    this.bookService.books$.subscribe();
  }

  addToWishList(bookName: string) {
    this.bookService.addToWishList(bookName);
  }
}
