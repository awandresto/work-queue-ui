import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { TagModule } from 'primeng/tag';
import { Table, TableModule } from 'primeng/table';
import { Card } from 'primeng/card';
import { AccountsService } from '../../shared/services/accounts.service';
import { ProgressSpinner } from 'primeng/progressspinner';
import { debounceTime, Subject } from 'rxjs';
import { Button } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { Account } from '../../shared/types/account.types';

const ACCOUNT_FIELDS: (keyof Account)[] = [
  'name',
  'type',
  'line',
  'broker',
  'renewalDate',
  'premium',
  'ratedPremium',
  'lossRatio',
  'appetite',
  'status',
  'triage',
  'winnabilityLevel'
];

@Component({
  selector: 'app-my-accounts',
  imports: [CommonModule, TableModule, BadgeModule, TagModule, FormsModule, Card, ProgressSpinner, Button, Menu],
  templateUrl: './my-accounts.component.html',
  styleUrls: ['./my-accounts.component.scss'],
  standalone: true
})
export class MyAccountsComponent implements OnInit {
  public accounts: Account[] = [];
  public columns: string[] = [];
  public isLoading: boolean = false;
  public filterValue$: Subject<string> = new Subject<string>();
  public selectedRow: Account | null = null;
  public tableActions: MenuItem[] | undefined;

  @ViewChild('table') table!: Table;
  @ViewChild('menu') menu!: Menu;

  protected readonly accountFields = ACCOUNT_FIELDS;

  constructor(private accountsService: AccountsService) {}

  public ngOnInit(): void {
    this.initTable();

    this.isLoading = true;
    this.accountsService.getAccounts().subscribe(data => {
      this.accounts = data;
      this.isLoading = false;
    });

    this.filterValue$
      .pipe(debounceTime(500))
      .subscribe(value => {
        this.table.filterGlobal(value, 'contains');
      });
  }

  public getDots(count: number): number[] {
    return Array(count).fill(0);
  }

  public getRatioColor(ratio: string): string {
    const ratioValue = parseFloat(ratio);
    if (ratioValue <= 35) {
      return 'green';
    } else if (ratioValue <= 65) {
      return 'yellow';
    } else {
      return 'red';
    }
  }

  public onFilterTable(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.filterValue$.next(value);
  }

  public showMenu(event: MouseEvent, row: any): void {
    event.preventDefault();
    this.selectedRow = row;
    this.menu.toggle(event);
  }

  public editRow(row: any): void {
    // Implement the logic to edit account
    console.log('Edit account:', row);
  }

  public deleteRow(row: any): void {
    // Implement the logic to delete account
    console.log('Delete account:', row);
  }

  private initTable() {
    this.tableActions = [
      {
        label: 'Actions',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-pencil',
            command: () => this.editRow(this.selectedRow)
          },
          {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => this.deleteRow(this.selectedRow)
          }
        ]
      }
    ];

    this.columns = [
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
      'Winnability',
      ''
    ];
  }
}
