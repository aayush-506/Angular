import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DashboardData } from '../../service/dashboard-data';
import { map, Observable } from 'rxjs';
import { Student } from '../../Interfaces/student';

@Component({
  selector: 'app-greeting-heading',
  imports: [CommonModule],
  templateUrl: './greeting-heading.html',
  styleUrl: './greeting-heading.scss'
})
export class GreetingHeading {
  today : Date = new Date ();

  constructor(private dashboardDataService : DashboardData){}

  student! : Observable<Student[]>

  ngOnInit(){
   this.student = this.dashboardDataService.getStudentData().pipe(map(data=>data.filter(a=>a.id == 1)));
  }
}
