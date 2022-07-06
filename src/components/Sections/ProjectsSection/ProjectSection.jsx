import { useState } from 'react';
import { Spring, animated } from 'react-spring';
import ProjectsView from '../../Review/ProjectsView/ProjectsView';

export default function ProjectsSection({
  section,
  project,
  setProject,
  projects,
  setProjects,
  projectSubSection,
  setProjectSubSection,
  projectLineItem,
  setProjectLineItem,
}) {
  const [showLineItemInput, setShowLineItemInput] = useState(false);
  const [lineItem, setLineItem] = useState('');
  // const handleChange = (e) => {
  //   setProject((prevProject) => ({
  //     ...prevProject,
  //     [e.target.name]: e.target.value,
  //   }));
  // };
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
                    Sub Section
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="header"
                    value={projectSubSection.subHeader}
                    onChange={(e) =>
                      setProjectSubSection((prevState) => ({
                        ...prevState,
                        subHeader: e.target.value,
                      }))
                    }
                    id="header"
                    type="text"
                    placeholder="Enter Sub Section"
                  />
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 mt-4"
                    htmlFor="header"
                  >
                    Date Start
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="dateStart"
                    value={projectSubSection.dateStart}
                    onChange={(e) =>
                      setProjectSubSection((prevState) => ({
                        ...prevState,
                        dateStart: e.target.value,
                      }))
                    }
                    id="dateStart"
                    type="date"
                  />

                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 mt-4"
                    htmlFor="header"
                  >
                    Date End
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="dateEnd"
                    value={projectSubSection.dateEnd}
                    onChange={(e) =>
                      setProjectSubSection((prevState) => ({
                        ...prevState,
                        dateEnd: e.target.value,
                      }))
                    }
                    id="dateEnd"
                    type="date"
                  />
                  {projectSubSection?.lineItems?.length > 0 && (
                    <div class="flex justify-center mt-4">
                      <ul class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
                        {projectSubSection?.lineItems?.map((item) => (
                          <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {showLineItemInput && (
                    <div>
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 mt-4"
                        htmlFor="header"
                      >
                        Line Item
                      </label>
                      <textarea
                        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                        name="lineItem"
                        value={lineItem}
                        onChange={(e) => setLineItem(e.target.value)}
                        rows="4"
                        placeholder="Enter Line item"
                      ></textarea>
                    </div>
                  )}
                </div>
                {showLineItemInput ? null : (
                  <button
                    className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={() => setShowLineItemInput(true)}
                  >
                    Add New Line Item
                  </button>
                )}
                {showLineItemInput && (
                  <button
                    className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={() => {
                      setShowLineItemInput(false);
                      setProjectSubSection((prevState) => ({
                        ...prevState,
                        lineItems: [...prevState.lineItems, lineItem],
                      }));
                      setLineItem('');
                    }}
                  >
                    Submit Line Item
                  </button>
                )}
                {showLineItemInput ? null : (
                  <button
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                    type="button"
                    onClick={() => {
                      setProject((prevProject) => ({
                        ...prevProject,
                        header: project.header,
                        subSections: projectSubSection,
                      }));

                      setProjects((prevProjects) => [
                        ...prevProjects,
                        projectSubSection,
                      ]);
                      console.log(project.header);
                      // Reset ProjectSubSection
                      setProjectSubSection({
                        subHeader: '',
                        dateStart: '',
                        dateEnd: '',
                        lineItems: [],
                      });
                    }}
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
            <ProjectsView
              section={section}
              project={project}
              projects={projects}
            />
          </div>
        </animated.div>
      )}
    </Spring>
  );
}
