"use client";

import React from "react";
import styles from "../styles/student_navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SpsoNavbar() {
  const pathname = usePathname(); // Get the current path

  const navItems = [
    { href: "/spso/printers_management", label: "Quản lý máy in" },
    { href: "/spso/printing_history", label: "Lịch sử in" },
    { href: "/spso/payment_history", label: "Lịch sử thanh toán" },
    { href: "/spso/statistc", label: "Thống kê", hasNotification: true },
    { href: "/spso/task_management", label: "Quản lý công việc" },
    { href: "/spso/user_management", label: "Quản lý người dùng" },
  ];

  return (
    <div className={styles.container}>
      {/* Logo */}
      <div className={styles.logo}>
        <Image src="/hcmut_logo.png" alt="BK TP.HCM" width={80} height={80} />
      </div>

      {/* Navigation Links */}
      <div className={styles.navLinks}>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} passHref>
            <div
              className={`${styles.navItem} ${
                pathname === item.href ? styles.active : ""
              }`}
            >
              <span>{item.label}</span>
              {item.hasNotification && (
                <div className={styles.notificationBadge}>1</div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Logout Button */}
      <div className={styles.logoutButton}>
        <span>Logout</span>
      </div>
    </div>
  );
}
