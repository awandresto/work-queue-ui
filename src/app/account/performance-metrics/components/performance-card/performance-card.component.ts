import { Component, Input } from '@angular/core';
import { PerformanceCard } from '../../../../shared/types/account.types';
import { Card } from 'primeng/card';
import { TargetBarComponent } from '../../../../shared/components/target-bar/target-bar.component';
import { NgStyle } from '@angular/common';
import { SimpleTargetBarComponent } from '../../../../shared/components/simple-target-bar/simple-target-bar.component';

@Component({
  selector: 'app-performance-card',
  imports: [
    Card,
    TargetBarComponent,
    NgStyle,
    SimpleTargetBarComponent
  ],
  templateUrl: './performance-card.component.html',
  styleUrl: './performance-card.component.scss',
  standalone: true
})
export class PerformanceCardComponent {
  @Input() performanceData!: PerformanceCard;

  public getDots(count: number): number[] {
    return Array(count).fill(0);
  }
}
