import React from 'react';
import { Spring, animated } from 'react-spring';
import ProjectsView from '../../Review/ProjectsView/ProjectsView';

export default function ProjectsSection({
  section,
  project,
  setProject,
  projectSubSection,
  setProjectSubSection,
  projectLineItem,
  setProjectLineItem,
}) {
  const handleChange = (e) => {
    setProject((prevProject) => ({
      ...prevProject,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Spring
      from={{ opacity: 0, marginLeft: -1000 }}
      to={{ opacity: 1, marginLeft: 0 }}
    >
      {(props) => (
        <animated.div style={props}>
          <div className="flex gap-x-60">
            <div className="h-auto w-96 min-h-full bg-gray-200 p-8 border border-2 border-gray-300 drop-shadow-2xl rounded">
              <ul className="w-full text-sm font-medium text-gray-900 border border-gray-200 rounded-lg dark:bg-gray-300 dark:border-gray-400 dark:text-black">
                <li className="w-full px-4 py-2 rounded-t-lg dark:border-gray-600 text-center font-bold">
                  {section === 'PersonalInfo'
                    ? 'Personal Info'.toUpperCase()
                    : section}
                </li>
              </ul>

              <div className="form mt-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="header"
                  >
                    Header
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="header"
                    value={project.header}
                    onChange={handleChange}
                    id="header"
                    type="text"
                    placeholder="Enter Header"
                  />
                </div>

                <button
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </div>
            <ProjectsView section={section} project={project}/>
          </div>
        </animated.div>
      )}
    </Spring>
  );
}
