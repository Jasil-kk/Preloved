import React from "react";

const Owners = () => {
  return (
    <div className="mt-8 font-poppins">
      <h2 className="text-md text-slate-600">No. of Owners</h2>
      <div className="flex gap-3">
        <button className="h-10 w-14 rounded-md border border-slate-400 hover:bg-blue-200 active:bg-blue-300 focus:bg-blue-300">1st</button>
        <button className="h-10 w-14 rounded-md border border-slate-400 hover:bg-blue-200 active:bg-blue-300 focus:bg-blue-300">2nd</button>
        <button className="h-10 w-14 rounded-md border border-slate-400 hover:bg-blue-200 active:bg-blue-300 focus:bg-blue-300">3rd</button>
        <button className="h-10 w-14 rounded-md border border-slate-400 hover:bg-blue-200 active:bg-blue-300 focus:bg-blue-300">4th</button>
        <button className="h-10 w-14 rounded-md border border-slate-400 hover:bg-blue-200 active:bg-blue-300 focus:bg-blue-300">4+</button>
      </div>
    </div>
  );
};

export default Owners;
