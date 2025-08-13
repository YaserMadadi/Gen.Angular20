

import { Component, inject, Output, OnChanges, OnInit, EventEmitter, ViewChild, DoCheck } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { AppModalComponent } from '../../../../../core/ui/modal/modal.component';
import { EditUI } from '../../../../../core/ui/baseUI/editUI';
import { EditButtons } from '../../../../../core/ui/components/edit-buttons/edit-buttons';
import { LookupComponent } from '../../../../../core/ui/components/lookup/lookup';

import { Student } from '../student';
import { StudentService } from '../student.service';
import { firstValueFrom, map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Gender } from '../../gender/gender';
import { ForeignkeyLinker } from '../../../../../core/ui/helper/foreignkey-linker';



@Component({
	selector: 'app-student-edit',
	templateUrl: './student.edit.html',
	styleUrls: ['./student.edit.scss'],
	standalone: true,
	imports: [
		FormsModule,
		AppModalComponent,
		//ForeignkeyLinker,
		EditButtons,
		LookupComponent,
		CommonModule
	]
})
export class StudentEditUI extends EditUI<Student> {

	constructor(public override service: StudentService = inject(StudentService)) {
		super(service);
		this.genderLinker = new ForeignkeyLinker<Gender>(this.service.genderService, false);
	}

	public genderLinker: ForeignkeyLinker<Gender>;
}
