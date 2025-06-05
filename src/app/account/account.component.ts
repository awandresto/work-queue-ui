import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/services/account.service';
import { AccountGeneral, PerformanceCard, PolicyItem } from '../shared/types/account.types';
import { PerformanceMetricsComponent } from './performance-metrics/performance-metrics.component';
import { DomSanitizer } from '@angular/platform-browser';
import { PoliciesCardsComponent } from './policies-cards/policies-cards.component';
import { PoliciesGridComponent } from './policies-grid/policies-grid.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { BreadcrumbsService } from '../shared/services/breadcrumbs.service';
import { AccountStatusComponent } from './account-status/account-status.component';
import { ComplianceComponent } from './compliance/compliance.component';

@Component({
  selector: 'app-account',
  imports: [
    PerformanceMetricsComponent,
    PoliciesCardsComponent,
    PoliciesGridComponent,
    AccountSummaryComponent,
    AccountStatusComponent,
    ComplianceComponent
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
    accountStatus: [],
    attentions: [],
    policies: [],
    compliance: []
  };

  constructor(private accountService: AccountService,
              private sanitizer: DomSanitizer,
              private breadcrumbsService: BreadcrumbsService) {
  this.breadcrumbsService.toShowBreadcrumbs = true;
}

  public ngOnInit(): void {
    this.isLoading = true;
    this.accountService.getAccountGeneral().subscribe(result => {
      this.data = result || {};
      if (this.data.performance?.length) {
        this.data.policies.forEach(card => card.icon = this.sanitizer.bypassSecurityTrustHtml(card.svgRaw));
      }
      if (this.data.compliance?.length) {
        this.data.compliance.forEach(item => {
          item.icon = this.sanitizer.bypassSecurityTrustHtml(item.svgRaw);
        });
      }
      this.isLoading = false;
    });
  }
}
