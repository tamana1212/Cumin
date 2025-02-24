const employees = [
  {
    id: 1,
    firstName: "Chintu",
    lastName: "Sharma",
    email: "chintu.sharma@itcompany.in",
    password: "123",
    role: "Backend Engineer",
    department: "Backend Development",
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
        taskTitle: "Optimize Database Queries",
        taskDescription: "Enhance performance by indexing and caching.",
        taskDate: "2025-02-18",
        category: "Database",
        priority: "Medium",
      },
      {
        status: "failed",
        taskTitle: "Fix API Rate Limiting Issues",
        taskDescription: "Resolve bugs related to request throttling.",
        taskDate: "2025-02-19",
        category: "Backend Development",
        priority: "Low",
      },
    ],
    taskCount: { active: 1, completed: 1, failed: 1, new: 0 },
  },
  {
    id: 2,
    firstName: "Pappu",
    lastName: "Yadav",
    email: "pappu.yadav@itcompany.in",
    password: "123",
    role: "UI/UX Designer",
    department: "Design",
    tasks: [
      {
        status: "active",
        taskTitle: "Redesign Dashboard UI",
        taskDescription: "Create an intuitive and responsive dashboard UI.",
        taskDate: "2025-02-17",
        category: "UI/UX Design",
        priority: "High",
      },
      {
        status: "completed",
        taskTitle: "User Flow Testing",
        taskDescription: "Conduct usability tests and gather feedback.",
        taskDate: "2025-02-18",
        category: "User Research",
        priority: "Medium",
      },
      {
        status: "failed",
        taskTitle: "Enhance Accessibility Features",
        taskDescription: "Ensure the UI is accessible for all users.",
        taskDate: "2025-02-19",
        category: "UI/UX Design",
        priority: "Low",
      },
    ],
    taskCount: { active: 1, completed: 1, failed: 1, new: 0 },
  },
  {
    id: 3,
    firstName: "Bunty",
    lastName: "Verma",
    email: "bunty.verma@itcompany.in",
    password: "123",
    role: "DevOps Engineer",
    department: "DevOps",
    tasks: [
      {
        status: "active",
        taskTitle: "Implement CI/CD Pipeline",
        taskDescription: "Automate deployment process with Jenkins.",
        taskDate: "2025-02-17",
        category: "DevOps",
        priority: "High",
      },
      {
        status: "completed",
        taskTitle: "Configure Cloud Infrastructure",
        taskDescription: "Setup AWS services for production.",
        taskDate: "2025-02-18",
        category: "Infrastructure",
        priority: "Medium",
      },
      {
        status: "failed",
        taskTitle: "Optimize Docker Containers",
        taskDescription: "Reduce image size and improve security.",
        taskDate: "2025-02-19",
        category: "DevOps",
        priority: "Low",
      },
    ],
    taskCount: { active: 1, completed: 1, failed: 1, new: 0 },
  },
  {
    id: 4,
    firstName: "Guddu",
    lastName: "Pandey",
    email: "guddu.pandey@itcompany.in",
    password: "123",
    role: "Technical Writer",
    department: "Technical Writing",
    tasks: [
      {
        status: "active",
        taskTitle: "Document API Endpoints",
        taskDescription: "Write Swagger documentation for APIs.",
        taskDate: "2025-02-17",
        category: "Technical Writing",
        priority: "High",
      },
      {
        status: "completed",
        taskTitle: "Create Onboarding Guides",
        taskDescription: "Develop comprehensive documentation for new hires.",
        taskDate: "2025-02-18",
        category: "Technical Writing",
        priority: "Medium",
      },
      {
        status: "failed",
        taskTitle: "Update Legacy Documentation",
        taskDescription: "Revise outdated system manuals.",
        taskDate: "2025-02-19",
        category: "Technical Writing",
        priority: "Low",
      },
    ],
    taskCount: { active: 1, completed: 1, failed: 1, new: 0 },
  },
  {
    id: 5,
    firstName: "Tinku",
    lastName: "Malhotra",
    email: "tinku.malhotra@itcompany.in",
    password: "123",
    role: "Frontend Developer",
    department: "Frontend Development",
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

const admin = {
  id: 1,
  email: "admin@itcompany.com",
  password: "123",
};

export const setLocalStorage = (newData) => {
  if (newData.employees.length && newData.admin) {
    localStorage.setItem("employees", JSON.stringify(newData.employees));
    localStorage.setItem("admin", JSON.stringify(newData.admin));
  } else {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
