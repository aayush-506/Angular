import { Routes } from '@angular/router';
import { Courses } from './pages/courses/courses';
import { MainDashboard } from './pages/main-dashboard/main-dashboard';
import { Attendence } from './pages/attendence/attendence';
import { Grades } from './pages/grades/grades';
import { Assignments } from './pages/assignments/assignments';


export const routes: Routes = [
{path:"" , component:MainDashboard},
{path:"courses" , component:Courses},
{path:"attendance" , component:Attendence},
{path:"grades" , component:Grades},
{path:"assignments" , component:Assignments}
];
