import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ResumeViewer from '../../components/ResumeViewer/ResumeViewer';
import SectionInput from '../../components/SectionInput/SectionInput';

export default function ConstructionPage() {
  return (
    <>
      <div className="bg-gray-300 h-screen">
        <NavBar active={'construction'} />
        <div className="flex items-center justify-center gap-x-96 mt-40">
          <SectionInput />
          <ResumeViewer />
        </div>
        <div className="flex gap-x-4 items-center justify-center mt-52 text-gray-500 font-semibold text-xl">
          <h1>Step 1/3 - Resume Breakout</h1>
          <button
            class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Mark as Complete
          </button>
        </div>
      </div>
    </>
  );
}
