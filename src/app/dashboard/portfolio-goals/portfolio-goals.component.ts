import { Component, OnInit } from '@angular/core';
import { Card } from 'primeng/card';
import { MeterGroupModule } from 'primeng/metergroup';
import { GoalBarComponent } from '../../shared/components/goal-bar/goal-bar.component';
import { TargetBarComponent } from '../../shared/components/target-bar/target-bar.component';
import { PortfolioGoalsService } from '../../shared/services/portfolio-goals.service';
import { GoalBarData, TargetBarData } from '../../shared/types/bar.types';
import { ProgressSpinner } from 'primeng/progressspinner';

@Component({
  selector: 'app-portfolio-goals',
  imports: [
    Card,
    MeterGroupModule,
    GoalBarComponent,
    TargetBarComponent,
    ProgressSpinner
  ],
  templateUrl: './portfolio-goals.component.html',
  styleUrl: './portfolio-goals.component.scss',
  standalone: true
})
export class PortfolioGoalsComponent implements OnInit {
  public isLoading = false;
  public goalBarDataList: GoalBarData[] = [];
  public targetBarDataList: TargetBarData[] = [];

  constructor(private portfolioGoalsService: PortfolioGoalsService) {
  }

  public ngOnInit(): void {
    this.isLoading = true;
    this.portfolioGoalsService.getPortfolioGoals().subscribe(result => {
      this.goalBarDataList = result.goals || [];
      this.targetBarDataList = result.target || [];
      this.isLoading = false;
    });
  }
}
