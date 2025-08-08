import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ButtonModule } from "primeng/button";

@Component({
    selector: 'delete-buttons',
    templateUrl: './delete-buttons.html',
    imports: [
        ButtonModule
    ]
})
export class DeleteButtons {

    @Input()
    public deleteButtonTitle: string = 'Delete';

    @Output()
    public onDelete: EventEmitter<void> = new EventEmitter<void>();

    @Input()
    public cancleButtonTitle: string = 'Cancle';

    @Output()
    public onCancle: EventEmitter<void> = new EventEmitter<void>();

    onDeleteClick() {
        this.onDelete.emit();
    }
}