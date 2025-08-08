import { Component, inject, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { AppModalComponent } from '../../../../../core/ui/modal/modal.component';
import { EditUI } from '../../../../../core/ui/baseUI/editUI';

import { Menu } from '../menu';
import { MenuService } from '../menu.service';


@Component({
    selector: 'menu-edit',
    templateUrl: './menu.edit.html',
    styleUrls: ['./menu.edit.scss'],
    imports: [
        FormsModule,
        AppModalComponent,
    ]
})
export class MenuEditUI extends EditUI<Menu> implements OnInit {

    // @ViewChild('menuEditUI', { static: true })
    // appModal!: AppModalComponent;

    constructor() {
        super(inject(MenuService));
    }

    ngOnInit(): void {
        //this.initModal(this.appModal);
    }


}