import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-market-intelligence',
  imports: [
    Card,
    NgClass
  ],
  templateUrl: './market-intelligence.component.html',
  styleUrl: './market-intelligence.component.scss',
  standalone: true
})
export class MarketIntelligenceComponent {
  items = [
    { color: 'red', text: 'Rate hardening in Cyber market – +15% YoY' },
    { color: 'yellow', text: 'New capacity entering Marine market' },
    { color: 'blue', text: 'Environmental regulatory changes in CA' }
  ];
}
