

import { Component, inject, Output, OnChanges, OnInit, EventEmitter, ViewChild } from '@angular/core';
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
export class StudentEditUI extends EditUI<Student> implements OnInit, OnChanges {

    @ViewChild('modal', { static: true }) editModal!: AppModalComponent;

    @Output() public override onClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

    protected override service: StudentService = inject(StudentService);


    public genderLinker: ForeignkeyLinker<Gender> = new ForeignkeyLinker<Gender>(this.service.genderService, false);

    constructor(service: StudentService) {
        super(service);
        this.service = service;
    }



    onUserSelected(id: number) {
        console.log("Id Selected : ", id);

    }

    ngOnInit(): void {
        this.initModal(this.editModal);
    }

    //#region Gender Lookup
    genderList$: Observable<Gender[]> = new Observable<Gender[]>();

    onGenderSeek(value: string) {
        console.log("Gender Search: ", value);
        this.genderList$ = this.service.genderService.SeekByValue(value);
    }

    onGenderSelected(gender: Gender) {
        console.log("Gender Selected: ", gender);
    }
    //#endregion
}
