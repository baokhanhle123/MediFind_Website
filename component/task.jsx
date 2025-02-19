"use client";

import React from "react";
import styles from "../styles/task.module.css";

const Task = ({ task }) => {
  return (
    <div
      className={`${styles.taskContainer} ${
        styles[task.priority.toLowerCase()]
      }`}
    >
      <div className={styles.header}>
        <h2 className={styles.taskName}>{task.name}</h2>
      </div>
      <div className={styles.description}>
        <p>{task.description}</p>
      </div>
      <div className={styles.assignees}>
        <h3>Người thực hiện:</h3>
        <ul>
          {task.assignees.map((assignee, index) => (
            <li key={index}>{assignee}, </li>
          ))}
        </ul>
      </div>
      <div className={styles.assigner}>
        <h3>Người kiểm tra:</h3>
        <p>{task.assigner}</p>
      </div>
      <p className={styles.ticket_id}>{task.ticket_id}</p>
    </div>
  );
};

export default Task;
