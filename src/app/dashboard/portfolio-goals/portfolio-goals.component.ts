import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { MeterGroupModule } from 'primeng/metergroup';
import { ProgressBar } from 'primeng/progressbar';
import { GoalBarComponent } from '../../shared/components/goal-bar/goal-bar.component';
import { TargetBarComponent } from '../../shared/components/target-bar/target-bar.component';

@Component({
  selector: 'app-portfolio-goals',
  imports: [
    Card,
    MeterGroupModule,
    GoalBarComponent,
    TargetBarComponent
  ],
  templateUrl: './portfolio-goals.component.html',
  styleUrl: './portfolio-goals.component.scss',
  standalone: true
})
export class PortfolioGoalsComponent {
}
