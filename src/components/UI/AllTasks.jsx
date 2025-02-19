import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTasks = () => {
  const { userData } = useContext(AuthContext);

  if (!userData.employees.length) {
    return <p className="text-white">Loading tasks...</p>;
  }

  const allTasks = userData.employees.flatMap((employee) =>
    employee.tasks.map((task) => ({ ...task, assignedTo: employee.name }))
  );

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-4 sm:p-6">
      <h2 className="text-xl font-bold text-white mb-4 sm:mb-6">All Tasks</h2>

      {/* Desktop Table View */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-700 text-gray-300">
            <tr>
              <th className="p-4 text-left rounded-tl-lg">Title</th>
              <th className="p-4 text-left">Description</th>
              <th className="p-4 text-left">Due Date</th>
              <th className="p-4 text-left">Assigned To</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left rounded-tr-lg">Category</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            {allTasks.map((task, index) => (
              <tr
                key={index}
                className="border-b border-gray-700 hover:bg-gray-700/50 transition duration-200"
              >
                <td className="p-4 font-medium">{task.taskTitle}</td>
                <td className="p-4">{task.taskDescription}</td>
                <td className="p-4">{task.taskDate}</td>
                <td className="p-4">{task.assignedTo}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm 
                                        ${
                                          task.status === "active"
                                            ? "bg-green-500/20 text-green-500"
                                            : task.status === "completed"
                                            ? "bg-blue-500/20 text-blue-500"
                                            : "bg-red-500/20 text-red-500"
                                        }`}
                  >
                    {task.status}
                  </span>
                </td>
                <td className="p-4">{task.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="sm:hidden space-y-4">
        {allTasks.map((task, index) => (
          <div key={index} className="bg-gray-700 rounded-lg p-4 space-y-3">
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-white">{task.taskTitle}</h3>
              <span
                className={`px-2 py-1 rounded-full text-xs 
                                ${
                                  task.status === "active"
                                    ? "bg-green-500/20 text-green-500"
                                    : task.status === "completed"
                                    ? "bg-blue-500/20 text-blue-500"
                                    : "bg-red-500/20 text-red-500"
                                }`}
              >
                {task.status}
              </span>
            </div>
            <p className="text-gray-300 text-sm">{task.taskDescription}</p>
            <div className="text-sm text-gray-400 space-y-1">
              <div>Due: {task.taskDate}</div>
              <div>Assigned: {task.assignedTo}</div>
              <div>Category: {task.category}</div>
              <div>Status: {task.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
