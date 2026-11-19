"use client";
import styles from "@/styles/subscriptionTable.module.css";
import { useState } from "react";

export default function SubscriptionTable() {
  const [isPositive, setIsPositive] = useState(true);

  return (
    <section className={styles.subscriptionTable}>
      <div className={styles.header}>
        <h1 className={styles.title}>All subscriptions</h1>
        <p className={styles.subtitle}>6 services</p>
      </div>
      <div className={styles.tableHeader}>
        <span>Service</span>
        <span>Billing cycle</span>
        <span>Next billing</span>
        <span>Price</span>
        <span>Status</span>
      </div>
      <div className={styles.tableItem}>
        <div className={styles.subscriptionItem}>
          <div className={styles.subscriptionIcon}>N</div>
          <p className={styles.subscriptionName}>Netflix</p>
        </div>
        <div className={styles.tableItemValue}>Monthly</div>
        <div className={styles.tableItemValue}>Jun 15, 2025</div>
        <div className={styles.subscriptionItemPrice}>$15.99</div>
        <div
          className={`${styles.subscriptionItemStatus} ${isPositive ? styles.positive : styles.negative}`}
        >
          <button
            className={styles.subscriptionItemStatusSwitch}
            onClick={() => setIsPositive((prev) => !prev)}
          >
            <div />
          </button>
          {isPositive ? "Active" : "Paused"}
        </div>
      </div>

      <div className={styles.tableItem}>
        <div className={styles.subscriptionItem}>
          <div className={styles.subscriptionIcon}>N</div>
          <p className={styles.subscriptionName}>Netflix</p>
        </div>
        <div className={styles.tableItemValue}>Monthly</div>
        <div className={styles.tableItemValue}>Jun 15, 2025</div>
        <div className={styles.subscriptionItemPrice}>$15.99</div>
        <div
          className={`${styles.subscriptionItemStatus} ${isPositive ? styles.positive : styles.negative}`}
        >
          <button
            className={styles.subscriptionItemStatusSwitch}
            onClick={() => setIsPositive((prev) => !prev)}
          >
            <div />
          </button>
          {isPositive ? "Active" : "Paused"}
        </div>
      </div>

      <div className={styles.tableItem}>
        <div className={styles.subscriptionItem}>
          <div className={styles.subscriptionIcon}>N</div>
          <p className={styles.subscriptionName}>Netflix</p>
        </div>
        <div className={styles.tableItemValue}>Monthly</div>
        <div className={styles.tableItemValue}>Jun 15, 2025</div>
        <div className={styles.subscriptionItemPrice}>$15.99</div>
        <div
          className={`${styles.subscriptionItemStatus} ${isPositive ? styles.positive : styles.negative}`}
        >
          <button
            className={styles.subscriptionItemStatusSwitch}
            onClick={() => setIsPositive((prev) => !prev)}
          >
            <div />
          </button>
          {isPositive ? "Active" : "Paused"}
        </div>
      </div>

      <div className={styles.tableItem}>
        <div className={styles.subscriptionItem}>
          <div className={styles.subscriptionIcon}>N</div>
          <p className={styles.subscriptionName}>Netflix</p>
        </div>
        <div className={styles.tableItemValue}>Monthly</div>
        <div className={styles.tableItemValue}>Jun 15, 2025</div>
        <div className={styles.subscriptionItemPrice}>$15.99</div>
        <div
          className={`${styles.subscriptionItemStatus} ${isPositive ? styles.positive : styles.negative}`}
        >
          <button
            className={styles.subscriptionItemStatusSwitch}
            onClick={() => setIsPositive((prev) => !prev)}
          >
            <div />
          </button>
          {isPositive ? "Active" : "Paused"}
        </div>
      </div>

      <div className={styles.tableItem}>
        <div className={styles.subscriptionItem}>
          <div className={styles.subscriptionIcon}>N</div>
          <p className={styles.subscriptionName}>Netflix</p>
        </div>
        <div className={styles.tableItemValue}>Monthly</div>
        <div className={styles.tableItemValue}>Jun 15, 2025</div>
        <div className={styles.subscriptionItemPrice}>$15.99</div>
        <div
          className={`${styles.subscriptionItemStatus} ${isPositive ? styles.positive : styles.negative}`}
        >
          <button
            className={styles.subscriptionItemStatusSwitch}
            onClick={() => setIsPositive((prev) => !prev)}
          >
            <div />
          </button>
          {isPositive ? "Active" : "Paused"}
        </div>
      </div>

      <div className={styles.tableItem}>
        <div className={styles.subscriptionItem}>
          <div className={styles.subscriptionIcon}>N</div>
          <p className={styles.subscriptionName}>Netflix</p>
        </div>
        <div className={styles.tableItemValue}>Monthly</div>
        <div className={styles.tableItemValue}>Jun 15, 2025</div>
        <div className={styles.subscriptionItemPrice}>$15.99</div>
        <div
          className={`${styles.subscriptionItemStatus} ${isPositive ? styles.positive : styles.negative}`}
        >
          <button
            className={styles.subscriptionItemStatusSwitch}
            onClick={() => setIsPositive((prev) => !prev)}
          >
            <div />
          </button>
          {isPositive ? "Active" : "Paused"}
        </div>
      </div>
    </section>
  );
}
