

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal/modal.component';
import { LookupComponent } from '../../../../../core/ui/components/lookup/lookup';
import { ForeignkeyLinker } from '../../../../../core/ui/helper/foreignkey-linker';
import { EditButtons } from '../../../../../core/ui/components/edit-buttons/edit-buttons';
import { EditUI } from '../../../../../core/ui/baseUI/editUI';

import { StudentCourse } from '../studentCourse';
import { StudentCourseService } from '../studentCourse.service';
import { Course } from '../../course/course';
import { Student } from '../../student/student';



@Component({
  selector: 'app-studentCourse-edit',
  templateUrl: './studentCourse.edit.html',
  styleUrls: ['./studentCourse.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons
  ]
})
export class StudentCourseEditUI extends EditUI<StudentCourse> {
    
  constructor(public override service: StudentCourseService = inject(StudentCourseService )) {
    super(service); 
    this.courseLinker = new ForeignkeyLinker<Course>(this.service.courseService, true);
		this.studentLinker = new ForeignkeyLinker<Student>(this.service.studentService, true);
  }

  public courseLinker: ForeignkeyLinker<Course>;

	public studentLinker: ForeignkeyLinker<Student>;

}
