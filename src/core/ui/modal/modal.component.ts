import { Component, Input, ElementRef, Output, EventEmitter, inject, computed, Injectable } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { Button } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

import { DividerModule } from 'primeng/divider';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.scss',
    imports: [
        DialogModule,
        //Button,
        DividerModule
    ],
    providers: []
})
export class AppModalComponent {

    constructor() { }

    @Output() public onClosed: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() onSave = new EventEmitter<void>();

    @Input() protected visible: boolean = false;

    @Input() public set Visible(value: boolean) {
        this.visible = value;
        // console.log("change visible in AppModal to " + value);
        this.VisibleChange.emit(value);
        if (this.visible == false) {
            this.onClosed.emit();
        }
    }

    @Output() public VisibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    get Visible(): boolean {
        return this.visible;
    }

    @Input() public Header = 'Modal Title';


    show() {
        this.Visible = true;
    }

    afterClosed() {

    }

    // save() {
    //     this.onSave.emit();
    // }

    hide() {
        this.onClosed.emit();
        // console.log('DDDDDDDDDDDDDD');
        this.Visible = false;
    }
}
