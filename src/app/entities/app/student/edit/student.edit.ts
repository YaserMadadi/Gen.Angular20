

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal/modal.component';
import { LookupComponent } from '../../../../../core/ui/components/lookup/lookup';
import { ForeignkeyLinker } from '../../../../../core/ui/helper/foreignkey-linker';
import { EditButtons } from '../../../../../core/ui/components/edit-buttons/edit-buttons';
import { EditUI } from '../../../../../core/ui/baseUI/editUI';

import { Student } from '../student';
import { StudentService } from '../student.service';
import { Gender } from '../../gender/gender';



@Component({
  selector: 'app-student-edit',
  templateUrl: './student.edit.html',
  styleUrls: ['./student.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class StudentEditUI extends EditUI<Student> {
    
  constructor(public override service: StudentService = inject(StudentService )) {
    super(service); 
    this.genderLinker = new ForeignkeyLinker<Gender>(this.service.genderService, false);
  }

  @Input() 
  set genderLocked(value: boolean) {
    this.genderLinker.locked = value;
  }

  public genderLinker: ForeignkeyLinker<Gender>;

}
