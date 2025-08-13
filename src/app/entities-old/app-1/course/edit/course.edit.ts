

import { ChangeDetectorRef, Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { AppModalComponent } from '../../../../../core/ui/modal/modal.component';
import { EditButtons } from '../../../../components/edit/edit-buttons/edit-buttons';
import { EditUI } from '../../../../../core/ui/baseUI/editUI';

import { Course } from '../course';
import { CourseService } from '../course.service';
import { firstValueFrom } from 'rxjs';
import { NgFor } from '@angular/common';
import { IEditUI } from '../../../../../core/ui/baseUI/editUI.interface';



@Component({
    selector: 'app-course-edit',
    templateUrl: './course.edit.html',
    styleUrls: ['./course.edit.scss'],
    standalone: true,
    imports: [
        FormsModule,
        AppModalComponent,
        EditButtons
    ]
})
export class CourseEditUI extends EditUI<Course> implements IEditUI<Course>, OnInit, OnChanges {

    @ViewChild('modal', { static: true }) editModal!: AppModalComponent;

    @Output() public override onClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {
        super(inject(CourseService));
    }

    ngOnInit(): void {
        this.initModal(this.editModal);
        //this.currentInstance = new Course();
    }
}
