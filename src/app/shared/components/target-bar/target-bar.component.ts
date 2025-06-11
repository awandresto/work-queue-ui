import { Component, Input } from '@angular/core';
import { TargetBarData } from '../../types/bar.types';

@Component({
  selector: 'app-target-bar',
  imports: [],
  templateUrl: './target-bar.component.html',
  styleUrl: './target-bar.component.scss',
  standalone: true
})
export class TargetBarComponent {
  @Input() barData!: TargetBarData;
}
