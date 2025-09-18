import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Announcement } from '../Interfaces/announcement';
import { Assignment } from '../Interfaces/assignment';
import { Grade } from '../Interfaces/grade';
import { Attendance } from '../Interfaces/attendance';
import { Course } from '../Interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class DashboardData {
  
 sidenavState = new BehaviorSubject<boolean>(false);
 announcements = new BehaviorSubject<Announcement[]>([]);
 assignments = new BehaviorSubject<Assignment[]>([]);
 grades = new BehaviorSubject<Grade[]>([]);
 attendance = new BehaviorSubject<Attendance[]>([]);
 course = new BehaviorSubject<Course[]>([]);

constructor(private http : HttpClient){}
announcementUrl = "http://localhost:3000/announcements";
assignmentUrl = "http://localhost:3000/assignments";
gradeUrl= "http://localhost:3000/grades";
attendanceUrl = "http://localhost:3000/attendance";
courseUrl = "http://localhost:3000/courses";


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

// fetching attendance from API and updating behaviorSubject
 loadAttendance(){
    this.http.get<Attendance[]>(this.attendanceUrl).subscribe(data=>{
      this.attendance.next(data);
    })
 }
 // providing the attandance data as read-only Observable
 getAttendanceData(){
  return this.attendance.asObservable();
 }

// fetching course from API and updating behaviorSubject
 loadCourse(){
    this.http.get<Course[]>(this.courseUrl).subscribe(data=>{
      this.course.next(data);
    })
 }
 // providing the course data as read-only Observable
 getCourseData(){
  return this.course.asObservable();
 }
}
