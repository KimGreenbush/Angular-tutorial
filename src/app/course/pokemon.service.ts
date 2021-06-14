import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private _http: HttpClient) {
    this.getPokes()
  }

  getPokes() {
    let observe = this._http.get("https://pokeapi.co/api/v2/pokemon/1/")

    observe.subscribe(poke => console.log(poke))
  }
}
