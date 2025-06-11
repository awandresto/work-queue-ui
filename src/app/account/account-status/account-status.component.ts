import { Component, Input } from '@angular/core';
import { AccountStatus } from '../../shared/types/account.types';
import { NgClass } from '@angular/common';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-account-status',
  imports: [
    NgClass,
    Card
  ],
  templateUrl: './account-status.component.html',
  styleUrl: './account-status.component.scss',
  standalone: true
})
export class AccountStatusComponent {
  @Input() public steps!: AccountStatus[];
}
