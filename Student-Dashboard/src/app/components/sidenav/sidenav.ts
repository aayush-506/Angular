import { Component } from '@angular/core';
import { MatModule } from '../../appModules/mat-module';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DashboardData } from '../../service/dashboard-data';
import { map, Observable } from 'rxjs';
import { Student } from '../../Interfaces/student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  imports: [MatModule,RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss'
})
export class Sidenav {

constructor(private dashboardDataService : DashboardData ){}

student! : Observable<Student[]>

ngOnInit(){
 this.student = this.dashboardDataService.getStudentData().pipe(map(data=>data.filter(a=>a.id == 1)));
}

}
