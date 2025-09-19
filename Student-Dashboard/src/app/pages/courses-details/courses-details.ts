import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Course } from '../../Interfaces/course';
import { DashboardData } from '../../service/dashboard-data';

@Component({
  selector: 'app-courses-details',
  imports: [CommonModule],
  templateUrl: './courses-details.html',
  styleUrl: './courses-details.scss'
})
export class CoursesDetails {
category! : string ;

  coreSubjects! : Observable<Course[]>;
  practicalSubjects! : Observable<Course[]>;
  projects! : Observable<Course[]>;
  certifications! : Observable<Course[]>;

constructor(private dashboardDataService : DashboardData , private route : ActivatedRoute){}

ngOnInit(){
  const studentID = this.dashboardDataService.getCurrentStudentId();
  // for finding the category
  this.route.paramMap.subscribe(params=>{
    this.category = params.get('category') || '';
    console.log(this.category);
  })

  // for fetching the data from API
   this.dashboardDataService.loadCourse();
    const allSubjects = this.dashboardDataService.getCourseData();
    this.coreSubjects = allSubjects.pipe(map(data=>data.filter(a=>a.type == "core" && a.studentId == studentID)));
    this.practicalSubjects = allSubjects.pipe(map(data=>data.filter(a=>a.type == "practical" && a.studentId == studentID)));
    this.projects = allSubjects.pipe(map(data=>data.filter(a=>a.type == "project" && a.studentId == studentID)));
    this.certifications = allSubjects.pipe(map(data=>data.filter(a=>a.type == "certification" && a.studentId == studentID)));
}
}
