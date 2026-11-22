import styles from "@/styles/addSubscriptionCard.module.css";
import { useEffect, useState } from "react";
import DatePicker from "./DatePicker";
import {
  type addSubscriptionItemInterface,
  BillingCycleType,
  SubscriptionItemStatus,
} from "@/utils/types";
import { addSubscription } from "@/app/actions";

interface AddSubscriptionCardProps {
  onClose: () => void;
}

export default function AddSubscriptionCard({
  onClose,
}: AddSubscriptionCardProps) {
  const [formData, setFormData] = useState<addSubscriptionItemInterface>({
    subscription_name: "",
    billing_cycle: BillingCycleType.Monthly,
    next_billing_date: "",
    price: 0,
    subscription_status: SubscriptionItemStatus.Active,
  });
  const isMonthly = formData.billing_cycle === BillingCycleType.Monthly;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const handleAddSubscription = async () => {
    try {
      await addSubscription(formData);

      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.addSubscriptionCard}>
        <div className={styles.header}>
          <h2 className={styles.title}>Add subscription</h2>
          <p className={styles.subtitle}>
            Add a new recurring expense to your tracker.
          </p>
        </div>
        <div className={styles.form}>
          <div className={styles.inputContainer}>
            <label htmlFor="name" className={styles.inputLabel}>
              Service name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="e.g. Netflix"
              className={styles.input}
              value={formData.subscription_name}
              onChange={(e) => {
                const subscription_name = e.target.value;
                setFormData((prev) => ({ ...prev, subscription_name }));
              }}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="price" className={styles.inputLabel}>
              Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              min="0"
              step="0.01"
              placeholder="0.00"
              className={styles.input}
              onChange={(e) => {
                const price = e.target.valueAsNumber;
                setFormData((prev) => ({
                  ...prev,
                  price: Number.isFinite(price) ? price : 0,
                }));
              }}
            />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>Billing cycle</label>
            <button
              type="button"
              className={styles.cycleSwitch}
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  billing_cycle:
                    prev.billing_cycle === BillingCycleType.Monthly
                      ? BillingCycleType.Yearly
                      : BillingCycleType.Monthly,
                }))
              }
            >
              <div className={!isMonthly ? styles.moveRight : ""} />
              <p className={isMonthly ? styles.positive : styles.negative}>
                Monthly
              </p>
              <p className={isMonthly ? styles.negative : styles.positive}>
                Yearly
              </p>
            </button>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="date" className={styles.inputLabel}>
              Next billing date
            </label>
            <DatePicker
              id="date"
              name="date"
              value={formData.next_billing_date}
              onChange={(date) =>
                setFormData((prev) => ({ ...prev, next_billing_date: date }))
              }
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <button
            type="button"
            className={`${styles.button} ${styles.cancel}`}
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className={`${styles.button} ${styles.submit}`}
            onClick={handleAddSubscription}
          >
            Save subscription
          </button>
        </div>
      </div>
    </div>
  );
}
