import { Component, Input } from '@angular/core';
import { MatModule } from '../../appModules/mat-module';
import { AssignmentBarDashboard } from '../assignment-bar-dashboard/assignment-bar-dashboard';
import { GradeBarDashboard } from '../grade-bar-dashboard/grade-bar-dashboard';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Assignment } from '../../Interfaces/assignment';
import { Observable } from 'rxjs';
import { Grade } from '../../Interfaces/grade';

@Component({
  selector: 'app-large-card-dashboard',
  imports: [RouterLink,CommonModule,MatModule,AssignmentBarDashboard,GradeBarDashboard],
  templateUrl: './large-card-dashboard.html',
  styleUrl: './large-card-dashboard.scss'
})
export class LargeCardDashboard {
@Input() largeCard! : {
  title : string ;
};
@Input() assignments! : Observable<Assignment[]>;
@Input() grades! : Observable<Grade[]>;
}
