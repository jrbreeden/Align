// import SectionInput from '../../SectionInput/SectionInput';
import { Spring, animated } from 'react-spring';
import StatementView from '../../Review/StatementView/StatementView';

export default function StatementSection({ section, statement, setStatement }) {
  const handleChange = (e) => {
    setStatement((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <Spring
        from={{ opacity: 0, marginLeft: -1000 }}
        to={{ opacity: 1, marginLeft: 0 }}
      >
        {(props) => (
          <animated.div style={props}>
            <div className="flex gap-x-60">
              <div className="h-auto w-96 min-h-full bg-gray-200 p-8 border border-2 border-gray-300 drop-shadow-2xl rounded">
                <div>
                  <ul className="w-full text-sm font-medium text-gray-900 border border-gray-200 rounded-lg dark:bg-gray-300 dark:border-gray-400 dark:text-black">
                    <li className="w-full px-4 py-2 rounded-t-lg dark:border-gray-600 text-center font-bold">
                      {section === 'PersonalInfo'
                        ? 'Personal Info'.toUpperCase()
                        : section.toUpperCase()}
                    </li>
                  </ul>
                </div>

                <div className="my-2 mt-8">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="title"
                    value={statement.title}
                    onChange={handleChange}
                    id="title"
                    type="text"
                    placeholder="Enter Title"
                  />
                </div>
                <div className="inline-block relative w-full mr-2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="body"
                  >
                    Body
                  </label>
                  <textarea
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    name="body"
                    value={statement.body}
                    onChange={handleChange}
                    rows="10"
                    placeholder="Enter Body"
                  ></textarea>
                </div>
                {/* <button
                  className="w-full mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Submit
                </button> */}
              </div>
              <StatementView section={section} statement={statement} />
            </div>
          </animated.div>
        )}
      </Spring>
    </>
  );
}
