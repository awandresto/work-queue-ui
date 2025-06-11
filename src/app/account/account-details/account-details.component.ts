import { ChangeDetectorRef, Component, inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { Card } from 'primeng/card';
import { AsyncPipe, isPlatformBrowser, NgClass } from '@angular/common';
import { SimpleTargetBarComponent } from '../../shared/components/simple-target-bar/simple-target-bar.component';
import {
  AccountDetailsData,
  AccountOverallData,
  AIRecommendation,
  MenuGroup, MenuItem,
  WinnabilityProgress
} from '../../shared/types/account.types';
import { Tag } from 'primeng/tag';
import { ChartModule } from 'primeng/chart';
import { AccountDetailsService } from '../../shared/services/account-details.service';
import { ProgressSpinner } from 'primeng/progressspinner';
import { BehaviorSubject, catchError, of } from 'rxjs';


@Component({
  selector: 'app-account-details',
  imports: [
    Card,
    NgClass,
    SimpleTargetBarComponent,
    Tag,
    ChartModule,
    ProgressSpinner,
    AsyncPipe
  ],
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.scss',
  standalone: true
})
export class AccountDetailsComponent implements OnInit {
  @Input() menuGroups$: BehaviorSubject<MenuGroup[]> = new BehaviorSubject<MenuGroup[]>([]);

  public activeMenuGroup: MenuGroup = {
    count: 0,
    items: [],
    title: ''
  };
  public activeItemMenu: MenuItem = {
    label: '',
    url: ''
  };
  public chartData: any;
  public chartOptions: any;
  public isLoading = false;
  public noData = false;
  public overallData: AccountOverallData[] = [];
  public recommendations: AIRecommendation[] = [];
  public winnability: WinnabilityProgress[] = [];

  private platformId = inject(PLATFORM_ID);

  constructor(private cd: ChangeDetectorRef,
              private accountDetailsService: AccountDetailsService) {
  }

  ngOnInit() {
    this.menuGroups$.subscribe(menuGroups => {
      this.activeMenuGroup = menuGroups[0];
      this.activeMenuGroup.active = true;
      const menuItem = menuGroups[0]?.items[0];
      this.selectItemMenu(menuItem);
    });
  }

  public getDots(count: number): number[] {
    return Array(count).fill(0);
  }

  public selectMenuGroup(menuGroup: MenuGroup) {
    this.activeMenuGroup.active = false;
    menuGroup.active = true;
    this.activeMenuGroup = menuGroup;

    const item = menuGroup?.items[0];
    if (item) {
      this.selectItemMenu(item);
    }
  }

  public selectItemMenu(item: MenuItem) {
    this.activeItemMenu.active = false;

    const url = item?.url || '';
    if (url) {
      item.active = true;
      this.activeItemMenu = item;
      this.loadData(url)
    }
  }

  private loadData(url: string) {
    this.isLoading = true;
    this.accountDetailsService.getMyAccountDetails(url)
      .pipe(catchError(() => {
          return of({} as AccountDetailsData);
        })
      ).subscribe((result: AccountDetailsData) => {
        this.overallData = result?.overall || [];
        this.recommendations = result?.recommendations || [];
        this.winnability = result?.winnability || [];

        this.noData = !Object.keys(result)?.length;
        this.isLoading = false;

        const trend = this.overallData.find(dt => dt.chart);
        if (trend) {
          this.initChart(trend);
        }
    });
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
