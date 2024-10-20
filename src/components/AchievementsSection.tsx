"use client";
import React from "react";
import dynamic from "next/dynamic";
import styles from "../styles/AchievementsSection.module.css";

// Dynamically import react-animated-numbers without server-side rendering
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

// Define the type for achievement objects
interface Achievement {
  metric: string;
  value: string;
  prefix?: string;
  postfix?: string;
}

// Array of achievements
const achievementsList: Achievement[] = [
  {
    metric: "Projects",
    value: "10",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,0",
  },
  {
    metric: "Awards",
    value: "3",
  },
  {
    metric: "Years",
    value: "2",
  },
];

// AchievementsSection component
const AchievementsSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {achievementsList.map((achievement, index) => (
          <div key={index} className={styles.achievement}>
            <h2 className={styles.value}>
              {achievement.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value.replace(/,/g, ""))}
                locale="en-US"
                className={styles.value}
              />
              {achievement.postfix}
            </h2>
            <p className={styles.metric}>{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
