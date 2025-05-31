import { Component, Input } from '@angular/core';
import { PolicyCard } from '../../types/account.types';

@Component({
  selector: 'app-policy-card',
  imports: [],
  templateUrl: './policy-card.component.html',
  styleUrl: './policy-card.component.scss'
})
export class PolicyCardComponent {
  @Input() policyCard!: PolicyCard;
}
