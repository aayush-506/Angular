import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginStudent } from './pages/login-student/login-student';
import { LoginAdmin } from './pages/login-admin/login-admin';
import { MainDashboard } from './pages/main-dashboard/main-dashboard';
import { DashboardData } from './service/dashboard-data';
import { CommonModule } from '@angular/common';
import { Navbar } from './components/navbar/navbar';
import { MatModule } from './appModules/mat-module';
import { Sidenav } from './components/sidenav/sidenav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginStudent,LoginAdmin,MainDashboard,CommonModule,Navbar,MatModule,Sidenav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Student-Dashboard');
    isOpened = false;

  constructor(private dashboardDataService: DashboardData) {}

  ngOnInit() {
    this.dashboardDataService.loadAnnouncements();
    this.dashboardDataService.sidenavState.subscribe({
      next: (result) => {
        this.isOpened = result;
        console.log("updated value :", result);
      }
    });
  }
}
