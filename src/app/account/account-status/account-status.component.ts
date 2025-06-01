import { Component, Input } from '@angular/core';
import { AccountStatus } from '../../shared/types/account.types';
import { NgClass } from '@angular/common';
import { Card } from 'primeng/card';
import { Timeline } from 'primeng/timeline';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-account-status',
  imports: [
    NgClass,
    Card,
    Timeline,
    Button
  ],
  templateUrl: './account-status.component.html',
  styleUrl: './account-status.component.scss'
})
export class AccountStatusComponent {
  @Input() public steps!: AccountStatus[];
}
