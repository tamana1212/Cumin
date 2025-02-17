import AllTasks from "../UI/AllTasks";
import CreateTask from "../UI/CreateTask";
import Header from "../UI/Header";

const AdminDashboard = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-900 p-4">
        <div className="max-w-7xl mx-auto">
          {/* Task Creation Form */}
          <CreateTask />

          {/* Task List */}
          <AllTasks />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
