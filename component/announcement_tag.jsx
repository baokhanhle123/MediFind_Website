import React from "react";
import Image from "next/image";
import styles from "../styles/announcement_tag.module.css";
import Link from "next/link";

const AnnouncementTag = () => {
  return (
    <Link href="/" className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src="/hcmut_logo.png" // Replace with the actual image path
          alt="Maintenance Notification"
          layout="fill"
          objectFit="cover"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>
          Printers at B4, B1 are currently down for maintenance
        </h3>
        <p className={styles.description}>
          In this case, the students who need for final exam today should move
          to another department ....
        </p>
        <p className={styles.readMore}>Read more →</p>
      </div>
    </Link>
  );
};

export default AnnouncementTag;
