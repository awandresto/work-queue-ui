import { Component } from '@angular/core';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-quick-actions',
  imports: [
    Card
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
