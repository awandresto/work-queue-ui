import { Component, Input } from '@angular/core';
import { Card } from 'primeng/card';
import { NgClass } from '@angular/common';
import { SimpleTargetBarComponent } from '../../shared/components/simple-target-bar/simple-target-bar.component';
import { AccountOverallData } from '../../shared/types/account.types';
import { Tag } from 'primeng/tag';

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
    graph: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Now'],
      values: [62, 68, 75, 70, 78, 78, 82],
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
    Tag
  ],
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.scss',
  standalone: true
})
export class AccountDetailsComponent {
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
      "type": "increase",
      "title": "Increasing Winnability",
      "targets": [
        {
          "label": "Brokers relationship",
          "value": 28,
          "suffix": "%",
          "order": 1
        },
        {
          "label": "Loss history",
          "value": 22,
          "suffix": "%",
          "order": 2
        },
        {
          "label": "Industry growth",
          "value": 16,
          "suffix": "%",
          "order": 3
        },
        {
          "label": "Multiline opportunity",
          "value": 11,
          "suffix": "%",
          "order": 4
        }
      ]
    },
    {
      "type": "decrease",
      "title": "Decreasing Winnability",
      "targets": [
        {
          "label": "Premium pricing",
          "value": -24,
          "suffix": "%",
          "order": 1
        },
        {
          "label": "Total exposure",
          "value": -18,
          "suffix": "%",
          "order": 2
        },
        {
          "label": "Loss ratio trend",
          "value": -13,
          "suffix": "%",
          "order": 3
        },
        {
          "label": "Market competition",
          "value": -5,
          "suffix": "%",
          "order": 4
        }
      ]
    }
  ];

  protected summaryData = OVERALL_MOCK_DATA;

  public getDots(count: number): number[] {
    return Array(count).fill(0);
  }
}
