import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Announcement } from '../Interfaces/announcement';
import { Assignment } from '../Interfaces/assignment';

@Injectable({
  providedIn: 'root'
})
export class DashboardData {
  
 sidenavState = new BehaviorSubject<boolean>(false);
 announcements = new BehaviorSubject<Announcement[]>([]);
 assignments = new BehaviorSubject<Assignment[]>([]);

constructor(private http : HttpClient){}
announcementUrl = "http://localhost:3000/announcements";
assignmentUrl = "http://localhost:3000/assignments";

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
}
