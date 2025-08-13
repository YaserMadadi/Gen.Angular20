

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
import { Student } from '../student';
import { StudentService } from '../student.service';
import { StudentDeleteUI } from '../delete/student.delete';
import { StudentEditUI } from '../edit/student.edit';
import { Gender } from '../../gender/gender';
import { StudentCourse } from '../../studentCourse/studentCourse';
import { StudentCourseEditUI } from '../../studentCourse/edit/studentCourse.edit';



@Component({
  selector: 'app-student-seek',
  templateUrl: './student.seek.html',
  styleUrls: ['./student.seek.scss'],
  providers: [StudentService],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    RowButtons,
    StudentEditUI,
    StudentDeleteUI,
    LookupComponent,
		StudentCourseEditUI,
  ]
})
export class StudentIndexUI extends IndexUI<Student> implements IIndexUI<Student> {

  constructor(public override service: StudentService = inject(StudentService)) {
    super(service);
    this.genderLinker = new ForeignkeyLinker<Gender>(this.service.genderService, false);

    this.quickAddItems = [new DropdownMenuItem('Add  درسهای دانشجو', () => this.onAddStudentCourse()),];

    this.linkedEntityItems = [new DropdownMenuItem('Manage  جنسیت', () => this.navigateToUrl('/app/gender')),];
  }

  public genderLinker: ForeignkeyLinker<Gender>;

  
  @ViewChild('studentCourseEditUI')
  public studentCourseEditUI!: StudentCourseEditUI;

  onAddStudentCourse() {
    let studentCourse = new StudentCourse();
    studentCourse.student = this.currentInstance;
    this.studentCourseEditUI.Show(studentCourse);
  }


}
