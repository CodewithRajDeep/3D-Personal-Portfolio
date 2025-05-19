
import LogoSection from "./sections/LogoSection";
import NavBar from "./components/Navbar";
import FeatureCards from "./sections/FeatureCards";

import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";

const App = () => (
  <>
   <NavBar/>
    <Hero/>
    <ShowcaseSection />
    <LogoSection/>
    <FeatureCards/>
  </>
);

export default App;