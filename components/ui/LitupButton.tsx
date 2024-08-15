import React from "react";

const LitupButton = ({ name }: { name: string }) => {
  return (
    <button className="p-[3px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-red-500 rounded-lg" />
      <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        {name}
      </div>
    </button>
  );
};

export default LitupButton;
