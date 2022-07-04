// ! Modules
import { Spring, animated } from 'react-spring';
import { useState } from 'react';

// ! Components
import ResumeViewer from '../../components/ResumeViewer/ResumeViewer';
import Stepper from '../../components/Stepper.jsx/Stepper';
import Layout from '../../components/Layout/Layout';
import StepperNav from '../../components/StepperNav/StepperNav';
import PersonalInfoSection from '../../components/Sections/PersonalInfoSection/PersonalInfoSection';
import ObjectiveSection from '../../components/Sections/ObjectiveSection/ObjectiveSection';
import SkillsSection from '../../components/Sections/SkillsSection/SkillsSection';
import ProjectsSection from '../../components/Sections/ProjectsSection/ProjectSection';
import HistorySection from '../../components/Sections/HistorySection/HistorySection';
import EducationSection from '../../components/Sections/EducationSection/EducationSection';

export default function ConstructionPage({ user }) {
  const [step, setStep] = useState(0);
  const steps = [
    'PersonalInfo',
    'Objective',
    'Skills',
    'Projects',
    'History',
    'Education',
  ];
  const [currentSection, setCurrentSection] = useState(steps[step]);
  const [sections, setSections] = useState({
    PersonalInfo: true,
    Objective: false,
    Skills: false,
    Projects: false,
    History: false,
    Education: false,
  });

  const renderSection = (section) => {
    switch (section) {
      case 'PersonalInfo':
        return <PersonalInfoSection section={section} />;

      case 'Objective':
        return <ObjectiveSection section={section} />;

      case 'Skills':
        return <SkillsSection section={section} />;

      case 'Projects':
        return <ProjectsSection section={section} />;

      case 'History':
        return <HistorySection section={section} />;

      case 'Education':
        return <EducationSection section={section} />;

      default:
        return null;
    }
  };

  return (
    <Layout active={'construction'} user={user}>
      <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0 }}
      >
        {(props) => (
          <animated.div style={props}>
            <div className="bg-gray-200 h-screen">
              <div>
                <Stepper
                  step={step}
                  steps={steps}
                  section={currentSection}
                  setSections={setSections}
                  sections={sections}
                />
              </div>
              <div className="flex items-center justify-center gap-x-96 mt-24">
                {renderSection(currentSection)}
                <ResumeViewer />
              </div>
              <StepperNav
                step={step}
                setStep={setStep}
                setCurrentSection={setCurrentSection}
                steps={steps}
                currentSection={currentSection}
                setSections={setSections}
                sections={sections}
              />
            </div>
          </animated.div>
        )}
      </Spring>
    </Layout>
  );
}
