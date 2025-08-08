import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'detail-buttons',
    templateUrl: './detail-button.html',
    styleUrls: ['./detail-button.scss']
})
export class DetailButton {

    // Add component logic here
    @Output() addButtonClick: EventEmitter<void> = new EventEmitter<void>();
    @Output() editButtonClick: EventEmitter<void> = new EventEmitter<void>();
    @Output() deleteButtonClick: EventEmitter<void> = new EventEmitter<void>();

    // Allow visibility to be set from outside via @Input() attributes

    @Input() addButtonVisibility: boolean = true;
    @Input() editButtonVisibility: boolean = true;
    @Input() deleteButtonVisibility: boolean = true;
}