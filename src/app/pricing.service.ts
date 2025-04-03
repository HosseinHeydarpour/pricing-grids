import { Injectable } from '@angular/core';
import { PriceCard } from './price-card.model';

@Injectable({
  providedIn: 'root',
})
export class PricingService {
  pricings: PriceCard[] = [
    {
      plan: 'Basic',
      storage: '100GB',
      price: {
        amount: 1.99,
        currency: 'USD',
        billing_cycle: 'Month',
      },
      features: [
        '100 GB of storage',
        'Option to add members',
        'Extra member benefits',
      ],
      purchase_link: '#',
      featured: false,
    },
    {
      plan: 'Standard',
      storage: '200GB',
      price: {
        amount: 3.99,
        currency: 'USD',
        billing_cycle: 'Month',
      },
      features: [
        '200 GB of storage',
        'Option to add members',
        'Extra member benefits',
      ],
      purchase_link: '#',
      featured: true,
    },
    {
      plan: 'Premium',
      storage: '2 TB',
      price: {
        amount: 8.99,
        currency: 'USD',
        billing_cycle: 'Month',
      },
      features: [
        '2 TB of storage',
        'Option to add members',
        'Extra member benefits',
      ],
      purchase_link: '#',
      featured: false,
    },
  ];

  constructor() {}

  get plans() {
    return this.pricings;
  }
}
