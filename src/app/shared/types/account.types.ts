import { TargetBarData } from './bar.types';
import { SafeHtml } from '@angular/platform-browser';

export interface Account {
  name: string;
  type: string;
  line: string;
  broker: string;
  renewalDate: string;
  premium: string;
  ratedPremium: string;
  lossRatio: string;
  appetite: 'HIGH' | 'MEDIUM' | 'CAUTIOUS';
  status: 'Active' | 'Under review';
  triage: number;
  winnabilityLevel: 'Very Strong' | 'Strong' | 'Medium';
  winnabilityScore: number;
}

export interface AccountGeneral {
  performance: PerformanceCard[];
  policies: PolicyCard[];
}

export interface PerformanceCard {
  bars?: TargetBarData[];
  description?: string;
  link?: string;
  linkTitle?: string;
  rating?: number;
  title: string;
  value?: string;
}

export interface PolicyCard {
  color: string;
  fields: {
    label: string;
    value: string;
  }[];
  icon?: SafeHtml;
  svgRaw: string;
  title: string;
}
