import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PricingCardComponent } from './pricing-card/pricing-card.component';
import { PricingService } from './pricing.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PricingCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  pricingService = inject(PricingService);
  plans = this.pricingService.pricings;
}
