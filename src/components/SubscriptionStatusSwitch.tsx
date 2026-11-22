"use client";

import { useRef, useState, useTransition } from "react";
import { updateSubscriptionStatus } from "@/app/actions";
import { SubscriptionItemStatus } from "@/utils/types";
import styles from "@/styles/subscriptionStatusSwitch.module.css";

interface SubscriptionStatusSwitchProps {
  id: number | undefined;
  status: SubscriptionItemStatus;
  name: string;
}

export default function SubscriptionStatusSwitch({
  id,
  status,
  name,
}: SubscriptionStatusSwitchProps) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const requestInFlight = useRef(false);
  const isActive = status === SubscriptionItemStatus.Active;

  const handleClick = () => {
    if (id === undefined || isPending || requestInFlight.current) return;

    requestInFlight.current = true;
    setError(null);
    const nextStatus = isActive
      ? SubscriptionItemStatus.Paused
      : SubscriptionItemStatus.Active;

    startTransition(async () => {
      try {
        await updateSubscriptionStatus(id, nextStatus);
      } catch {
        setError("Could not update status. Please try again.");
      } finally {
        requestInFlight.current = false;
      }
    });
  };

  return (
    <div className={styles.statusControl}>
      <div
        className={`${styles.subscriptionItemStatus} ${isActive ? styles.positive : styles.negative}`}
      >
        <button
          type="button"
          role="switch"
          aria-label={`${name} subscription active`}
          aria-checked={isActive}
          aria-busy={isPending}
          className={styles.subscriptionItemStatusSwitch}
          onClick={handleClick}
          disabled={isPending || id === undefined}
        >
          <div />
        </button>
        <span>{isActive ? "Active" : "Paused"}</span>
      </div>
      {error && <p role="alert" className={styles.statusError}>{error}</p>}
    </div>
  );
}
