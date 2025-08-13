import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'detail-buttons',
    templateUrl: './detail-button.html',
    styleUrls: ['./detail-button.scss'],
    imports: [
        CommonModule
    ]
})
export class DetailButton {

    @Output() addButtonClick: EventEmitter<void> = new EventEmitter<void>();
    @Output() editButtonClick: EventEmitter<void> = new EventEmitter<void>();
    @Output() deleteButtonClick: EventEmitter<void> = new EventEmitter<void>();
    @Output() refreshButtonClick: EventEmitter<void> = new EventEmitter<void>();

    @Input() addButtonVisibility: boolean = true;
    @Input() editButtonVisibility: boolean = true;
    @Input() deleteButtonVisibility: boolean = true;
    @Input() refreshButtonVisibility: boolean = true;

    @Input() currentInstance_Id: number = 0;
}