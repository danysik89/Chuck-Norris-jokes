import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JokesService {
    constructor(private http: Http) {
        
    }

    getRandomJokes(id) {
        return  this.http.get(`http://api.icndb.com/jokes/random/${id}?limitTo=[nerdy,explicit]`)
        .map(response => {
            return response.json();
        })     
    }
    getCategories() {
        return  this.http.get(`http://api.icndb.com/categories`)
        .map(response => {
            return response.json();
        })     
    }
}