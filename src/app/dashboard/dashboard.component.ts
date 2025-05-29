import { Component } from '@angular/core';
import { MyAccountsComponent } from './my-accounts/my-accounts.component';
import { WorkQueueComponent } from './work-queue/work-queue.component';
import { QuickActionsComponent } from './quick-actions/quick-actions.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    MyAccountsComponent,
    WorkQueueComponent,
    QuickActionsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
