// import SectionInput from '../../SectionInput/SectionInput';
import { Spring, animated } from 'react-spring';
import StatementView from '../../Review/StatementView/StatementView';
import { useState, useEffect } from 'react';
import Modal from '../../Modal/Modal';

export default function StatementSection({
  section,
  statement,
  setStatement,
  register,
  handleSubmit,
  setValue,
  errors,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const resetFields = () => {
    setValue('header', '');
    setValue('body', '');
  };

  const handleChange = (e) => {
    setStatement((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (data) => {
    console.log(data);
    if (Object.keys(errors).length === 0) {
      setModalIsOpen(true);
      resetFields();
      setTimeout(() => setModalIsOpen(false), 1000);
    }
  };

  useEffect(() => {
    if (statement) {
      setValue('header', statement.header);
      setValue('body', statement.body);
    }
  }, [statement]);

  return (
    <>
      <Spring
        from={{ opacity: 0, marginLeft: -1000 }}
        to={{ opacity: 1, marginLeft: 0 }}
      >
        {(props) => (
          <animated.div style={props}>
            <div className="flex gap-x-60" style={{ width: '50vw' }}>
              <div className="w-full min-h-full bg-gray-200 p-8 border border-2 border-gray-300 drop-shadow-2xl rounded">
                <div>
                  <ul className="w-full text-sm font-medium text-gray-900 border border-gray-200 rounded-lg dark:bg-gray-300 dark:border-gray-400 dark:text-black">
                    <li className="w-full px-4 py-2 rounded-t-lg dark:border-gray-600 text-center font-bold text-2xl oswald tracking-widest">
                      {section === 'PersonalInfo'
                        ? 'Personal Info'.toUpperCase()
                        : section.toUpperCase()}
                    </li>
                  </ul>
                </div>

                <form onSubmit={handleSubmit(handleFormSubmit)}>
                  <div className="my-2 mt-8">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 oswald"
                      htmlFor="title"
                    >
                      Header<span className='text-red-600'>*</span>
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="header"
                      // value={statement.header}
                      // onChange={handleChange}
                      {...register('header', {
                        value: statement.header,
                        onChange: handleChange,
                        required: 'Header is required!',
                        minLength: 3,
                        maxLength: 50,
                      })}
                      id="header"
                      type="text"
                      placeholder="Enter Header"
                    />
                    {errors?.header?.type === 'required' && (
                      <p className="text-white bg-red-500 text-center mt-1 rounded font-bold px-2 py-1 text-sm">
                        This name is required
                      </p>
                    )}
                    {errors?.header?.type === 'minLength' && (
                      <p className="text-white bg-red-500 text-center mt-1 rounded font-bold px-2 py-1 text-sm">
                        Must have atleast 3 characters
                      </p>
                    )}
                    {errors?.header?.type === 'maxLength' && (
                      <p className="text-white bg-red-500 text-center mt-1 rounded font-bold px-2 py-1 text-sm">
                        Cannot exceed 50 characters
                      </p>
                    )}
                  </div>
                  <div className="inline-block relative w-full mr-2">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 oswald"
                      htmlFor="body"
                    >
                      Body<span className='text-red-600'>*</span>
                    </label>
                    <textarea
                      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                      name="body"
                      // value={statement.body}
                      // onChange={handleChange}
                      {...register('body', {
                        value: statement.body,
                        onChange: handleChange,
                        required: 'Body is required!',
                        minLength: 10,
                        maxLength: 300,
                      })}
                      rows="10"
                      placeholder="Enter Body"
                    ></textarea>
                    {errors?.body?.type === 'required' && (
                      <p className="text-white bg-red-500 text-center mt-1 rounded font-bold px-2 py-1 text-sm">
                        This field is required
                      </p>
                    )}
                    {errors?.body?.type === 'minLength' && (
                      <p className="text-white bg-red-500 text-center mt-1 rounded font-bold px-2 py-1 text-sm">
                        Must have atleast 10 characters
                      </p>
                    )}
                    {errors?.body?.type === 'maxLength' && (
                      <p className="text-white bg-red-500 text-center mt-1 rounded font-bold px-2 py-1 text-sm">
                        Cannot exceed 300 characters
                      </p>
                    )}
                  </div>
                  <button
                    className="w-full mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-blue-500 shadow-lg shadow-blue-500/50"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
              {/* <StatementView section={section} statement={statement} /> */}
            </div>
            {modalIsOpen && (
            <Modal isShow={modalIsOpen} closeModal={setModalIsOpen} />
          )}
          </animated.div>
        )}
      </Spring>
    </>
  );
}
