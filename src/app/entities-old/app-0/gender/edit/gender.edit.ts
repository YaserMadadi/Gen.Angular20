

import { Component, inject, Output, OnChanges, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { AppModalComponent } from '../../../../../core/ui/modal/modal.component';
import { EditButtons } from '../../../../../core/ui/components/edit-buttons/edit-buttons';
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

    constructor() {
        super(inject(GenderService));
    }

}