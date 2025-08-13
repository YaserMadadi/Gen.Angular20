import { NgForm } from "@angular/forms";
import { BaseEntity } from "../../BaseEntity";
import { AppModalComponent } from "../modal/modal.component";

export interface IDeleteUI<T extends BaseEntity> {

    currentInstance: T;

    //initModal(modal: AppModalComponent): void;

    Show(currentInstance: T): Promise<void>;

    onClose(succeeded: boolean): Promise<void>;

    onDelete(form: NgForm): void;

}