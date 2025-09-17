import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatModule } from '../../appModules/mat-module';
import { DashboardData } from '../../service/dashboard-data';
import { Assignment } from '../../Interfaces/assignment';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignments',
  imports: [MatModule,CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './assignments.html',
  styleUrl: './assignments.scss'
})
export class Assignments {
 readonly panelOpenState = signal(false);

   pendingAssignments!: Observable<Assignment[]>;
   overdueAssignments!: Observable<Assignment[]>;
   submittedAssignments!: Observable<Assignment[]>;

  pendingCount!: Observable<number>;
  overdueCount!: Observable<number>;
  submittedCount!: Observable<number>;
 constructor(private dashboardDataService : DashboardData){}

 ngOnInit(){
  this.dashboardDataService.loadAssignments();

  const allAssignments = this.dashboardDataService.getAssignmentsData();
  
    this.pendingAssignments = allAssignments.pipe(
      map(data => data.filter(a => a.studentId === 1 && a.status === 'pending'))
    );
    this.overdueAssignments = allAssignments.pipe(
      map(data => data.filter(a => a.studentId === 1 && a.status === 'overdue'))
    );
    this.submittedAssignments = allAssignments.pipe(
      map(data => data.filter(a => a.studentId === 1 && a.status === 'submitted'))
    );


    this.pendingCount = this.pendingAssignments.pipe(map(list => list.length));
    this.overdueCount = this.overdueAssignments.pipe(map(list => list.length));
    this.submittedCount = this.submittedAssignments.pipe(map(list => list.length));
  
 }

}
