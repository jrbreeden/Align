import { useState } from 'react';
import { Spring, animated } from 'react-spring';
import SectionView from '../../SectionView/SectionView';
import LineItems from '../../LineItems/LineItems';

export default function HistorySection({
  section,
  workHistory,
  setWorkHistory,
  workHistories,
  setWorkHistories,
  workHistorySubSection,
  setWorkHistorySubSection,
}) {
  const [showLineItemInput, setShowLineItemInput] = useState(false);
  const [lineItem, setLineItem] = useState({});
  

  const handleLineItemSubmit = (e) => {
    e.preventDefault();
    setShowLineItemInput(false);
    setWorkHistorySubSection((prevState) => ({
      ...prevState,
      lineItems: [...prevState.lineItems, { body: lineItem.body, priority: 0 }],
    }));
    setLineItem('');
  };

  return (
    <Spring
      from={{ opacity: 0, marginLeft: -1000 }}
      to={{ opacity: 1, marginLeft: 0 }}
    >
      {(props) => (
        <animated.div style={props}>
          <div className="flex flex-col bg-orange-200 p-4 w-screen mx-8">
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
                  value={workHistory.cond.priority}
                  onChange={(e) => {
                    setWorkHistory((prevState) => {
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
                workHistorySubSection?.lineItems?.length > 0 ? '3' : '2'
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
                      value={workHistorySubSection.priority}
                      onChange={(e) =>
                        setWorkHistorySubSection((prevState) => ({
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
                      value={workHistorySubSection.subHeader}
                      onChange={(e) =>
                        setWorkHistorySubSection((prevState) => ({
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
                      value={workHistorySubSection.dateStart}
                      onChange={(e) =>
                        setWorkHistorySubSection((prevState) => ({
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
                      value={workHistorySubSection.dateEnd}
                      onChange={(e) =>
                        setWorkHistorySubSection((prevState) => ({
                          ...prevState,
                          dateEnd: e.target.value,
                        }))
                      }
                      id="dateEnd"
                      type="date"
                    />
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
                      <button
                        className="w-1/2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
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
                    </form>
                  )}
                  {showLineItemInput ? null : (
                    <button
                      className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                      type="button"
                      onClick={() => {
                        setWorkHistory((prevState) => ({
                          ...prevState,
                          header: workHistory.header,
                          subSections: workHistorySubSection,
                        }));

                        setWorkHistories((prevState) => [
                          ...prevState,
                          workHistorySubSection,
                        ]);
                        console.log(workHistory.header);
                        // Reset ProjectSubSection
                        setWorkHistorySubSection({
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
              {workHistorySubSection?.lineItems?.length > 0 && (
                <LineItems items={workHistorySubSection.lineItems} />
              )}

              <div className="order-1">
                <SectionView
                  section={section}
                  sectionVar={workHistory}
                  sectionList={workHistories}
                  sectionListSetter={setWorkHistories}
                />
              </div>
            </div>
          </div>
        </animated.div>
      )}
    </Spring>
  );
}
