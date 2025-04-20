export const employee = [
  {
    id: "emp001",
    name: "Alice Johnson",
    email: "employee1@example.com",
    password: "employee1",
    taskCount: {
      newTask: 3,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        id: "emp001-task-0",
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Homepage",
        description: "Create the layout for the landing page.",
        date: "2025-04-17",
        category: "Design"
      },
      {
        id: "emp001-task-1",
        newTask: false,
        completed: false,
        failed: false,
        title: "Fix navbar issue",
        description: "Resolve mobile responsiveness in navbar.",
        date: "2025-04-15",
        category: "Bugfix"
      },
      {
        id: "emp001-task-2",
        newTask: false,
        completed: false,
        failed: false,
        title: "Set up CI/CD",
        description: "Implement GitHub Actions for deployment.",
        date: "2025-04-12",
        category: "DevOps"
      }
    ]
  },
  {
    id: "emp002",
    name: "Brian Lee",
    email: "employee2@example.com",
    password: "employee2",
    taskCount: {
      newTask: 2,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        id: "emp002-task-0",
        newTask: true,
        completed: false,
        failed: false,
        title: "Write API documentation",
        description: "Document all REST API endpoints.",
        date: "2025-04-17",
        category: "Documentation"
      },
      {
        id: "emp002-task-1",
        newTask: false,
        completed: false,
        failed: false,
        title: "Implement auth middleware",
        description: "Secure routes using JWT-based auth.",
        date: "2025-04-14",
        category: "Backend"
      }
    ]
  },
  {
    id: "emp003",
    name: "Carla Mendes",
    email: "employee3@example.com",
    password: "employee3",
    taskCount: {
      newTask: 3,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        id: "emp003-task-0",
        newTask: false,
        completed: false,
        failed: false,
        title: "Create login page UI",
        description: "Design responsive login screen using Tailwind.",
        date: "2025-04-17",
        category: "Frontend"
      },
      {
        id: "emp003-task-1",
        newTask: false,
        completed: false,
        failed: false,
        title: "Optimize image loading",
        description: "Use lazy loading and compression techniques.",
        date: "2025-04-13",
        category: "Performance"
      },
      {
        id: "emp003-task-2",
        newTask: false,
        completed: false,
        failed: false,
        title: "Integrate payment gateway",
        description: "Add Razorpay integration for checkout.",
        date: "2025-04-10",
        category: "E-commerce"
      }
    ]
  },
  {
    id: "emp004",
    name: "David Patel",
    email: "employee4@example.com",
    password: "employee4",
    taskCount: {
      newTask: 3,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        id: "emp004-task-0",
        newTask: true,
        completed: false,
        failed: false,
        title: "Build dashboard analytics",
        description: "Show charts and metrics using Chart.js.",
        date: "2025-04-17",
        category: "Analytics"
      },
      {
        id: "emp004-task-1",
        newTask: false,
        completed: false,
        failed: false,
        title: "Setup PostgreSQL",
        description: "Switch from MongoDB to PostgreSQL.",
        date: "2025-04-12",
        category: "Database"
      },
      {
        id: "emp004-task-2",
        newTask: false,
        completed: false,
        failed: false,
        title: "Write unit tests",
        description: "Add Jest tests for all service functions.",
        date: "2025-04-11",
        category: "Testing"
      }
    ]
  },
  {
    id: "emp005",
    name: "Eva Chen",
    email: "employee5@example.com",
    password: "employee5",
    taskCount: {
      newTask: 3,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        id: "emp005-task-0",
        newTask: true,
        completed: false,
        failed: false,
        title: "Refactor auth logic",
        description: "Clean up and modularize auth functions.",
        date: "2025-04-17",
        category: "Code Cleanup"
      },
      {
        id: "emp005-task-1",
        newTask: false,
        completed: false,
        failed: false,
        title: "Create dark mode toggle",
        description: "Allow users to switch between themes.",
        date: "2025-04-13",
        category: "UX"
      },
      {
        id: "emp005-task-2",
        newTask: false,
        completed: false,
        failed: false,
        title: "Implement user roles",
        description: "Add role-based access control.",
        date: "2025-04-10",
        category: "Authorization"
      }
    ]
  }
];


  
export const admin=[ {
    "id": "admin001",
    "name": "Abhilash",
    "email": "admin@example.com",
    "password": "1234"
  }
]
export const setLocalStorage = () => {
    localStorage.setItem("employee", JSON.stringify(employee));
    localStorage.setItem("admin", JSON.stringify(admin));
    
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employee"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    return { employees, admin };
}
  