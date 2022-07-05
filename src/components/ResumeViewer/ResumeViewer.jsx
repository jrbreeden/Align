import {useState} from 'react';

export default function ResumeViewer({
  section,
  email,
  phone,
  linkedIn,
  github,
  portfolio,
}) {

  const [contents, setContents] = useState(testData)
  return (
    <div className="h-auto w-96 min-h-full bg-gray-100 p-4 border border-2 border-gray-300 drop-shadow-2xl rounded">
      <ul className="w-full text-sm font-medium text-gray-900 border border-gray-200 rounded-lg dark:bg-gray-300 dark:border-gray-400 dark:text-black">
        <li className="w-full px-4 py-2 rounded-t-lg dark:border-gray-600 text-center font-bold">
          {section === 'PersonalInfo' ? 'Personal Info'.toUpperCase() : section}{' '}
          REVIEW
        </li>
      </ul>
      <div className="font-sans flex items-center justify-center bg-blue-darker w-full py-8 drop-shadow-2xl">
        <div className="overflow-hidden bg-white rounded max-w-xs w-full shadow-lg  leading-normal">
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
          {linkedIn !== '' && (
            <div className="block group hover:bg-blue p-4 border-b">
              <p className="font-bold text-lg mb-1 text-black ">
                LinkedIn Profile
              </p>
              <p className="text-grey-darker mb-2 ">{linkedIn}</p>
            </div>
          )}
          {github !== '' && (
            <div className="block group hover:bg-blue p-4 border-b">
              <p className="font-bold text-lg mb-1 text-black ">
                Github Profile
              </p>
              <p className="text-grey-darker mb-2 ">{github}</p>
            </div>
          )}
          {portfolio !== '' && (
            <div className="block group hover:bg-blue p-4 border-b">
              <p className="font-bold text-lg mb-1 text-black ">Portfolio</p>
              <p className="text-grey-darker mb-2 ">{portfolio}</p>
            </div>
          )}
        </div>
      </div>
      {/* <div className="items mt-4">
        <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-100 dark:border-gray-400 dark:text-gray-500">
          <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 bg-gray-300 text-black">
            Email: {email}
          </li>
          <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600 bg-gray-300 text-black">
            Phone: {phone}
          </li>
          <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600 bg-gray-300 text-black">
            LinkedIn: {linkedIn}
          </li>
          <li className="w-full px-4 py-2 rounded-b-lg bg-gray-300 text-black">
            Github: {github}
          </li>
          <li className="w-full px-4 py-2 rounded-b-lg bg-gray-300 text-black">
            Portfolio: {portfolio}
          </li>
        </ul>
      </div> */}
    </div>
  );
}
