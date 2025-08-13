import { firstValueFrom } from "rxjs";
import { BaseEntity } from "../../BaseEntity";
import { Service } from "../../service/service";
import { IDeleteUI } from "./deleteUI.interface";
import { Directive, EventEmitter, Injectable, Input, OnInit, Output, ViewChild } from "@angular/core";
import { AppModalComponent } from "../modal/modal.component";
import { NgForm } from "@angular/forms";

@Directive()
export class DeleteUI<T extends BaseEntity> implements IDeleteUI<T> {

    @ViewChild('deleteModal', { static: false })
    deleteModal!: AppModalComponent;

    public modalVisible: boolean = false;


    private _currentInstance!: T;

    @Input()
    public set currentInstance(value: T) {
        this._currentInstance = value;
    }

    public get currentInstance(): T {
        return this._currentInstance;
    }

    @Output() public onClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(protected service: Service<T>) {
        this.currentInstance = this.service.builder.BuildInstance();
    }

    VisibleChanged(value: boolean) {
        this.modalVisible = value;
    }

    header(entityName: string) {
        return `${entityName} Management - Delete ${entityName}`;
    }

    // initModal(modal: AppModalComponent) {
    //     this.modal = modal;
    //     this.currentInstance = this.service.CreateInstance();
    // }

    async Show(instance: T): Promise<void> {
        console.log('in Show')
        this.currentInstance = instance;
        //this.modalVisible = true;
        this.deleteModal.show();
    }

    onAfterClosed() {
        this.onClosed.emit(false);
    }

    async onClose(succeeded: boolean): Promise<void> {
        this.deleteModal.hide();
        this.onClosed.emit(succeeded);
    }

    onDelete(form: NgForm): void {
        this.service.Delete(this.currentInstance).subscribe({
            next: data => {
                this.onClose(true);
                return true;
            },
            error: err => {
                console.log('error : ', err);
                return false;
            }
        });

    }
}