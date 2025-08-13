import { Injectable } from "@angular/core";
import { ServiceBuilder } from "../../../../core/service/service.builder";
import { IServiceBuilder } from "../../../../core/service/service.builder.interface";
import { Student } from "./student";

@Injectable({ providedIn: 'root' })
export class Student_Builder extends ServiceBuilder<Student> implements IServiceBuilder<Student> {

    constructor() {
        super();
    }

    override CreateInstance(): Student {
        return new Student();
    }

    override CreateSeekInstance(): Student {
        let student = new Student();

        student.gender = undefined;

        return student;
    }
}