import styles from "@/styles/summaryCard.module.css";

interface SummaryCardParam {
  title: string;
  amount: number;
  change?: number;
  subName?: string;
  date?: string;
}

export default function SummaryCard({
  title,
  amount,
  change,
  subName,
  date,
}: SummaryCardParam) {
  return (
    <div className={styles.summaryCard}>
      <p className={styles.title}>{title}</p>{" "}
      <div className={styles.mainItem}>
        {subName ? (
          <>
            <h2 className={styles.subscriptionName}>{subName}</h2>
            <p className={styles.subscriptionInfo}>
              <span>{amount}</span> · <span>{date}</span>
            </p>
          </>
        ) : (
          <p className={styles.amount}>${amount}</p>
        )}
      </div>
      {change ? (
        <p className={styles.changeSubtitle}>
          <span className={change > 0 ? styles.positive : styles.negative}>
            ↑ {change}%
          </span>
          <span>from last month</span>
        </p>
      ) : subName ? (
        <p className={styles.subscriptionSubtitle}>Due in 3 days</p>
      ) : (
        <p className={styles.subtitle}>Active plans only</p>
      )}
    </div>
  );
}
