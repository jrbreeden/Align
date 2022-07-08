import { useState } from 'react';
import { Spring, animated } from 'react-spring';
import LineItems from '../../LineItems/LineItems';
// import ProjectsView from '../../Review/ProjectsView/ProjectsView';
import SectionView from '../../SectionView/SectionView';

export default function ProjectsSection({
  section,
  project,
  setProject,
  projects,
  setProjects,
  projectSubSection,
  setProjectSubSection,
}) {
  const [showLineItemInput, setShowLineItemInput] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [lineItem, setLineItem] = useState({ body: '', priority: 0 });
  const [lineItemIdx, setLineItemIdx] = useState(null);
  const [subSectionIdx, setSubSectionIdx] = useState(null);

  const handleSubSectionChange = (e) => {
    setProjectSubSection((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLineItemSubmit = (e) => {
    e.preventDefault();
    setShowLineItemInput(false);
    setProjectSubSection((prevState) => ({
      ...prevState,
      lineItems: [...prevState.lineItems, { body: lineItem.body, priority: 0 }],
    }));
    // projects.forEach((sub) => {
    //   if (sub._id !== subSectionIdx) {
    //     console.log(sub._id, subSectionIdx);

    //   } else {
    //     // setProjectSubSection(prevState => ({
    //     //   ...prevState,
    //     //   lineItems: [...prevState.lineItems, { body: lineItem.body, priority: 0 }]
    //     // }))
    //   }
    // });
    // setProjectSubSection((prevState) => ({
    //   ...prevState,
    //   lineItems: [...prevState.lineItems, projects.forEach(sub => {
    //     return sub._id === subSectionIdx ? { body: lineItem.body, priority: 0 }
    //   })],
    // }));
    setLineItem('');
  };

  return (
    <Spring
      from={{ opacity: 0, marginLeft: -1000 }}
      to={{ opacity: 1, marginLeft: 0 }}
    >
      {(props) => (
        <animated.div style={props}>
          <div className="flex flex-col bg-red-500 p-4 w-screen mx-8">
            {/* section priority level  */}
            <div className="w-1/6 bg-pink-400">
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
                    setProject((prevState) => {
                      return {
                        ...prevState,
                        cond: {
                          ...prevState.cond,
                          priority: parseInt(e.target.value),
                        },
                      };
                    });
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
            {/* MAIN DIV !!! */}
            <div
              className={`grid grid-cols-${
                projectSubSection?.lineItems?.length > 0 ? '3' : '2'
              } bg-green-200 gap-x-20 justify-center`}
            >
              <div className="h-auto w-full bg-gray-200 p-8 border border-2 border-gray-300 drop-shadow-2xl rounded">
                <ul className="w-full text-sm font-medium text-gray-900 border border-gray-200 rounded-lg dark:bg-gray-300 dark:border-gray-400 dark:text-black">
                  <li className="w-full px-4 py-2 rounded-t-lg dark:border-gray-600 text-center font-bold">
                    {section === 'PersonalInfo'
                      ? 'Personal Info'.toUpperCase()
                      : section}{' '}
                    - Subsection
                  </li>
                </ul>

                {/* PROJECT SECTION FORM */}
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
                      name="subHeader"
                      value={projectSubSection.subHeader}
                      onChange={handleSubSectionChange}
                      id="subHeader"
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
                      onChange={handleSubSectionChange}
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
                      onChange={handleSubSectionChange}
                      id="dateEnd"
                      type="date"
                    />
                  </div>
                  {showLineItemInput ? null : (
                    <button
                      className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={() => {
                        setShowLineItemInput(true);
                        setLineItemIdx(null);
                        setLineItem({ body: '', priority: 0 });
                      }}
                    >
                      Add New Line Item
                    </button>
                  )}
                  {showLineItemInput && (
                    <form onSubmit={handleLineItemSubmit}>
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
                            value={lineItem.body}
                            onChange={(e) =>
                              setLineItem({ body: e.target.value, priority: 0 })
                            }
                            rows="4"
                            placeholder="Enter Line item"
                            required={true}
                          ></textarea>
                        </div>
                      )}
                      {isUpdating && lineItemIdx !== null ? null : (
                        <button
                          className="w-1/2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="submit"
                        >
                          Submit
                        </button>
                      )}
                      {isUpdating && lineItemIdx !== null && (
                        <button
                          className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="button"
                          onClick={() => {
                            // alert(lineItem.body);
                            setProjectSubSection((prevState) => {
                              setShowLineItemInput(false);
                              return {
                                ...prevState,
                                lineItems: prevState.lineItems.map(
                                  (item, idx) => {
                                    if (idx === lineItemIdx) {
                                      item.body = lineItem.body;
                                    }
                                    return item;
                                  }
                                ),
                              };
                            });
                          }}
                        >
                          Update
                        </button>
                      )}
                      <button
                        className="w-1/2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={() => {
                          setShowLineItemInput(false);
                        }}
                      >
                        Cancel
                      </button>
                    </form>
                  )}
                  {showLineItemInput ? null : (
                    <button
                      className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                      type="button"
                      onClick={() => {
                        setProject((prevState) => ({
                          ...prevState,
                          header: project.header,
                          subSections: projectSubSection,
                        }));
                        let subSectionExists = false;
                        projects.forEach((proj) => {
                          if (proj._id === subSectionIdx) {
                            subSectionExists = true;
                          }
                        });

                        if (!subSectionExists) {
                          setProjects((prevState) => [
                            ...prevState,
                            projectSubSection,
                          ]);
                        } else {
                          // setProjects((prevState) => [
                          //   ...prevState,
                          //   projectSubSection,
                          // ]);
                          alert(subSectionIdx)
                        }
                        setIsUpdating(false);
                        setSubSectionIdx(null);
                        setLineItem({ body: '', priority: 0 });
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

              {/* LINE ITEMS */}
              {projectSubSection?.lineItems?.length > 0 && (
                <LineItems
                  items={projectSubSection.lineItems}
                  setLineItem={setLineItem}
                  setShowLineItemInput={setShowLineItemInput}
                  setIsUpdating={setIsUpdating}
                  setLineItemIdx={setLineItemIdx}
                />
              )}

              <div className="order-1">
                <SectionView
                  section={section}
                  sectionVar={project}
                  sectionList={projects}
                  sectionListSetter={setProjects}
                  setSubSection={setProjectSubSection}
                  setSubSectionIdx={setSubSectionIdx}
                  // setLineItem={setLineItem}
                />
              </div>
            </div>
          </div>
        </animated.div>
      )}
    </Spring>
  );
}
