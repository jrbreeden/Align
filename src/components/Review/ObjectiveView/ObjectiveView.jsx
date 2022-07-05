import React from 'react';

export default function ObjectiveView({ section, objective: { title, body } }) {
  return (
    <div className="h-auto w-96 min-h-full bg-gray-100 p-4 border border-2 border-gray-300 drop-shadow-2xl rounded">
      <ul className="w-full text-sm font-medium text-gray-900 border border-gray-200 rounded-lg dark:bg-gray-300 dark:border-gray-400 dark:text-black">
        <li className="w-full px-4 py-2 rounded-t-lg dark:border-gray-600 text-center font-bold">
          {section === 'PersonalInfo'
            ? 'Personal Info'.toUpperCase()
            : section.toUpperCase()}{' '}
          DATA
        </li>
      </ul>
      <div className="font-sans flex items-center justify-center bg-blue-darker w-full py-8 drop-shadow-2xl">
        <div className="overflow-hidden bg-white rounded max-w-xs w-full shadow-lg  leading-normal">
          {title !== '' && (
            <div className="block group hover:bg-blue p-4 border-b">
              <p className="font-bold text-lg mb-1 text-black ">Title</p>
              <p className="text-grey-darker mb-2 ">{title}</p>
            </div>
          )}
          {body !== '' && (
            <div className="block group hover:bg-blue p-4 border-b">
              <p className="font-bold text-lg mb-1 text-black ">Body</p>
              <p className="text-grey-darker mb-2 ">{body}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
