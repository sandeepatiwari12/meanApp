import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';
import { EventReaderService } from '../../../shared/eventReader';

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html'
})
export class ConfirmDialogComponent implements OnInit {
    public disableSubmitButton: boolean;

    constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
        private eventReaderService: EventReaderService) {
        this.disableSubmitButton = true;
    }

    ngOnInit() {
    }

    confirmDeleteContact() {
        this.disableSubmitButton = false;
        this.eventReaderService.deleteContactData.emit();
        this.dialogRef.close();
    }

}
