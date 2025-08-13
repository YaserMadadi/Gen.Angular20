

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';

import { AppModalComponent } from '../../../../../core/ui/modal/modal.component';
import { DeleteUI } from '../../../../../core/ui/baseUI/deleteUI';
import { IDeleteUI } from '../../../../../core/ui/baseUI/deleteUI.interface';
import { DeleteButtons } from '../../../../../core/ui/components/delete-buttons/delete-buttons';

import { Course } from '../course';
import { CourseService } from '../course.service';
import { Presenter } from '../../../../../core/ui/components/presenter/presenter';


@Component({
  selector: 'app-course-delete',
  templateUrl: './course.delete.html',
  styleUrls: ['./course.delete.scss'],
  imports: [
    AppModalComponent,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class CourseDeleteUI extends DeleteUI<Course> implements IDeleteUI<Course> {

  // @ViewChild('deleteModal', { static: true }) deleteModal!: AppModalComponent;

  // @Output() public override onClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    super(inject(CourseService));
  }

  // ngOnInit(): void {
  //   this.initModal(this.deleteModal);
  // }

}
