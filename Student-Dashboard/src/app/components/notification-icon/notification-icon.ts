import { Component } from '@angular/core';
import { MatModule } from '../../appModules/mat-module';

@Component({
  selector: 'app-notification-icon',
  imports: [MatModule],
  templateUrl: './notification-icon.html',
  styleUrl: './notification-icon.scss'
})
export class NotificationIcon {
hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
