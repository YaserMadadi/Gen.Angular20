

import { CommonModule, DatePipe  } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { IndexButton } from '../../../../../core/ui/components/index-buttons/index-button';
import { SeekBar } from '../../../../../core/ui/components/index-seekBar/seek-bar';
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
    DatePipe,
    IndexButton,
    LookupComponent,
    SeekBar,
    RowButtons,
    StudentCourseEditUI,
    StudentCourseDeleteUI,
  ]
})
export class StudentCourseIndexUI extends IndexUI<StudentCourse> implements IIndexUI<StudentCourse> {

  constructor(public override service: StudentCourseService = inject(StudentCourseService)) {
    super(service);
    this.courseLinker = new ForeignkeyLinker<Course>(this.service.courseService, true);
		this.studentLinker = new ForeignkeyLinker<Student>(this.service.studentService, true);
  }

  public courseLinker: ForeignkeyLinker<Course>;

	public studentLinker: ForeignkeyLinker<Student>;
}
