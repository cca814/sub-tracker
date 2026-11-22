import { getSubscriptions } from "@/app/actions";
import styles from "@/styles/subscriptionTable.module.css";
import SubscriptionStatusSwitch from "./SubscriptionStatusSwitch";
import { subscriptionItemType } from "@/utils/types";

export default async function SubscriptionTable({
  subscriptionData,
}: {
  subscriptionData: subscriptionItemType[];
}) {
  return (
    <section className={styles.subscriptionTable}>
      <div className={styles.header}>
        <h1 className={styles.title}>All subscriptions</h1>
        <p className={styles.subtitle}>{subscriptionData.length} services</p>
      </div>
      <div className={styles.tableHeader}>
        <span>Service</span>
        <span>Billing cycle</span>
        <span>Next billing</span>
        <span>Price</span>
        <span>Status</span>
      </div>
      {subscriptionData.map((item) => {
        return (
          <div key={item.id} className={styles.tableItem}>
            <div className={styles.subscriptionItem}>
              <div className={styles.subscriptionIcon}>
                {item.subscription_name[0].toUpperCase()}
              </div>
              <p className={styles.subscriptionName}>
                {item.subscription_name}
              </p>
            </div>
            <div className={styles.tableItemValue}>{item.billing_cycle}</div>
            <div className={styles.tableItemValue}>
              {item.next_billing_date}
            </div>
            <div className={styles.subscriptionItemPrice}>${item.price}</div>
            <SubscriptionStatusSwitch
              id={item.id}
              status={item.subscription_status}
              name={item.subscription_name}
            />
          </div>
        );
      })}
    </section>
  );
}
