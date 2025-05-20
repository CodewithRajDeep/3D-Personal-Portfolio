
import LogoSection from "./sections/LogoSection";
import NavBar from "./components/Navbar";
import FeatureCards from "./sections/FeatureCards";

import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Certificate from "./sections/Certificate";
import Testimonials from "./sections/Testimonials";

const App = () => (
  <>
   <NavBar/>
    <Hero/>
    <ShowcaseSection />
    <LogoSection/>
    <FeatureCards/>
    <ExperienceSection/>
    <TechStack/>
    <Certificate/>
    <Testimonials/>
  </>
);

export default App;