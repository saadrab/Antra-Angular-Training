import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../interfaces/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() card!: Card;
  @Output() emitColor = new EventEmitter();

  buttonStyle: string = 'background-color: ' + this.card.color;

  constructor() {}

  ngOnInit(): void {}

  changeColor() {
    this.emitColor.emit(this.card.color);
  }
}
