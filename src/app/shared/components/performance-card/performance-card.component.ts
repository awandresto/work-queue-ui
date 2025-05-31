import { Component, Input } from '@angular/core';
import { PerformanceCard } from '../../types/account.types';
import { Card } from 'primeng/card';
import { TargetBarComponent } from '../target-bar/target-bar.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-performance-card',
  imports: [
    Card,
    TargetBarComponent,
    NgStyle
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
