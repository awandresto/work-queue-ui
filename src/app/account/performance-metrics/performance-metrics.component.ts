import { Component, Input } from '@angular/core';
import { PerformanceCardComponent } from './components/performance-card/performance-card.component';
import { PerformanceCard } from '../../shared/types/account.types';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-performance-metrics',
  imports: [
    PerformanceCardComponent,
    NgClass
  ],
  templateUrl: './performance-metrics.component.html',
  styleUrl: './performance-metrics.component.scss',
  standalone: true
})
export class PerformanceMetricsComponent {
  @Input() performanceCards: PerformanceCard[] = [];
}
