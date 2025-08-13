
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { DetailUI } from '../../../../../core/ui/baseUI/detailUI';
import { DetailButton } from '../../../../../core/ui/components/detail-buttons/detail-button';
import { ForeignkeyLinker } from '../../../../../core/ui/helper/foreignkey-linker';
import { LookupComponent } from '../../../../../core/ui/components/lookup/lookup';
import { RowButtons } from '../../../../../core/ui/components/row-buttons/row-buttons';


import { Course } from '../course';
import { StudentCourse } from '../../studentCourse/studentCourse';
import { StudentCourseService } from '../../studentCourse/studentCourse.service';
import { CourseServiceCollection } from '../../course/course.service.collection';

import { StudentCourseEditUI } from '../../studentCourse/edit/studentCourse.edit';
import { StudentCourseDeleteUI } from '../../studentCourse/delete/studentCourse.delete';
import { StudentCourseBuilder } from '../../studentCourse/studentCourse.builder';
import { Student } from '../../student/student';
import { StudentService } from '../../student/student.service';



@Component({
  selector: 'app-course-studentCourse-detail',
  templateUrl: './course-studentCourse.detail.html',
  styleUrls: ['./course-studentCourse.detail.scss'],
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
export class Course_StudentCourse_DetailUI extends DetailUI<Course, StudentCourse> {

  constructor(private serviceCollection: CourseServiceCollection = inject(CourseServiceCollection)) {
    super(serviceCollection.CollectionOfStudentCourse.bind(serviceCollection), inject(StudentCourseBuilder));
    this.currentInstance = new StudentCourse();
  }

  @Input()
  public set course(value: Course) {
    this.masterInstance = { ...value };
    //this.currentInstance.course = { ...value };
    this.sourceInstance.course = { ...value };
  }

  public studentLinker: ForeignkeyLinker<Student> = new ForeignkeyLinker<Student>(inject(StudentService), true);

}
