import { Component } from '@angular/core';
import { MyAccountsComponent } from './my-accounts/my-accounts.component';
import { WorkQueueComponent } from './work-queue/work-queue.component';
import { QuickActionsComponent } from './quick-actions/quick-actions.component';
import { MarketIntelligenceComponent } from './market-intelligence/market-intelligence.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    MyAccountsComponent,
    WorkQueueComponent,
    QuickActionsComponent,
    MarketIntelligenceComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
