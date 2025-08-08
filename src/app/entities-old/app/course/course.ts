
import { Info } from '../../../../core/info';
import { Validator } from '../../../../core/tools/validator';

import { BaseEntity } from '../../../../core/BaseEntity';
import { IBaseEntity } from '../../../../core/IBaseEntity';

export class Course extends BaseEntity implements IBaseEntity<Course> {

  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number = 0, descriptor: string = '') {

    super(id, descriptor, Course.Info);
    this.id;
    //this.``
  }



  //region Info

  public static override readonly Info: Info = new Info('App', 'Course', 'Course');

  //endregion

  //#region Fields

  public title: string = '';

  public credit: number = 0;

  public isActive?: boolean = false;

  //#endregion

  //#region Collection Properties

  //#endregion


  public static override SeekInstance(): Course {
    let course: Course = new Course();
    course.isActive = undefined;
    return course;
  }

  public static Validate(course: Course): boolean {
    console.log('Course Validation!');
    let result =
      Validator.Validate(course.title);

    if (result === false)
      console.log('Course is unvalid : ', course);

    return result;
  }
}
