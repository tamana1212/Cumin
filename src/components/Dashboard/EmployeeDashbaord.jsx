import React, { useState,useEffect } from "react";
import TaskStatCard from "../UI/TaskStatCard";
import Header from "../UI/Header";
import TaskSlides from "../TaskList/TaskSlides";
import { use } from "react";

const EmployeeDashboard = ({employeeData}) => {
useEffect(() => { console.log(employeeData, "ask")})
// const handleStatusChange = (taskId, newStatus) => {
//   // Update your task status here
//   console.log(`Task ${taskId} status changed to ${newStatus}`);
// };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <Header   employeeData = {employeeData}/>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* <TaskStatCard title="New Tasks" count={taskStats.new} color="blue" />
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
          /> */}
          <TaskStatCard  employeeData = {employeeData}/>
        </div>

        {/* Tasks List */}
        <div className="relative">
          <h2 className="text-xl font-bold text-white mb-4">Tasks</h2>

          <TaskSlides  employeeData = {employeeData} 
          // onStatusChange={handleStatusChange}
           />
        </div>
      </main>
    </div>
  );
};

export default EmployeeDashboard;
