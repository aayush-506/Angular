import { ChangeDetectorRef, Component } from '@angular/core';
import { DashboardData } from '../../service/dashboard-data';
import { CommonModule } from '@angular/common';
import { Announcement } from '../../Interfaces/announcement';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-announcements',
  imports: [CommonModule],
  templateUrl: './announcements.html',
  styleUrl: './announcements.scss'
})
export class Announcements {

announcements : Announcement[] = [];
constructor(private dashboardDataService : DashboardData , private cdr : ChangeDetectorRef , private snackBar: MatSnackBar){}

ngOnInit(){
  this.dashboardDataService.loadAnnouncements();
  this.dashboardDataService.getAnnouncementsData().subscribe(data=>{
    this.announcements = data ;
    console.log(this.announcements);
     this.cdr.detectChanges();
  })
}

// snackbar
download() {
    const fileAvailable = false;
    if (!fileAvailable) {
      this.snackBar.open('No file available for download.', 'Close', {
        duration: 3000,        
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: ['bg-red-600', 'text-white'] 
      });
    } else {
      // your normal download logic here
    }
  }


}
