import { FiDelete } from 'react-icons/fi';
export default function HistoryView({
  section,
  workHistory,
  workHistories,
  setWorkHistories,
}) {
  return (
    <div className="h-auto w-96 min-h-full bg-gray-200 p-8 border border-2 border-gray-300 drop-shadow-2xl rounded">
      <div>
        <ul className="w-full text-sm font-medium text-gray-900 border border-gray-200 rounded-lg dark:bg-gray-300 dark:border-gray-400 dark:text-black">
          <li className="w-full px-4 py-2 rounded-t-lg dark:border-gray-600 text-center font-bold">
            {section.toUpperCase()} DATA
          </li>
        </ul>
        <div className="font-sans flex flex-col items-center justify-center bg-blue-darker w-full py-8 drop-shadow-2xl gap-y-4">
          {workHistories?.length !== 0 &&
            workHistories?.map((work, index) => {
              const checkPriority = (priority) => {
                switch (parseInt(priority)) {
                  case 0:
                    return '[#169ed9]';

                  case 1:
                    return '[#FFB627]';

                  case 2:
                    return '[#FF4000]';

                  default:
                    return null;
                }
              };
              return (
                <div
                  className={`overflow-hidden bg-white rounded max-w-xs w-full shadow-lg  leading-normal bg-${checkPriority(
                    work.cond.priority
                  )}`}
                >
                  <div className="block group hover:bg-blue p-4 border-b">
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-lg mb-1 text-black ">
                        {work.subHeader}
                      </p>
                      <button
                        onClick={() => {
                          setWorkHistories((prevState) =>
                            [...prevState].filter(
                              (project, idx) => idx !== index
                            )
                          );
                        }}
                      >
                        <FiDelete />
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
                        {work?.lineItems?.length !== 0 &&
                          work?.lineItems?.map((item) => (
                            <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                              - {item.body}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
