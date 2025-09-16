import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatModule } from '../../appModules/mat-module';

@Component({
  selector: 'app-assignments',
  imports: [MatModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './assignments.html',
  styleUrl: './assignments.scss'
})
export class Assignments {
 readonly panelOpenState = signal(false);
}
