import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  debounceTime,
  fromEvent,
  Subscription,
  filter,
  switchMap,
  Observable,
} from 'rxjs';

import { BookSearchService } from 'src/app/services/book-search.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit, OnDestroy {
  @ViewChild('searchbar', { static: true })
  searchbar!: ElementRef<HTMLInputElement>;

  private eventSubscription!: Subscription;

  constructor(private bookservice: BookSearchService) {}

  ngOnInit(): void {
    this.eventSubscription = fromEvent(this.searchbar.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        filter((_) => {
          return this.searchbar.nativeElement.value.trim() !== '';
        }),
        switchMap((_) => {
          return this.bookservice.getBooks(this.searchbar.nativeElement.value);
        })
      )
      .subscribe();
  }
  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }
}
