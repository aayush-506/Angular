import { Component } from '@angular/core';
import { MatModule } from '../../appModules/mat-module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notification-icon',
  imports: [MatModule,RouterLink],
  templateUrl: './notification-icon.html',
  styleUrl: './notification-icon.scss'
})
export class NotificationIcon {
hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
