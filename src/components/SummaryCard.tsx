import styles from "@/styles/summaryCard.module.css";

interface SummaryCardParam {
  title: string;
  amount: number;
  change?: number;
  subName?: string;
  date?: string;
  dueInDays?: number;
}

function formatDue(days: number) {
  if (days === 0) return "Due today";
  if (days === 1) return "Due tomorrow";
  return `Due in ${days} days`;
}

export default function SummaryCard({
  title,
  amount,
  change,
  subName,
  date,
  dueInDays,
}: SummaryCardParam) {
  return (
    <div className={styles.summaryCard}>
      <p className={styles.title}>{title}</p>{" "}
      <div className={styles.mainItem}>
        {subName ? (
          <>
            <h2 className={styles.subscriptionName}>{subName}</h2>
            {date && (
              <p className={styles.subscriptionInfo}>
                <span>${amount.toFixed(2)}</span> · <span>{date}</span>
              </p>
            )}
          </>
        ) : (
          <p className={styles.amount}>${amount.toFixed(2)}</p>
        )}
      </div>
      {change ? (
        <p className={styles.changeSubtitle}>
          <span className={change >= 0 ? styles.positive : styles.negative}>
            ↑ {change}%
          </span>
          <span>from last month</span>
        </p>
      ) : dueInDays !== undefined ? (
        <p className={styles.subscriptionSubtitle}>{formatDue(dueInDays)}</p>
      ) : (
        <p className={subName ? styles.subscriptionSubtitle : styles.subtitle}>
          Active plans only
        </p>
      )}
    </div>
  );
}
