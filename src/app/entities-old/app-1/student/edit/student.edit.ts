

import { ChangeDetectorRef, Component, inject, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { AppModalComponent } from '../../../../../core/ui/modal/modal.component';
import { EditButtons } from '../../../../components/edit/edit-buttons/edit-buttons';
import { EditUI } from '../../../../../core/ui/baseUI/editUI';

import { Student } from '../student';
import { StudentService } from '../student.service';



@Component({
    selector: 'app-student-edit',
    templateUrl: './student.edit.html',
    styleUrls: ['./student.edit.scss'],
    imports: [
        FormsModule,
        AppModalComponent,
        EditButtons
    ]
})
export class StudentEditUI extends EditUI<Student> implements OnInit, OnChanges {

    @ViewChild('modal', { static: true }) editModal!: AppModalComponent;

    public student = new Student();

    constructor() {
        super(inject(StudentService));
    }

    ngOnInit(): void {
        this.initModal(this.editModal);
    }



    //ngOnChanges(changes: SimpleChanges): void {
    //    if (changes['currentInstance']) {
    //        this.currentInstance = Object.assign(new Student(), this.currentInstance);
    //    }
    //}
}
