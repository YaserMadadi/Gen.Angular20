

import { ChangeDetectorRef, Component, inject, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { AppModalComponent } from '../../../../../core/ui/modal/modal.component';
import { EditButtons } from '../../../../components/edit/edit-buttons/edit-buttons';
import { EditUI } from '../../../../../core/ui/baseUI/editUI';

import { Gender } from '../gender';
import { GenderService } from '../gender.service';



@Component({
    selector: 'app-gender-edit',
    templateUrl: './gender.edit.html',
    styleUrls: ['./gender.edit.scss'],
    imports: [
        FormsModule,
        AppModalComponent,
        EditButtons
    ]
})
export class GenderEditUI extends EditUI<Gender> implements OnInit, OnChanges {

    @ViewChild('modal', { static: true }) editModal!: AppModalComponent;

    public gender: Gender = new Gender();

    constructor() {
        super(inject(GenderService));
    }

    ngOnInit(): void {
        this.initModal(this.editModal);
    }
}
