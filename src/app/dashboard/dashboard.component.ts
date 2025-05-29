import { Component } from '@angular/core';
import { MyAccountsComponent } from './my-accounts/my-accounts.component';
import { WorkQueueComponent } from './work-queue/work-queue.component';
import { QuickActionsComponent } from './quick-actions/quick-actions.component';
import { MarketIntelligenceComponent } from './market-intelligence/market-intelligence.component';
import { PortfolioGoalsComponent } from './portfolio-goals/portfolio-goals.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    MyAccountsComponent,
    WorkQueueComponent,
    QuickActionsComponent,
    MarketIntelligenceComponent,
    PortfolioGoalsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true
})
export class DashboardComponent {

}
