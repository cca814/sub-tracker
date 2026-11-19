import styles from "@/styles/dashboard.module.css";
import SummaryCard from "./SummaryCard";
import SubscriptionTable from "./SubscriptionTable";

export default function Dashboard() {
  return (
    <main className={styles.dashboard}>
      <div className={styles.dashboardTitleContainer}>
        <h1 className={styles.dashboardTitle}>Subscriptions</h1>
        <div className={styles.dashboardSubtitle}>
          <p>Recurring expenses, in one place.</p>
          <p>June 2025</p>
        </div>
      </div>
      <section className={styles.summarySection}>
        <SummaryCard title="Monthly spend" amount={62.97} change={4.2} />
        <SummaryCard title="Daily average" amount={2.1} />
        <SummaryCard
          title="Next renewal"
          subName="Netflix"
          amount={15.99}
          date="June 15"
        />
      </section>

      <SubscriptionTable />
    </main>
  );
}
