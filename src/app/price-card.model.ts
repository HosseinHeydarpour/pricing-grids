interface PriceCard {
  plan: string;
  storage: string;
  price: {
    amount: number;
    currency: string;
    billing_cycle: string;
  };
  features: string[];
  purchase_link: string;
  featured: boolean;
}
