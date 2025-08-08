

import { Component, inject, Output, OnChanges, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { AppModalComponent } from '../../../../../core/ui/modal/modal.component';
import { EditButtons } from '../../../../../core/ui/components/edit-buttons/edit-buttons';
import { EditUI } from '../../../../../core/ui/baseUI/editUI';

import { Course } from '../course';
import { CourseService } from '../course.service';



@Component({
    selector: 'app-course-edit',
    templateUrl: './course.edit.html',
    styleUrls: ['./course.edit.scss'],
    imports: [
        FormsModule,
        AppModalComponent,
        EditButtons
    ]
})
export class CourseEditUI extends EditUI<Course> implements OnInit, OnChanges {

    @ViewChild('modal', { static: true }) editModal!: AppModalComponent;

    @Output() public override onClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {
        super(inject(CourseService));
    }

    ngOnInit(): void {
        this.initModal(this.editModal);
    }
}
