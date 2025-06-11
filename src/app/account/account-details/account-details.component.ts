import { ChangeDetectorRef, Component, inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { Card } from 'primeng/card';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { SimpleTargetBarComponent } from '../../shared/components/simple-target-bar/simple-target-bar.component';
import { AccountOverallData } from '../../shared/types/account.types';
import { Tag } from 'primeng/tag';
import { ChartModule } from 'primeng/chart';

export const OVERALL_MOCK_DATA: AccountOverallData[] = [
  {
    title: 'Overall Score',
    overall: {
      value: 82,
      rating: 'Very Strong',
      ratingLevel: 4,
    }
  },
  {
    title: 'Historical Trend',
    chart: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Now'],
      values: [62, 72, 68, 74, 80],
    },
  },
  {
    title: 'Position',
    bars: [
      {
        title: 'Your score',
        percent: 82,
      },
      {
        title: 'Market Avg',
        percent: 68,
      },
      {
        title: 'Top competitor',
        percent: 88,
      },
    ]
  }
];


@Component({
  selector: 'app-account-details',
  imports: [
    Card,
    NgClass,
    SimpleTargetBarComponent,
    Tag,
    ChartModule
  ],
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.scss',
  standalone: true
})
export class AccountDetailsComponent implements OnInit {
  @Input() accountDetails: any;
  @Input() menuGroups = [
    {
      title: 'Desicion Support',
      count: 4,
      items: [
        { label: 'Winnability', active: true },
        { label: 'Exposure Review & Suggested Coverage' },
        { label: 'Portfolio Strategy Alignment' },
        { label: 'Broker Analytics' }
      ]
    },
    {
      title: 'Risk Assessment',
      count: 6
    },
    {
      title: 'Documents and Compliance',
      count: 2
    }
  ];
  @Input() recommendations = [
    {
      title: 'Offer 5% premium discount in exchange for 3-year commitment',
      description:
        'Historical win rate increases 24% with multi-year commitments. Current pricing is 12% above market average. This approach would strengthen retention while maintaining adequate profitability.'
    },
    {
      title: 'Propose risk control services for cargo handling procedures',
      description:
        'Can potentially reduce loss ratio by 15вЂ“20% based on similar maritime accounts in your portfolio. Specific focus on loading/unloading operations would address the most frequent claim scenarios.'
    }
  ];
  @Input() winnabilityQuotes = [
    {
      type: "increase",
      title: "Increasing Winnability",
      targets: [
        {
          label: "Brokers relationship",
          value: 58,
          suffix: "%",
          order: 1
        },
        {
          label: "Loss history",
          value: 42,
          suffix: "%",
          order: 2
        },
        {
          label: "Industry growth",
          value: 36,
          suffix: "%",
          order: 3
        },
        {
          label: "Multiline opportunity",
          value: 21,
          suffix: "%",
          order: 4
        }
      ]
    },
    {
      type: "decrease",
      title: "Decreasing Winnability",
      targets: [
        {
          label: "Premium pricing",
          value: -54,
          suffix: "%",
          order: 1
        },
        {
          label: "Total exposure",
          value: -48,
          suffix: "%",
          order: 2
        },
        {
          label: "Loss ratio trend",
          value: -33,
          suffix: "%",
          order: 3
        },
        {
          label: "Market competition",
          value: -25,
          suffix: "%",
          order: 4
        }
      ]
    }
  ];

  chartData: any;
  chartOptions: any;
  platformId = inject(PLATFORM_ID);

  protected summaryData = OVERALL_MOCK_DATA;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    const trend = this.summaryData.find(dt => dt.chart);
    if (trend) {
      this.initChart(trend);
    }

    this.winnabilityQuotes.forEach(quote => {
      quote.targets.forEach(target => {
        //
      });
    });
  }

  public getDots(count: number): number[] {
    return Array(count).fill(0);
  }

  private initChart(data: AccountOverallData) {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColorSecondary = documentStyle.getPropertyValue('--text-muted-color');

      this.chartData = {
        labels: data.chart?.labels,
        datasets: [
          {
            data: data.chart?.values,
            fill: false,
            borderColor: documentStyle.getPropertyValue('--main-blue-color'),
            tension: 0.1
          }
        ]
      };

      this.chartOptions = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
          legend: false,
          tooltip: false,
        },
        elements: {
          line: {
            borderWidth: 3,
          },
          point: {
            radius: 3
          }
        },
        scales: {
          x: {
            display: true,
            grid: {
              display: false,
            },
            ticks: {
              color: textColorSecondary,
              font: {
                family: 'Manrope',
                size: 15,
                weight: 500
              }
            }
          },
          y: {
            display: false,
          }
        }
      };
      this.cd.markForCheck()
    }
  }

  protected readonly Math = Math;
}
