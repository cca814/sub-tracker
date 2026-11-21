"use client";

import { useState } from "react";
import Image from "next/image";
import AddSubscriptionCard from "./AddSubscriptionCard";
import plusIcon from "@/assets/plusIcon.svg";
import styles from "@/styles/header.module.css";

export default function AddSubscriptionControl() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={styles.plusButton}
        onClick={() => setIsOpen(true)}
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
      {isOpen && (
        <AddSubscriptionCard onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}
