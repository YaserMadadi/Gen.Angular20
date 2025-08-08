

import { Routes } from '@angular/router';

import { AuthGuard } from '../../../core/security/auth.gaurd';


export const app_routes: Routes = [

    {
        path: 'course/:id',
        loadComponent: () => import('./course/master/course.master').then(m => m.CourseMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Course' }
    },
    {
        path: 'course',
        loadComponent: () => import('./course/index/course.index').then(m => m.CourseIndexUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Course' }
    },
    {
        path: 'gender/:id',
        loadComponent: () => import('./gender/master/gender.master').then(m => m.GenderMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    {
        path: 'gender',
        loadComponent: () => import('./gender/index/gender.index').then(m => m.GenderIndexUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Gender' }
    },
    {
        path: 'student/:id',
        loadComponent: () => import('./student/master/student.master').then(m => m.StudentMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    {
        path: 'student',
        loadComponent: () => import('./student/index/student.index').then(m => m.StudentIndexUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Student' }
    },
    // {
    //     path: 'studentCourse/:id',
    //     loadComponent: () => import('./studentCourse/master/studentCourse.master').then(m => m.StudentCourseMasterUI),
    //     pathMatch: 'full',
    //     //canActivate: [AuthGuard], 
    //     data: { title: 'Menu' }
    // },
    // { 
    //     path: 'studentCourse', 
    //     loadComponent: () => import('./studentCourse/index/studentCourse.index').then(m => m.StudentCourseIndexUI),
    //     pathMatch: 'full',
    //     //canActivate: [AuthGuard], 
    //     data: { title: 'StudentCourse' }  
    // },
];

//   ****    should be added into root.routes.ts
//  { path: 'App', loadChildren: () => import('./entities/app/app.routes').then(x => x.app_routes) }