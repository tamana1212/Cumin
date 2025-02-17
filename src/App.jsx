import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthProvider";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashbaord";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import  "./App.css";
 
const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        setUser(JSON.parse(loggedInUser));
      }
    }
  }, [authData]);

  const handleLogin = (loginDetails) => {
    if (
      loginDetails.email === "admin@me.com" &&
      loginDetails.password === "admin"
    ) {
      const adminUser = { role: "admin" };
      localStorage.setItem("loggedInUser", JSON.stringify(adminUser));
      setUser(adminUser);
    } else if (authData) {
      const employee = authData.employees.find(
        (e) =>
          e.email === loginDetails.email && e.password === loginDetails.password
      );
      if (employee) {
        const employeeUser = { role: "employee", ...employee }; 
        localStorage.setItem("loggedInUser", JSON.stringify(employeeUser));
        setUser(employeeUser);
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user?.role === "admin" ? (
        <AdminDashboard />
      ) : user?.role === "employee" ? (
        <EmployeeDashboard  employeeData = {user}/>
      ) : null}
    </>
  );
};

export default App;
