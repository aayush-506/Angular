import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Announcement } from '../Interfaces/announcement';
import { Assignment } from '../Interfaces/assignment';
import { Grade } from '../Interfaces/grade';

@Injectable({
  providedIn: 'root'
})
export class DashboardData {
  
 sidenavState = new BehaviorSubject<boolean>(false);
 announcements = new BehaviorSubject<Announcement[]>([]);
 assignments = new BehaviorSubject<Assignment[]>([]);
 grades = new BehaviorSubject<Grade[]>([]);

constructor(private http : HttpClient){}
announcementUrl = "http://localhost:3000/announcements";
assignmentUrl = "http://localhost:3000/assignments";
gradeUrl= "http://localhost:3000/grades";

// for toggling sidenav current status
sidenavToggle(){
  this.sidenavState.next(!this.sidenavState.value);
}

// fetching announcement from API and updating behaviorSubject
loadAnnouncements(){
  this.http.get<Announcement[]>(this.announcementUrl).subscribe(data=>{
    this.announcements.next(data);
  })
}
// providing the announcement data as read-only Observable
getAnnouncementsData(): Observable<Announcement[]>{
  return this.announcements.asObservable();
}

// fetching assignments from API and updating behaviorSubject
 loadAssignments(){
    this.http.get<Assignment[]>(this.assignmentUrl).subscribe(data=>{
      this.assignments.next(data);
    })
 }
 // providing the announcement data as read-only Observable
 getAssignmentsData(){
  return this.assignments.asObservable();
 }

// fetching grades from API and updating behaviorSubject
 loadGrades(){
    this.http.get<Grade[]>(this.gradeUrl).subscribe(data=>{
      this.grades.next(data);
    })
 }
 // providing the grades data as read-only Observable
 getGradesData(){
  return this.grades.asObservable();
 }
}
