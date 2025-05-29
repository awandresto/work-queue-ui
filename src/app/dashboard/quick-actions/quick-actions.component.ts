import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-quick-actions',
  imports: [
    Card,
    Button
  ],
  templateUrl: './quick-actions.component.html',
  styleUrl: './quick-actions.component.scss'
})
export class QuickActionsComponent {
  quickActions: string[] = [
    "New Submission",
    "Quote Builder",
    "Risks Models",
    "Documents Upload"
  ];

}
