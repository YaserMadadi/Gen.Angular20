
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

import { DetailUI } from '../../../../../core/ui/baseUI/detailUI';
import { DetailButton } from '../../../../../core/ui/components/detail-buttons/detail-button';
import { MasterTrackerService } from '../../../../../core/service/uiService/master-tracker-service';

import { Course } from '../course';
import { StudentCourse } from '../../studentCourse/studentCourse';
import { StudentCourseService } from '../../studentCourse/studentCourse.service';
import { CourseServiceCollection } from '../../course/course.service.collection';

import { StudentCourseEditUI } from '../../studentCourse/edit/studentCourse.edit';
import { StudentCourseDeleteUI } from '../../studentCourse/delete/studentCourse.delete';



@Component({
    selector: 'app-course-studentCourse-detail',
    templateUrl: './course-studentCourse.detail.html',
    styleUrls: [
        './course-studentCourse.detail.scss'
    ],
    imports: [
        CommonModule,
        DetailButton,
        StudentCourseEditUI,
        StudentCourseDeleteUI,

    ]
})
export class Course_StudentCourse_DetailUI extends DetailUI<Course, StudentCourse> {

    constructor(private serviceCollection: CourseServiceCollection = inject(CourseServiceCollection)) {
        super(serviceCollection.CollectionOfStudentCourse);
    }

}
