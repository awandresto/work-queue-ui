import { Component, Input } from '@angular/core';
import { TargetBarData } from '../../types/bar.types';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-simple-target-bar',
  imports: [
    NgStyle
  ],
  templateUrl: './simple-target-bar.component.html',
  styleUrl: './simple-target-bar.component.scss'
})
export class SimpleTargetBarComponent {
  @Input() barData!: TargetBarData;
  @Input() isNotBright = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
}
