import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabPanelComponent, Tabs2Module } from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { Menu } from '@entities/app/menu/menu';
import { MenuService } from '@entities/app/menu/menu.service';

@Component({
    selector: 'app-menu-master',
    templateUrl: './menu.master.html',
    styleUrls: ['./menu.master.scss'],
    imports: [
        Tabs2Module,
        //IconDirective, IconDirective
    ]
})
export class MenuMaster {

    constructor(private menuService: MenuService) {
        const menuId = this.route.snapshot.paramMap.get('id');
    }

}