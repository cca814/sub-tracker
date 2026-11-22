"use server";

import db from "@/lib/db";
import { SubscriptionItemStatus, subscriptionItemType } from "@/utils/types";
import { revalidatePath } from "next/cache";

export async function addSubscription({
  subscription_name,
  billing_cycle,
  next_billing_date,
  price,
  subscription_status,
}: subscriptionItemType) {
  if (typeof subscription_name !== "string" || !subscription_name.trim()) {
    return;
  }

  db.prepare(
    `INSERT INTO subscriptions (
        subscription_name,
        billing_cycle,
        next_billing_date,
        price,
        subscription_status
    ) VALUES (?, ?, ?, ?, ?)`,
  ).run(
    subscription_name.trim(),
    billing_cycle,
    next_billing_date,
    price,
    subscription_status,
  );

  revalidatePath("/");
}

export async function getSubscriptions() {
  const subscriptions = db
    .prepare(`SELECT * FROM subscriptions`)
    .all() as subscriptionItemType[];

  return subscriptions;
}

export async function updateSubscriptionStatus(
  id: number,
  status: SubscriptionItemStatus,
) {
  db.prepare(
    `UPDATE subscriptions SET subscription_status = ? WHERE id = ?`,
  ).run(status, id);

  revalidatePath("/");
}
