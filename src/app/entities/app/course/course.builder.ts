

import { Injectable } from "@angular/core";
import { ServiceBuilder } from "../../../../core/service/service.builder";
import { IServiceBuilder } from "../../../../core/service/service.builder.interface";
import { Course } from "./course";


@Injectable({ providedIn: 'root' })
export class CourseBuilder extends ServiceBuilder<Course> implements IServiceBuilder<Course> {

  constructor() {
        super();
    }

  
  BuildInstance(): Course;
  BuildInstance(id: number): Course;
  BuildInstance(id: number, descriptor: string): Course;
  BuildInstance(id: number = 0, descriptor: string = ''): Course {
    return new Course(id, descriptor);
  }

  BuildSeekInstance(): Course {
    return CourseBuilder.BuildSeekInstance();
  }

  static BuildSeekInstance(): Course {
    let course = new Course();
    course.isActive = undefined;
    return course;
  }
}