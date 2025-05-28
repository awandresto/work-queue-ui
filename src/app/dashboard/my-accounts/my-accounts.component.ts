import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { TagModule } from 'primeng/tag';
import { Table, TableModule } from 'primeng/table';
import { Card } from 'primeng/card';
import { Account } from '../../types/account';
import { AccountsService } from '../../services/accounts.service';
import { ProgressSpinner } from 'primeng/progressspinner';

@Component({
  selector: 'app-my-accounts',
  imports: [CommonModule, TableModule, BadgeModule, TagModule, FormsModule, Card, ProgressSpinner],
  templateUrl: './my-accounts.component.html',
  styleUrls: ['./my-accounts.component.scss'],
  standalone: true
})
export class MyAccountsComponent implements OnInit {
  accounts: Account[] = [];
  columns = [
    'Account Name/Type',
    'Line',
    'Broker',
    'Renewal Date',
    'Premium',
    'Rated Premium',
    'Loss Ratio',
    'Appetite',
    'Status',
    'Triage',
    'Winnability'
  ];
  filterValue = '';
  isLoading = false;
  @ViewChild('dt') table!: Table;

  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    this.isLoading = true;
    this.accountsService.getAccounts().subscribe(data => {
      this.accounts = data;
      this.isLoading = false;
    });
  }

  getDots(count: number): number[] {
    return Array(count).fill(0);
  }

  onTableFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.table.filterGlobal(value, 'contains');
  }
}
