import Image from "next/image";
import styles from "@/styles/header.module.css";
import siteIcon from "@/assets/siteIcon.svg";
import searchIcon from "@/assets/searchIcon.svg";
import AddSubscriptionControl from "./AddSubscriptionControl";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.siteInfo}>
        <Image
          src={siteIcon}
          alt=""
          className={styles.siteIcon}
          height={28}
          width={28}
        />
        <p className={styles.siteTitle}>SubTrack</p>
      </div>
      <div className={styles.searchBar}>
        <Image
          src={searchIcon}
          alt=""
          className={styles.searchIcon}
          height={16}
          width={16}
        />
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search"
        />
      </div>
      <AddSubscriptionControl />
    </header>
  );
}
