import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { tap } from 'rxjs';
import { PokemonCard } from '../interfaces/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  starterPokemon = ['Bulbasaur', 'Squirtle', 'Charmander'];
  pokeCards = [];

  constructor(public pokeService: PokemonService) {
    this.pokeService.pokemonList$.subscribe();
  }

  ngOnInit(): void {
    console.log('hi');
  }
}
