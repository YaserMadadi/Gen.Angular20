

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
import { Course } from '../course';
import { CourseService } from '../course.service';
import { CourseDeleteUI } from '../delete/course.delete';
import { CourseEditUI } from '../edit/course.edit';
import { StudentCourse } from '../../studentCourse/studentCourse';
import { StudentCourseEditUI } from '../../studentCourse/edit/studentCourse.edit';



@Component({
  selector: 'app-course-index',
  templateUrl: './course.index.html',
  styleUrls: ['./course.index.scss'],
  providers: [CourseService],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    RowButtons,
    CourseEditUI,
    CourseDeleteUI,
    StudentCourseEditUI,
  ]
})
export class CourseIndexUI extends IndexUI<Course> implements IIndexUI<Course> {

  constructor(public override service: CourseService = inject(CourseService)) {
    super(service);
    

    this.quickAddItems = [new DropdownMenuItem('Add  درسهای دانشجو', () => this.onAddStudentCourse()),];

    this.linkedEntityItems = [];
  }

  

  
  @ViewChild('studentCourseEditUI')
  public studentCourseEditUI!: StudentCourseEditUI;

  onAddStudentCourse() {
    let studentCourse = new StudentCourse();
    studentCourse.course = this.currentInstance;
    this.studentCourseEditUI.Show(studentCourse);
  }


}
