import { Routes } from "@angular/router";
import { Admin } from "./admin";

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: Admin,
    children: [
      { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
      { path: 'login', loadComponent: () => import('./login-admin/login-admin').then(m => m.LoginAdmin) },
      { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard) },
      {
        path: 'routes',
        loadComponent: () => import('./routes/routes').then(m => m.Routes),
        loadChildren: () => [
          {
            path: '',
            redirectTo: '/admin/routes/list',
            pathMatch: 'full',
          },
          { path: 'list', loadComponent: () => import('./routes/route-list/route-list').then(m => m.RouteList) },
          { path: 'create', loadComponent: () => import('./routes/route-create/route-create').then(m => m.RouteCreate) },
          { path: 'edit/:id', loadComponent: () => import('./routes/route-edit/route-edit').then(m => m.RouteEdit) },
          { path: 'details/:id', loadComponent: () => import('./routes/route-details/route-details').then(m => m.RouteDetails) },
        ],
      }
    ]
  }
]