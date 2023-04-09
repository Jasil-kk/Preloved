import React from "react";

const ButtonSelector = ({ onClick, value, content }) => {
  return (
    <div>
      <button
        onClick={onClick}
        value={value}
        className="h-10 px-3 border text-slate-600 border-slate-400 rounded-md hover:bg-blue-200 active:bg-blue-300 focus:bg-blue-300"
      >
        {content}
      </button>
    </div>
  );
};

export default ButtonSelector;
