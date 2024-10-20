import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import styles from "../styles/TabButton.module.css";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? styles.buttonActive : styles.buttonInactive;

  return (
    <button onClick={selectTab} className={`${styles.button} ${buttonClasses}`}>
      <p>{children}</p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className={styles.motionDiv}
      ></motion.div>
    </button>
  );
};

export default TabButton;
