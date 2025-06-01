import { Component, Input } from '@angular/core';
import { AccountGeneral } from '../../shared/types/account.types';

@Component({
  selector: 'app-account-summary',
  imports: [],
  templateUrl: './account-summary.component.html',
  styleUrl: './account-summary.component.scss'
})
export class AccountSummaryComponent {
  @Input() accountData!: AccountGeneral;
}
