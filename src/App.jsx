import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import CaseStudyPreviews from "./sections/CaseStudyPreviews";
import Certifications from "./sections/Certifications";
import ContactCTA from "./sections/Contact";
import Experience from "./sections/Experience";
import FeaturedProjects from "./sections/FeaturedProjects";
{/*import GithubSpotlight from "./sections/GithubSpotlight";*/}
import Hero from "./sections/Hero";
import ProofBar from "./sections/ProofBar";
import Skills from "./sections/Skills";
import ThemeToggle from "./components/ui/FloatingThemeToggle";
import FloatingThemeToggle from "./components/ui/FloatingThemeToggle";

function App() {
  return (
    <>
      <Navbar />
      <FloatingThemeToggle />
      <Hero />
      <ProofBar />
      <FeaturedProjects />
      <CaseStudyPreviews />
      <Skills />
      <Experience />
      <Certifications />
      {/*<GithubSpotlight />*/}
      <ContactCTA />
      <Footer />
    </>
  );
}

export default App;
