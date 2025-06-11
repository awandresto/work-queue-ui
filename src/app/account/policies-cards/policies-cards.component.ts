import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PolicyItem } from '../../shared/types/account.types';
import { Card } from 'primeng/card';
import { PolicyCardComponent } from './components/policy-card/policy-card.component';

@Component({
  selector: 'app-policies-cards',
  imports: [
    Card,
    PolicyCardComponent
  ],
  templateUrl: './policies-cards.component.html',
  styleUrl: './policies-cards.component.scss',
  standalone: true
})
export class PoliciesCardsComponent implements OnInit {
  @Input() policyCards: PolicyItem[] = [];

  @ViewChild('scrollContainer', { static: true }) scrollBox!: ElementRef<HTMLDivElement>;

  private isDown = false;
  private startX = 0;
  private scrollLeft = 0;

  public ngOnInit(): void {
    const box = this.scrollBox.nativeElement;

    box.addEventListener('mousedown', (e) => {
      this.isDown = true;
      box.classList.add('dragging');
      this.startX = e.pageX - box.offsetLeft;
      this.scrollLeft = box.scrollLeft;
    });

    box.addEventListener('mouseleave', () => {
      this.isDown = false;
      box.classList.remove('dragging');
    });

    box.addEventListener('mouseup', () => {
      this.isDown = false;
      box.classList.remove('dragging');
    });

    box.addEventListener('mousemove', (e) => {
      if (!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - box.offsetLeft;
      const walk = (x - this.startX) * 1.5; // чутливість
      box.scrollLeft = this.scrollLeft - walk;
    });
  }
}
