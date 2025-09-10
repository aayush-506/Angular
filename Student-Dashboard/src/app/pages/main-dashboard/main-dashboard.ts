import { Component } from '@angular/core';
import { MatModule } from '../../appModules/mat-module';
import { Sidenav } from '../../components/sidenav/sidenav';
import { Navbar } from '../../components/navbar/navbar';
import { DashboardData } from '../../service/dashboard-data';

@Component({
  selector: 'app-main-dashboard',
  imports: [MatModule,Sidenav,Navbar],
  templateUrl: './main-dashboard.html',
  styleUrl: './main-dashboard.scss'
})
export class MainDashboard {

   isOpened = false;
  constructor(private dashboardData : DashboardData){}

  ngOnInit(){
    this.dashboardData.sidenavState.subscribe({
      next : result => this.isOpened = result 
    })
  }

}
