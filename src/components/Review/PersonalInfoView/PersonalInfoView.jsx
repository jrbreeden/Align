import React from 'react';

export default function PersonalInfoView({
  section,
  name,
  email,
  phone,
  link1,
  link2,
  link3,
}) {
  return (
    <div className="h-auto w-96 min-h-full bg-gray-100 p-4 border border-2 border-gray-300 drop-shadow-2xl rounded">
      <ul className="w-full text-sm font-medium text-gray-900 border border-gray-200 rounded-lg dark:bg-gray-300 dark:border-gray-400 dark:text-black">
        <li className="w-full px-4 py-2 rounded-t-lg dark:border-gray-600 text-center font-bold">
          {section === 'PersonalInfo' ? 'Personal Info'.toUpperCase() : section}{' '}
          DATA
        </li>
      </ul>
      <div className="font-sans flex items-center justify-center bg-blue-darker w-full py-8 drop-shadow-2xl">
        <div className="overflow-hidden bg-white rounded max-w-xs w-full shadow-lg  leading-normal">
          {name !== '' && (
            <div className="block group hover:bg-blue p-4 border-b">
              <p className="font-bold text-lg mb-1 text-black ">Full Name</p>
              <p className="text-grey-darker mb-2 ">{name}</p>
            </div>
          )}
          {email !== '' && (
            <div className="block group hover:bg-blue p-4 border-b">
              <p className="font-bold text-lg mb-1 text-black ">Email</p>
              <p className="text-grey-darker mb-2 ">{email}</p>
            </div>
          )}
          {phone !== '' && (
            <div className="block group hover:bg-blue p-4 border-b">
              <p className="font-bold text-lg mb-1 text-black ">Phone</p>
              <p className="text-grey-darker mb-2 ">{phone}</p>
            </div>
          )}
          {link1 !== '' && (
            <div className="block group hover:bg-blue p-4 border-b">
              <p className="font-bold text-lg mb-1 text-black ">
                LinkedIn Profile
              </p>
              <p className="text-grey-darker mb-2 ">{link1}</p>
            </div>
          )}
          {link2 !== '' && (
            <div className="block group hover:bg-blue p-4 border-b">
              <p className="font-bold text-lg mb-1 text-black ">
                Github Profile
              </p>
              <p className="text-grey-darker mb-2 ">{link2}</p>
            </div>
          )}
          {link3 !== '' && (
            <div className="block group hover:bg-blue p-4 border-b">
              <p className="font-bold text-lg mb-1 text-black ">Portfolio</p>
              <p className="text-grey-darker mb-2 ">{link3}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
