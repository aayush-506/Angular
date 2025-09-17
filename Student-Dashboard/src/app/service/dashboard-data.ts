import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardData {
  
 sidenavState = new BehaviorSubject<boolean>(false);

constructor(private http : HttpClient){}
announcementUrl = "http://localhost:3000/announcements";

sidenavToggle(){
  this.sidenavState.next(!this.sidenavState.value);
}

getAnnouncementsData(){
  return this.http.get(this.announcementUrl);
}

}
