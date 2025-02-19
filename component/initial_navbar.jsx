import React from "react";
import styles from "../styles/initial_navbar.module.css";
import Link from "next/link";
import Image from "next/image";
export default function InitialNavbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_right_segment}>
        <Link href="/">
          <Image
            src="/hcmut_logo.png"
            alt="logo"
            width={50}
            height={50}
          ></Image>
        </Link>
        <div className={styles.navbar_link}>
          <ul>
            <li>
              <Link href="/" className={styles.active_link}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/apps">Apps</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.navbar_left_segment}>
        <ul>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
