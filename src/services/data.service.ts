import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

    constructor(private http: Http) {
    }

    public getJSON(): Observable<any> {
        return this.http.get("./assets/data/sample.json");
    }
}