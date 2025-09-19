import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashboardData } from '../../service/dashboard-data';
import { Student } from '../../Interfaces/student';
import { CommonModule } from '@angular/common';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  imports: [RouterLink, CommonModule],
  templateUrl: './courses.html',
  styleUrl: './courses.scss'
})
export class Courses {

  student$!: Observable<Student | undefined>;

  constructor(private dashboardDataService: DashboardData) {}

ngOnInit() { 
  const studentID = this.dashboardDataService.getCurrentStudentId();

  if (studentID !== null) {
    this.student$ = this.dashboardDataService.getStudentData().pipe(
      filter(data => data.length > 0),
      map(data => data.find(s => s.id == studentID))
    );

    // Subscribe to check the value
    this.student$.subscribe(student => {
      console.log('Fetched student:', student);
    });
  }
}

}
