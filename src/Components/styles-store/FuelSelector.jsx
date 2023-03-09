import React from "react";

const FuelSelector = () => {
  return (
    <div className="mt-8 font-poppins"> 
        <h2 className="text-md text-slate-600">Fuel *</h2>
    <div className="flex gap-4"> 
      <button className="h-10 px-3 border border-slate-400 rounded-md hover:bg-blue-200 active:bg-blue-300 focus:bg-blue-300">CNG & Hybrids</button>
      <button className="h-10 px-3 border border-slate-400 rounded-md hover:bg-blue-200 active:bg-blue-300 focus:bg-blue-300">Diesel</button>
      <button className="h-10 px-3 border border-slate-400 rounded-md hover:bg-blue-200 active:bg-blue-300 focus:bg-blue-300">Electric</button>
      <button className="h-10 px-3 border border-slate-400 rounded-md hover:bg-blue-200 active:bg-blue-300 focus:bg-blue-300">LPG</button>
      <button className="h-10 px-3 border border-slate-400 rounded-md hover:bg-blue-200 active:bg-blue-300 focus:bg-blue-300">Petrol</button>
    </div>
    </div>
  );
};

export default FuelSelector;
