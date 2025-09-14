import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { MatModule } from '../../appModules/mat-module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-small-card-dashboard',
  imports: [MatModule,CommonModule],
  templateUrl: './small-card-dashboard.html',
  styleUrl: './small-card-dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmallCardDashboard {
@Input() card!: {       
    title: string;
    icon: string;
    iconColor: string;
    iconBg: string;
  };
}
