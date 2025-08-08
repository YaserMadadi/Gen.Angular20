import { IBaseEntity } from "../../../../core/IBaseEntity";
import { BaseEntity } from "../../../../core/BaseEntity";
import { Info } from "../../../../core/info";

export class Menu extends BaseEntity implements IBaseEntity<Menu> {

  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, recursive: boolean);
  constructor(id: number = 0, descriptor: string = '', recursive: boolean = true) {

    super(id, descriptor, Menu.Info);
    // if (recursive === true) 
    //   this.parent = new Menu(this.parent?.id, descriptor, info, false);
  }

  //   override ngOnInit() {

  //   }



  //region Info

  public static override readonly Info: Info = new Info('App', 'Menu', 'Menu');

  //endregion

  //#region Fields

  public parent?: Menu;

  public title: string = '';

  public url: string = '';

  public icon: string = '';

  public tootip: string = '';

  public isActive?: boolean = false;

  //#endregion

  //#region Collection Properties

  public: Menu[] = [];

  //#endregion


  public override SeekInstance(): Menu {
    return Menu.SeekInstance();
  }

  public static override SeekInstance(): Menu {
    let menu: Menu = new Menu();
    menu.isActive = undefined;
    //menu.ResetPaginate();
    return menu;
  }

  public static Validate(menu: Menu): boolean {

    let result = true;
    // let result = 
    //   Validator.Validate(menu.title) &&
    // 	Validator.Validate(menu.url) &&
    // 	Validator.Validate(menu.icon) &&
    // 	Validator.Validate(menu.tootip);

    // if(result === false)
    //   console.log('Menu is unvalid : ', menu);

    return result;
  }


}


