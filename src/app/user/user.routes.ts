import { Routes } from "@angular/router";
import { User } from "./user";

export const USER_ROUTES: Routes = [
  {
    path: '',
    component: User,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./home/home').then(m => m.Home) },
      { path: 'login', loadComponent: () => import('./login-user/login-user').then(m => m.LoginUser) },
    ]
  }
]