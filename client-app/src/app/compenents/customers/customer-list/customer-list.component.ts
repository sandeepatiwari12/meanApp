import { Component, OnInit } from '@angular/core';

import { ContactsService } from '../customers.service';
import { Contact } from '../../../models/contact';
import { constants } from 'fs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

// defining the variables
  contacts: Contact[];
  first_name: string;
  last_name: string;
  phone: string;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.resreshData();
  }

  // refresh data
  resreshData() {
    this.contactsService.getContacts()
    .subscribe( contacts =>
    this.contacts = contacts);
  }

  // add Contact
  addContact() {
    const newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone
    };
    this.contactsService.addContact(newContact)
    .subscribe(contact => {
      this.contacts.push(contact);
      this.resreshData();
    });
  }

  // delete Contact
  deleteContact(id: any) {
    const contacts = this.contacts;
    this.contactsService.deleteContact(id)
    .subscribe(data => {
      if (data.n === 1) {
        for (let i = 0; i < contacts.length; i++) {
          if (contacts[i]._id === id) {
            contacts.splice(i, 1);
          }
        }
      }
    });
  }

}
