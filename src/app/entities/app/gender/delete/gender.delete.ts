

import { Component, inject, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppModalComponent } from '../../../../../core/ui/modal/modal.component';
import { DeleteUI } from '../../../../../core/ui/baseUI/deleteUI';
import { IDeleteUI } from '../../../../../core/ui/baseUI/deleteUI.interface';
import { DeleteButtons } from '../../../../../core/ui/components/delete-buttons/delete-buttons';

import { Gender } from '../gender';
import { GenderService } from '../gender.service';


@Component({
  selector: 'app-gender-delete',
  templateUrl: './gender.delete.html',
  styleUrls: ['./gender.delete.scss'],
  imports: [
    AppModalComponent,
    FormsModule,
    DeleteButtons,
    DatePipe
  ]
})
export class GenderDeleteUI extends DeleteUI<Gender> implements IDeleteUI<Gender>, OnInit {

  @ViewChild('deleteModal', { static: true }) deleteModal!: AppModalComponent;

  @Output() public override onClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    super(inject(GenderService));
  }

  ngOnInit(): void {
    this.initModal(this.deleteModal);
  }

}
