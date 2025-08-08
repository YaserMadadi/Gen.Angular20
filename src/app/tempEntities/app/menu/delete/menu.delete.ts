import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppModalComponent } from '../../../../../core/ui/modal/modal.component';
import { DeleteUI } from '../../../../../core/ui/baseUI/deleteUI';
import { IDeleteUI } from '../../../../../core/ui/baseUI/deleteUI.interface';

import { Menu } from '../menu';
import { MenuService } from "../menu.service";

@Component({
    selector: 'menu-delete',
    templateUrl: './menu.delete.html',
    imports: [
        AppModalComponent,
        FormsModule
    ]
})
export class MenuDeleteUI extends DeleteUI<Menu> implements IDeleteUI<Menu> {

    constructor() {
        super(inject(MenuService));

    }

}