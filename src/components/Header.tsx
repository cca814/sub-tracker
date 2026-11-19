import Image from "next/image";
import styles from "@/styles/header.module.css";
import siteIcon from "@/assets/siteIcon.svg";
import searchIcon from "@/assets/searchIcon.svg";
import plusIcon from "@/assets/plusIcon.svg";

interface HeaderProps {
  onAddSubscriptionButtonClick: () => void;
}

export default function Header({
  onAddSubscriptionButtonClick,
}: HeaderProps) {
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
      <button
        type="button"
        className={styles.plusButton}
        onClick={onAddSubscriptionButtonClick}
      >
        <Image
          src={plusIcon}
          alt=""
          className={styles.plusIcon}
          height={16}
          width={16}
        />
        <p className={styles.plusDescription}>Add Subscription</p>
      </button>
    </header>
  );
}
