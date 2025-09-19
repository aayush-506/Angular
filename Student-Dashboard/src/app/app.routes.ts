import { Routes } from '@angular/router';
import { Courses } from './pages/courses/courses';
import { MainDashboard } from './pages/main-dashboard/main-dashboard';
import { Attendence } from './pages/attendence/attendence';
import { Grades } from './pages/grades/grades';
import { Assignments } from './pages/assignments/assignments';
import { Announcements } from './pages/announcements/announcements';
import { CoursesDetails } from './pages/courses-details/courses-details';
import { LoginStudent } from './pages/login-student/login-student';
import { DashboardLayout } from './pages/dashboard-layout/dashboard-layout';
import { AuthGuard } from './service/auth-guard';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // default to login
  { path: 'login', component: LoginStudent },

  {
    path: 'dashboard',
    component: DashboardLayout, // wrapper with sidenav + navbar
    canActivate: [AuthGuard],
    canActivateChild :[AuthGuard],
    children: [
      { path: '', component: MainDashboard }, // default page inside dashboard
      { path: 'courses', component: Courses },
      { path: 'attendance', component: Attendence },
      { path: 'grades', component: Grades },
      { path: 'assignments', component: Assignments },
      { path: 'announcements', component: Announcements },
      { path: 'courses/:category', component: CoursesDetails }
    ]
  },

//   { path: '**', redirectTo: 'login' } // fallback
];
