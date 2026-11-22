import styles from "@/styles/dashboard.module.css";
import SummaryCard from "./SummaryCard";
import SubscriptionTable from "./SubscriptionTable";
import { getSubscriptions } from "@/app/actions";
import { connection } from "next/server";
import { getSubscriptionSummary } from "@/utils/subscriptionSummary";

export default async function Dashboard() {
  await connection();

  const subscriptionData = await getSubscriptions();
  const { monthlySpend, dailyAverage, nextRenewal } =
    getSubscriptionSummary(subscriptionData);

  return (
    <main className={styles.dashboard}>
      <div className={styles.dashboardTitleContainer}>
        <h1 className={styles.dashboardTitle}>Subscriptions</h1>
        <div className={styles.dashboardSubtitle}>
          <p>Recurring expenses, in one place.</p>
          <p>
            {new Intl.DateTimeFormat("en-US", {
              month: "long",
              year: "numeric",
              timeZone: "Asia/Taipei",
            }).format(new Date())}
          </p>
        </div>
      </div>
      <section className={styles.summarySection}>
        <SummaryCard title="Monthly spend" amount={monthlySpend} />
        <SummaryCard title="Daily average" amount={dailyAverage} />
        {nextRenewal ? (
          <SummaryCard
            title="Next renewal"
            subName={nextRenewal.name}
            amount={nextRenewal.price}
            date={nextRenewal.date}
            dueInDays={nextRenewal.dueInDays}
          />
        ) : (
          <SummaryCard title="Next renewal" subName="None" amount={0} />
        )}
      </section>

      <SubscriptionTable subscriptionData={subscriptionData} />
    </main>
  );
}
