"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../styles/HeroSection.module.css";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.grid}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.motionDiv}
        >
          <h1 className={styles.heading}>
            <span className={styles.gradientText}>
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "S. M. Shan-e-Ali",
                1000,
                "Web Developer",
                1000,
                "UI/UX Designer",
                1000,
                "Full Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className={styles.paragraph}>
            &rdquo;I create responsive, user-friendly web applications using the latest technologies like TypeScript, React, Next, and Tailwind CSS. Passionate about building digital experiences that make a difference.&rdquo;
          </p>
          <div>
            <Link href="/contact" className={styles.button}>
              Hire Me
            </Link>
            <Link href="https://static-resume-eta.vercel.app/" className={styles.buttonSecondary}>
              <span>My Resume</span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.imageContainer}
        >
          <div className={styles.imageWrapper}>
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className={styles.image}
              width={380}
              height={380}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
