import { Component } from '@angular/core';
import { MyAccountsComponent } from './my-accounts/my-accounts.component';
import { WorkQueueComponent } from './work-queue/work-queue.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    MyAccountsComponent,
    WorkQueueComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
