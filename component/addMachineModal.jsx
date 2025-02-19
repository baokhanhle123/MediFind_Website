"use client";

import React, { useState } from "react";
import styles from "../styles/AddMachineModal.module.css";

const AddMachineModal = ({ onClose, onAdd }) => {
  const [machineName, setMachineName] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!machineName || !location || !status) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    const newMachine = {
      id: Date.now(),
      name: machineName,
      location,
      pages: 10000,
      ink: 100,
      status,
    };

    onAdd(newMachine);
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Thêm máy in</h2>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label>Tên máy in</label>
            <input
              type="text"
              value={machineName}
              onChange={(e) => setMachineName(e.target.value)}
              placeholder="Nhập tên máy in"
            />
          </div>
          <div className={styles.field}>
            <label>Địa điểm</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Nhập địa điểm"
            />
          </div>
          <div className={styles.field}>
            <label>Trạng thái</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="">Chọn trạng thái</option>
              <option value="Sẵn sàng">Sẵn sàng</option>
              <option value="Ngưng hoạt động">Ngưng hoạt động</option>
              <option value="Hết giấy/mực">Hết giấy/mực</option>
              <option value="Đang được sử dụng">Đang được sử dụng</option>
            </select>
          </div>
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onClose}
            >
              Thoát
            </button>
            <button type="submit" className={styles.confirmButton}>
              Xác nhận
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMachineModal;
