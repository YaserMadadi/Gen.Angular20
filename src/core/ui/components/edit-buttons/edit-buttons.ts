import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ButtonModule } from "primeng/button";

@Component({
    selector: 'edit-buttons',
    templateUrl: './edit-buttons.html',
    imports: [
        ButtonModule
    ]
})
export class EditButtons {

    @Input()
    public saveButtonTitle: string = 'Save';

    @Output()
    public onSave: EventEmitter<void> = new EventEmitter<void>();

    @Input()
    public cancleButtonTitle: string = 'Cancle';

    @Output()
    public onCancle: EventEmitter<void> = new EventEmitter<void>();

    @Input()
    public disabled: boolean = false;

    onSaveButtonClick() {
        this.onSave.emit();
    }
}