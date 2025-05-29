import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { MeterGroupModule } from 'primeng/metergroup';
import { ProgressBar } from 'primeng/progressbar';

@Component({
  selector: 'app-portfolio-goals',
  imports: [
    Card,
    MeterGroupModule,
    ProgressBar
  ],
  templateUrl: './portfolio-goals.component.html',
  styleUrl: './portfolio-goals.component.scss',
  standalone: true
})
export class PortfolioGoalsComponent {
  newBusinessValue = 8100000;
  newBusinessTarget = 12000000;

  annualGWPValue = 28400000;
  annualGWPTarget = 42000000;

  get newBusinessPercent(): number {
    return Math.round((this.newBusinessValue / this.newBusinessTarget) * 100);
  }

  get annualGWPPercent(): number {
    return Math.round((this.annualGWPValue / this.annualGWPTarget) * 100);
  }

  value = [
    { label: 'Apps', color: '#34d399', value: 16, icon: 'pi pi-table' },
    { label: 'Messages', color: '#fbbf24', value: 8, icon: 'pi pi-inbox' },
    { label: 'Media', color: '#60a5fa', value: 24, icon: 'pi pi-image' },
    { label: 'System', color: '#c084fc', value: 10, icon: 'pi pi-cog' }
  ];
}
