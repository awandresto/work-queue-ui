import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { TagModule } from 'primeng/tag';
import { Table, TableModule } from 'primeng/table';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-my-accounts',
  imports: [CommonModule, TableModule, BadgeModule, TagModule, FormsModule, Card],
  templateUrl: './my-accounts.component.html',
  styleUrls: ['./my-accounts.component.scss'],
  standalone: true
})
export class MyAccountsComponent {
  accounts = [
    {
      name: 'NAMEX Tech Solutions',
      type: 'Large Enterprise',
      line: 'D&O Liability',
      broker: 'Willis Towers',
      renewalDate: '04/16/2025',
      premium: '$2.3M',
      ratedPremium: '$2.8M',
      lossRatio: '32%',
      lossColor: 'green',
      appetite: 'HIGH',
      status: 'Active',
      triage: 180,
      winnabilityLevel: 'Very Strong',
      winnabilityScore: 4
    },
    {
      name: 'Alliance Healthcare Systems',
      type: 'Mid-Market',
      line: 'Medical Malpractice',
      broker: 'Aon Risk',
      renewalDate: '06/30/2025',
      premium: '$1.7M',
      ratedPremium: '$1.9M',
      lossRatio: '38%',
      lossColor: 'yellow',
      appetite: 'MEDIUM',
      status: 'Under review',
      triage: 165,
      winnabilityLevel: 'Strong',
      winnabilityScore: 3
    },
    {
      name: 'Maritime Logistics Corp',
      type: 'Shipping/Logistics',
      line: 'Marine Cargo',
      broker: 'Marsh McLennan',
      renewalDate: '09/05/2025',
      premium: '$875K',
      ratedPremium: '$920K',
      lossRatio: '25%',
      lossColor: 'green',
      appetite: 'HIGH',
      status: 'Active',
      triage: 182,
      winnabilityLevel: 'Very Strong',
      winnabilityScore: 4
    },
    {
      name: 'GreenField Energy Ltd',
      type: 'Energy Sector',
      line: 'Environmental Liability',
      broker: 'Aon Risk',
      renewalDate: '07/22/2025',
      premium: '$1.2M',
      ratedPremium: '$1.4M',
      lossRatio: '67%',
      lossColor: 'red',
      appetite: 'CAUTIOUS',
      status: 'Under review',
      triage: 158,
      winnabilityLevel: 'Medium',
      winnabilityScore: 3
    }
  ];
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
  @ViewChild('dt') table!: Table;

  getDots(count: number): number[] {
    return Array(count).fill(0);
  }

  onTableFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.table.filterGlobal(value, 'contains');
  }
}
