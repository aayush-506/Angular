import { Component, Input } from '@angular/core';
import { MatModule } from '../../appModules/mat-module';
import { Observable } from 'rxjs';
import { Assignment } from '../../Interfaces/assignment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignment-bar-dashboard',
  imports: [MatModule,CommonModule],
  templateUrl: './assignment-bar-dashboard.html',
  styleUrl: './assignment-bar-dashboard.scss'
})
export class AssignmentBarDashboard {
@Input() assignment! : Assignment;
today: Date = new Date();
//finding remaining days
getRemainingDays(dueDate: string | Date): number {
    const due = new Date(dueDate).getTime(); // due date in ms
    const now = new Date().getTime();        // current date in ms

    const diff = due - now;                  // difference in ms
    const remainingDays = Math.ceil(diff / (1000 * 60 * 60 * 24)); // convert to days

    return remainingDays > 0 ? remainingDays : 0; // return 0 if past due
  }

}
