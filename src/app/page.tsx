import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import EmailSection from "../components/EmailSection";
import AchievementsSection from "../components/AchievementsSection";
import styles from "../app/page.module.css"; // Import the module CSS

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.container}>
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
      
    </main>
  );
}
