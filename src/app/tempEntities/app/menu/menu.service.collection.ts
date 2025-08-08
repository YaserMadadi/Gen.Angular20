
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_Operation } from '../../../../core/service/api.operation';
import { ServiceCollection } from '../../../../core/service/service.collection';
import { IServiceCollection } from '../../../../core/service/service.collection.interface';

import { Menu } from './menu';
import { MenuService } from './menu.service';
import { StaffService } from '../../core/staff/staff.service';



@Injectable({ providedIn: 'root' })
export class MenuServiceCollection extends ServiceCollection<Menu> implements IServiceCollection<Menu> {

  constructor() {
    super(inject(MenuService));
  }

  //#region CollectionMethods

  CollectionOfChildMenu(parent: Menu, menu: Menu = MenuService.CreateSeekInstance()): Observable<Menu[]> {
    return super.CollectionOf<Menu>(parent, menu);
  }

  //#endregion
}
