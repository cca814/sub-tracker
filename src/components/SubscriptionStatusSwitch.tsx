"use client";

import styles from "@/styles/subscriptionStatusSwitch.module.css";

interface SubscriptionStatusSwitchProps {
  isActive: boolean;
  onToggle: () => void;
}

export default function SubscriptionStatusSwitch({
  isActive,
  onToggle,
}: SubscriptionStatusSwitchProps) {
  const handleClick = () => {
    onToggle();
  };

  return (
    <div
      className={`${styles.subscriptionItemStatus} ${isActive ? styles.positive : styles.negative}`}
    >
      <button
        className={styles.subscriptionItemStatusSwitch}
        onClick={handleClick}
      >
        <div />
      </button>
      {isActive ? "Active" : "Paused"}
    </div>
  );
}
