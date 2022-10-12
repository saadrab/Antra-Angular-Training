import { Component, OnInit } from '@angular/core';
import { Card } from '../interfaces/card.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  headerColor: string = 'black';

  header: string =
    'Vestibulum lectus mauris ultrices eros in. Magna fermentum iaculis eu non diam phasellus';

  cards: Card[] = [
    {
      id: 1,
      title: 'Lectus arcu bibendum at varius vel pharetra vel turpis',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Lacinia quis vel eros donec. Sit amet mauris commodo quis imperdiet. Integer feugiat scelerisque varius morbi enim nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Lectus arcu bibendum at varius vel pharetra vel turpis',

      color: 'blue',
    },
    {
      id: 2,
      title: 'Lectus arcu bibendum at varius vel pharetra vel turpis',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Lacinia quis vel eros donec. Sit amet mauris commodo quis imperdiet. Integer feugiat scelerisque varius morbi enim nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Lectus arcu bibendum at varius vel pharetra vel turpis',

      color: 'black',
    },
    {
      id: 3,
      title: 'Lectus arcu bibendum at varius vel pharetra vel turpis',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Lacinia quis vel eros donec. Sit amet mauris commodo quis imperdiet. Integer feugiat scelerisque varius morbi enim nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Lectus arcu bibendum at varius vel pharetra vel turpis',

      color: 'red',
    },
    {
      id: 4,
      title: 'Lectus arcu bibendum at varius vel pharetra vel turpis',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Lacinia quis vel eros donec. Sit amet mauris commodo quis imperdiet. Integer feugiat scelerisque varius morbi enim nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Lectus arcu bibendum at varius vel pharetra vel turpis',

      color: 'green',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  changeColor(id: number) {
    for (let card of this.cards) {
      let changeCard = document.getElementById('card' + card.id);

      //change matching card style
      if (card.id == id) {
        this.headerColor = card.color;
        changeCard!.style.border = `2px solid ${card.color}`;
        changeCard!.style.boxShadow = `5px 5px ${card.color}`;
        changeCard!.style.borderRadius = `10px`;
      }
      //remove non-matching card styles
      else {
        changeCard!.style.border = '';
        changeCard!.style.boxShadow = '';
      }
    }
  }
}
