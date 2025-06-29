import "./App.css";
import NavbarMain from "./components/navbar/NavbarMain.jsx";
import HeroMain from "./components/HeroSection/HeroMain.jsx";
import HeroGradient from "./components/HeroSection/HeroGradient.jsx";
import AboutMeMain from "./components/AboutMe/AboutMeMain.jsx";
// import HelperSec from "./components/Helpersec.jsx";
import SkillMain from "./components/Skills/SkillMain.jsx";
import ProjectsMain from "./components/Projects/ProjectsMain.jsx";
import FooterMain from "./components/Footer/FooterMain.jsx";
import ContactMe from "./components/ContactME/ContactMe.jsx";
import ExperienceMain from "./components/Experience/ExperienceMain.jsx";
import EducationMain from "./components/Education/EducationMain.jsx";
function App() {
  return (
    <main>
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <AboutMeMain />
      <SkillMain />
      <EducationMain />
      <ExperienceMain />
      {/* <HelperSec /> */}
      <ProjectsMain />
      <ContactMe />
      <FooterMain />
    </main>
  );
}

export default App;
