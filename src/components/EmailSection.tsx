"use client";

import React, { useState, FormEvent } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/EmailSection.module.css";

interface FormData {
  email: string;
  subject: string;
  message: string;
}

const EmailSection: React.FC = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data: FormData = {
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setEmailSubmitted(true);
        setError(null);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (err) {
      console.error("Error sending email:", err);
      setError("An error occurred while sending the email.");
      setEmailSubmitted(false);
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.gradientBackground}></div>
      <div className="z-10">
        <h5 className={styles.header}>Let&apos;s Connect</h5>
        <p className={styles.description}>
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className={styles.socials}>
          <Link href="https://github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className={styles.successMessage}>Email sent successfully!</p>
        ) : (
          <>
            {error && <p className={styles.errorMessage}>{error}</p>}
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className={styles.input}
                  placeholder="smsali@google.com"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className={styles.input}
                  placeholder="Just saying hi"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className={styles.textarea}
                  placeholder="Let's talk about..."
                />
              </div>
              <button type="submit" className={styles.button}>
                Send Message
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
