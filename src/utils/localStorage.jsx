const employees = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@itcompany.com",
      password: "123",
      tasks: [
        {
          status: "active",
          taskTitle: "Develop API Endpoints",
          taskDescription: "Implement REST API for user authentication.",
          taskDate: "2025-02-17",
          category: "Backend Development",
          priority: "High",
        },
        {
          status: "completed",
          taskTitle: "Database Optimization",
          taskDescription: "Optimize SQL queries for faster performance.",
          taskDate: "2025-02-18",
          category: "Database",
          priority: "Medium",
        },
        {
          status: "failed",
          taskTitle: "Fix UI Bugs",
          taskDescription: "Resolve layout issues on the login page.",
          taskDate: "2025-02-19",
          category: "Frontend Development",
          priority: "Low",
        },
      ],
      taskCount: { active: 1, completed: 1, failed: 1, new: 0 },
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@itcompany.com",
      password: "123",
      tasks: [
        {
          status: "active",
          taskTitle: "Design Landing Page",
          taskDescription: "Create a modern landing page design in Figma.",
          taskDate: "2025-02-17",
          category: "UI/UX Design",
          priority: "High",
        },
        {
          status: "completed",
          taskTitle: "Conduct User Testing",
          taskDescription: "Run usability tests with clients.",
          taskDate: "2025-02-18",
          category: "User Research",
          priority: "Medium",
        },
        {
          status: "failed",
          taskTitle: "Implement Dark Mode",
          taskDescription: "Add a dark mode toggle to the application.",
          taskDate: "2025-02-19",
          category: "Frontend Development",
          priority: "Low",
        },
      ],
      taskCount: { active: 1, completed: 1, failed: 1, new: 0 },
    },
    {
      id: 3,
      name: "Mike Jordan",
      email: "mike.jordan@itcompany.com",
      password: "123",
      tasks: [
        {
          status: "active",
          taskTitle: "Setup CI/CD Pipeline",
          taskDescription: "Configure Jenkins for automated deployment.",
          taskDate: "2025-02-17",
          category: "DevOps",
          priority: "High",
        },
        {
          status: "completed",
          taskTitle: "Server Migration",
          taskDescription: "Move production servers to AWS.",
          taskDate: "2025-02-18",
          category: "Infrastructure",
          priority: "Medium",
        },
        {
          status: "failed",
          taskTitle: "Implement Logging",
          taskDescription: "Setup centralized logging with ELK stack.",
          taskDate: "2025-02-19",
          category: "Backend Development",
          priority: "Low",
        },
      ],
      taskCount: { active: 1, completed: 1, failed: 1, new: 0 },
    },
    {
      id: 4,
      name: "Lisa Williams",
      email: "lisa.williams@itcompany.com",
      password: "123",
      tasks: [
        {
          status: "active",
          taskTitle: "Write API Documentation",
          taskDescription: "Document API endpoints using Swagger.",
          taskDate: "2025-02-17",
          category: "Technical Writing",
          priority: "High",
        },
        {
          status: "completed",
          taskTitle: "Create Test Cases",
          taskDescription: "Write unit tests for authentication module.",
          taskDate: "2025-02-18",
          category: "QA",
          priority: "Medium",
        },
        {
          status: "failed",
          taskTitle: "Fix Memory Leak Issue",
          taskDescription: "Identify and resolve memory leaks in the app.",
          taskDate: "2025-02-19",
          category: "Backend Development",
          priority: "Low",
        },
      ],
      taskCount: { active: 1, completed: 1, failed: 1, new: 0 },
    },
    {
      id: 5,
      name: "Chris Evans",
      email: "chris.evans@itcompany.com",
      password: "123",
      tasks: [
        {
          status: "active",
          taskTitle: "Refactor CSS Codebase",
          taskDescription: "Improve SCSS structure and remove redundant styles.",
          taskDate: "2025-02-17",
          category: "Frontend Development",
          priority: "High",
        },
        {
          status: "completed",
          taskTitle: "Improve Page Load Speed",
          taskDescription: "Optimize assets for faster rendering.",
          taskDate: "2025-02-18",
          category: "Performance Optimization",
          priority: "Medium",
        },
        {
          status: "new",
          taskTitle: "Fix Responsive Issues",
          taskDescription: "Ensure proper rendering on mobile devices.",
          taskDate: "2025-02-19",
          category: "Frontend Development",
          priority: "Low",
        },
      ],
      taskCount: { active: 1, completed: 1, failed: 0, new: 1 },
    },
  ];
  
  console.log(employees);
  
  const admin = {
    "id": 1,
    "email": "admin@itcompany.com",
    "password": "123"
};
  
export const setLocalStorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }
  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
