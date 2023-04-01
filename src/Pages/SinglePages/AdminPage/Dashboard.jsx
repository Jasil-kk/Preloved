import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full p-5">
      <div className="flex gap-5">
        <div className="w-2/6 h-72 bg-green-300 rounded-xl"></div>
        <div className="flex flex-wrap gap-3">
          <div className="w-72 h-32 bg-blue-400 rounded-xl"></div>
          <div className="w-72 h-32 bg-blue-400 rounded-xl"></div>
          <div className="w-72 h-32 bg-blue-400 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
