import React from "react";

const TaskStatCard = ({ employeeData }) => {
  if (!employeeData.taskCount) {
    return <div>Invalid data</div>;
  }

  return (
    <>
      {Object.entries(employeeData.taskCount).length > 0 &&
        Object.entries(employeeData.taskCount).map(([key, value]) => (
          <div
            key={key}
            className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700"
          >
            <h3 className="text-white text-lg font-medium mb-2">
              {key.charAt(0).toUpperCase() + key.slice(1)} Tasks
            </h3>
            <p className={`text-3xl font-bold text-${getColor(key)}-500`}>
              {value}
            </p>
          </div>
        ))}
    </>
  );
};

const getColor = (key) => {
  switch (key) {
    case "active":
      return "green";
    case "completed":
      return "purple";
    case "failed":
      return "red";
    case "new":
      return "blue";
    default:
      return "gray";
  }
};

export default TaskStatCard;
