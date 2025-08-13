import { Observable, Subscription } from "rxjs";
import { BaseEntity } from "../../BaseEntity";
import { Service } from "../../service/service";
import { AfterViewInit, Directive, Injectable, Input, OnDestroy, OnInit, computed, effect, inject, input } from "@angular/core";
import { MasterTrackerService } from "../../service/uiService/master-tracker-service";

import { IEditUI } from './editUI.interface';
import { IDeleteUI } from './deleteUI.interface';
import { ServiceCollection } from "../../service/service.collection";
import { ServiceBuilder } from "../../service/service.builder";
import { API_Operation } from "../../service/api.operation";

@Directive()
export abstract class DetailUI<TMaster extends BaseEntity, TChild extends BaseEntity> implements OnInit {

    constructor(private collection: (id: number, entity: TChild) => Observable<TChild[]>, private serviceBuilder: ServiceBuilder<TChild>) {
        this.sourceInstance = this.serviceBuilder.BuildInstance();
    }

    ngOnInit(): void {
    }

    hoveredRowIndex: number = -1;

    setIndex(i: number) {
        this.hoveredRowIndex = i;
    }

    checkIndex(i: number): boolean {
        return this.hoveredRowIndex === i;
    }

    private _masterInstance!: TMaster;

    @Input()
    set masterInstance(value: TMaster) {
        console.log("Master Instance Set:", value);
        this._masterInstance = value;
        // this.masterId = value?.id;
        this.filterInstance = this.serviceBuilder.BuildSeekInstance();
        this.onReload();
    }

    get masterInstance(): TMaster {
        return this._masterInstance;
    }

    protected sourceInstance!: TChild;
    currentInstance!: TChild;
    filterInstance!: TChild;
    list$: Observable<TChild[]> = new Observable<TChild[]>();

    onReload(): void {
        this.filterInstance = this.serviceBuilder.BuildSeekInstance();
        this.onSeek();
    }

    onSeek(): void {
        this.currentInstance = this.serviceBuilder.BuildInstance();
        this.list$ = this.collection(this.masterInstance.id, this.filterInstance);
    }

    onAddButtonClick(modal: IEditUI<TChild>): void {
        modal.Show({ ...this.sourceInstance });
    }

    onEditButtonClick(modal: IEditUI<TChild>): void {
        if (!this.currentInstance) {
            // Message Show ( No record was selected! )
            return;
        }
        modal.Show({ ...this.currentInstance });
    }

    onEditUIClosed(value: boolean) {
        if (!value) return;
        this.currentInstance = this.serviceBuilder.BuildInstance();
        this.onReload();
    }

    onDeleteButtonClick(modal: IDeleteUI<TChild>): void {
        if (!this.currentInstance) {
            // Message Show ( No record was selected! )
            return;
        }
        modal.Show({ ...this.currentInstance });

    }

    onDeleteUIClosed(value: boolean) {
        if (!value) return;
        this.currentInstance = this.serviceBuilder.BuildInstance();
        this.onReload();
    }

    onRowClick(rowInstance: TChild): void {
        this.currentInstance = rowInstance;
    }

    onRowDblClick(modal: IEditUI<TChild>): void {
        this.onEditButtonClick(modal);
    }
}