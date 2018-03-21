import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { MatInput, MatFormField, MatFormFieldControl } from '@angular/material';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
options = [
  {
    name: 'Visitor',
    value: 'visitor'
  },
  {
    name: 'Enquiry',
    value: 'enquiry',
  },
  {
    name: 'New Joinee',
    value: 'newJoinee'
  }
];
  constructor() { }

  ngOnInit() {
  }

  sweetAlert() {
  }

}
