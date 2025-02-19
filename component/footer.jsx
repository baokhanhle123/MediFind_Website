import React from "react";
import Image from "next/image";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoSection}>
          <div className={styles.logoSection_sub}>
            <Image src="/hcmut_logo.png" alt="BK Logo" width={60} height={60} />
            <h2>HCMUT Smart Printing Service</h2>
          </div>
          <p>
            The Student Smart Printing Service (HCMUT-SSPS) is designed to meet
            the printing needs of students across the campuses of Ho Chi Minh
            City University of Technology (HCMUT)
          </p>
          <p>©HCMUT LTD 2024. All rights reserved</p>
        </div>
        <div className={styles.linksSection}>
          <div className={styles.linkGroup}>
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Testimonials</li>
              <li>Apps</li>
            </ul>
          </div>
          <div className={styles.linkGroup}>
            <h3>Help</h3>
            <ul>
              <li>Help center</li>
              <li>Contact support</li>
              <li>Instructions</li>
              <li>How it works</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
