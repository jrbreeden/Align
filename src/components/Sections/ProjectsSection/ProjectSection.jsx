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
          <div className="flex flex-col">
            {/* section priority level  */}
            <div className="w-1/4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="header"
              >
                Section Priority Level
              </label>
              <div className="inline-block relative w-full mr-2 mb-2">
                <select
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-gray-500"
                  name="priority"
                  value={project.cond.priority}
                  onChange={(e) => {
                    setProject((prevProject) => {
                      return {
                        ...prevProject,
                        cond: {
                          ...prevProject.cond,
                          priority: parseInt(e.target.value),
                        },
                      };
                    });

                    // setProjectSubSection((prevState) => {
                    //   return {
                    //     ...prevState,
                    //     cond: {
                    //       ...prevState.cond,
                    //       priority: parseInt(e.target.value),
                    //     },
                    //   };
                    // });
                  }}
                >
                  <option value={0}>Normal</option>
                  <option value={1}>Essential</option>
                  <option value={2}>High Priority</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex gap-x-60">
              <div className="h-auto w-96 min-h-full bg-gray-200 p-8 border border-2 border-gray-300 drop-shadow-2xl rounded">
                <ul className="w-full text-sm font-medium text-gray-900 border border-gray-200 rounded-lg dark:bg-gray-300 dark:border-gray-400 dark:text-black">
                  <li className="w-full px-4 py-2 rounded-t-lg dark:border-gray-600 text-center font-bold">
                    {section === 'PersonalInfo'
                      ? 'Personal Info'.toUpperCase()
                      : section}{' '}
                    - Subsection
                  </li>
                </ul>

                <div className="form mt-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="header"
                  >
                    Priority Level
                  </label>
                  <div className="inline-block relative w-full mr-2 mt-2 mb-2">
                    <select
                      className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-gray-500"
                      name="priority"
                      value={projectSubSection.priority}
                      onChange={(e) =>
                        setProjectSubSection((prevState) => ({
                          ...prevState,
                          cond: {
                            ...prevState.cond,
                            priority: parseInt(e.target.value),
                          },
                        }))
                      }
                    >
                      <option value={0}>Normal</option>
                      <option value={1}>Essential</option>
                      <option value={2}>High Priority</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
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
                      <div className="flex flex-col">
                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">
                          Line Items
                        </label>
                        <div className="flex justify-center">
                          <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
                            {projectSubSection?.lineItems?.map((item) => (
                              <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
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
                    <div className="flex">
                      <button
                        className="w-1/2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
                        Submit
                      </button>
                      <button
                        className="w-1/2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={() => {
                          setShowLineItemInput(false);
                        }}
                      >
                        Cancel
                      </button>
                    </div>
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
                          cond: { priority: 0, items: 0 },
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
          </div>
        </animated.div>
      )}
    </Spring>
  );
}
