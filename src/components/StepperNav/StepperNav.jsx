/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

export default function StepperNav({
  step,
  setStep,
  currentSection,
  setCurrentSection,
  steps,
  sections,
  setSections,
}) {
  useEffect(() => {
    setCurrentSection(steps[step]);
    console.log(steps[step]);
  }, [step, currentSection]);

  useEffect(() => {
    console.log(sections);
  }, [sections]);

  return (
    <div className="mx-8 mt-24">
      <div className="flex p-2 justify-between">
        <div>
          <button
            className={`text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-gray-200  
        bg-gray-100 
        text-gray-700 
        border duration-200 ease-in-out 
        border-gray-600 transition ${step === 0 && 'cursor-not-allowed'}`}
            onClick={() => {
              setStep((prevStep) => prevStep - 1);
              console.log('bogo', steps[step]);
              setSections((prevSections) => ({
                ...prevSections,
                [`${steps[step]}`]: false,
              }));
            }}
            disabled={step === 0}
          >
            Previous
          </button>
        </div>
        <div className="flex items-center">
          <h1 className="text-gray-500 font-semibold text-xl">
            Step {step + 1}/6 -{' '}
            {steps[step] === 'PersonalInfo' ? 'Personal Info' : steps[step]}
          </h1>
        </div>
        <div className="flex">
          {step === 5 ? (
            <button
              className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-blue-600  
        bg-blue-600 
        text-blue-100 
        border duration-200 ease-in-out 
        border-blue-600 transition"
            >
              Submit
            </button>
          ) : (
            <button
              className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-600  
        bg-teal-600 
        text-teal-100 
        border duration-200 ease-in-out 
        border-teal-600 transition"
              onClick={() => {
                setStep((prevStep) => prevStep + 1);
                setSections((prevSections) => ({
                  ...prevSections,
                  [`${steps[step + 1]}`]: true,
                }));
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
