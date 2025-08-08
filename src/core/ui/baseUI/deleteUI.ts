import { firstValueFrom } from "rxjs";
import { BaseEntity } from "../../BaseEntity";
import { Service } from "../../service/service";
import { IDeleteUI } from "./deleteUI.interface";
import { EventEmitter, Injectable, OnInit, Output } from "@angular/core";
import { AppModalComponent } from "../modal/modal.component";
import { NgForm } from "@angular/forms";

@Injectable()
export class DeleteUI<T extends BaseEntity> implements IDeleteUI<T> {

    public modalVisible: boolean = false;

    public currentInstance: T;

    public modal!: AppModalComponent;

    @Output() public onClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(protected service: Service<T>) {
        this.currentInstance = this.service.CreateInstance();
    }

    VisibleChanged(value: boolean) {
        this.modalVisible = value;
    }

    header(entityName: string) {
        return `${entityName} Management - Delete ${entityName}`;
    }

    initModal(modal: AppModalComponent) {
        this.modal = modal;
        this.currentInstance = this.service.CreateInstance();
    }

    async Show(instance: T): Promise<void> {
        console.log('in Show')
        this.currentInstance = instance;
        this.modalVisible = true;
        this.modal.show();
    }

    onAfterClosed() {
        console.log('Afterrrrrr');
        this.onClosed.emit(false);
    }

    async onClose(succeeded: boolean): Promise<void> {
        this.modal.hide();
        this.onClosed.emit(succeeded);
    }

    // onClosed() {

    // }

    onDelete(form: NgForm): void {
        this.service.Delete(this.currentInstance).subscribe({
            next: data => {
                console.log("I am here. after delete!");
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