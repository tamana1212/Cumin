import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { setLocalStorage } from "../../utils/localStorage";

const CreateTask = ({ setNewTask, newTask }) => {
  const { userData, setUserData } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Find the assigned employee
    const employee = userData.employees.find(
      (emp) => `${emp.firstName} ${emp.lastName}` === newTask.assignedTo
    );

    if (!employee) {
      alert("Employee not found! Please assign the task to a valid employee.");
      return;
    }

    // Update the employee's task list
    const updatedEmployees = userData.employees.map((emp) =>
      `${emp.firstName} ${emp.lastName}` === newTask.assignedTo
        ? {
            ...emp,
            tasks: [...emp.tasks, { status: "new", ...newTask }],
            taskCount: { ...emp.taskCount, new: (emp.taskCount?.new || 0) + 1 },
          }
        : emp
    );

    // Update UI state
    const updatedUserData = { ...userData, employees: updatedEmployees };
    setUserData(updatedUserData);

    // Update localStorage immediately
    setLocalStorage(updatedUserData);

    // Reset form
    setNewTask({
      taskTitle: "",
      taskDescription: "",
      taskDate: "",
      assignedTo: "",
      category: "",
      priority: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-4 sm:p-6 mb-6">
      <h2 className="text-xl font-bold text-white mb-4 sm:mb-6">
        Create New Task
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {/* Task Title */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Task Title
          </label>
          <input
            type="text"
            name="taskTitle"
            required
            value={newTask.taskTitle}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task title"
          />
        </div>

        {/* Task Description */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Task Description
          </label>
          <textarea
            name="taskDescription"
            required
            value={newTask.taskDescription}
            onChange={handleInputChange}
            rows="3"
            className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task description"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Due Date */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Due Date
            </label>
            <input
              type="date"
              name="taskDate"
              required
              value={newTask.taskDate}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Assign To */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Assign To
            </label>
            <input
              type="text"
              name="assignedTo"
              required
              value={newTask.assignedTo}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter assignee name"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Category
            </label>
            <input
              type="text"
              name="category"
              required
              value={newTask.category}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Category"
            />
          </div>

          {/* Priority */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Priority
            </label>
            <input
              type="text"
              name="priority"
              required
              value={newTask.priority}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter priority"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition duration-200"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
