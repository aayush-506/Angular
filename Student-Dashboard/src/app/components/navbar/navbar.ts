import { Component } from '@angular/core';
import { MatModule } from '../../appModules/mat-module';
import { DashboardData } from '../../service/dashboard-data';
import { Searchbar } from '../searchbar/searchbar';

@Component({
  selector: 'app-navbar',
  imports: [MatModule,Searchbar],
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
