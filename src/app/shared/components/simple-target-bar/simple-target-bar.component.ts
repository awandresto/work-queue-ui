import { Component, Input } from '@angular/core';
import { TargetBarData } from '../../types/bar.types';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-simple-target-bar',
  imports: [
    NgStyle,
    NgClass
  ],
  templateUrl: './simple-target-bar.component.html',
  styleUrl: './simple-target-bar.component.scss'
})
export class SimpleTargetBarComponent {
  @Input() data!: TargetBarData;
  @Input() highlight = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
}
