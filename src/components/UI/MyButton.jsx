import React from "react";

const MyButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className=" rounded-lg  border-2 mr-2 border-gray-800 p-2  hover:bg-orange-300 hover:text-black "
    >
      {children}
    </button>
  );
};

export default MyButton;
