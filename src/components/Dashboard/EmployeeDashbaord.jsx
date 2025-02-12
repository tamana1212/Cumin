import React, { useState } from "react";
import TaskStatCard from "../UI/TaskStatCard";
import Header from "../UI/Header";
import TaskSlides from "../TaskList/TaskSlides";

const EmployeeDashboard = () => {
  const [taskStats] = useState({
    new: 5,
    completed: 12,
    accepted: 8,
    failed: 3,
  });

  const [tasks] = useState([
    {
      id: 1,
      title: "Complete Project Proposal",
      status: "new",
      deadline: "2024-02-20",
      priority: "High",
      description: "Write a detailed project proposal for the new client.",
    },
    {
      id: 2,
      title: "Review Code Changes",
      status: "completed",
      deadline: "2024-02-18",
      priority: "Medium",
      description: "Go through the latest pull request and approve changes.",
    },
    {
      id: 3,
      title: "Client Meeting",
      status: "accepted",
      deadline: "2024-02-22",
      priority: "High",
      description: "Discuss project requirements with the new client.",
    },
    {
      id: 4,
      title: "Debug Application",
      status: "failed",
      deadline: "2024-02-15",
      priority: "High",
      description: "Fix critical bugs reported in the testing phase.",
    },
  ]);


  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <TaskStatCard title="New Tasks" count={taskStats.new} color="blue" />
          <TaskStatCard
            title="Completed Tasks"
            count={taskStats.completed}
            color="green"
          />
          <TaskStatCard
            title="Accepted Tasks"
            count={taskStats.accepted}
            color="purple"
          />
          <TaskStatCard
            title="Failed Tasks"
            count={taskStats.failed}
            color="red"
          />
        </div>

        {/* Tasks List */}
        <div className="relative">
          <h2 className="text-xl font-bold text-white mb-4">Tasks</h2>

          {/* Task Cards Container */}
          <TaskSlides  tasks={tasks}/>
        </div>
      </main>
    </div>
  );
};

export default EmployeeDashboard;
