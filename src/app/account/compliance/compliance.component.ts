import { Component, Input } from '@angular/core';
import { Card } from 'primeng/card';
import { ComplianceItem } from '../../shared/types/account.types';

@Component({
  selector: 'app-compliance',
  imports: [
    Card
  ],
  templateUrl: './compliance.component.html',
  styleUrl: './compliance.component.scss',
  standalone: true
})
export class ComplianceComponent {
  @Input() public fields: ComplianceItem[] = [];
}
