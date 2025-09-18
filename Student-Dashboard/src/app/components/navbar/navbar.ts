import { Component } from '@angular/core';
import { MatModule } from '../../appModules/mat-module';
import { DashboardData } from '../../service/dashboard-data';
import { Searchbar } from '../searchbar/searchbar';
import { NotificationIcon } from '../notification-icon/notification-icon';
import { map, Observable } from 'rxjs';
import { Student } from '../../Interfaces/student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [MatModule,Searchbar,NotificationIcon,CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  showProfile = true;

  constructor(private dashboardDataService : DashboardData){}

  student! : Observable<Student[]>

  isSidenav(){
    this.dashboardDataService.sidenavToggle();
  }
  ngOnInit(){
    this.dashboardDataService.sidenavState.subscribe({
      next : result => this.showProfile = result 
    })
     this.student = this.dashboardDataService.getStudentData().pipe(map(data=>data.filter(a=>a.id == 1)));
  }

}
