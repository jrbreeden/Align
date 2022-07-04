
export default function StepperNav() {
  return (
    <div className="mx-8 mt-40">
      <div className="flex p-2 justify-between">
        <div>
          <button
            className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-gray-200  
        bg-gray-100 
        text-gray-700 
        border duration-200 ease-in-out 
        border-gray-600 transition"
          >
            Previous
          </button>
        </div>
        <div className="flex items-center">
          <h1 className="text-gray-500 font-semibold text-xl">
            Step 3/4 - Experience
          </h1>
        </div>
        <div className="flex">
          <button
            className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-200  
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition"
          >
            Skip
          </button>
          <button
            className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-600  
        bg-teal-600 
        text-teal-100 
        border duration-200 ease-in-out 
        border-teal-600 transition"
          >
            Mark as Complete
          </button>
        </div>
      </div>
    </div>
  );
}
