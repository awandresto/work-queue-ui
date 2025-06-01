import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/services/account.service';
import { AccountGeneral, PerformanceCard, PolicyItem } from '../shared/types/account.types';
import { PerformanceMetricsComponent } from './performance-metrics/performance-metrics.component';
import { DomSanitizer } from '@angular/platform-browser';
import { PoliciesCardsComponent } from './policies-cards/policies-cards.component';
import { PoliciesGridComponent } from './policies-grid/policies-grid.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';

@Component({
  selector: 'app-account',
  imports: [
    PerformanceMetricsComponent,
    PoliciesCardsComponent,
    PoliciesGridComponent,
    AccountSummaryComponent
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
  standalone: true
})
export class AccountComponent implements OnInit {
  public isLoading = false;

  public data: AccountGeneral = {
    companyName: '',
    logo: 'N/A',
    addressLine1: 'N/A',
    addressLine2: '',
    accountNumber: null,
    brokerName: 'N/A',
    underwriterName: 'N/A',
    performance: [],
    policies: []
  };

  constructor(private accountService: AccountService,
              private sanitizer: DomSanitizer) {
  }

  public ngOnInit(): void {
    this.isLoading = true;
    this.accountService.getAccountGeneral().subscribe(result => {
      this.data = result || {};
      if (this.data.performance?.length) {
        this.data.policies.forEach(card => card.icon = this.sanitizer.bypassSecurityTrustHtml(card.svgRaw));
      }
      this.isLoading = false;
    });
  }
}
