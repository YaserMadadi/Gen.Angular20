

import { Component, inject, Output, OnChanges, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { AppModalComponent } from '../../../../../core/ui/modal/modal.component';
import { EditButtons } from '../../../../../core/ui/components/edit-buttons/edit-buttons';
import { EditUI } from '../../../../../core/ui/baseUI/editUI';

import { StudentCourse } from '../studentCourse';
import { StudentCourseService } from '../studentCourse.service';



@Component({
    selector: 'app-studentCourse-edit',
    templateUrl: './studentCourse.edit.html',
    styleUrls: ['./studentCourse.edit.scss'],
    imports: [
        FormsModule,
        AppModalComponent,
        EditButtons
    ]
})
export class StudentCourseEditUI extends EditUI<StudentCourse> implements OnInit, OnChanges {

    @ViewChild('modal', { static: true }) editModal!: AppModalComponent;

    @Output() public override onClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {
        super(inject(StudentCourseService));
    }

    ngOnInit(): void {
        this.initModal(this.editModal);
    }
}
