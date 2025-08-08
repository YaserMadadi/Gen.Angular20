

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService } from '../../../../core/service/service.interface';
import { Service } from '../../../../core/service/service';

import { Info } from '../../../../core/info';
import { Result } from '../../../../core/tools/Result';
import { MessageController } from '../../../../core/tools/controller.message';
import { MessageType } from '../../../../core/tools/enum';

import { Menu } from './menu';
import { MenuServiceCollection } from './menu.service.collection';



@Injectable()
export class MenuService extends Service<Menu> implements IService<Menu> {


  constructor() {
    super(Menu.Info);

  }

  //#region     Abstract Members - Start.
  static CreateSeekInstance(): Menu {
    return Menu.SeekInstance();
  }

  override CreateSeekInstance(): Menu {
    return Menu.SeekInstance();
  }

  override CreateInstance() {
    return new Menu();
  }

  //#region Methods

  override RetrieveById(id: number): Observable<Menu> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<Menu[]> {
    return super.RetrieveAll();
  }

  override Save(menu: Menu): Observable<Menu> {
    if (!Menu.Validate(menu)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return of(menu);
    }
    return super.Save(menu);
  }

  override SaveAttached(menu: Menu): Observable<Menu> {
    if (!Menu.Validate(menu)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return of(menu);
    }
    return super.SaveAttached(menu);
  }

  override SaveCollection(menuList: Menu[]): Observable<Result> {
    return super.SaveCollection(menuList);
  }

  override Delete(menu: Menu): Observable<boolean> {
    return super.Delete(menu);
  }

  override Seek(menu: Menu = MenuService.CreateSeekInstance(), pageNumber: number = 1): Observable<Menu[]> {
    //TODO: (Yaser) - add pageNumber
    return super.Seek(menu);
    //TODO: Should be completed!
  }

  override SeekLast(menu: Menu): Observable<Menu> {
    return super.SeekLast(menu);
  }

  override SeekByValue(value: string = ''): Observable<Menu[]> {
    return super.SeekByValue(value);
  }

  //#endregion



  //# this section was Moved to ServiceCollection classes!
}
