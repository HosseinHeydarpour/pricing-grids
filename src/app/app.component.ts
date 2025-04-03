import { Component, inject } from '@angular/core';
import { PricingCardComponent } from './pricing-card/pricing-card.component';
import { PricingService } from './pricing.service';
import { CommonModule } from '@angular/common';
import { PriceCard } from './price-card.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PricingCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  pricingService = inject(PricingService);
  plans: PriceCard[] = this.pricingService.pricings;
}
