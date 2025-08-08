import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Staff } from '../staff';
import { FormsModule } from '@angular/forms';
import { AppModalComponent } from '../../../../../core/ui/modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'staff-edit',
    templateUrl: './staff.edit.html',
    styleUrls: ['./staff.edit.scss'],
    imports: [
        FormsModule,
        AppModalComponent,
        CommonModule
    ]
})
export class StaffEdit implements OnInit, OnChanges {

    constructor() { }

    ngOnInit(): void {
        // Initialization logic here
    }

    @Input() staff: Staff = new Staff();

    ngOnChanges(changes: SimpleChanges): void {
        console.log('Staff changed:', this.staff);
        if (changes['staff']) {
            //this.staff = { ...this.staff };
        }
    }

    @Output() onClose = new EventEmitter<boolean>();



    onSubmit() {
        console.log('Staff submitted:', this.staff);
        this.onClose.emit(true);
    }

    @HostListener('document: keydown.escape', ['$event'])
    onEscapePressed(event: any) {
        this.onClose.emit(false);

    }

}