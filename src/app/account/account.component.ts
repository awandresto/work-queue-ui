import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/services/account.service';
import { PerformanceCard } from '../shared/types/account.types';
import { PerformanceMetricsComponent } from './performance-metrics/performance-metrics.component';

@Component({
  selector: 'app-account',
  imports: [
    PerformanceMetricsComponent
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
  standalone: true
})
export class AccountComponent implements OnInit {
  public isLoading = false;

  public performanceCards: PerformanceCard[] = [];

  constructor(private accountService: AccountService) {
  }

  public ngOnInit(): void {
    this.isLoading = true;
    this.accountService.getAccountGeneral().subscribe(result => {
      this.performanceCards = result.performance || [];
      this.isLoading = false;
    });
  }
}
