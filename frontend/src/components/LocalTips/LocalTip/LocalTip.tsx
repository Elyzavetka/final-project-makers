import React from "react";
import styles from "./LocalTip.module.css";

const LocalTip = ({ el }) => {
  return (
    <>
      <button className={styles.tipItem}>
        <span className={styles.geolocation}>📌 {el.geolocation}</span>
        <span className={styles.description}>{el.description}</span>
        <span className={styles.userName}>{el.name}</span>
      </button>
    </>
  );
};

export default LocalTip;
