import Dashboard from "@/components/Dashboard";
import styles from "./page.module.css";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Dashboard />
    </div>
  );
}
