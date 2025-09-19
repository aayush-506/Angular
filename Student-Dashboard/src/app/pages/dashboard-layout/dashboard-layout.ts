import { Component } from '@angular/core';
import { DashboardData } from '../../service/dashboard-data';
import { Sidenav } from '../../components/sidenav/sidenav';
import { MatModule } from '../../appModules/mat-module';
import { Navbar } from '../../components/navbar/navbar';
import { CommonModule } from '@angular/common';
import { MainDashboard } from '../main-dashboard/main-dashboard';
import { LoginAdmin } from '../login-admin/login-admin';
import { LoginStudent } from '../login-student/login-student';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  imports: [RouterOutlet,MainDashboard,CommonModule,Navbar,MatModule,Sidenav],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.scss'
})
export class DashboardLayout {
    isOpened = false;

  constructor(private dashboardDataService: DashboardData) {}

  ngOnInit() {
    this.dashboardDataService.sidenavState.subscribe({
      next: (result) => {
        this.isOpened = result;
        console.log("updated value :", result);
      }
    });
  }

}
