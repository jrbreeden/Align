/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

export default function Stepper({
  step,
  steps,
  section,
  setSections,
  sections,
}) {
  const [stepperSection, setStepperSection] = useState({});

  useEffect(() => {
    setStepperSection(sections);
  }, [section]);

  return (
    <>
      <div className="mx-8 p-4">
        <div className="flex items-center">
          <div className="flex items-center text-teal-300 relative">
            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-bookmark"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-300 font-bold">
              Personal Info
            </div>
          </div>
          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
              stepperSection.Statement ? 'border-teal-300' : 'border-gray-800'
            }`}
          ></div>
          <div
            className={`flex items-center ${
              stepperSection.Statement ? 'text-teal-300' : 'text-gray-800'
            } relative`}
          >
            <div
              className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2  ${
                stepperSection.Statement ? 'border-teal-300' : 'border-gray-800'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>
            <div
              className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase ${
                stepperSection.Statement ? 'text-teal-300' : 'text-gray-800'
              } font-bold`}
            >
              Statement
            </div>
          </div>
          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
              stepperSection.Skills ? 'border-teal-300' : 'border-gray-800'
            }`}
          ></div>
          <div
            className={`flex items-center ${
              stepperSection.Skills ? 'text-teal-300' : 'text-gray-800'
            } relative`}
          >
            <div
              className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2  ${
                stepperSection.Skills ? 'border-teal-300' : 'border-gray-800'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <div
              className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase ${
                stepperSection.Skills ? 'text-teal-300' : 'text-gray-800'
              } font-bold`}
            >
              Skills
            </div>
          </div>
          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
              stepperSection.Projects ? 'border-teal-300' : 'border-gray-800'
            }`}
          ></div>
          <div
            className={`flex items-center ${
              stepperSection.Projects ? 'text-teal-300' : 'text-gray-800'
            } relative`}
          >
            <div
              className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2  ${
                stepperSection.Projects ? 'border-teal-300' : 'border-gray-800'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                />
              </svg>
            </div>
            <div
              className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase ${
                stepperSection.Projects ? 'text-teal-300' : 'text-gray-800'
              } font-bold`}
            >
              Projects
            </div>
          </div>

          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
              stepperSection.History ? 'border-teal-300' : 'border-gray-800'
            }`}
          ></div>
          <div
            className={`flex items-center ${
              stepperSection.History ? 'text-teal-300' : 'text-gray-800'
            } relative`}
          >
            <div
              className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2  ${
                stepperSection.History ? 'border-teal-300' : 'border-gray-800'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <div
              className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase ${
                stepperSection.History ? 'text-teal-300' : 'text-gray-800'
              } font-bold`}
            >
              Work History
            </div>
          </div>

          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
              stepperSection.Education ? 'border-teal-300' : 'border-gray-800'
            }`}
          ></div>
          <div
            className={`flex items-center ${
              stepperSection.Education ? 'text-teal-300' : 'text-gray-800'
            } relative`}
          >
            <div
              className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2  ${
                stepperSection.Education ? 'border-teal-300' : 'border-gray-800'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            <div
              className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase ${
                stepperSection.Education ? 'text-teal-300' : 'text-gray-800'
              } font-bold`}
            >
              Education
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
