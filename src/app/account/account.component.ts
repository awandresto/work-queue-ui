import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/services/account.service';
import { PerformanceCard, PolicyItem } from '../shared/types/account.types';
import { PerformanceMetricsComponent } from './performance-metrics/performance-metrics.component';
import { DomSanitizer } from '@angular/platform-browser';
import { PoliciesCardsComponent } from './policies-cards/policies-cards.component';
import { PoliciesGridComponent } from './policies-grid/policies-grid.component';

@Component({
  selector: 'app-account',
  imports: [
    PerformanceMetricsComponent,
    PoliciesCardsComponent,
    PoliciesGridComponent
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
  standalone: true
})
export class AccountComponent implements OnInit {
  public isLoading = false;

  public performanceCards: PerformanceCard[] = [];
  public policiesList: PolicyItem[] = [];

  constructor(private accountService: AccountService,
              private sanitizer: DomSanitizer) {
  }

  public ngOnInit(): void {
    this.isLoading = true;
    this.accountService.getAccountGeneral().subscribe(result => {
      this.performanceCards = result.performance || [];
      this.policiesList = result.policies || [];

      this.policiesList.forEach(card => card.icon = this.sanitizer.bypassSecurityTrustHtml(card.svgRaw));

      this.isLoading = false;
    });
  }
}
