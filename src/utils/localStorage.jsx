const employees = [
  {
    id: 1,
    name: "Chintu Sharma",
    email: "chintu.sharma@itcompany.in",
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
    name: "Pappu Yadav",
    email: "pappu.yadav@itcompany.in",
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
    name: "Bunty Verma",
    email: "bunty.verma@itcompany.in",
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
    name: "Guddu Pandey",
    email: "guddu.pandey@itcompany.in",
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
    name: "Tinku Malhotra",
    email: "tinku.malhotra@itcompany.in",
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
  {
    id: 6,
    name: "Babloo Chatterjee",
    email: "babloo.chatterjee@itcompany.in",
    password: "123",
    tasks: [
      {
        status: "active",
        taskTitle: "Automate Testing Suite",
        taskDescription: "Set up Selenium tests for frontend validation.",
        taskDate: "2025-02-17",
        category: "QA",
        priority: "High",
      },
      {
        status: "completed",
        taskTitle: "Improve Database Schema",
        taskDescription: "Normalize tables and improve indexing.",
        taskDate: "2025-02-18",
        category: "Database",
        priority: "Medium",
      },
      {
        status: "failed",
        taskTitle: "Fix Server Downtime",
        taskDescription: "Investigate and resolve frequent crashes.",
        taskDate: "2025-02-19",
        category: "Infrastructure",
        priority: "Low",
      },
    ],
    taskCount: { active: 1, completed: 1, failed: 1, new: 0 },
  },
  {
    id: 7,
    name: "Munna Tripathi",
    email: "munna.tripathi@itcompany.in",
    password: "123",
    tasks: [
      {
        status: "active",
        taskTitle: "Develop Payment Gateway",
        taskDescription: "Integrate Stripe for secure payments.",
        taskDate: "2025-02-17",
        category: "Backend Development",
        priority: "High",
      },
      {
        status: "completed",
        taskTitle: "Create Admin Dashboard",
        taskDescription: "Develop an admin panel for user management.",
        taskDate: "2025-02-18",
        category: "Frontend Development",
        priority: "Medium",
      },
      {
        status: "failed",
        taskTitle: "Fix Caching Issues",
        taskDescription: "Resolve inconsistent cache refresh problems.",
        taskDate: "2025-02-19",
        category: "Performance Optimization",
        priority: "Low",
      },
    ],
    taskCount: { active: 1, completed: 1, failed: 1, new: 0 },
  },
];

const admin = {
  id: 1,
  email: "admin@itcompany.com",
  password: "123",
};

export const setLocalStorage = (newData) => {
  if (newData) {
    localStorage.setItem("employees", JSON.stringify(newData.employees));
    localStorage.setItem("admin", JSON.stringify(newData.admin));
  }
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
