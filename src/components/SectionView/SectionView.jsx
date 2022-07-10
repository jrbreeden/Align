import { useState } from 'react';
import { FiDelete } from 'react-icons/fi';
import { BiEdit } from 'react-icons/bi';

export default function SectionView({
  section,
  sectionVar,
  sectionList,
  sectionListSetter,
  setSubSection,
  setLineItem,
  setSubSectionIdx,
}) {
  return (
    <div
      className="h-auto w-full bg-gray-200 py-8 px-4 border border-2 border-gray-300 drop-shadow-2xl rounded items-center justify-center"
      style={{ minWidth: '30vw', minHeight: '55vh' }}
    >
      <ul className="w-full text-sm font-medium text-gray-900 border border-gray-200 rounded-lg dark:bg-gray-300 dark:border-gray-400 dark:text-black">
        <li className="w-full px-4 py-2 text-xl rounded-t-lg dark:border-gray-600 text-center font-bold oswald">
          {section} Data Preview
        </li>
      </ul>
      <div className="font-sans flex flex-col bg-blue-darker w-full drop-shadow-2xl gap-y-4 mt-4 cursor-pointer">
        {sectionList?.length !== 0 &&
          sectionList?.map((sec, index) => {
            const checkPriority = (priority) => {
              switch (parseInt(priority)) {
                case 0:
                  return '[#169ed9]';

                case 1:
                  return '[#FF4000]';

                case 2:
                  return '[#FFB627]';

                default:
                  return null;
              }
            };
            return (
              <div
                className={`overflow-hidden bg-white rounded w-full shadow-lg  leading-normal bg-${checkPriority(
                  sec.cond.priority
                )}`}
              >
                <div className="block group hover:bg-blue p-4 border-b">
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-lg mb-1 text-black oswald">
                      {sec.subHeader}
                    </p>
                    <div className="buttons flex gap-x-4">
                      <button
                        onClick={() => {
                          // sectionListSetter((prevState) =>
                          //   [...prevState].filter((sec, idx) => idx !== index)
                          // );
                          console.log('test');
                          setSubSection(sec);
                          setSubSectionIdx(sec._id);
                          console.log(sec);
                        }}
                      >
                        <BiEdit size={'1.5em'} />
                      </button>
                      <button
                        onClick={() => {
                          sectionListSetter((prevState) =>
                            [...prevState].filter((sec, idx) => idx !== index)
                          );
                        }}
                      >
                        <FiDelete size={'1.5em'} />
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center mt-2">
                    <ul className="bg-white rounded-lg border border-gray-200 w-full text-gray-900">
                      {sec.lineItems?.length !== 0 &&
                        sec.lineItems?.map((item) => {
                          return (
                            <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                              - {item.body}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
