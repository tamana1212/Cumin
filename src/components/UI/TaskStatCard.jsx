
import React from "react";

const TaskStatCard = ({ title, count, color }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
      <h3 className="text-white text-lg font-medium mb-2">{title}</h3>
      <p className={`text-3xl font-bold text-${color}-500`}>{count}</p>
    </div>
  );
};

export default TaskStatCard; 