import  { useState } from 'react';

const CreateTask = () => {
    const [tasks, setTasks] = useState([
        {
          id: 1,
          title: "Website Redesign",
          description: "Update the company website with new brand guidelines",
          dueDate: "2024-02-20",
          assignedTo: "John Doe",
          category: "Development",
        }
      ]);
    
      const [newTask, setNewTask] = useState({
        title: "",
        description: "",
        dueDate: "",
        assignedTo: "",
        category: ""
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const taskWithId = {
          ...newTask,
          id: tasks.length + 1
        };
        setTasks([...tasks, taskWithId]);
        setNewTask({
          title: "",
          description: "",
          dueDate: "",
          assignedTo: "",
          category: ""
        });
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask(prev => ({
          ...prev,
          [name]: value
        }));
      };
    
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-4 sm:p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-4 sm:mb-6">Create New Task</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Task Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                Task Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={newTask.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter task title"
              />
            </div>

            {/* Task Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                Task Description
              </label>
              <textarea
                id="description"
                name="description"
                required
                value={newTask.description}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter task description"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Due Date */}
              <div>
                <label htmlFor="dueDate" className="block text-sm font-medium text-gray-300 mb-2">
                  Due Date
                </label>
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  required
                  value={newTask.dueDate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Assign To */}
              <div>
                <label htmlFor="assignedTo" className="block text-sm font-medium text-gray-300 mb-2">
                  Assign To
                </label>
                <input
                  type="text"
                  id="assignedTo"
                  name="assignedTo"
                  required
                  value={newTask.assignedTo}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter assignee name"
                />
              </div>

              {/* Category */}
              <div className="sm:col-span-2 lg:col-span-1">
                <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={newTask.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select category</option>
                  <option value="Development">Development</option>
                  <option value="Design">Design</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Research">Research</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-200"
            >
              Create Task
            </button>
          </form>
        </div>
  )
}

export default CreateTask