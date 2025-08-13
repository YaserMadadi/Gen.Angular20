
import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Observable, of } from "rxjs";

import { DetailUI } from "../../../../../core/ui/baseUI/detailUI";
import { DetailButton } from "../../../../../core/ui/components/detail-buttons/detail-button";
import { MasterTrackerService } from "../../../../../core/service/uiService/master-tracker-service";

import { Student } from '../student';
import { StudentCourse } from '../../studentCourse/studentCourse';
import { StudentCourseService } from '../../studentCourse/studentCourse.service';
import { StudentServiceCollection } from '../../student/student.service.collection';

import { StudentCourseEditUI } from '../../studentCourse/edit/studentCourse.edit';
import { StudentCourseDeleteUI } from '../../studentCourse/delete/studentCourse.delete';



@Component({
    selector: 'app-student-studentCourse-detail',
    templateUrl: './student-studentCourse.detail.html',
    styleUrls: [
        './student-studentCourse.detail.scss'
    ],
    imports: [
        CommonModule,
        DetailButton,
        StudentCourseEditUI,
        StudentCourseDeleteUI,

    ]
})
export class Student_StudentCourse_DetailUI extends DetailUI<StudentCourse> {

    constructor(private serviceCollection: StudentServiceCollection = inject(StudentServiceCollection)) {
        super(inject(MasterTrackerService), serviceCollection.CollectionOfStudentCourse);
    }

}
