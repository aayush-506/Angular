import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Announcement } from '../Interfaces/announcement';

@Injectable({
  providedIn: 'root'
})
export class DashboardData {
  
 sidenavState = new BehaviorSubject<boolean>(false);
 announcements = new BehaviorSubject<Announcement[]>([]);

constructor(private http : HttpClient){}
announcementUrl = "http://localhost:3000/announcements";

sidenavToggle(){
  this.sidenavState.next(!this.sidenavState.value);
}

loadAnnouncements(){
  this.http.get<Announcement[]>(this.announcementUrl).subscribe(data=>{
    this.announcements.next(data);
  })
}

getAnnouncementsData(): Observable<Announcement[]>{
  return this.announcements.asObservable();
}

}
