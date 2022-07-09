import { Spring, animated } from 'react-spring';
import PersonalInfoView from '../../Review/PersonalInfoView/PersonalInfoView';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../../Modal/Modal';

export default function PersonalInfoSection({
  section,
  personal,
  setPersonal,
  register,
  handleSubmit,
  setValue,
  errors,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const resetFields = () => {
    setValue('name', '');
    setValue('email', '');
    setValue('phone', '');
    setValue('link1', '');
    setValue('link2', '');
    setValue('link3', '');
  };
  const handleChange = (e) => {
    setPersonal((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (data) => {
    console.log(data);
    if (Object.keys(errors).length === 0) {
      setModalIsOpen(true);
      resetFields();
      setTimeout(() => setModalIsOpen(false), 2000);
    }
  };

  useEffect(() => {
    if (personal) {
      setValue('name', personal.name);
      setValue('email', personal.email);
      setValue('phone', personal.phone);
      setValue('link1', personal.link1);
      setValue('link2', personal.link2);
      setValue('link3', personal.link3);
    }
  }, [personal]);

  return (
    <Spring
      from={{ opacity: 0, marginLeft: -1000 }}
      to={{ opacity: 1, marginLeft: 0 }}
    >
      {(props) => (
        <animated.div style={props}>
          <div className="flex gap-x-60">
            <Modal isShow={modalIsOpen} closeModal={setModalIsOpen} />
            <div className="h-auto w-96 min-h-full bg-gray-200 p-8 border border-2 border-gray-300 drop-shadow-2xl rounded">
              <ul className="w-full text-sm font-medium text-gray-900 border border-gray-200 rounded-lg dark:bg-gray-300 dark:border-gray-400 dark:text-black">
                <li className="w-full px-4 py-2 rounded-t-lg dark:border-gray-600 text-center font-bold">
                  {section === 'PersonalInfo'
                    ? 'Personal Info'.toUpperCase()
                    : section}
                </li>
              </ul>
              <div className="form mt-4">
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Full Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="name"
                      id="name"
                      type="text"
                      {...register('name', {
                        value: personal.name,
                        onChange: handleChange,
                        required: 'Name is required!',
                        minLength: 3,
                      })}
                      placeholder="Enter Full Name"
                    />
                    {errors?.name?.type === 'required' && (
                      <p className="text-white bg-red-500 text-center mt-1 rounded font-bold px-2 py-1 text-sm">
                        This field is required
                      </p>
                    )}
                    {errors?.name?.type === 'minLength' && (
                      <p className="text-white bg-red-500 text-center mt-1 rounded font-bold px-2 py-1 text-sm">
                        Must have atleast 3 characters
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="email"
                      // value={personal.email}
                      // onChange={handleChange}
                      id="email"
                      type="email"
                      {...register('email', {
                        value: personal.name,
                        onChange: handleChange,
                        required: 'Email is required!',
                        minLength: 3,
                      })}
                      placeholder="Email"
                    />
                    {errors?.email?.type === 'required' && (
                      <p className="text-white bg-red-500 text-center mt-1 rounded font-bold px-2 py-1 text-sm">
                        This field is required
                      </p>
                    )}
                    {errors?.email?.type === 'minLength' && (
                      <p className="text-white bg-red-500 text-center mt-1 rounded font-bold px-2 py-1 text-sm">
                        Must have atleast 3 characters
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="phone"
                    >
                      Phone
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="phone"
                      // value={personal.phone}
                      // onChange={handleChange}
                      id="phone"
                      type="text"
                      {...register('phone', {
                        value: personal.phone,
                        onChange: handleChange,
                        required: 'Phone is required!',
                        minLength: 3,
                      })}
                      placeholder="Phone"
                    />
                    {errors?.phone?.type === 'required' && (
                      <p className="text-white bg-red-500 text-center mt-1 rounded font-bold px-2 py-1 text-sm">
                        This field is required
                      </p>
                    )}
                    {errors?.phone?.type === 'minLength' && (
                      <p className="text-white bg-red-500 text-center mt-1 rounded font-bold px-2 py-1 text-sm">
                        Must have atleast 3 characters
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="link1"
                    >
                      LinkedIn
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="link1"
                      // value={personal.link1}
                      // onChange={handleChange}
                      {...register('link1', {
                        value: personal.link1,
                        onChange: handleChange,
                        maxLength: 20,
                      })}
                      id="link1"
                      type="text"
                      placeholder="LinkedIn Profile"
                    />
                    {errors?.link1?.type === 'maxLength' && (
                      <p className="text-white bg-red-500 text-center mt-1 rounded font-bold px-2 py-1 text-sm">
                        Cannot exceed 20 characters
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="github"
                    >
                      Github
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="link2"
                      // value={personal.link2}
                      // onChange={handleChange}
                      {...register('link2', {
                        value: personal.link2,
                        onChange: handleChange,
                        maxLength: 20,
                      })}
                      id="link2"
                      type="text"
                      placeholder="Github Profile"
                    />
                    {errors?.link2?.type === 'maxLength' && (
                      <p className="text-white bg-red-500 text-center mt-1 rounded font-bold px-2 py-1 text-sm">
                        Can't have more then 20 characters!
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="portfolio"
                    >
                      Portfolio
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="link3"
                      // value={personal.link3}
                      // onChange={handleChange}
                      {...register('link3', {
                        value: personal.link3,
                        onChange: handleChange,
                        maxLength: 20,
                      })}
                      id="link3"
                      type="text"
                      placeholder="Developer Profile"
                    />
                    {errors?.link3?.type === 'maxLength' && (
                      <p className="text-white bg-red-500 text-center mt-1 rounded font-bold px-2 py-1 text-sm">
                        Can't have more then 20 characters!
                      </p>
                    )}
                  </div>
                  <button
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <PersonalInfoView
              section={section}
              name={personal.name}
              email={personal.email}
              phone={personal.phone}
              link1={personal.link1}
              link2={personal.link2}
              link3={personal.link3}
            />
          </div>
        </animated.div>
      )}
    </Spring>
  );
}
