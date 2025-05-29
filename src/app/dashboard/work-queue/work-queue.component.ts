import { Component, OnInit, ViewChild } from '@angular/core';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { Menu } from 'primeng/menu';
import { ProgressSpinner } from 'primeng/progressspinner';
import { Table, TableModule } from 'primeng/table';
import { MenuItem } from 'primeng/api';
import { WorkQueueItem, WorkQueueList } from '../../types/work-queue.types';
import { WorkQueueService } from '../../services/work-queue.service';
import { NgClass } from '@angular/common';
import { Avatar } from 'primeng/avatar';


enum WorkQueueCategories {
  me = 'Assigned to me',
  pendingReview = 'Pending Review',
  referrals = 'Referrals'
}

@Component({
  selector: 'app-work-queue',
  imports: [
    Button,
    Card,
    Menu,
    ProgressSpinner,
    TableModule,
    NgClass,
    Avatar
  ],
  templateUrl: './work-queue.component.html',
  styleUrl: './work-queue.component.scss',
  standalone: true
})
export class WorkQueueComponent implements OnInit {
  public categories: { key: string, label: string }[] = [];
  public columns: string[] = [];
  public selectedCategory: WorkQueueCategories = WorkQueueCategories.me;
  public isLoading: boolean = false;

  public selectedRow: WorkQueueItem | null = null;
  public selectedWorkQueue: WorkQueueItem[] = [];
  public tableActions: MenuItem[] | undefined;

  public workQueueList: WorkQueueList = {};

  @ViewChild('table') table!: Table;
  @ViewChild('menu') menu!: Menu;

  constructor(private workQueueService: WorkQueueService) {}

  public ngOnInit(): void {
    this.initTable();

    this.isLoading = true;
    this.workQueueService.getWorkQueue().subscribe(result => {
      this.workQueueList = result;
      this.isLoading = false;

      (Object.keys(WorkQueueCategories) as Array<keyof typeof WorkQueueCategories>)
        .forEach((key) => {
          if (this.workQueueList[key]) {
            const data = this.workQueueList[key];
            const categoryLabel = WorkQueueCategories[key];
            this.categories.push({
              key,
              label: `${categoryLabel} (${data.length})`
            });

            if (this.categories.length === 1) {
              this.selectedWorkQueue = data;
              this.selectedCategory = key as WorkQueueCategories;
            }
          }
        });

      // this.categories.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
    });
  }

  public onCategoryChange(key: string): void {
    this.selectedCategory = key as WorkQueueCategories;
    this.selectedWorkQueue = this.workQueueList[key] || [];
  }

  public editRow(row: any): void {
    // Implement the logic to edit account
    console.log('Edit account:', row);
  }

  public deleteRow(row: any): void {
    // Implement the logic to delete account
    console.log('Delete account:', row);
  }

  public showMenu(event: MouseEvent, row: any): void {
    event.preventDefault();
    this.selectedRow = row;
    this.menu.toggle(event);
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
      'Originator',
      'Client/Line',
      'Type',
      'Status',
      'Created',
      ''
    ];
  }
}
