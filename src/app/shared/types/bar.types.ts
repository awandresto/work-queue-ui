export interface GoalBarSegment {
  width: number;
  color: string;
}

export interface GoalBarData {
  bottomLabel: string;
  segments: GoalBarSegment[];
  showArrowBottom: boolean;
  showArrowTop: boolean;
  title: string;
  topArrowPosition: number;
  topLabel: string;
  valueLabel: string;
  valuePosition: number;
}

export interface TargetBarData {
  percent: number;
  percentLabel?: string;
  target?: string;
  title?: string;
  value?: string;
}

export interface PortfolioGoals {
  goals: GoalBarData[];
  target: TargetBarData[];
}
