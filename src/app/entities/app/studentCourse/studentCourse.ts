
import { Info } from '../../../../core/info';
import { Validator } from '../../../../core/tools/validator';

import { BaseEntity } from '../../../../core/BaseEntity';
import { IBaseEntity } from '../../../../core/IBaseEntity';
import { Course } from '../course/course';
import { Student } from '../student/student';




export class StudentCourse extends BaseEntity implements IBaseEntity<StudentCourse> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number = 0, descriptor: string = '') {
	
    super(id, descriptor, StudentCourse.Info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('App', 'StudentCourse', 'درسهای دانشجو');

  //endregion

  //#region Fields

	public student?: Student = new Student();
	
	public course?: Course = new Course();
	
	public takenDate?: Date = new Date();

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(studentCourse: StudentCourse) : boolean {
    let result = 
      Validator.Validate(studentCourse.student) &&
		Validator.Validate(studentCourse.course) &&
		Validator.Validate(studentCourse.takenDate);

    if(result === false)
      console.log('StudentCourse is unvalid : ', studentCourse);

    return result;
  }
}
