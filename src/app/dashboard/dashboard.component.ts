import { Component } from '@angular/core';
import { MyAccountsComponent } from './my-accounts/my-accounts.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    MyAccountsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
