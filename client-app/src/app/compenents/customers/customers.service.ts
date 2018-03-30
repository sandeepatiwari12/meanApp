import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../shared/services/auth.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Contact } from '../../models/contact';

@Injectable()
export class ContactsService {

    options;
    domain = this.authService.domain;

    constructor(
        private http: Http,
        private authService: AuthService) {
    }

  createAuthenticationHeaders() {
    this.authService.loadToken();
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json', // Format set to JSON
        'authorization': this.authService.authToken // Attach token
      })
    });
  }

    // retriving Contact list
    getContacts(): Observable<Contact[]> {
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + 'api/contacts', this.options)
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
        responseBody.contacts.forEach(element => {
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
        return this.http.post(this.domain + 'api/contact', newContact, { headers: headers })
            .map(res => res.json());
    }

    // delete Contact
    deleteContact(id) {
        this.createAuthenticationHeaders();
        return this.http.delete(this.domain + 'api/contact/' + id, this.options)
            .map(res => res.json());
    }
}
