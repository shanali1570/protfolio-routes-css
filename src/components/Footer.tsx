import React from "react";
import styles from "../styles/Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span>S.M.SHAN-E-ALI</span>
        <p className={styles.textSecondary}>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
