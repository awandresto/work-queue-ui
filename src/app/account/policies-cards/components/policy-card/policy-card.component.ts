import { Component, Input } from '@angular/core';
import { PolicyItem } from '../../../../shared/types/account.types';

@Component({
  selector: 'app-policy-card',
  imports: [],
  templateUrl: './policy-card.component.html',
  styleUrl: './policy-card.component.scss',
  standalone: true
})
export class PolicyCardComponent {
  @Input() policyCard!: PolicyItem;
}
