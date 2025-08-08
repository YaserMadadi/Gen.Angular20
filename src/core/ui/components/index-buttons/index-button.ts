import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
    selector: 'index-button',
    templateUrl: './index-button.html',
    styleUrls: ['./index-button.scss'],
    standalone: true,
    imports: [
        Button,
        CommonModule
    ]
})
export class IndexButton {



    // Add component logic here
    @Output() addButtonClick: EventEmitter<void> = new EventEmitter<void>();
    @Output() editButtonClick: EventEmitter<void> = new EventEmitter<void>();
    @Output() deleteButtonClick: EventEmitter<void> = new EventEmitter<void>();
    @Output() refreshButtonClick: EventEmitter<void> = new EventEmitter<void>();

    // Allow visibility to be set from outside via @Input() attributes

    @Input() Id: number = 0;

    @Input() addButtonVisibility: boolean = true;
    @Input() editButtonVisibility: boolean = true;
    @Input() deleteButtonVisibility: boolean = true;

    @Input() public addButtonEnabled: boolean = true;
    @Input() public editButtonEnabled: boolean = true;
    @Input() public deleteButtonEnabled: boolean = true;

}