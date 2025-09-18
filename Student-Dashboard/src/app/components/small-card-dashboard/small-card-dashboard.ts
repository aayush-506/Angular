import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { MatModule } from '../../appModules/mat-module';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Announcement } from '../../Interfaces/announcement';

@Component({
  selector: 'app-small-card-dashboard',
  standalone: true,
  imports: [MatModule,CommonModule],
  templateUrl: './small-card-dashboard.html',
  styleUrl: './small-card-dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmallCardDashboard {
@Input() smallCard!: {       
    title: string;
    icon: string;
    iconColor: string;
    iconBg: string;
  };
@Input() gpa: Observable<number> | undefined;
@Input() percentage: Observable<number> | undefined;
@Input() pendingCount: Observable<number> | undefined;
@Input() allAssignment: Observable<number> | undefined;
@Input() latestAnnouncement?: Observable<Announcement | null>;

}
