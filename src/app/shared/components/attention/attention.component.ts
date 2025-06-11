import { Component, Input } from '@angular/core';
import { Card } from 'primeng/card';
import { AccountAttention } from '../../types/account.types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attention',
  imports: [
    Card,
    RouterLink
  ],
  templateUrl: './attention.component.html',
  styleUrl: './attention.component.scss',
  standalone: true
})
export class AttentionComponent {
  @Input() attentions!: AccountAttention[];
}
