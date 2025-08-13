
import { Info } from '../../../../core/info';
import { Validator } from '../../../../core/tools/validator';

import { BaseEntity } from '../../../../core/BaseEntity';
import { IBaseEntity } from '../../../../core/IBaseEntity';

import { Student } from '../student/student';



export class Gender extends BaseEntity implements IBaseEntity<Gender> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number = 0, descriptor: string = '') {
	
    super(id, descriptor, Gender.Info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('App', 'Gender', 'جنسیت');

  //endregion

  //#region Fields

	public title: string = '';
	
	public preFix: string = '';

	//#endregion
    
  //#region Collection Properties

  public listOfStudent: Student[] = [];

  //#endregion

  public static Validate(gender: Gender) : boolean {
    let result = 
      Validator.Validate(gender.title) &&
		Validator.Validate(gender.preFix);

    if(result === false)
      console.log('Gender is unvalid : ', gender);

    return result;
  }
}
