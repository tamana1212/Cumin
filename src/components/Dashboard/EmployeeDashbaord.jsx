import  { useContext } from "react";
import TaskStatCard from "../UI/TaskStatCard";
import Header from "../UI/Header";
import TaskSlides from "../TaskList/TaskSlides";
import { AuthContext } from "../../context/AuthProvider";
import { setLocalStorage } from "../../utils/localStorage";

const EmployeeDashboard = ({ employeeData, setUser }) => {
  const { userData, setUserData } = useContext(AuthContext);

  // Ensure employeeData always reflects the latest state
  const tasks =
    userData?.employees?.find((emp) => emp.id === employeeData.id)?.tasks || [];

  // const updateTaskStatus = (employeeId, taskIndex, newStatus) => {
  //   setUserData((prevUserData) => {
  //     const updatedEmployees = prevUserData.employees.map((employee) => {
  //       if (employee.id === employeeId) {
  //         const updatedTasks = employee.tasks.map((task,index) => {
  //           if (index === taskIndex) {
  //             return { ...task, status: newStatus }; // Update task status
  //           }
  //           return task;
  //         });

  //         // Copy taskCount to avoid mutating state directly
  //         const updatedTaskCount = { ...employee.taskCount };

  //         // Find the previous status of the task before updating
  //         const oldTask = employee.tasks.find(
  //           (task,index) => index === taskIndex
  //         );
  //         const oldStatus = oldTask?.status;

  //         // Ensure task count is adjusted correctly
  //         if (oldStatus && updatedTaskCount[oldStatus] > 0) {
  //           updatedTaskCount[oldStatus] -= 1; // Decrement old status count
  //         }
  //         updatedTaskCount[newStatus] = (updatedTaskCount[newStatus] || 0) + 1; // Increment new status count

  //         return {
  //           ...employee,
  //           tasks: updatedTasks,
  //           taskCount: updatedTaskCount,
  //         };
  //       }
  //       return employee;
  //     });

  //     const updatedUserData = { ...prevUserData, employees: updatedEmployees };
  //     setLocalStorage(updatedUserData);
  //     return updatedUserData;
  //   });
  // };

  // optimised function
  const updateTaskStatus = (employeeId, taskIndex, newStatus) => {
    setUserData((prevUserData) => {
      const updatedEmployees = prevUserData.employees.map((employee) => {
        if (employee.id !== employeeId) return employee; // Skip other employees
        
        const updatedTasks = [...employee.tasks]; // Clone tasks array
        const oldStatus = updatedTasks[taskIndex]?.status; // Get old status safely
  
        if (!oldStatus || oldStatus === newStatus) return employee; // No need to update if status is same
  
        updatedTasks[taskIndex] = { ...updatedTasks[taskIndex], status: newStatus }; // Update task
  
        const updatedTaskCount = { ...employee.taskCount };
        updatedTaskCount[oldStatus] = Math.max(0, (updatedTaskCount[oldStatus] || 0) - 1); // Prevent negative count
        updatedTaskCount[newStatus] = (updatedTaskCount[newStatus] || 0) + 1;
  
        return { ...employee, tasks: updatedTasks, taskCount: updatedTaskCount };
      });
  
      const updatedUserData = { ...prevUserData, employees: updatedEmployees };
      setLocalStorage(updatedUserData);
      return updatedUserData;
    });
  };
  
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

          <TaskSlides
            tasks={tasks}
            employeeData={employeeData}
            updateTaskStatus={updateTaskStatus}
          />
        </div>
      </main>
    </div>
  );
};

export default EmployeeDashboard;
