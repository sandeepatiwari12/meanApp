import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Contact } from '../../models/contact';

const APIBaseUrl = 'http://localhost:3000';
@Injectable()
export class ContactsService {

    constructor(private http: Http) {
    }

    // retriving Contact list
    getContacts(): Observable<Contact[]> {
        return this.http.get(APIBaseUrl + '/api/contacts')
                .map(this.extractContactData);
            // .map(res => res.json());
    }

    // Extract Data
private extractContactData(res: Response): Contact[] {
    let responseBody: any;
    if (res.json()) {responseBody = res.json(); }
    let contactList: Contact [];
    contactList = [];
    if (responseBody) {
        responseBody.forEach(element => {
            const cntct = new Contact();
            cntct.setId(element._id);
            cntct.setFirstName(element.first_name);
            cntct.setLastName(element.last_name);
            cntct.setPhone(element.phone);
            cntct.setCreated_date(element.created_date);
            contactList.push(cntct);
        });
    }
    return contactList;
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
