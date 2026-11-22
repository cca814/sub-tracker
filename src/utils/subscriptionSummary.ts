import {
  BillingCycleType,
  SubscriptionItemStatus,
  type subscriptionItemType,
} from "./types";

const MS_PER_DAY = 24 * 60 * 60 * 1000;

export interface SubscriptionSummary {
  monthlySpend: number;
  dailyAverage: number;
  nextRenewal: {
    name: string;
    price: number;
    date: string;
    dueInDays: number;
  } | null;
}

function parseDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return Date.UTC(year, month - 1, day);
}

function addMonthsClamped(time: number, months: number) {
  const date = new Date(time);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + months;
  const lastDayOfMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  return Date.UTC(year, month, Math.min(date.getUTCDate(), lastDayOfMonth));
}

function upcomingBillingDate(
  subscription: subscriptionItemType,
  today: number,
) {
  const start = parseDate(subscription.next_billing_date);
  const monthsPerCycle =
    subscription.billing_cycle === BillingCycleType.Yearly ? 12 : 1;

  let next = start;
  for (let cycles = 1; next < today; cycles++) {
    next = addMonthsClamped(start, cycles * monthsPerCycle);
  }
  return next;
}

function monthlyCost(subscription: subscriptionItemType) {
  return subscription.billing_cycle === BillingCycleType.Yearly
    ? subscription.price / 12
    : subscription.price;
}

export function getSubscriptionSummary(
  subscriptions: subscriptionItemType[],
  now = new Date(),
): SubscriptionSummary {
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const daysInMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0,
  ).getDate();

  const active = subscriptions.filter(
    (subscription) =>
      subscription.subscription_status === SubscriptionItemStatus.Active,
  );

  const monthlySpend = active.reduce(
    (sum, subscription) => sum + monthlyCost(subscription),
    0,
  );

  let next: { subscription: subscriptionItemType; date: number } | null = null;
  for (const subscription of active) {
    if (Number.isNaN(parseDate(subscription.next_billing_date))) continue;

    const date = upcomingBillingDate(subscription, today);
    if (!next || date < next.date) next = { subscription, date };
  }

  return {
    monthlySpend,
    dailyAverage: monthlySpend / daysInMonth,
    nextRenewal: next && {
      name: next.subscription.subscription_name,
      price: next.subscription.price,
      date: new Date(next.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      }),
      dueInDays: Math.round((next.date - today) / MS_PER_DAY),
    },
  };
}
