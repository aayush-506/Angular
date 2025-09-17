import { Component } from '@angular/core';
import { MatModule } from '../../appModules/mat-module';
import { RouterLink } from '@angular/router';
import { DashboardData } from '../../service/dashboard-data';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-notification-icon',
  imports: [AsyncPipe,MatModule,RouterLink],
  templateUrl: './notification-icon.html',
  styleUrl: './notification-icon.scss'
})
export class NotificationIcon {
hidden = false;
announcementsCount! : Observable<number>;
constructor(private dashboardDataService : DashboardData){}

ngOnInit(){
  this.announcementsCount = this.dashboardDataService.getAnnouncementsData().pipe(map(data=>data.length));
    
}


  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

}
