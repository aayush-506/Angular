import { Component } from '@angular/core';
import { MatModule } from '../../appModules/mat-module';
import { DashboardData } from '../../service/dashboard-data';
import { Searchbar } from '../searchbar/searchbar';
import { NotificationIcon } from '../notification-icon/notification-icon';

@Component({
  selector: 'app-navbar',
  imports: [MatModule,Searchbar,NotificationIcon],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  showProfile = true;

  constructor(private dashboardData : DashboardData){}
  isSidenav(){
    this.dashboardData.sidenavToggle();
  }
  ngOnInit(){
    this.dashboardData.sidenavState.subscribe({
      next : result => this.showProfile = result 
    })
  }

}
