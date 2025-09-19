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

today : Date = new Date();
diffInDays : string = "";

getRemaining(dueDate: string){
  const input = dueDate; 
  const [day, month, year] = input.split("/");

  const formattedDueDate = `${year}-${month}-${day}`;

  const date1 = new Date(formattedDueDate);
  const date2 = new Date(this.today)
 
  const diffInMs = date1.getTime() - date2.getTime();
  this.diffInDays = (diffInMs / (1000 * 60 * 60 * 24)).toFixed(0); 
}

}
