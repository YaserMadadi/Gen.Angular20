

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
import { Course } from '../course';
import { CourseService } from '../course.service';
import { CourseDeleteUI } from '../delete/course.delete';
import { CourseEditUI } from '../edit/course.edit';



@Component({
  selector: 'app-course-seek',
  templateUrl: './course.seek.html',
  styleUrls: ['./course.seek.scss'],
  providers: [CourseService],
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
    CourseEditUI,
    CourseDeleteUI,
  ]
})
export class CourseIndexUI extends IndexUI<Course> implements IIndexUI<Course> {

  constructor(public override service: CourseService = inject(CourseService)) {
    super(service);
    
  }

  
}
