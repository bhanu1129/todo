import React from "react";

const Checkbox = ({ text }) => {
  return (
    <div className="flex gap-2 items-center">
      <input
        type="checkbox"
        id="my-checkbox"
        className="appearance-none size-6 border border-gray-500 checked:bg-green-600 transition rounded-full cursor-pointer"
      />
      <label htmlFor="my-checkbox" className="text-xl">
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
