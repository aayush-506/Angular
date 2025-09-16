import { Component } from '@angular/core';
import { MatModule } from '../../appModules/mat-module';
import { SmallCardDashboard } from '../../components/small-card-dashboard/small-card-dashboard';

@Component({
  selector: 'app-attendence',
  imports: [MatModule,SmallCardDashboard],
  templateUrl: './attendence.html',
  styleUrl: './attendence.scss'
})
export class Attendence {
smallCard =
  {title:"Current Attendance",icon:"calendar_month",iconColor:"#9810FA",iconBg:"#FAF5FF"}

}
