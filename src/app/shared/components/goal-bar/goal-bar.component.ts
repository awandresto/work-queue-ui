import { Component, Input } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { GoalBarData } from '../../types/bar.types';

@Component({
  selector: 'app-goal-bar',
  imports: [
    NgStyle,
    NgClass
  ],
  templateUrl: './goal-bar.component.html',
  styleUrl: './goal-bar.component.scss',
  standalone: true
})
export class GoalBarComponent {
  @Input() barData!: GoalBarData;
}
