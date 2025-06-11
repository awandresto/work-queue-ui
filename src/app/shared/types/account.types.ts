import { ProgressBar, TargetBarData } from './bar.types';
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
  companyName: string;
  logo: string;
  addressLine1: string;
  addressLine2: string;
  accountNumber: number | null;
  brokerName: string;
  underwriterName: string;
  performance: PerformanceCard[];
  accountStatus: AccountStatus[];
  attentions: AccountAttention[];
  policies: PolicyItem[];
  compliance: ComplianceItem[];
  menuGroups: MenuGroup[]
}

export interface AccountStatus {
  completed: boolean;
  label: string;
}

export interface AccountAttention {
  label?: string;
  sub?: string;
  link?: string;
  linkText?: string;
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

export interface ComplianceItem {
  label: string;
  svgRaw: string;
  icon?: SafeHtml;
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

export interface MessageCard {
  attachments?: string[];
  author: string;
  canReply?: boolean;
  content: string;
  date: string;
  id: string;
  status?: 'new' | 'responded';
  title: string;
}

export interface ScoreOverall {
  rating: string;
  ratingLevel: number;
  value: number;
}

export interface ChartData {
  labels: string[];
  values: number[];
}

export interface AccountOverallData {
  title: string;
  overall?: ScoreOverall;
  chart?: ChartData;
  bars?: TargetBarData[];
}

export interface MenuGroup {
  active?: boolean;
  count: number;
  items: MenuItem[];
  title: string;
}

export interface MenuItem {
  active?: boolean;
  label: string;
  url: string;
}

export interface AIRecommendation {
  title: string;
  description: string;
}

export interface WinnabilityProgress {
  type: 'increase' | 'decrease';
  title: string;
  progress: ProgressBar[];
}

export interface AccountDetailsData {
  overall: AccountOverallData[];
  recommendations: AIRecommendation[];
  winnability: WinnabilityProgress[];
}
