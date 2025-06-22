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
    ]
  }
]