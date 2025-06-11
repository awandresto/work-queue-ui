import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-quick-actions',
  imports: [
    Card,
    NgStyle
  ],
  templateUrl: './quick-actions.component.html',
  styleUrl: './quick-actions.component.scss',
  standalone: true
})
export class QuickActionsComponent {
  public quickActions: string[] = [
    "New Submission",
    "Quote Builder",
    "Risks Models",
    "Documents Upload"
  ];

}
