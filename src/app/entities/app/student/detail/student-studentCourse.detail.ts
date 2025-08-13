
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { DetailUI } from '../../../../../core/ui/baseUI/detailUI';
import { DetailButton } from '../../../../../core/ui/components/detail-buttons/detail-button';
import { ForeignkeyLinker } from '../../../../../core/ui/helper/foreignkey-linker';
import { LookupComponent } from '../../../../../core/ui/components/lookup/lookup';
import { RowButtons } from '../../../../../core/ui/components/row-buttons/row-buttons';


import { Student } from '../student';
import { StudentCourse } from '../../studentCourse/studentCourse';
import { StudentCourseService } from '../../studentCourse/studentCourse.service';
import { StudentServiceCollection } from '../../student/student.service.collection';

import { StudentCourseEditUI } from '../../studentCourse/edit/studentCourse.edit';
import { StudentCourseDeleteUI } from '../../studentCourse/delete/studentCourse.delete';
import { StudentCourseBuilder } from '../../studentCourse/studentCourse.builder';
import { Course } from '../../course/course';
import { CourseService } from '../../course/course.service';



@Component({
  selector: 'app-student-studentCourse-detail',
  templateUrl: './student-studentCourse.detail.html',
  styleUrls: ['./student-studentCourse.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    DetailButton,
    RowButtons,
    LookupComponent,
    StudentCourseEditUI,        
    StudentCourseDeleteUI,
  ]
}) 
export class Student_StudentCourse_DetailUI extends DetailUI<Student, StudentCourse> {

  constructor(private serviceCollection: StudentServiceCollection = inject(StudentServiceCollection)) {
    super(serviceCollection.CollectionOfStudentCourse.bind(serviceCollection), inject(StudentCourseBuilder));
    this.currentInstance = new StudentCourse();
  }

  @Input()
  public set student(value: Student) {
    this.masterInstance = { ...value };
    //this.currentInstance.student = { ...value };
    this.sourceInstance.student = { ...value };
  }

  public courseLinker: ForeignkeyLinker<Course> = new ForeignkeyLinker<Course>(inject(CourseService), true);

}
