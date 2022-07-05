import { v4 as uuidv4 } from 'uuid';
import SkillsView from '../../Review/SkillsView/SkillsView';
import { Spring, animated } from 'react-spring';

export default function PersonalInfoSection({
  section,
  skills,
  setSkills,
  skill,
  setSkill,
}) {
  const handleChange = (e) => {
    setSkill((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Spring
      from={{ opacity: 0, marginLeft: -1000 }}
      to={{ opacity: 1, marginLeft: 0 }}
    >
      {(props) => (
        <animated.div style={props}>
          <div className="flex gap-x-60">
            <div className="h-auto w-96 min-h-full bg-gray-200 p-8 border border-2 border-gray-300 drop-shadow-2xl rounded">
              <ul className="w-full text-sm font-medium text-gray-900 border border-gray-200 rounded-lg dark:bg-gray-300 dark:border-gray-400 dark:text-black">
                <li className="w-full px-4 py-2 rounded-t-lg dark:border-gray-600 text-center font-bold">
                  {section === 'PersonalInfo'
                    ? 'Personal Info'.toUpperCase()
                    : section}
                </li>
              </ul>

              <div className="w-96">
                <div className="my-2 mt-8">
                  <input
                    className="shadow appearance-none border rounded w-5/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="skill"
                    type="text"
                    name="skill"
                    value={skill.skill}
                    onChange={handleChange}
                    placeholder="Enter Skill"
                  />
                </div>
                <div className="inline-block relative w-48 mr-2 mt-2">
                  <select
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-gray-500"
                    name="priority"
                    value={skill.priority}
                    onChange={handleChange}
                  >
                    <option value="normal">Normal</option>
                    <option value="essential">Essential</option>
                    <option value="high">High Priority</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => {
                    setSkills((prevSkills) => [
                      ...prevSkills,
                      {
                        id: uuidv4(),
                        skill: skill.skill,
                        priority: skill.priority,
                      },
                    ]);
                    setSkill({ id: '', skill: '', priority: 'normal' });
                  }}
                >
                  Add Skill
                </button>
              </div>
            </div>
            <SkillsView
              section={section}
              skills={skills}
              setSkills={setSkills}
            />
          </div>
        </animated.div>
      )}
    </Spring>
  );
}
