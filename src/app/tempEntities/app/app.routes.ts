
import { Routes } from '@angular/router';



export const appRoutes: Routes = [

  {
    path: 'menu',
    redirectTo: 'menu/0'
  },
  {
    path: 'menu/:id',
    loadComponent: () => import('./menu/index/menu.index').then(m => m.MenuIndex),
    pathMatch: 'full',
    //canActivate: [AuthGuard], 
    data: { title: 'Menu' }
  },
  // {
  //   path: 'Message',
  //   redirectTo: 'Message/0'
  // },
  // {
  //   path: 'Message/:id',
  //   loadComponent: () => import('./message/index/message.index').then(m => m.MessageIndex),
  //   pathMatch: 'full',
  //   //canActivate: [AuthGuard], 
  //   data: { title: 'Message' }
  // },
  // {
  //   path: 'MessageType',
  //   redirectTo: 'MessageType/0'
  // },
  // {
  //   path: 'MessageType/:id',
  //   loadComponent: () => import('./messageType/index/messageType.index').then(m => m.MessageTypeIndex),
  //   pathMatch: 'full',
  //   //canActivate: [AuthGuard], 
  //   data: { title: 'MessageType' }
  // },
];

//   ****    should be added into root.routes.ts
//  { path: 'App', loadChildren: () => import('./Entities/App/app.routes').then(x => x.app_routes) }

