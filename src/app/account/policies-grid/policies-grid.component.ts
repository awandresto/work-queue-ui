import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { Table, TableModule } from 'primeng/table';
import { Tag } from 'primeng/tag';
import { debounceTime, Subject } from 'rxjs';
import { PolicyItem } from '../../shared/types/account.types';
import { MenuItem } from 'primeng/api';
import { NgClass } from '@angular/common';
import { Menu } from 'primeng/menu';
import { CurrencyFormatPipe } from '../../shared/pipes/currency-format.pipe';
import { SumColumnPipe } from '../../shared/pipes/sum-column.pipe';

const POLICY_FIELDS: (keyof PolicyItem)[] = [
  'name',
  'policyNumber',
  'effDate',
  'expDate',
  'status',
  'expiringTech',
  'expiringPremium',
  'renewalToTech',
  'renewalTech',
  'renewalPremium',
  'rateChange',
  'lossRatio'
];

@Component({
  selector: 'app-policies-grid',
  imports: [
    Button,
    Card,
    TableModule,
    Tag,
    NgClass,
    Menu,
    CurrencyFormatPipe,
    SumColumnPipe
  ],
  templateUrl: './policies-grid.component.html',
  styleUrl: './policies-grid.component.scss'
})
export class PoliciesGridComponent implements OnInit {
  @Input() public policies: PolicyItem[] = [];
  public columns: string[] = [];
  public filterValue$: Subject<string> = new Subject<string>();
  public selectedRow: PolicyItem | null = null;
  public tableActions: MenuItem[] | undefined;

  @ViewChild('menu') menu!: Menu;
  @ViewChild('table') table!: Table;

  protected readonly policyFields = POLICY_FIELDS;

  public ngOnInit(): void {
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
      'Line',
      'Eff. Date',
      'Exp. Date',
      'Status',
      'Expiring Tech',
      'Expiring Premium',
      'Renewal to Tech',
      'Renewal Tech',
      'Renewal Premium',
      'Rate Change',
      'Loss Ratio',
      ''
    ];

    this.filterValue$
      .pipe(debounceTime(500))
      .subscribe(value => {
        this.table.filterGlobal(value, 'contains');
      });
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
    // Implement the logic to edit row
    console.log('Edit row:', row);
  }

  public deleteRow(row: any): void {
    // Implement the logic to delete row
    console.log('Delete row:', row);
  }

  public getRatioColor(ratio: string | number): string {
    const ratioValue = typeof ratio === 'number' ? ratio : parseFloat(ratio);
    if (ratioValue <= 35) {
      return 'green';
    } else if (ratioValue <= 65) {
      return 'yellow';
    } else {
      return 'red';
    }
  }

}
