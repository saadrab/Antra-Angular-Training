import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../interfaces/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() card!: Card;
  @Output() Id = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  emitId() {
    this.Id.emit(this.card.id);
  }
}
