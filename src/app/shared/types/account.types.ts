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
  policies: PolicyItem[];
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

export interface PolicyItem {
  name: string;
  color: string;
  icon?: SafeHtml;
  svgRaw: string;
  policyNumber: string;
  effDate: string;
  expDate: string;
  status: 'Active' | 'Expired' | 'Pending';
  expiringTech: number;
  expiringPremium: number;
  renewalToTech: number;
  renewalTech: number;
  renewalPremium: number;
  rateChange: number;
  lossRatio: number;
}

