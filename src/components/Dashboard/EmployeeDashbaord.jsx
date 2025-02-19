import React, { useState, useEffect } from "react";
import TaskStatCard from "../UI/TaskStatCard";
import Header from "../UI/Header";
import TaskSlides from "../TaskList/TaskSlides";
import { use } from "react";

const EmployeeDashboard = ({ employeeData, setUser }) => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <Header employeeData={employeeData} setUser={setUser} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <TaskStatCard employeeData={employeeData} />
        </div>

        {/* Tasks List */}
        <div className="relative">
          <h2 className="text-xl font-bold text-white mb-4">Tasks</h2>

          <TaskSlides employeeData={employeeData} />
        </div>
      </main>
    </div>
  );
};

export default EmployeeDashboard;
