import React from "react";
import styles from "../styles/ProjectTag.module.css";

interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? `${styles.button} ${styles.textSelected}`
    : `${styles.button} ${styles.textDefault}`;

  return (
    <button className={buttonStyles} onClick={() => onClick(name)}>
      {name}
    </button>
  );
};

export default ProjectTag;
