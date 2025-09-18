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

  gradePoints: Record<string, number> = {
  "A+": 4.0,
  "A": 4.0,
  "A-": 3.7,
  "B+": 3.3,
  "B": 3.0,
  "B-": 2.7,
  "C+": 2.3,
  "C": 2.0,
  "D": 1.0,
  "F": 0.0
};

smallCard =  {title:"Current GPA",icon:"school",iconColor:"#00A63E",iconBg:"#F0FDF4"}
grades! : Observable<Grade[]> ;
currentGPA!: Observable<number>;

constructor(private dashboardDataService : DashboardData){}

ngOnInit(){
  this.dashboardDataService.loadGrades();
  const allGrades = this.dashboardDataService.getGradesData();
    this.grades = allGrades.pipe(
          map(data => data.filter(a => a.studentId === 1))
        );        

    // calculating current CGPA
    this.currentGPA = this.grades.pipe(
      map(grades => {
        const totalPoints = grades.reduce((sum, g) => {
        return sum + (this.gradePoints[g.grade] || 0);
      }, 0);
      return parseFloat((totalPoints / grades.length).toFixed(2));
      })
    )        
  }
}

