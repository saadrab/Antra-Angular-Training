import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../interfaces/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() card!: Card;
  @Output() emitId = new EventEmitter();

  styles = {};

  constructor() {}

  ngOnInit(): void {}

  changeColor() {
    this.emitId.emit(this.card.id);
  }
}
