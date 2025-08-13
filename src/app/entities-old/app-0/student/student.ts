
import { Info } from '../../../../core/info';
import { Validator } from '../../../../core/tools/validator';

import { BaseEntity } from '../../../../core/BaseEntity';
import { IBaseEntity } from '../../../../core/IBaseEntity';
import { Gender } from '../gender/gender';

import { StudentCourse } from '../studentCourse/studentCourse';



export class Student extends BaseEntity implements IBaseEntity<Student> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number = 0, descriptor: string = '') {
	
    super(id, descriptor, Student.Info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('App', 'Student', 'Student');

  //endregion

  //#region Fields

	public firstName: string = '';
	
	public lastName: string = '';
	
	public gender?: Gender = new Gender();
	
	public code: number = 0;

	//#endregion
    
  //#region Collection Properties

  public listOfStudentCourse: StudentCourse[] = [];

  //#endregion

  
  public SeekInstance(): Student {
    return Student.SeekInstance();
  }

  public static override SeekInstance() : Student {
    let student: Student = new Student();
    // No Item...
    return student;
  }

  public static Validate(student: Student) : boolean {
    let result = 
      Validator.Validate(student.firstName) &&
		Validator.Validate(student.lastName) &&
		Validator.Validate(student.gender);

    if(result === false)
      console.log('Student is unvalid : ', student);

    return result;
  }
}
