import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "../styles/ProjectCard.module.css";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}) => {
  return (
    <div>
      <div
        className={`${styles.imageContainer} ${styles.imageBackground}`}
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div
          className={`${styles.overlay} group-hover:${styles.overlayVisible}`}
        >
          <Link href={gitUrl} className={styles.iconLink}>
            <CodeBracketIcon className={styles.icon} />
          </Link>
          <Link href={previewUrl} className={styles.iconLink}>
            <EyeIcon className={styles.icon} />
          </Link>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
