import React from "react";

const Button = ({ text, variant, onClick }) => {
  return (
    <div>
      <button
        className={`bg-green-600 font-light text-white rounded-lg ${
          variant !== "small" ? "px-12 py-4 text-xl" : "px-4 py-1 border-0 m-[-2px]"
        }`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
