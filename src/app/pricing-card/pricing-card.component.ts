import { NgClass } from '@angular/common';
import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-pricing-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.scss',
})
export class PricingCardComponent {
  isFeatured = input.required<boolean>();
}
