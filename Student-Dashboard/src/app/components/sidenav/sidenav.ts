import { Component } from '@angular/core';
import { MatModule } from '../../appModules/mat-module';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  imports: [MatModule,RouterLink,RouterLinkActive],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss'
})
export class Sidenav {

}
