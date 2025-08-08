
import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Observable, of } from "rxjs";

import { DetailUI } from "../../../../../core/ui/baseUI/detailUI";
import { DetailButton } from "../../../../components/buttons/detail-buttons/detail-button";
import { MasterTrackerService } from "../../../../../core/service/uiService/master-tracker-service";

import { Gender } from '../gender';
import { Student } from '../../student/student';
import { StudentService } from '../../student/student.service';
import { GenderServiceCollection } from '../../gender/gender.service.collection';

import { StudentEditUI } from '../../student/edit/student.edit';
import { StudentDeleteUI } from '../../student/delete/student.delete';



@Component({
    selector: 'app-gender-student-detail',
    templateUrl: './gender-student.detail.html',
    styleUrls: [
        './gender-student.detail.scss'
    ],
    imports: [
        CommonModule,
        DetailButton,
        StudentEditUI,        
        StudentDeleteUI,

    ]
}) 
export class Gender_Student_DetailUI extends DetailUI<Gender, Student> {

    protected serviceCollection: GenderServiceCollection;

    constructor() {
        super(inject(MasterTrackerService));
        this.serviceCollection = inject(GenderServiceCollection);
    }

    override onReload() {
        this.list$ = this.serviceCollection.CollectionOfStudent(this.masterId);
    }

}
