"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/student_info_bar.module.css";
import { UserContext } from "@/app/context/UserContext";
import { SpsoContext } from "@/app/context/SpsoContext";

export default function SpsoInfoBar() {
  const { user } = useContext(UserContext); // Access user context
  const { spsoData, loadSpsoData } = useContext(SpsoContext); // Access student context

  const [formattedDate, setFormattedDate] = useState("");

  // Load the student data when the user context updates
  useEffect(() => {
    if (user && user.role === "spso") {
      loadSpsoData(user.id); // Load student data based on student ID
    }
  }, [user]);

  // Format the date on component mount
  useEffect(() => {
    const today = new Date();
    setFormattedDate(
      today.toLocaleDateString("vi-VN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, []);

  if (!user || user.role !== "spso" || !spsoData) {
    return (
      <div className={styles.container}>
        <h3>Loading user information...</h3>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div>
        <h3>Xin chào, {spsoData.name}</h3>
        <p>Hôm nay là {formattedDate}</p>
      </div>
      <div className={styles.right_section}>
        <Image
          src="/avatar.png"
          alt="avatar"
          width={60}
          height={60}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
