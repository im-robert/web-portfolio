import Navbar from "@/components/features/Navbar";
import HeroSection from "@/components/features/HeroSection";
import TechStack from "@/components/features/TechStack";
import ExperienceTimeline from "@/components/features/ExperienceTimeline";
import ProjectGallery from "@/components/features/ProjectGallery";
import ContactSection from "@/components/features/ContactSection";
import Footer from "@/components/features/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TechStack />
        <ExperienceTimeline />
        <ProjectGallery />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
