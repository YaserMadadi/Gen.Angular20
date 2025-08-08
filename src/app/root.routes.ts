import { Routes } from '@angular/router';
import { Page404Component } from './views/pages/page404/page404.component';


export const routes: Routes = [
    {
        path: '404',
        loadComponent: () => import('./views/pages/page404/page404.component').then(m => m.Page404Component),
        data: {
            title: 'Page 404'
        }
    },
    {
        path: '500',
        loadComponent: () => import('./views/pages/page500/page500.component').then(m => m.Page500Component),
        data: {
            title: 'Page 500'
        }
    },
    {
        path: 'login',
        loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent),
        data: {
            title: 'Login Page'
        }
    },
    {
        path: '',
        loadComponent: () => import('./layout').then(m => m.DefaultLayoutComponent),
        //canActivate: [AuthGuard],
        data: {
            title: 'Home'
        },
        children: [
            { path: 'app', loadChildren: () => import('./entities/app/app.routes').then(x => x.app_routes) }
        ]
    },
    {
        path: '**',
        component: Page404Component
    }
];
