import { Injectable } from '@angular/core';
import { InitializerService } from '../../../../core/service/initializer_service';
import { IInitializerService } from '../../../../core/service/initializer_service.interface';

import { Course } from './course';

@Injectable({ providedIn: 'root' })
export class CourseInitializer extends InitializerService<Course> implements IInitializerService<Course> {

    CreateInstance(id: number): Course;
    CreateInstance(): Course;
    CreateInstance(id: number = 0): Course {
        return new Course();
    }

    CreateSeekInstance(): Course {
        return new Course();
    }


}


