import {ChangeDetectionStrategy, Component} from '@angular/core';
import { MatModule } from '../../appModules/mat-module';

@Component({
  selector: 'app-small-card-dashboard',
  imports: [MatModule],
  templateUrl: './small-card-dashboard.html',
  styleUrl: './small-card-dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmallCardDashboard {

}
