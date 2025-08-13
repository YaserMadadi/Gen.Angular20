

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem } from '../../../../../core/ui/components/dropdown-menu/dropdown-menu-item.model';
import { IndexButton } from '../../../../../core/ui/components/index-buttons/index-button';
import { RowButtons } from '../../../../../core/ui/components/row-buttons/row-buttons';
import { LookupComponent } from '../../../../../core/ui/components/lookup/lookup';

import { ForeignkeyLinker } from '../../../../../core/ui/helper/foreignkey-linker';
          
import { IIndexUI } from '../../../../../core/ui/baseUI/indexUI.interface';
import { IndexUI } from '../../../../../core/ui/baseUI/indexUI';
import { StudentCourse } from '../studentCourse';
import { StudentCourseService } from '../studentCourse.service';
import { StudentCourseDeleteUI } from '../delete/studentCourse.delete';
import { StudentCourseEditUI } from '../edit/studentCourse.edit';
import { Course } from '../../course/course';
import { Student } from '../../student/student';



@Component({
  selector: 'app-studentCourse-index',
  templateUrl: './studentCourse.index.html',
  styleUrls: ['./studentCourse.index.scss'],
  providers: [StudentCourseService],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    RowButtons,
    StudentCourseEditUI,
    StudentCourseDeleteUI,
    LookupComponent,
  ]
})
export class StudentCourseIndexUI extends IndexUI<StudentCourse> implements IIndexUI<StudentCourse> {

  constructor(public override service: StudentCourseService = inject(StudentCourseService)) {
    super(service);
    this.courseLinker = new ForeignkeyLinker<Course>(this.service.courseService, true);
		this.studentLinker = new ForeignkeyLinker<Student>(this.service.studentService, true);

    this.quickAddItems = [];

    this.linkedEntityItems = [new DropdownMenuItem('Manage  درس', () => this.navigateToUrl('/app/course')),new DropdownMenuItem('Manage  دانشجو', () => this.navigateToUrl('/app/student')),];
  }

  public courseLinker: ForeignkeyLinker<Course>;

	public studentLinker: ForeignkeyLinker<Student>;

  

}
