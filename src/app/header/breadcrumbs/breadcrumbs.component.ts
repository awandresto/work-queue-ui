import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'primeng/breadcrumb';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-breadcrumbs',
  imports: [
    Breadcrumb,
    RouterLink,
    NgClass
  ],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
  standalone: true
})
export class BreadcrumbsComponent implements OnInit {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Dashboard', routerLink: 'dashboard' },
      { label: 'Accounts', routerLink: 'accounts' },
      { label: 'Maritime Logistic Corp', active: true },
    ];
  }

}
