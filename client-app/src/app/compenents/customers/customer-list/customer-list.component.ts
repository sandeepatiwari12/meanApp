import { Component, OnInit, Inject, ViewChild, TemplateRef, ElementRef, ViewEncapsulation } from '@angular/core';
import { NgxDatatableModule, DatatableComponent } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { EventReaderService } from '../../../shared/eventReader';
import { ContactsService } from '../customers.service';
import { Contact } from '../../../models/contact';
// import { OrderByPipe } from '../../../shared/filter.pipe';

import { ConfirmDialogComponent } from './../confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerListComponent implements OnInit {

  @ViewChild(DatatableComponent) private table: DatatableComponent;
  // private table: DatatableComponent;
  // defining the variables
  // tslint:disable-next-line:no-inferrable-types
  isEdit: boolean = false;
  contactList: Contact[];
  selectedRowContact: Contact[];
  first_name: string;
  last_name: string;
  phone: string;
  temp: any[];
  public selectedContactData: any;
  private selectedContact: Contact;
  // tslint:disable-next-line:no-inferrable-types
  loadingIndicator: boolean = true;
  // tslint:disable-next-line:no-inferrable-types
  reorderable: boolean = true;

  constructor(
    private contactsService: ContactsService,
    private router: Router,
    public dialog: MatDialog,
    private eventReaderService: EventReaderService) {
    this.selectedRowContact = [];
    this.eventReaderService.deleteContactData.subscribe(() => {
      this.deleteContact();
    });
  }

  ngOnInit() {
    this.refreshData();
  }

  // refresh data
  refreshData() {
    this.contactsService.getContacts().subscribe((contactList) => {
      this.contactList = contactList;
      if (this.contactList.length > 0) {
        this.isEdit = false;
      } else {
        this.isEdit = true;
      }
      this.temp = contactList;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
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
        this.refreshData();
        this.isEdit = false;
        this.first_name = '';
        this.last_name = '';
        this.phone = '';
      });
  }

  // delete Contact

  // open Prompt
  openDialog(id: any) {
    this.selectedContactData = id;
    this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
    });
  }

  // delete contact Data
  deleteContact() {
    const contactList = this.contactList;
    this.contactsService.deleteContact(this.selectedContactData)
      .subscribe(data => {
        if (data.n === 1) {
          for (let i = 0; i < contactList.length; i++) {
            if (contactList[i]._id === this.selectedContactData) {
              contactList.splice(i, 1);
            }
          }
        }
      });
    this.refreshData();
  }

  // edit contact
  clicktoEditContact(e: any, selectedContact: Contact[]) {
    // console.log(selectedContact);
    this.selectedContact = selectedContact[0];
    this.router.navigateByUrl('/about/' + this.selectedContact.getId());
  }

  // make Editable
  addnew() {
    this.isEdit = !this.isEdit;
  }

  // filter ContactList
  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function (d) {
      let filterIndex = false;
      if (d.first_name && d.first_name.toLowerCase().indexOf(val) !== -1 || !val) {
        filterIndex = d.first_name.toLowerCase().indexOf(val) !== -1 || !val;
      }
      if (!filterIndex && d.last_name) {
        filterIndex = d.last_name.toLowerCase().indexOf(val) !== -1 || !val;
      }
      if (!filterIndex && d.phone) {
        filterIndex = d.phone.toLowerCase().indexOf(val) !== -1 || !val;
      }
      return filterIndex;
    });
    // update the ContactList
    this.contactList = temp;
    this.table.offset = 0;
  }

}
