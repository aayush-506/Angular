import { Component, Input } from '@angular/core';
import { MatModule } from '../../appModules/mat-module';
import { AssignmentBarDashboard } from '../assignment-bar-dashboard/assignment-bar-dashboard';
import { GradeBarDashboard } from '../grade-bar-dashboard/grade-bar-dashboard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-large-card-dashboard',
  imports: [CommonModule,MatModule,AssignmentBarDashboard,GradeBarDashboard],
  templateUrl: './large-card-dashboard.html',
  styleUrl: './large-card-dashboard.scss'
})
export class LargeCardDashboard {
@Input() largeCard! : {
  title : string ;
};
}
