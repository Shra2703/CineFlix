import React from "react";

const Button = ({ onClick = () => {}, label = "", type = "button", classname = "", showIcon = "false", Icon}) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={"w-full bg-red-500 h-10 text-white font-semibold text-base cursor-pointer rounded hover:bg-red-700 transition-all duration-300 flex items-center gap-2 justify-center" +" " + classname}
      >
        <span> {showIcon && Icon}</span>
        <span>{label}</span>
      </button>
    </div>
  );
};

export default Button;
