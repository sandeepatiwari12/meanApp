import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

const APIBaseUrl = 'http://localhost:3000';
@Injectable()
export class NavService {

    constructor(private http: Http) {

    }
    getNavbarData() {
        return this.http.get(APIBaseUrl + '/api/navbarData')
            .map(res => res.json());
    }
}
