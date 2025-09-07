import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginStudent } from './pages/login-student/login-student';
import { LoginAdmin } from './pages/login-admin/login-admin';
import { MainDashboard } from './pages/main-dashboard/main-dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginStudent,LoginAdmin,MainDashboard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Student-Dashboard');
}
