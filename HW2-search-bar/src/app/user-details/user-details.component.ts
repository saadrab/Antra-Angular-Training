import { Component, Input, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  @Input() users!: User[];
  searchTerm: string = '';

  reverse: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  fNameClicked() {
    this.reverse = !this.reverse;
  }

  reset() {
    this.searchTerm = '';
    this.reverse = false;
  }
}
