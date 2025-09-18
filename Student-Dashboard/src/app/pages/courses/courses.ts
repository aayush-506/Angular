import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';
import { DashboardData } from '../../service/dashboard-data';
import { map, Observable } from 'rxjs';
import { Student } from '../../Interfaces/student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  imports: [RouterLink,CommonModule],
  templateUrl: './courses.html',
  styleUrl: './courses.scss'
})
export class Courses {

  student! : Observable<Student[]>

  constructor(private dashboardDataService : DashboardData){}

 ngOnInit(){ 
 
  this.dashboardDataService.loadStudent();
  this.student = this.dashboardDataService.getStudentData().pipe(map(data=>data.filter(a=>a.id == 1)));

 }

}
