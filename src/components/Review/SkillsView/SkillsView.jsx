import React from 'react';

export default function SectionInput({ section, skills }) {
  const checkPriority = (priority) => {
    switch (priority) {
      case 'normal':
        return '[#169ed9]';

      case 'essential':
        return '[#ffd650]';

      case 'high':
        return '[#FF4000]';

      default:
        return null;
    }
  };
  return (
    <div className="h-auto w-96 min-h-full bg-gray-200 p-8 border border-2 border-gray-300 drop-shadow-2xl rounded">
      <div>
        <ul className="w-full text-sm font-medium text-gray-900 border border-gray-200 rounded-lg dark:bg-gray-300 dark:border-gray-400 dark:text-black">
          <li className="w-full px-4 py-2 rounded-t-lg dark:border-gray-600 text-center font-bold">
            {section === 'PersonalInfo'
              ? 'Personal Info'.toUpperCase()
              : section.toUpperCase()}{' '}
            DATA
          </li>
        </ul>
      </div>
      {skills?.length !== 0 ? (
        <div className="items">
          <div className="font-sans flex items-center justify-center bg-blue-darker w-full py-8 drop-shadow-2xl">
            <div className="overflow-hidden bg-white rounded max-w-xs w-full shadow-lg leading-normal">
              {skills?.map(({id, skill, priority }) => (
                <div
                  key={id}
                  className={`block group bg-${checkPriority(
                    priority
                  )} p-4 border-b`}
                >
                  <p className="font-bold text-sm text-black ">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
