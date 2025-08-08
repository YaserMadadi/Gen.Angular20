import { Routes } from '@angular/router';

export const coreRoutes: Routes = [
    {
        path: '',
        data: {
            title: 'Core'
        },
        children: [
            // {
            //     path: '',
            //     redirectTo: 'menu',
            //     pathMatch: 'full'
            // },
            {
                path: 'staff',
                loadComponent: () => import('./staff/index/staff.index').then(m => m.StaffIndex),
                data: {
                    title: 'Staff Management'
                }
            },
            {
                path: 'staff/',
                loadComponent: () => import('./staff/master/staff.master').then(m => m.StaffMaster),
                data: {
                    title: 'Staff Detail'
                }
            }
        ]
    }];