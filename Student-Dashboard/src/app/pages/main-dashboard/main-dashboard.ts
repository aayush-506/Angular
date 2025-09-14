import { Component } from '@angular/core';
import { MatModule } from '../../appModules/mat-module';
import { Sidenav } from '../../components/sidenav/sidenav';
import { Navbar } from '../../components/navbar/navbar';
import { DashboardData } from '../../service/dashboard-data';
import { SmallCardDashboard } from '../../components/small-card-dashboard/small-card-dashboard';
import { GreetingHeading } from '../../components/greeting-heading/greeting-heading';
import { LargeCardDashboard } from '../../components/large-card-dashboard/large-card-dashboard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-dashboard',
  imports: [CommonModule,MatModule,Sidenav,Navbar,SmallCardDashboard,GreetingHeading,LargeCardDashboard],
  templateUrl: './main-dashboard.html',
  styleUrl: './main-dashboard.scss'
})
export class MainDashboard {

   isOpened = false;
    smallCards = [
    {title:"Current GPA",icon:"school",iconColor:"#00A63E",iconBg:"#F0FDF4"},
    {title:"Credits Completed",icon:"menu_book",iconColor:"#155DFC",iconBg:"#EFF6FF"},
    {title:"Pending Assignments",icon:"assignment_turned_in",iconColor:"#F54A00",iconBg:"#FFF7ED"},
    {title:"Current Attendance",icon:"calendar_month",iconColor:"#9810FA",iconBg:"#FAF5FF"}
   ];
  constructor(private dashboardData : DashboardData){}

   ngOnInit(){
    this.dashboardData.sidenavState.subscribe({
      next : result => {
        this.isOpened = result ;
        console.log("updated value :" ,result);
        
      } 
    })
  }

}
