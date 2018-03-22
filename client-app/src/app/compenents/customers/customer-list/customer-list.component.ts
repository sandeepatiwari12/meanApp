import { Component, OnInit } from '@angular/core';
import { NgxDatatableModule, DatatableComponent } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';

import { ContactsService } from '../customers.service';
import { Contact } from '../../../models/contact';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  private table: DatatableComponent;
// defining the variables
  // tslint:disable-next-line:no-inferrable-types
  isEdit: boolean = false;
  contactList: Contact[];
  selectedRowContact: Contact[];
  first_name: string;
  last_name: string;
  phone: string;
  temp: any[];
  private selectedContact: Contact;

  constructor(
    private contactsService: ContactsService,
    private router: Router) {
      this.selectedRowContact = [];
    }

  ngOnInit() {
    this.resreshData();
  }

  // refresh data
  resreshData() {
    this.contactsService.getContacts().subscribe((contactList) => {
      console.log(contactList);
      this.contactList = contactList;
      this.temp = contactList;
      console.log(this.temp);
    });
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
      this.contactList.push(contact);
      this.resreshData();
    });
  }

  // delete Contact
  deleteContact(id: any) {
    const contactList = this.contactList;
    this.contactsService.deleteContact(id)
    .subscribe(data => {
      if (data.n === 1) {
        for (let i = 0; i < contactList.length; i++) {
          if (contactList[i]._id === id) {
            contactList.splice(i, 1);
          }
        }
      }
    });
  }
// edit contact

clicktoEditContact(e: any, selectedContact: Contact[]) {
  console.log(selectedContact);
  this.selectedContact = selectedContact[0];
  this.router.navigateByUrl('/' + this.selectedContact.getId());
}

// make Editabe
addnew() {
  this.isEdit = !this.isEdit;
}

}
