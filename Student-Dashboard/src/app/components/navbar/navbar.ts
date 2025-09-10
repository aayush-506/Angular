import { Component } from '@angular/core';
import { MatModule } from '../../appModules/mat-module';
import { DashboardData } from '../../service/dashboard-data';

@Component({
  selector: 'app-navbar',
  imports: [MatModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  constructor(private dashboardData : DashboardData){}
  isSidenav(){
    this.dashboardData.sidenavToggle();
  }

}
