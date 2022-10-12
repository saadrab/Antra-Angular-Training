import { Component, OnInit } from '@angular/core';
import { Card } from '../interfaces/card.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  titleStyle: string = 'color: black';

  header: string =
    'Vestibulum lectus mauris ultrices eros in. Magna fermentum iaculis eu non diam phasellus';

  cards: Card[] = [
    {
      title: 'Lectus arcu bibendum at varius vel pharetra vel turpis',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Lacinia quis vel eros donec. Sit amet mauris commodo quis imperdiet. Integer feugiat scelerisque varius morbi enim nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Lectus arcu bibendum at varius vel pharetra vel turpis',

      color: 'blue',
    },
    {
      title: 'Lectus arcu bibendum at varius vel pharetra vel turpis',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Lacinia quis vel eros donec. Sit amet mauris commodo quis imperdiet. Integer feugiat scelerisque varius morbi enim nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Lectus arcu bibendum at varius vel pharetra vel turpis',

      color: 'black',
    },
    {
      title: 'Lectus arcu bibendum at varius vel pharetra vel turpis',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Lacinia quis vel eros donec. Sit amet mauris commodo quis imperdiet. Integer feugiat scelerisque varius morbi enim nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Lectus arcu bibendum at varius vel pharetra vel turpis',

      color: 'red',
    },
    {
      title: 'Lectus arcu bibendum at varius vel pharetra vel turpis',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Lacinia quis vel eros donec. Sit amet mauris commodo quis imperdiet. Integer feugiat scelerisque varius morbi enim nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Lectus arcu bibendum at varius vel pharetra vel turpis',

      color: 'green',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  changeColor(color: string) {
    this.titleStyle = 'color: ' + color;
  }
}
