

import { Injectable } from "@angular/core";
import { ServiceBuilder } from "../../../../core/service/service.builder";
import { IServiceBuilder } from "../../../../core/service/service.builder.interface";
import { Student } from "./student";


@Injectable({ providedIn: 'root' })
export class StudentBuilder extends ServiceBuilder<Student> implements IServiceBuilder<Student> {

  constructor() {
        super();
    }

  
  BuildInstance(): Student;
  BuildInstance(id: number): Student;
  BuildInstance(id: number, descriptor: string): Student;
  BuildInstance(id: number = 0, descriptor: string = ''): Student {
    return new Student(id, descriptor);
  }

  BuildSeekInstance(): Student {
    return StudentBuilder.BuildSeekInstance();
  }

  static BuildSeekInstance(): Student {
    let student = new Student();
    student.gender = undefined;
    return student;
  }
}