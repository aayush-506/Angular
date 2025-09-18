import { Component } from '@angular/core';
import { MatModule } from '../../appModules/mat-module';
import { SmallCardDashboard } from '../../components/small-card-dashboard/small-card-dashboard';
import { DashboardData } from '../../service/dashboard-data';
import { map, Observable } from 'rxjs';
import { Attendance } from '../../Interfaces/attendance';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attendence',
  standalone:true,
  imports: [MatModule,SmallCardDashboard,CommonModule],
  templateUrl: './attendence.html',
  styleUrl: './attendence.scss'
})
export class Attendence {
smallCard =
  {title:"Current Attendance",icon:"calendar_month",iconColor:"#9810FA",iconBg:"#FAF5FF"}
attendance! : Observable<Attendance[]>
attendancePercentage! : Observable<number>

  constructor(private dashboardDataService : DashboardData){}
 ngOnInit() {
  this.dashboardDataService.loadAttendance();
  this.attendance = this.dashboardDataService.getAttendanceData().pipe(
    map(data => data.filter(a => a.studentId == 1))
  );

  this.attendancePercentage = this.dashboardDataService.getCurrentAttendance();
  
}
}
