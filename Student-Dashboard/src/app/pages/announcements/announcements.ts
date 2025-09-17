import { ChangeDetectorRef, Component } from '@angular/core';
import { DashboardData } from '../../service/dashboard-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-announcements',
  imports: [CommonModule],
  templateUrl: './announcements.html',
  styleUrl: './announcements.scss'
})
export class Announcements {

announcements : any[] = [];
constructor(private dashboardData : DashboardData , private cdr : ChangeDetectorRef){}

ngOnInit(){
  this.getAnnouncements();
}

getAnnouncements(){
  this.dashboardData.getAnnouncementsData().subscribe((data:any)=>{
    this.announcements = data ;
    console.log(this.announcements);
    this.cdr.detectChanges();
  })
}

}
