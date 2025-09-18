import { Component, Input } from '@angular/core';
import { MatModule } from '../../appModules/mat-module';
import { Grade } from '../../Interfaces/grade';

@Component({
  selector: 'app-grade-bar-dashboard',
  standalone: true, 
  imports: [MatModule],
  templateUrl: './grade-bar-dashboard.html',
  styleUrl: './grade-bar-dashboard.scss'
})
export class GradeBarDashboard {
@Input() grade! : Grade;
}
