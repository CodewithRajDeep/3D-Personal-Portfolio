import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const drugRef = useRef(null);
  const financeRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(() => {
    
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [drugRef.current, financeRef.current, videoRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={drugRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project-1.png" alt="Medicare Platform" />
            </div>
            <div className="text-content">
              <h2>
                MediCare Drug Discovery Research Platform
              </h2>
              <p className="text-white-50 md:text-xl">
                A medical compound analysis and drug discovery platform for researchers to discover and analyze compounds and its compositions.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={financeRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project-2.png"
                  alt="Finance Management Platform"
                />
              </div>
              <h2>FinanceFlow: Finance Management Platform</h2>
              <p className="text-white-50 md:text-xl">
               A platform for businesses to manage their finances, track expenses, and make payments from one place.
              </p>
            </div>

            <div className="project" ref={videoRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project-3.png" alt="AI Video App" />
              </div>
              <h2>AI Based Video Streaming Platform</h2>
              <p>
                A platform that uses AI LLM models to provide personalized video streaming services to users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;