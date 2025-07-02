import React from "react";

const Button = ({ onClick = () => {}, label = "", type = "button", className = "" }) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={"w-full bg-red-500 h-10 text-white font-semibold text-base cursor-pointer rounded-md hover:bg-red-700 transition-all duration-300" + className}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
