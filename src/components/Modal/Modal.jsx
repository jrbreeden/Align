import React from 'react';
import { Spring, animated } from 'react-spring';

const Modal = ({ errors, isShow, closeModal }) => {
  return (
    <Spring
      from={{ opacity: 0, marginLeft: -1000 }}
      to={{ opacity: 1, marginLeft: 0 }}
    >
      {(props) => (
        <animated.div style={props}>
          <div
            className={`flex flex-col space-y-4 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none bg-gray-900 focus:outline-none  ${
              isShow ? null : 'hidden'
            }`}
          >
            <div className="flex flex-col p-8 bg-gray-800  border border-3 border-green-600 shadow-md hover:shodow-lg rounded-2xl">
              <div className="flex flex-col items-center justify-between">
                <div className="flex items-center">
                  <svg
                    className="w-16 h-16 rounded-xl p-3 border border-4 border-green-600 text-blue-400 bg-gray-900 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <div className="flex flex-col ml-3">
                    <div className="font-medium leading-none text-gray-100 text-4xl">
                      Submitted Successfully!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      )}
    </Spring>
  );
};

export default Modal;
