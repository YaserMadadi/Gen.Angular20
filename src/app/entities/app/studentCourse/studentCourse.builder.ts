

import { Injectable } from "@angular/core";
import { ServiceBuilder } from "../../../../core/service/service.builder";
import { IServiceBuilder } from "../../../../core/service/service.builder.interface";
import { StudentCourse } from "./studentCourse";


@Injectable({ providedIn: 'root' })
export class StudentCourseBuilder extends ServiceBuilder<StudentCourse> implements IServiceBuilder<StudentCourse> {

  constructor() {
        super();
    }

  
  BuildInstance(): StudentCourse;
  BuildInstance(id: number): StudentCourse;
  BuildInstance(id: number, descriptor: string): StudentCourse;
  BuildInstance(id: number = 0, descriptor: string = ''): StudentCourse {
    return new StudentCourse(id, descriptor);
  }

  BuildSeekInstance(): StudentCourse {
    return StudentCourseBuilder.BuildSeekInstance();
  }

  static BuildSeekInstance(): StudentCourse {
    let studentCourse = new StudentCourse();
    studentCourse.student = undefined;
		studentCourse.course = undefined;
		studentCourse.takenDate = undefined;
    return studentCourse;
  }
}