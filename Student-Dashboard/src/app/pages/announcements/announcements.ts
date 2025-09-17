import { ChangeDetectorRef, Component } from '@angular/core';
import { DashboardData } from '../../service/dashboard-data';
import { CommonModule } from '@angular/common';
import { Announcement } from '../../Interfaces/announcement';

@Component({
  selector: 'app-announcements',
  imports: [CommonModule],
  templateUrl: './announcements.html',
  styleUrl: './announcements.scss'
})
export class Announcements {

announcements : Announcement[] = [];
constructor(private dashboardDataService : DashboardData , private cdr : ChangeDetectorRef){}

ngOnInit(){
  this.dashboardDataService.loadAnnouncements();
  this.dashboardDataService.getAnnouncementsData().subscribe(data=>{
    this.announcements = data ;
    console.log(this.announcements);
     this.cdr.detectChanges();
  })
}


}
