import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

const APIBaseUrl = 'http://localhost:3000';
@Injectable()
export class HomeService {

    constructor(private http: Http) {

    }
    getDashboardData() {
        return this.http.get(APIBaseUrl + '/api/dashboardData')
            .map(res => res.json());
    }
}
