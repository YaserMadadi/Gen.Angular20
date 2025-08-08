import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { inject, Injectable, OnInit } from '@angular/core';

import { Info } from '../../info';
import { Service } from "../../service/service";
import { BaseEntity } from "../../BaseEntity";

import { IIndexUI } from './indexUI.interface';
import { IEditUI } from './editUI.interface';
import { IDeleteUI } from './deleteUI.interface';
import { EditUI } from './editUI';
import { DeleteUI } from './deleteUI';
import { NgForm } from '@angular/forms';
import { Course } from '../../../app/entities/app/course/course';

@Injectable()
export class IndexUI<T extends BaseEntity> implements IIndexUI<T>, OnInit {

    router: Router = inject(Router);

    currentInstance: T;
    filterInstance: T;

    list$: Observable<T[]> = new Observable<T[]>();

    constructor(protected service: Service<T>) {
        this.currentInstance = this.service.CreateInstance();
        this.filterInstance = this.service.CreateSeekInstance();
    }

    onInit(): void {

    }


    onEditClosed(refreshRequired: boolean) {
        if (refreshRequired)
            this.onRefresh();
    }

    onDeleteClosed(refreshRequired: boolean) {
        if (refreshRequired)
            this.onRefresh();
    }

    ngOnInit(): void {
        console.log("Index OnInit")
        this.onRetrieveAll();
    }

    async onRetrieveAll(): Promise<void> {
        this.list$ = this.service.RetrieveAll();
        this.currentInstance = this.service.CreateInstance();
    }

    async onRetrieveById(): Promise<void> {

    }

    onSeek(value: string): void {
        console.log('Value: ', value);
        if (value.length == 0)
            this.onRefresh();
        else
            this.list$ = this.service.SeekByValue(value);
    }

    onSelect(record: T): void {
        //console.log('onSelect', record);
        this.currentInstance = record;
    }

    onDoubleClick(editUI: EditUI<T>): void {
        this.editRecord(editUI);
    }


    addRecord(editUI: EditUI<T>): void {
        //editUI.modal.Visible = true;//.open();//.modalVisible = true;
        editUI?.Show();
    }

    deleteRecord(deleteUI: DeleteUI<T>): void {
        //console.log('Im here');
        // deleteUI.modal.Visible = true;
        deleteUI.Show(this.currentInstance);
    }

    editRecord(editUI: EditUI<T>): void {
        editUI.Show(this.currentInstance);
    }

    onLog(): void {
        throw new Error('Method not implemented.');
    }

    navigateToMaster(info: Info): void {
        this.router.navigate([`${info.schema}/${info.name}`, this.currentInstance.id]);
    }




    resetFilter(): void {
        throw new Error("Method not implemented.");
    }

    onRefresh(): void {
        this.onRetrieveAll();
    }

}