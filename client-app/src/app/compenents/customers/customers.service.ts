import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Contact } from '../../models/contact';
const APIBaseUrl = 'http://localhost:3000';
@Injectable()
export class ContactsService {

    constructor(private http: Http) {

    }
    // retriving Contact list
    getContacts() {
        return this.http.get(APIBaseUrl + '/api/contacts')
            .map(res => res.json());
    }

    // add Contact
    addContact(newContact) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(APIBaseUrl + '/api/contact', newContact, { headers: headers })
            .map(res => res.json());
    }

    // delete Contact
    deleteContact(id) {
        return this.http.delete(APIBaseUrl + '/api/contact/' + id)
            .map(res => res.json());
    }
}
