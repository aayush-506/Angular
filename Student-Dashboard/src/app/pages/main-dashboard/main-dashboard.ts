import { Component } from '@angular/core';
import { MatModule } from '../../appModules/mat-module';
import { Sidenav } from '../../components/sidenav/sidenav';
import { Navbar } from '../../components/navbar/navbar';
import { SmallCardDashboard } from '../../components/small-card-dashboard/small-card-dashboard';
import { GreetingHeading } from '../../components/greeting-heading/greeting-heading';
import { LargeCardDashboard } from '../../components/large-card-dashboard/large-card-dashboard';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DashboardData } from '../../service/dashboard-data';
import { map, Observable } from 'rxjs';
import { Announcement } from '../../Interfaces/announcement';
import { Assignment } from '../../Interfaces/assignment';
import { Grade } from '../../Interfaces/grade';

@Component({
  selector: 'app-main-dashboard',
  standalone:true,
  imports: [RouterOutlet,CommonModule,MatModule,Sidenav,Navbar,SmallCardDashboard,GreetingHeading,LargeCardDashboard],
  templateUrl: './main-dashboard.html',
  styleUrl: './main-dashboard.scss'
})
export class MainDashboard {

  smallCards = [
    {title:"Current GPA",icon:"school",iconColor:"#00A63E",iconBg:"#F0FDF4"},
    {title:"Pending Assignments",icon:"assignment_turned_in",iconColor:"#F54A00",iconBg:"#FFF7ED"},
    {title:"Current Attendance",icon:"calendar_month",iconColor:"#9810FA",iconBg:"#FAF5FF"},
    {title:"Latest Announcement",icon:"notifications",iconColor:"#155DFC",iconBg:"#EFF6FF"},
  ];
  largeCards = [
    {title : "Upcoming Assignments"},
    {title : "Recent Grades"}
  ]
  gpa! : Observable<number>;
  percentage! : Observable<number>;
  pendingCount!: Observable<number>;
  allAssignment!: Observable<number>;
  latestAnnouncement!: Observable<Announcement | null>;

  assignments! : Observable<Assignment[]>;
  grades! : Observable<Grade[]>;

  constructor(private dashboardDataService : DashboardData){}

  ngOnInit(){
    this.gpa = this.dashboardDataService.getGpa();
    this.percentage = this.dashboardDataService.getCurrentAttendance();
    this.pendingCount = this.dashboardDataService.getAssignmentsData().pipe(
    map(data => data.filter(a => a.studentId === 1 && a.status === "pending").length));
    this.allAssignment = this.dashboardDataService.getAssignmentsData().pipe(map(data => data.filter(a=>a.studentId == 1).length));
    this.latestAnnouncement = this.dashboardDataService.getLatestAnnouncement();

    this.assignments = this.dashboardDataService.getAssignmentsData().pipe(map(data=>data.filter(a=>a.studentId==1 && a.status === "pending")));
    this.grades = this.dashboardDataService.getGradesData().pipe(map(data=>data.filter(a=>a.studentId == 1)));
  }

}
