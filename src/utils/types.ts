export enum BillingCycleType {
  Monthly = "monthly",
  Yearly = "yearly",
}

export enum SubscriptionItemStatus {
  Active = "active",
  Paused = "paused",
}

export interface subscriptionItemType {
  id?: number;
  subscription_name: string;
  billing_cycle: BillingCycleType;
  next_billing_date: string;
  price: number;
  subscription_status: SubscriptionItemStatus;
}

export type addSubscriptionItemInterface = Omit<subscriptionItemType, "id">;
