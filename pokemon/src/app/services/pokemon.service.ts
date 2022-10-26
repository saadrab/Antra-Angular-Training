import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  PokemonResponse,
  PokemonList,
  Result,
  PokemonCard,
} from '../interfaces/pokemon';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly apiBaseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  private allPokemon: PokemonCard[] = [];
  private allPokemon$: BehaviorSubject<PokemonCard[]> = new BehaviorSubject<
    PokemonCard[]
  >(this.allPokemon);
  pokemonList$: Observable<PokemonCard[]> = this.allPokemon$.asObservable();

  constructor(private readonly http: HttpClient) {}

  getPokemon(pokeName: string): Observable<PokemonCard> {
    return this.http.get<PokemonResponse>(this.apiBaseUrl + pokeName).pipe(
      map((poke: PokemonResponse) => {
        const pokemon: PokemonCard = {
          name: pokeName.toLowerCase(),
          id: poke.id,
          weight: poke.weight,
          height: poke.height,
          types: poke.types,
          img: poke.sprites.other['offical-artwork'].front_default,
        };
        return pokemon;
      }),
      tap((poke: PokemonCard) => {
        console.log(poke);
        this.allPokemon.push(poke);
        this.allPokemon$.next(this.allPokemon);
      })
    );
  }

  // getAllPokemon(): Observable<string[]> {
  //   return this.http.get<PokemonList>(this.apiBaseUrl).pipe(
  //     map(({ results }: PokemonList) => {
  //       return results.map((result: Result) => result.name);
  //     })
  //   );
  // }
}
