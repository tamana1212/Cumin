import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const TaskStatCard = ({ employeeData }) => {
  const { userData } = useContext(AuthContext);
  const employee = userData?.employees?.find(
    (emp) => emp.id === employeeData.id
  );

  const taskCount = employee?.taskCount || {};

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return (
    <>
      {Object.entries(taskCount).map(([key, value]) => (
        <div
          key={key}
          className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700"
        >
          <h3 className="text-white text-lg font-medium mb-2">
            {key.charAt(0).toUpperCase() + key.slice(1)} Tasks
          </h3>
          <p className={`text-3xl font-bold ${getColorClass(key)}`}>{value}</p>
        </div>
      ))}
    </>
  );
};

const getColorClass = (key) => {
  const colors = {
    active: "text-green-500",
    completed: "text-purple-500",
    failed: "text-red-500",
    new: "text-blue-500",
  };
  return colors[key] || "text-gray-500";
};

export default TaskStatCard;
