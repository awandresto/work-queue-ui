import { Component, Input } from '@angular/core';
import { PerformanceCardComponent } from '../../shared/components/performance-card/performance-card.component';
import { NgStyle } from '@angular/common';
import { PerformanceCard } from '../../shared/types/account.types';

@Component({
  selector: 'app-performance-metrics',
  imports: [
    PerformanceCardComponent,
    NgStyle
  ],
  templateUrl: './performance-metrics.component.html',
  styleUrl: './performance-metrics.component.scss',
  standalone: true
})
export class PerformanceMetricsComponent {
  @Input() performanceCards: PerformanceCard[] = [];
}
