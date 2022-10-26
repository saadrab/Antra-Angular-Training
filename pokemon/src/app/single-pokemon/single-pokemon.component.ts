import { Component, OnInit, Input } from '@angular/core';
import { PokemonCard } from '../interfaces/pokemon';

@Component({
  selector: 'app-single-pokemon',
  templateUrl: './single-pokemon.component.html',
  styleUrls: ['./single-pokemon.component.scss'],
})
export class SinglePokemonComponent implements OnInit {
  @Input()
  pokemon!: any;
  constructor() {}

  ngOnInit(): void {}
}
