import { Component, Input } from '@angular/core';
import { TargetBarData } from '../../types/bar.types';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-target-bar',
  imports: [
    NgStyle
  ],
  templateUrl: './target-bar.component.html',
  styleUrl: './target-bar.component.scss'
})
export class TargetBarComponent {
  @Input() barData!: TargetBarData;
}
