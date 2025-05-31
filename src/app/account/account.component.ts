import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/services/account.service';
import { PerformanceCard, PolicyCard } from '../shared/types/account.types';
import { PerformanceMetricsComponent } from './performance-metrics/performance-metrics.component';
import { PoliciesComponent } from './policies/policies.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-account',
  imports: [
    PerformanceMetricsComponent,
    PoliciesComponent
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
  standalone: true
})
export class AccountComponent implements OnInit {
  public isLoading = false;

  public performanceCards: PerformanceCard[] = [];
  public policyCards: PolicyCard[] = [];

  constructor(private accountService: AccountService,
              private sanitizer: DomSanitizer) {
  }

  public ngOnInit(): void {
    this.isLoading = true;
    this.accountService.getAccountGeneral().subscribe(result => {
      this.performanceCards = result.performance || [];
      this.policyCards = result.policies || [];

      this.policyCards.forEach(card => card.icon = this.sanitizer.bypassSecurityTrustHtml(card.svgRaw));

      this.isLoading = false;
    });
  }
}
