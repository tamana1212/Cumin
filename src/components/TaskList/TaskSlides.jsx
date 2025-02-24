import { ChevronDown, Tag } from "lucide-react";

const TaskSlides = ({ tasks , updateTaskStatus, employeeData}) => {
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
    return priority.toLowerCase() === "high"
      ? "bg-red-500/20 text-red-500"
      : priority.toLowerCase() === "medium"
      ? "bg-yellow-500/20 text-yellow-500"
      : "bg-green-500/20 text-green-500";
  };

  return (
    <div className="flex transition-transform duration-300 ease-in-out overflow-auto task_slider">
      {tasks.map((task, index) => (
        <div key={index} className="w-[45%] flex-shrink-0 px-2">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-white capitalize">
                {task.taskTitle}
              </h3>
              <span
                className={`px-3 py-1 rounded-full text-sm capitalize ${getPriorityColor(
                  task.priority
                )}`}
              >
                {task.priority}
              </span>
            </div>
            <div className="flex items-center mb-4">
              <Tag className="w-4 h-4 mr-1 text-gray-400" />
              <span className="text-xs px-2 py-1 rounded-full bg-gray-500/20 text-gray-500">
                {task.category}
              </span>
            </div>
            <div className="mb-4">
              <p className="text-gray-400 text-left">
                {task.taskDescription || "No description provided."}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div className="relative">
                <select
                  value={task.status}
                  onChange={(e) =>
                    updateTaskStatus(
                      employeeData.id,
                      index,
                      e.target.value
                    )
                  }
                  className={`appearance-none ${getStatusColor(
                    task.status
                  )} px-3 py-1 pr-8 rounded-full text-sm capitalize cursor-pointer focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-gray-400`}
                >
                  <option value="new">New</option>
                  <option value="active">Active</option>
                  <option value="completed">Completed</option>
                  <option value="failed">Failed</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-400" />
              </div>
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
