import AllTasks from "../UI/AllTasks";
import CreateTask from "../UI/CreateTask";
import Header from "../UI/Header";
import { useState } from "react";

const AdminDashboard = ({ setUser }) => {
  const [newTask, setNewTask] = useState({
    taskTitle: "",
    taskDescription: "",
    taskDate: "",
    assignedTo: "",
    category: "",
    priority: "",
  });

  return (
    <>
      <Header setUser={setUser} />
      <div className="min-h-screen bg-gray-900 p-4">
        <div className="max-w-7xl mx-auto">
          {/* Task Creation Form */}
          <CreateTask newTask={newTask} setNewTask={setNewTask} />

          {/* Task List */}
          <AllTasks newTask={newTask} />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
