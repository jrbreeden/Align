import { Spring, animated } from 'react-spring';
import SectionView from '../../SectionView/SectionView';
import LineItems from '../../LineItems/LineItems';
import Modal from '../../Modal/Modal';
import { useState, useEffect } from 'react';

export default function EducationSection({
  section,
  education,
  setEducation,
  educations,
  setEducations,
  educationSubSection,
  setEducationSubSection,
  register,
  handleSubmit,
  setValue,
  errors,
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
    setEducationSubSection((prevState) => ({
      ...prevState,
      cond: {
        ...prevState.cond,
        priority: parseInt(e.target.value),
      },
    }));
  };

  const handleSubSectionChange = (e) => {
    setEducationSubSection((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubSectionSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      setEducation((prevState) => ({
        ...prevState,
        header: education.header,
        subSections: educationSubSection,
      }));
      let subSectionExists = false;
      educations.forEach((edu) => {
        if (edu._id === subSectionIdx) {
          subSectionExists = true;
        }
      });

      if (!subSectionExists) {
        setEducations((prevState) => [...prevState, educationSubSection]);
      } else {
        setEducations((prevState) => [
          ...prevState.map((edu) => {
            if (edu._id === subSectionIdx) {
              edu = educationSubSection;
            }
            return edu;
          }),
        ]);
      }
      setIsUpdating(false);
      setSubSectionIdx(null);
      setLineItem({ body: '', priority: 0 });
      console.log(education.header);
      // Reset ProjectSubSection
      setEducationSubSection({
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
    setShowLineItemInput(false);
    setEducationSubSection((prevState) => ({
      ...prevState,
      lineItems: [...prevState.lineItems, { body: lineItem.body, priority: 0 }],
    }));
    setLineItem('');
  };

  useEffect(() => {
    if (educationSubSection) {
      setValue('subHeader', educationSubSection.subHeader);
      setValue('dateStart', educationSubSection.dateStart.split('T')[0]);
      setValue('dateEnd', educationSubSection.dateEnd.split('T')[0]);
      setValue('priority', educationSubSection.cond.priority);
    }

    // if (educationSubSection.lineItems.length === 0) {
    //   errors.lineItems = {
    //     message: 'Must have atleast 1 line item',
    //     type: 'required',
    //   };
    // }
    // console.log(errors)
  }, [educationSubSection]);

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
                  value={education.cond.priority}
                  onChange={(e) => {
                    setEducation((prevState) => {
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
                educationSubSection?.lineItems?.length > 0 ? '3' : '2'
              } gap-x-20 justify-center rounded`}
            >
              <div className="h-auto w-full bg-gray-200 p-8 border border-2 border-gray-300 drop-shadow-2xl rounded">
                <ul className="w-full text-sm font-medium text-gray-900 border border-gray-200 rounded-lg dark:bg-gray-300 dark:border-gray-400 dark:text-black">
                  <li className="w-full px-4 py-2 rounded-t-lg dark:border-gray-600 text-center font-bold text-xl">
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
                      // value={educationSubSection.priority}
                      // onChange={handlePriorityLevelChange}
                      {...register('priority', {
                        value: educationSubSection.cond.priority,
                        onChange: handlePriorityLevelChange,
                      })}
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
                  <form onSubmit={handleSubmit(handleSubSectionSubmit)}>
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
                        // value={educationSubSection.subHeader}
                        // onChange={handleSubSectionChange}
                        {...register('subHeader', {
                          value: educationSubSection.subHeader,
                          onChange: handleSubSectionChange,
                          required: 'Sub Header is required!',
                          minLength: 3,
                          maxLength: 40,
                        })}
                        id="header"
                        type="text"
                        placeholder="Enter Sub Section"
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
                          Cannot exceed 40 characters
                        </p>
                      )}
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 mt-4"
                        htmlFor="header"
                      >
                        Date Start
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="dateStart"
                        // value={educationSubSection.dateStart.split('T')[0]}
                        // onChange={handleSubSectionChange}
                        {...register('dateStart', {
                          value: educationSubSection.dateStart.split('T')[0],
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
                        className="block text-gray-700 text-sm font-bold mb-2 mt-4"
                        htmlFor="header"
                      >
                        Date End
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="dateEnd"
                        // value={educationSubSection.dateEnd.split('T')[0]}
                        // onChange={handleSubSectionChange}
                        {...register('dateEnd', {
                          value: educationSubSection.dateEnd.split('T')[0],
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
                      <div className="flex items-center justify-between mt-4">
                        {isUpdating && lineItemIdx !== null ? null : (
                          <button
                            className="w-5/12 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-green-500 shadow-lg shadow-green-500/50 transition duration-200 ease-in-out hover:scale-110"
                            type="submit"
                          >
                            Submit
                          </button>
                        )}
                        {isUpdating && lineItemIdx !== null && (
                          <button
                            className="w-5/12 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-blue-500 shadow-lg shadow-blue-500/50 transition duration-200 ease-in-out hover:scale-110"
                            type="button"
                            onClick={() => {
                              // alert(lineItem.body);
                              setEducationSubSection((prevState) => {
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
              {educationSubSection?.lineItems?.length > 0 && (
                <LineItems
                  items={educationSubSection.lineItems}
                  setLineItem={setLineItem}
                  setShowLineItemInput={setShowLineItemInput}
                  setIsUpdating={setIsUpdating}
                  setLineItemIdx={setLineItemIdx}
                />
              )}

              <div className="order-1">
                <SectionView
                  section={section}
                  sectionVar={education}
                  sectionList={educations}
                  sectionListSetter={setEducations}
                  setSubSection={setEducationSubSection}
                  setSubSectionIdx={setSubSectionIdx}
                />
              </div>
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
