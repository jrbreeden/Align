import React from 'react';
import ResumeViewer from '../../components/ResumeViewer/ResumeViewer';
import SectionInput from '../../components/SectionInput/SectionInput';
import Stepper from '../../components/Stepper.jsx/Stepper';
import Layout from '../../components/Layout/Layout';

export default function ConstructionPage({ user }) {
  return (
    <Layout active={'construction'} user={user}>
      <div className="bg-gray-200 h-screen">
        <div>
          <Stepper />
        </div>
        <div className="flex items-center justify-center gap-x-96 mt-24">
          <SectionInput />
          <ResumeViewer />
        </div>
        <div className="mx-8 mt-40">
          <div className="flex p-2 justify-between">
            <div>
              <button
                className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-gray-200  
        bg-gray-100 
        text-gray-700 
        border duration-200 ease-in-out 
        border-gray-600 transition"
              >
                Previous
              </button>
            </div>
            <div className="flex items-center">
              <h1 className="text-gray-500 font-semibold text-xl">
                Step 3/4 - Experience
              </h1>
            </div>
            <div className="flex">
              <button
                className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-200  
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition"
              >
                Skip
              </button>
              <button
                className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-600  
        bg-teal-600 
        text-teal-100 
        border duration-200 ease-in-out 
        border-teal-600 transition"
              >
                Mark as Complete
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 items-center justify-center mt-32 text-gray-500 font-semibold text-xl">
          {/* <h1>Step 1/3 - Resume Breakout</h1> */}
          {/* <button
            class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Mark as Complete
          </button> */}
        </div>
      </div>
    </Layout>
  );
}
