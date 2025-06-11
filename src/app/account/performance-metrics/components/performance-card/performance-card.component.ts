import { Component, Input } from '@angular/core';
import { PerformanceCard } from '../../../../shared/types/account.types';
import { Card } from 'primeng/card';
import { SimpleTargetBarComponent } from '../../../../shared/components/simple-target-bar/simple-target-bar.component';

@Component({
  selector: 'app-performance-card',
  imports: [
    Card,
    SimpleTargetBarComponent
  ],
  templateUrl: './performance-card.component.html',
  styleUrl: './performance-card.component.scss',
  standalone: true
})
export class PerformanceCardComponent {
  @Input() performanceData!: PerformanceCard;

  public get barLength(): number {
    return this.performanceData.bars?.length || 0;
  }

  public getDots(count: number): number[] {
    return Array(count).fill(0);
  }
}
