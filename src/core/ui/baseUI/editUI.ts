import { Service } from "../../service/service";
import { BaseEntity } from "../../BaseEntity";
import { ChangeDetectorRef, Directive, EventEmitter, Inject, Injectable, Input, OnInit, Output, SimpleChanges, ViewChild, inject, signal } from "@angular/core";
import { AppModalComponent } from "../modal/modal.component";
import { firstValueFrom, Observable } from "rxjs";
import { NgForm } from "@angular/forms";
import { IEditUI } from "./editUI.interface";

@Directive()
export class EditUI<T extends BaseEntity> implements IEditUI<T>, OnInit {

    @ViewChild('modal', { static: false })
    editModal!: AppModalComponent;

    public modalVisible: boolean = false;

    @Output() public onClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

    private _currentInstance!: T;

    @Input()
    public set currentInstance(value: T) {
        this._currentInstance = value ?? this.service.builder.BuildInstance();
        console.log('Current Instance in editUI:', this._currentInstance);
    }

    public get currentInstance(): T {
        return this._currentInstance;
    }

    constructor(protected service: Service<T>) { // protected currentInstance: T = service.CreateInstance()
        this.currentInstance = service.builder.BuildInstance();
    }

    ngOnInit(): void {
    }

    closed(reloadRequired: boolean) {
        // console.log('FFFFFFFFFFF');
        this.onClosed.emit(reloadRequired);
    }

    // public currentInstance: T;

    header(entityName: string): string {
        return `${entityName} Management - ${(this.currentInstance?.id > 0 ? "Edit" : "Add")} ${entityName}`;
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



    async Show(): Promise<void>;
    async Show(instance: T): Promise<void>;
    async Show(instance: T = this.service.builder.BuildInstance()): Promise<void> {
        this.currentInstance = { ...instance };
        this.editModal.show();//.open();
    }

    updateData(instance: T) {
        this.currentInstance = instance ? instance : this.service.builder.BuildInstance();

    }

    async onClose(succeded: boolean): Promise<void> {
        //this.modalVisible = false;
        this.editModal.Visible = false;
        this.editModal.hide();
        this.onClosed.emit(succeded);
    }
}