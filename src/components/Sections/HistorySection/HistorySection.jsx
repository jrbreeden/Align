import { useState, useEffect } from 'react';
import { Spring, animated } from 'react-spring';
import SectionView from '../../SectionView/SectionView';
import LineItems from '../../LineItems/LineItems';
import Modal from '../../Modal/Modal';

export default function HistorySection({
  section,
  workHistory,
  setWorkHistory,
  workHistories,
  setWorkHistories,
  workHistorySubSection,
  setWorkHistorySubSection,
  register,
  handleSubmit,
  setValue,
  errors,
  lineTagger,
  userTags,
  setUserTags,
}) {
  const [showLineItemInput, setShowLineItemInput] = useState(false);
  const [lineItem, setLineItem] = useState({ body: '', priority: 0 });
  const [isUpdating, setIsUpdating] = useState(false);
  const [lineItemIdx, setLineItemIdx] = useState(null);
  const [subSectionIdx, setSubSectionIdx] = useState(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const resetSubSectionsFields = () => {
    setValue('subHeader', '');
    setValue('dateStart', '');
    setValue('dateEnd', '');
    setValue('priority', 0);
  };

  const handlePriorityLevelChange = (e) => {
    setWorkHistorySubSection((prevState) => ({
      ...prevState,
      cond: {
        ...prevState.cond,
        priority: parseInt(e.target.value),
      },
    }));
  };

  const handleSubSectionChange = (e) => {
    setWorkHistorySubSection((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubSectionSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      setWorkHistory((prevState) => ({
        ...prevState,
        header: workHistory.header,
        subSections: workHistorySubSection,
      }));
      let subSectionExists = false;
      workHistories.forEach((work) => {
        if (work._id === subSectionIdx) {
          subSectionExists = true;
        }
      });

      if (!subSectionExists) {
        setWorkHistories((prevState) => [...prevState, workHistorySubSection]);
      } else {
        setWorkHistories((prevState) => [
          ...prevState.map((work) => {
            if (work._id === subSectionIdx) {
              // work.lineItems = workHistorySubSection.lineItems;
              work = workHistorySubSection;
            }
            return work;
          }),
        ]);
      }
      setIsUpdating(false);
      setSubSectionIdx(null);
      setLineItem({ body: '', priority: 0 });
      console.log(workHistory.header);
      // Reset ProjectSubSection
      setWorkHistorySubSection({
        cond: { priority: 0, items: 0 },
        subHeader: '',
        dateStart: '',
        dateEnd: '',
        lineItems: [],
      });
      setModalIsOpen(true);
      resetSubSectionsFields();
      setTimeout(() => setModalIsOpen(false), 1000);
    }
  };

  const handleLineItemSubmit = (e) => {
    e.preventDefault();
    const tags = lineTagger(lineItem.body);
    let newTags = [ ...userTags ];
    tags.forEach((tag) => {
      newTags.push(tag)
    });
    setUserTags(newTags);
    setShowLineItemInput(false);
    setWorkHistorySubSection((prevState) => ({
      ...prevState,
      lineItems: [
        ...prevState.lineItems,
        {
          body: lineItem.body,
          priority: Number(lineItem.priority),
          tags: tags,
        },
      ],
    }));
    setLineItem('');
  };

  useEffect(() => {
    if (workHistorySubSection) {
      setValue('subHeader', workHistorySubSection.subHeader);
      setValue('dateStart', workHistorySubSection.dateStart.split('T')[0]);
      setValue('dateEnd', workHistorySubSection.dateEnd.split('T')[0]);
      setValue('priority', workHistorySubSection.cond.priority);
    }

    // if (projectSubSection.lineItems.length === 0) {
    //   errors.lineItems = {
    //     message: 'Must have atleast 1 line item',
    //     type: 'required',
    //   };
    // }
    // console.log(errors)
  }, [workHistorySubSection]);

  return (
    <Spring
      from={{ opacity: 0, marginLeft: -1000 }}
      to={{ opacity: 1, marginLeft: 0 }}
    >
      {(props) => (
        <animated.div style={props}>
          <div className="flex flex-col p-4 mx-8 rounded">
            {/* section priority level  */}
            {/* <div className="w-1/6 bg-pink-400">
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
            </div> */}
            {/* MAIN DIV !!! */}
            <div
              className={`grid grid-cols-${
                workHistorySubSection?.lineItems?.length > 0 ? '3' : '2'
              } gap-x-20 justify-center rounded
              }`}
            >
              <div
                className="h-auto w-full bg-gray-200 p-8 border border-2 border-gray-300 drop-shadow-2xl rounded"
                style={{ minWidth: '30vw', minHeight: '55vh' }}
              >
                <ul className="w-full text-sm font-medium text-gray-900 border border-gray-200 rounded-lg dark:bg-gray-300 dark:border-gray-400 dark:text-black">
                  <li className="w-full px-4 py-2 rounded-t-lg dark:border-gray-600 text-center font-bold text-xl oswald tracking-widest">
                    {section === 'PersonalInfo'
                      ? 'Personal Info'.toUpperCase()
                      : section}{' '}
                    - Subsection
                  </li>
                </ul>

                {/* PROJECT SECTION FORM */}
                <div className="form mt-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 oswald"
                    htmlFor="header"
                  >
                    Priority Level
                  </label>
                  <div className="inline-block relative w-full mr-2 mt-2 mb-2">
                    <select
                      className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-gray-500"
                      name="priority"
                      // value={workHistorySubSection.priority}
                      // onChange={handlePriorityLevelChange}
                      {...register('priority', {
                        value: workHistorySubSection.cond.priority,
                        onChange: handlePriorityLevelChange,
                      })}
                    >
                      <option value={0}>Normal</option>
                      <option value={1}>High Priority</option>
                      <option value={2}>Essential</option>
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
                  <form onSubmit={handleSubmit(handleSubSectionSubmit)}>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 oswald"
                        htmlFor="header"
                      >
                        Job title<span className='text-red-600'>*</span>
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="header"
                        // value={workHistorySubSection.subHeader}
                        // onChange={handleSubSectionChange}
                        {...register('subHeader', {
                          value: workHistorySubSection.subHeader,
                          onChange: handleSubSectionChange,
                          required: 'Sub Header is required!',
                          minLength: 3,
                          maxLength: 60,
                        })}
                        id="header"
                        type="text"
                        placeholder="Enter Job Title"
                      />
                      {errors?.subHeader?.type === 'required' && (
                        <p className="text-white bg-red-500 text-center mt-1 rounded font-bold px-2 py-1 text-sm">
                          This field is required
                        </p>
                      )}
                      {errors?.subHeader?.type === 'minLength' && (
                        <p className="text-white bg-red-500 text-center mt-1 rounded font-bold px-2 py-1 text-sm">
                          Must have atleast 3 characters
                        </p>
                      )}
                      {errors?.subHeader?.type === 'maxLength' && (
                        <p className="text-white bg-red-500 text-center mt-1 rounded font-bold px-2 py-1 text-sm">
                          Cannot exceed 60 characters
                        </p>
                      )}
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 mt-4 oswald"
                        htmlFor="header"
                      >
                        Date Start<span className='text-red-600'>*</span>
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="dateStart"
                        // value={workHistorySubSection.dateStart.split('T')[0]}
                        // onChange={handleSubSectionChange}
                        {...register('dateStart', {
                          value: workHistorySubSection.dateStart.split('T')[0],
                          onChange: handleSubSectionChange,
                          required: 'Date Start is required!',
                        })}
                        id="dateStart"
                        type="date"
                      />
                      {errors?.dateStart?.type === 'required' && (
                        <p className="text-white bg-red-500 text-center mt-1 rounded font-bold px-2 py-1 text-sm">
                          This field is required
                        </p>
                      )}

                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 mt-4 oswald"
                        htmlFor="header"
                      >
                        Date End<span className='text-red-600'>*</span>
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="dateEnd"
                        // value={workHistorySubSection.dateEnd.split('T')[0]}
                        // onChange={handleSubSectionChange}
                        {...register('dateEnd', {
                          value: workHistorySubSection.dateEnd.split('T')[0],
                          onChange: handleSubSectionChange,
                          required: 'Date End is required!',
                        })}
                        id="dateEnd"
                        type="date"
                      />
                      {errors?.dateEnd?.type === 'required' && (
                        <p className="text-white bg-red-500 text-center mt-1 rounded font-bold px-2 py-1 text-sm">
                          This field is required
                        </p>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      {showLineItemInput ? null : (
                        <button
                          className="w-5/12 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 mb-2 bg-blue-500 shadow-lg shadow-blue-500/50 transition duration-200 ease-in-out hover:scale-110"
                          type="submit"
                        >
                          Submit
                        </button>
                      )}
                      {showLineItemInput ? null : (
                        <button
                          className="w-5/12 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-green-500 shadow-lg shadow-green-500/50 transition duration-200 ease-in-out hover:scale-110"
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
                    </div>
                  </form>

                  {showLineItemInput && (
                    <form onSubmit={handleLineItemSubmit}>
                      {showLineItemInput && (
                        <>
                          <div className="w-full">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="prio"
                            >
                              Line Item Priority Level
                            </label>
                            <div className="inline-block relative w-full mr-2 mb-2">
                              <select
                                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-gray-500"
                                name="priority"
                                value={lineItem.priority}
                                onChange={(e) =>
                                  setLineItem((prevLineItem) => ({
                                    ...prevLineItem,
                                    priority: Number(e.target.value),
                                  }))
                                }
                              >
                                <option value={0}>Normal</option>
                                <option value={1}>High Priority</option>
                                <option value={2}>Essential</option>
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
                                setLineItem((prevLineItem) => ({
                                  ...prevLineItem,
                                  body: e.target.value,
                                }))
                              }
                              rows="4"
                              placeholder="Enter Line item"
                              required={true}
                            ></textarea>
                          </div>
                        </>
                      )}
                      <div className="flex items-center justify-between mt-4">
                        {isUpdating ? null : (
                          <button
                            className="w-5/12 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-green-500 shadow-lg shadow-green-500/50 transition duration-200 ease-in-out hover:scale-110"
                            type="submit"
                          >
                            Submit
                          </button>
                        )}
                        {isUpdating && (
                          <button
                            className="w-5/12 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-blue-500 shadow-lg shadow-blue-500/50 transition duration-200 ease-in-out hover:scale-110"
                            type="button"
                            onClick={() => {
                              // alert(lineItem.body);
                              setWorkHistorySubSection((prevState) => {
                                setShowLineItemInput(false);
                                return {
                                  ...prevState,
                                  lineItems: prevState.lineItems.map(
                                    (item, idx) => {
                                      if (idx === lineItemIdx) {
                                        item.body = lineItem.body;
                                        item.priority = lineItem.priority;
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
                          className="w-5/12 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-red-500 shadow-lg shadow-red-500/50 transition duration-200 ease-in-out hover:scale-110"
                          type="button"
                          onClick={() => {
                            setShowLineItemInput(false);
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>

              {/* LINE ITEMS */}
              {workHistorySubSection?.lineItems?.length > 0 && (
                <LineItems
                  items={workHistorySubSection.lineItems}
                  setLineItem={setLineItem}
                  setShowLineItemInput={setShowLineItemInput}
                  setIsUpdating={setIsUpdating}
                  setLineItemIdx={setLineItemIdx}
                />
              )}

              {workHistories?.length > 0 && (
                <div>
                  <SectionView
                    section={section}
                    sectionVar={workHistory}
                    sectionList={workHistories}
                    sectionListSetter={setWorkHistories}
                    setSubSection={setWorkHistorySubSection}
                    setSubSectionIdx={setSubSectionIdx}
                  />
                </div>
              )}
            </div>
          </div>
          {modalIsOpen && (
            <Modal isShow={modalIsOpen} closeModal={setModalIsOpen} />
          )}
        </animated.div>
      )}
    </Spring>
  );
}
