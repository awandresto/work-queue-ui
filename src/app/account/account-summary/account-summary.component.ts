import { Component, Input } from '@angular/core';
import { AccountGeneral } from '../../shared/types/account.types';
import { AttentionComponent } from '../../shared/components/attention/attention.component';

@Component({
  selector: 'app-account-summary',
  imports: [
    AttentionComponent
  ],
  templateUrl: './account-summary.component.html',
  styleUrl: './account-summary.component.scss',
  standalone: true
})
export class AccountSummaryComponent {
  @Input() accountData!: AccountGeneral;
}
