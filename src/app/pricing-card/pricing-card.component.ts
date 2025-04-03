import { NgClass, NgFor } from '@angular/common';
import { Component, input, InputSignal } from '@angular/core';
import { PriceCard } from '../price-card.model';

@Component({
  selector: 'app-pricing-card',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.scss',
})
export class PricingCardComponent {
  plan = input.required<PriceCard>();
}
