import { NgForm } from "@angular/forms";
import { BaseEntity } from "../../BaseEntity";
import { AppModalComponent } from "../modal/modal.component";

export interface IEditUI<T extends BaseEntity> {

    //currentInstance: T;
    //modalVisible: boolean;

    editModal: AppModalComponent;

    header(entityName: string): string;

    //initModal(modal: AppModalComponent): void;

    Show(): Promise<void>;
    Show(instance: T): Promise<void>;

    onClose(succeded: boolean): Promise<void>;

    Save(form: NgForm, instance: T): Promise<boolean>;
}