import React from "react";

const ThemeButton = ({ onClick, showIcon = true, icon = null, name }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-purple-700 hover:bg-purple-800 font-semibold text-sm transition-all items-center text-white py-3 px-5 flex rounded"
      >
        {showIcon && <span className="mr-2">{icon}</span>}
        {name}
      </button>
    </>
  );
};

export default ThemeButton;
