import React from "react";

const TaskSlides = ({ employeeData }) => {
  // Function to get status color
  const getStatusColor = (status) => {
    const colors = {
      new: "bg-blue-500/20 text-blue-500",
      active: "bg-green-500/20 text-green-500",
      completed: "bg-purple-500/20 text-purple-500",
      failed: "bg-red-500/20 text-red-500",
    };
    return colors[status] || "bg-gray-500/20 text-gray-500";
  };

  // Function to get priority color
  const getPriorityColor = (priority) => {
    return priority === "High"
      ? "bg-red-500/20 text-red-500"
      : priority === "Medium"
      ? "bg-yellow-500/20 text-yellow-500"
      : "bg-green-500/20 text-green-500";
  };

  return (
    <div className="flex transition-transform duration-300 ease-in-out overflow-auto task_slider">
      {employeeData?.tasks?.map((task, index) => (
        <div key={index} className="w-[45%] flex-shrink-0 px-2">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-white">{task.taskTitle}</h3>
              {/* Show Priority */}
              <span
                className={`px-3 py-1 rounded-full text-sm ${getPriorityColor(
                  task.priority
                )}`}
              >
                {task.priority}
              </span>
            </div>
            <div className="mb-4">
              <p className="text-gray-400 text-left">
                {task.taskDescription || "No description provided."}
              </p>
            </div>
            <div className="flex justify-between items-center">
              {/* Show Status */}
              <span
                className={`px-3 py-1 rounded-full text-sm  capitalize ${getStatusColor(
                  task.status
                )}`}
              >
                {task.status}
              </span>
              <span className="text-gray-400 text-sm">
                Deadline: {task.taskDate}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskSlides;
