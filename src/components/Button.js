import React from "react";

const Button = ({ children }) => {
  return (
    <button className="flex w-full px-6 py-4 bg-[#3B71FE] rounded-full text-white font-medium items-center text-center justify-center">
      {children}
    </button>
  );
};
export default Button;
