

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal/modal.component';
import { LookupComponent } from '../../../../../core/ui/components/lookup/lookup';
import { ForeignkeyLinker } from '../../../../../core/ui/helper/foreignkey-linker';
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
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class CourseEditUI extends EditUI<Course> {
    
  constructor(public override service: CourseService = inject(CourseService )) {
    super(service); 
    
  }

  

  

}
