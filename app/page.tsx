import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import PortfolioSection from "../components/PortfolioSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ExpertiseSection from "../components/ExpertiseSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <AboutSection />
      <ExpertiseSection />
      <PortfolioSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
