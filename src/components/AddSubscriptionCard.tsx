import styles from "@/styles/addSubscriptionCard.module.css";
import { useEffect, useState } from "react";
import DatePicker from "./DatePicker";

interface AddSubscriptionCardProps {
  onClose: () => void;
}

export default function AddSubscriptionCard({
  onClose,
}: AddSubscriptionCardProps) {
  const [isMonthly, setIsMonthly] = useState(true);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

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
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="price" className={styles.inputLabel}>
              Price
            </label>
            <input
              id="price"
              name="price"
              type="text"
              placeholder="0.00"
              className={styles.input}
            />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>Billing cycle</label>
            <button
              className={styles.cycleSwitch}
              onClick={() => setIsMonthly((prev) => !prev)}
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
            <DatePicker id="date" name="date" />
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
          <button className={`${styles.button} ${styles.submit}`}>
            Save subscription
          </button>
        </div>
      </div>
    </div>
  );
}
