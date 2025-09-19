import { Component } from '@angular/core';
import { MatModule } from '../../appModules/mat-module';
import { SmallCardDashboard } from '../../components/small-card-dashboard/small-card-dashboard';
import { DashboardData } from '../../service/dashboard-data';
import { map, Observable } from 'rxjs';
import { Grade } from '../../Interfaces/grade';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grades',
  standalone: true,
  imports: [MatModule,SmallCardDashboard,CommonModule],
  templateUrl: './grades.html',
  styleUrl: './grades.scss'
})
export class Grades {

smallCard =  {title:"Current GPA",icon:"school",iconColor:"#00A63E",iconBg:"#F0FDF4"}
grades! : Observable<Grade[]> ;
currentGPA!: Observable<number>;

constructor(private dashboardDataService : DashboardData){}

ngOnInit(){
  const studentID = this.dashboardDataService.getCurrentStudentId();
  this.dashboardDataService.loadGrades();
  this.grades = this.dashboardDataService.getGradesData();
  const allGrades = this.dashboardDataService.getGradesData();
    this.grades = allGrades.pipe(
          map(data => data.filter(a => a.studentId === studentID))
        );        

this.currentGPA = this.dashboardDataService.getGpa();
  
  }
}

