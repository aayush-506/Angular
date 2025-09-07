import { Component } from '@angular/core';
import { MatModule } from '../../appModules/mat-module';
import { Sidenav } from '../../components/sidenav/sidenav';

@Component({
  selector: 'app-main-dashboard',
  imports: [MatModule,Sidenav],
  templateUrl: './main-dashboard.html',
  styleUrl: './main-dashboard.scss'
})
export class MainDashboard {

}
