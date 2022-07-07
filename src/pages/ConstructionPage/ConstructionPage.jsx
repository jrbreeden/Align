/* eslint-disable react-hooks/exhaustive-deps */
// ! Modules
import { Spring, animated } from 'react-spring';
import { useEffect, useState } from 'react';

// ! Components
import Stepper from '../../components/Stepper.jsx/Stepper';
import Layout from '../../components/Layout/Layout';
import StepperNav from '../../components/StepperNav/StepperNav';
import PersonalInfoSection from '../../components/Sections/PersonalInfoSection/PersonalInfoSection';
import StatementSection from '../../components/Sections/StatementSection/StatementSection';
import SkillsSection from '../../components/Sections/SkillsSection/SkillsSection';
import ProjectsSection from '../../components/Sections/ProjectsSection/ProjectSection';
import HistorySection from '../../components/Sections/HistorySection/HistorySection';
import EducationSection from '../../components/Sections/EducationSection/EducationSection';

export default function ConstructionPage({ user }) {
  const [step, setStep] = useState(0);
  const steps = [
    'PersonalInfo',
    'Statement',
    'Skills',
    'Projects',
    'History',
    'Education',
  ];
  const [currentSection, setCurrentSection] = useState(steps[step]);
  const [sections, setSections] = useState({
    PersonalInfo: true,
    Statement: false,
    Skills: false,
    Projects: false,
    History: false,
    Education: false,
  });

  // SECTIONS STATES
  const [personal, setPersonal] = useState({
    name: '',
    email: '',
    phone: '',
    link1: '',
    link2: '',
    link3: '',
  });

  // OBJECTIVE/STATEMENT STATES
  const [statement, setStatement] = useState({
    header: '',
    body: '',
  });

  // SKILLS STATES
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState({ id: '', skill: '', priority: 0 });

  //* -------------------------------------------------------------------------- */
  //*                               PROJECTS STATES                              */
  //* -------------------------------------------------------------------------- */
  const [project, setProject] = useState({
    cond: { priority: 0, items: 0 },
    header: 'Projects',
    subSections: [],
    // subSections: [{subHeader: 'Time Travel Tour Guide', dateStart: '07/05/2022', dateEnd:'06/02/2202', lineItems: ['Traveled in time to tickle a walrus which with rich sponsors', 'Was impaled and had to give up on mission early']}],
  });

  const [projects, setProjects] = useState([]);
  const [projectSubSection, setProjectSubSection] = useState({
    cond: { priority: 0, items: 0 },
    subHeader: '',
    dateStart: '',
    dateEnd: '',
    lineItems: [],
  });
  // const [projectLineItem, setProjectLineItem] = useState({
  //   body: '',
  //   priority: 'normal',
  // });

  const projectSectionProps = {
    project,
    setProject,
    projects,
    setProjects,
    projectSubSection,
    setProjectSubSection,
    // projectLineItem,
    // setProjectLineItem,
  };

  //* -------------------------------------------------------------------------- */
  //*                             WORK HISTORY STATE                             */
  //* -------------------------------------------------------------------------- */

  const [workHistory, setWorkHistory] = useState({
    cond: { priority: 0, items: 0 },
    header: 'Work History',
    subSections: [],
  });

  const [workHistories, setWorkHistories] = useState([]);
  const [workHistorySubSection, setWorkHistorySubSection] = useState({
    cond: { priority: 0, items: 0 },
    subHeader: '',
    dateStart: '',
    dateEnd: '',
    lineItems: [],
  });

  // const [workHistoryLineItem, SetWorkHistoryLineItem] = useState({
  //   body: '',
  //   priority: 'normal',
  // });

  const workHistorySectionProps = {
    workHistory,
    setWorkHistory,
    workHistories,
    setWorkHistories,
    workHistorySubSection,
    setWorkHistorySubSection,
    // workHistoryLineItem,
    // SetWorkHistoryLineItem,
  };

  //* -------------------------------------------------------------------------- */
  //*                               EDUCATION STATE                              */
  //* -------------------------------------------------------------------------- */
  const [education, setEducation] = useState({
    cond: { priority: 0, items: 0 },
    header: 'Education',
    subSections: [],
  });

  const [educations, setEducations] = useState([]);
  const [educationSubSection, setEducationSubSection] = useState({
    cond: { priority: 0, items: 0 },
    subHeader: '',
    dateStart: '',
    dateEnd: '',
    lineItems: [],
  });

  const educationSectionProps = {
    education,
    setEducation,
    educations,
    setEducations,
    educationSubSection,
    setEducationSubSection,
    // workHistoryLineItem,
    // SetWorkHistoryLineItem,
  };

  //* -------------------------------------------------------------------------- */
  //*                               RESUME STATE                                 */
  //* -------------------------------------------------------------------------- */

  // ! RESUME STATE
  const [resume, setResume] = useState({
    personal,
    statement,
    skills,
    projects: {
      cond: { priority: project.cond.priority, items: projects.length },
      header: project.header,
      subsections: [...projects],
    },
    workHistory: {
      cond: {
        priority: workHistory.cond.priority,
        items: workHistories.length,
      },
      header: workHistory.header,
      subsections: [...workHistories],
    },
    education: {
      cond: {
        priority: education.cond.priority,
        items: educations.length,
      },
      header: education.header,
      subsections: [...educations],
    },
  });

  const renderSection = (section) => {
    switch (section) {
      case 'PersonalInfo':
        return (
          <PersonalInfoSection
            section={section}
            personal={personal}
            setPersonal={setPersonal}
          />
        );

      case 'Statement':
        return (
          <StatementSection
            section={section}
            statement={statement}
            setStatement={setStatement}
          />
        );

      case 'Skills':
        return (
          <SkillsSection
            section={section}
            skills={skills}
            setSkills={setSkills}
            skill={skill}
            setSkill={setSkill}
          />
        );

      case 'Projects':
        return <ProjectsSection section={section} {...projectSectionProps} />;

      case 'History':
        return (
          <HistorySection section={section} {...workHistorySectionProps} />
        );

      case 'Education':
        return (
          <EducationSection section={section} {...educationSectionProps} />
        );

      default:
        return null;
    }
  };

  useEffect(() => {
    setResume((prevResume) => ({
      ...prevResume,
      personal,
      statement,
      skills,
      projects: {
        cond: { priority: project.cond.priority, items: projects.length },
        header: project.header,
        subsections: [...projects],
      },
      workHistory: {
        cond: {
          priority: workHistory.cond.priority,
          items: workHistories.length,
        },
        header: workHistory.header,
        subsections: [...workHistories],
      },
      education: {
        cond: {
          priority: education.cond.priority,
          items: educations.length,
        },
        header: education.header,
        subsections: [...educations],
      },
    }));
    // console.log(resume);
  }, [
    personal,
    statement,
    skills,
    step,
    project,
    projects,
    projectSubSection,
    workHistory,
    workHistories,
    workHistorySubSection,
    education,
    educations,
    educationSubSection,
  ]);

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
              <div className="flex items-center justify-center gap-x-96 mt-20">
                {renderSection(currentSection)}
              </div>
              <StepperNav
                step={step}
                setStep={setStep}
                setCurrentSection={setCurrentSection}
                steps={steps}
                currentSection={currentSection}
                setSections={setSections}
                sections={sections}
                resume={resume}
              />
            </div>
          </animated.div>
        )}
      </Spring>
    </Layout>
  );
}
