"use client";
import Dashboard from "@/components/Dashboard";
import styles from "./page.module.css";
import Header from "@/components/Header";
import AddSubscriptionCard from "@/components/AddSubscriptionCard";
import { useState } from "react";

export default function Home() {
  const [isAddSubscriptionCardShow, setIsAddSubscriptionCardShow] =
    useState(false);
  return (
    <div className={styles.page}>
      <Header
        onAddSubscriptionButtonClick={() => setIsAddSubscriptionCardShow(true)}
      />
      <Dashboard />
      {isAddSubscriptionCardShow && (
        <AddSubscriptionCard
          onClose={() => setIsAddSubscriptionCardShow(false)}
        />
      )}
    </div>
  );
}
