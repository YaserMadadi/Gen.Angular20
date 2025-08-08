import { Service } from "../../service/service";
import { BaseEntity } from "../../BaseEntity";
import { ChangeDetectorRef, EventEmitter, Inject, Injectable, Input, OnInit, Output, SimpleChanges, ViewChild, signal } from "@angular/core";
import { AppModalComponent } from "../modal/modal.component";
import { firstValueFrom, Observable } from "rxjs";
import { NgForm } from "@angular/forms";
import { IEditUI } from "./editUI.interface";

@Injectable()
export class EditUI<T extends BaseEntity> implements IEditUI<T> {

    public modalVisible: boolean = false;

    onClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

    public currentInstance: T;

    public modal!: AppModalComponent;

    constructor(protected service: Service<T>) { // protected currentInstance: T = service.CreateInstance()
        this.currentInstance = service.CreateInstance();
    }

    closed(reloadRequired: boolean) {
        // console.log('FFFFFFFFFFF');
        this.onClosed.emit(reloadRequired);
    }

    // public currentInstance: T;

    header(entityName: string): string {
        return `${entityName} Management - ${(this.currentInstance.id > 0 ? "Edit" : "Add")} ${entityName}`;
    }

    VisibleChanged(value: boolean) {
        this.modalVisible = value;
    }

    ngOnChanges(changes: SimpleChanges): void {
        // if (changes['currentInstance']) {
        //     this.currentInstance = Object.assign(this.service.CreateInstance(), this.currentInstance);
        // }
    }

    async Save(form: NgForm): Promise<boolean> {
        this.service.Save(this.currentInstance).subscribe({
            next: data => {
                if (data.id > 0) {
                    this.currentInstance = data;
                    this.onClose(true);
                    form.reset();
                } else {
                    this.onClose(false);
                }

            },
            error: err => console.error(`Failed to load ${this.currentInstance.info.fullName}:`, err),
        });;
        return true;
    }



    public initModal(modal: AppModalComponent) {
        this.modal = modal;
        //this.currentInstance = this.service.CreateInstance();
    }

    async Show(): Promise<void>;
    async Show(instance: T): Promise<void>;
    async Show(instance: T = this.service.CreateInstance()): Promise<void> {
        this.currentInstance = instance;

        this.modal.show();//.open();
        // this.modal.Visible = true;
        //this.cdr.detectChanges();
    }

    updateData(instance: T) {
        this.currentInstance = instance ? instance : this.service.CreateInstance();

    }

    async onClose(succeded: boolean): Promise<void> {
        //this.modalVisible = false;
        this.modal.Visible = false;
        this.modal.hide();
        this.onClosed.emit(succeded);
    }
}