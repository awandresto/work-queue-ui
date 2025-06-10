import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/services/account.service';
import { AccountGeneral, MessageCard, PerformanceCard, PolicyItem } from '../shared/types/account.types';
import { PerformanceMetricsComponent } from './performance-metrics/performance-metrics.component';
import { DomSanitizer } from '@angular/platform-browser';
import { PoliciesCardsComponent } from './policies-cards/policies-cards.component';
import { PoliciesGridComponent } from './policies-grid/policies-grid.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { BreadcrumbsService } from '../shared/services/breadcrumbs.service';
import { AccountStatusComponent } from './account-status/account-status.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { CommunicationComponent } from './communication/communication.component';
import { BehaviorSubject, forkJoin, Subject } from 'rxjs';
import { MessagesService } from '../shared/services/messages.service';
import { AccountDetailsComponent } from './account-details/account-details.component';

@Component({
  selector: 'app-account',
  imports: [
    PerformanceMetricsComponent,
    PoliciesCardsComponent,
    PoliciesGridComponent,
    AccountSummaryComponent,
    AccountStatusComponent,
    ComplianceComponent,
    CommunicationComponent,
    AccountDetailsComponent
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
  standalone: true
})
export class AccountComponent implements OnInit {
  public isLoading = false;

  public accountData: AccountGeneral = {
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
  public accountMessages$: BehaviorSubject<MessageCard[]> = new BehaviorSubject<MessageCard[]>([]);

  constructor(private accountService: AccountService,
              private breadcrumbsService: BreadcrumbsService,
              private messagesService: MessagesService,
              private sanitizer: DomSanitizer) {
  this.breadcrumbsService.toShowBreadcrumbs = true;
}

  public ngOnInit(): void {
    this.isLoading = true;
    forkJoin([
      this.accountService.getAccountGeneral(),
      this.messagesService.getMessages()
    ]).subscribe(([accountData, accountMessages]) => {
      this.accountData = accountData || {};
      if (this.accountData.performance?.length) {
        this.accountData.policies.forEach(card => card.icon = this.sanitizer.bypassSecurityTrustHtml(card.svgRaw));
      }
      if (this.accountData.compliance?.length) {
        this.accountData.compliance.forEach(item => {
          item.icon = this.sanitizer.bypassSecurityTrustHtml(item.svgRaw);
        });
      }
      this.accountMessages$.next(accountMessages || []);
      this.isLoading = false;
    });
  }
}
