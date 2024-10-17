import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export const mockProjects: TProject[] = [
  {
    id: uuidv4(),
    title: "Gaming Platform Web & Mobile App",
    date: "June 15, 2022",
    imageUrl: "https://picsum.photos/200/230",
    userCount: 16,
    commentCount: 9,
    description:
      "This project involves creating a gaming platform with both web and mobile applications. The focus is on user experience, game design, and seamless authentication. This project involves creating a gaming platform with both web and mobile applications. The focus is on user experience, game design, and seamless authentication. This project involves creating a gaming platform with both web and mobile applications. The focus is on user experience, game design, and seamless authentication.",
    leader: "John Carter",
    dueDate: "July 30, 2022",
    tasks: [
      {
        id: uuidv4(),
        title: "Design Homepage",
        progress: 80,
        status: "In Progress",
        iconColor: "#3498db",
        userCount: 5,
        subtasks: [
          {
            id: uuidv4(),
            title: "Create Wireframes",
            progress: 100,
            status: "Completed",
          },
          {
            id: uuidv4(),
            title: "Build UI",
            progress: 70,
            status: "In Progress",
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Implement Authentication",
        progress: 50,
        status: "In Progress",
        iconColor: "#2ecc71",
        userCount: 3,
        subtasks: [
          {
            id: uuidv4(),
            title: "Backend API",
            progress: 60,
            status: "In Progress",
          },
          {
            id: uuidv4(),
            title: "Frontend Form",
            progress: 40,
            status: "In Progress",
          },
        ],
      },
    ],
    attachments: [{ id: uuidv4(), name: "DesignSpec.pdf" }],
  },
  {
    id: uuidv4(),
    title: "Furniture & Interior Design Mobile App",
    date: "June 18, 2022",
    imageUrl: "https://picsum.photos/200/240",
    userCount: 12,
    commentCount: 4,
    description:
      "This mobile app project is focused on creating a platform for furniture shopping and interior design. It includes product displays, a custom dashboard for admins, and a role-based access system.",
    leader: "Sophia Williams",
    dueDate: "August 15, 2022",
    tasks: [
      {
        id: uuidv4(),
        title: "Build Product Page",
        progress: 65,
        status: "In Progress",
        iconColor: "#e67e22",
        userCount: 6,
        subtasks: [
          {
            id: uuidv4(),
            title: "Setup Database",
            progress: 80,
            status: "In Progress",
          },
          {
            id: uuidv4(),
            title: "Build API",
            progress: 50,
            status: "In Progress",
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Create Admin Dashboard",
        progress: 30,
        status: "In Progress",
        iconColor: "#9b59b6",
        userCount: 4,
        subtasks: [
          {
            id: uuidv4(),
            title: "Design Dashboard",
            progress: 20,
            status: "In Progress",
          },
          {
            id: uuidv4(),
            title: "Implement Role-based Access",
            progress: 10,
            status: "In Progress",
          },
        ],
      },
    ],
    attachments: [
      { id: uuidv4(), name: "AdminGuide.pdf" },
      { id: uuidv4(), name: "DesignMockups.zip" },
    ],
  },
];
