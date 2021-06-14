import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class CoursesService {
    constructor(private _http: HttpClient) {
        this.getPokes();
    }

    getPokes() {
        return this._http.get('https://pokeapi.co/api/v2/pokemon/1/', { responseType: 'json' });
    }
}
