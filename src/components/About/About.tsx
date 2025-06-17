import SectionHeader from "./SectionHeader";
import CareerObjective from "./CareerObjective";
import ContactInfo from "./ContactInfo";
import MilitaryService from "./MilitaryService";
import Education from "./Education";
import GrowthAndVision from "./GrowthAndVision";
import WorkExperience from "./WorkExperience";
import Internships from "./Internships";
import RevealWrapper from "../RevealWrapper";

const About = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <RevealWrapper delay={0.1}>
          <SectionHeader title="About Me" />
        </RevealWrapper>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Content */}
          <div className="space-y-6">
            {/* Career Objective */}
            <RevealWrapper delay={0.2}>
              <CareerObjective />
            </RevealWrapper>

            {/* Contact Info */}
            <RevealWrapper delay={0.3}>
              <ContactInfo />
            </RevealWrapper>
          </div>

          {/* Right side - Military Service & Education */}
          <div className="space-y-6">
            {/* Military Service */}
            <RevealWrapper delay={0.4}>
              <MilitaryService />
            </RevealWrapper>

            {/* Education */}
            <RevealWrapper delay={0.5}>
              <Education />
            </RevealWrapper>
          </div>
        </div>

        {/* Growth & Vision Section */}
        <RevealWrapper delay={0.6}>
          <GrowthAndVision />
        </RevealWrapper>

        {/* Work Experience Section */}
        <RevealWrapper delay={0.7}>
          <WorkExperience />
        </RevealWrapper>

        {/* Internships Section */}
        <RevealWrapper delay={0.8}>
          <Internships />
        </RevealWrapper>
      </div>
    </section>
  );
};

export default About;
