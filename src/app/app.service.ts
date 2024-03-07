import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { find, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private readonly _http: HttpClient
    ) { }

    loadItems() {
        return this._http.get<{ additives: any[] }>('./assets/db.json').pipe(map(res => res.additives));
    }

    loadItemsById(id: string) {
        return this._http.get<{ additives: any[] }>('./assets/db.json').pipe(
            map(res => res.additives),
            map(res => res.find((additif => additif.id === id)))
        );
    }

}