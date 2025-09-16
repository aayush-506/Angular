import { Component } from '@angular/core';
import { MatModule } from '../../appModules/mat-module';
import { SmallCardDashboard } from '../../components/small-card-dashboard/small-card-dashboard';

@Component({
  selector: 'app-grades',
  imports: [MatModule,SmallCardDashboard],
  templateUrl: './grades.html',
  styleUrl: './grades.scss'
})
export class Grades {
smallCard =  {title:"Current GPA",icon:"school",iconColor:"#00A63E",iconBg:"#F0FDF4"}
}
