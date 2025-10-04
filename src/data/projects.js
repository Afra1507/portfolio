// src/data/projects.js
import guru from "../assets/projects/guru.webp";
import xyzRestaurant from "../assets/projects/xyz-restaurant.webp";

export const projects = [
  {
    id: "xyz-restaurant",
    title: "XYZ Restaurant Management System",
    image: xyzRestaurant,
    description:
      "🍽️ Java Swing desktop app using SQLite for managing table bookings, customers, and admin tasks with PDF reports and date scheduling.",
    longDescription:
      "Effective management of restaurant operations is critical in the fast-paced and competitive hospitality sector. XYZ Restaurant recognized the need to modernize its table management, customer service, and booking processes—leading to the creation of this Restaurant Table Reservation System. Built with Java Swing (Apache NetBeans IDE 19) and SQLite via JDBC, the system simplifies reservations, account creation, and login, while allowing administrators to efficiently manage tables, bookings, and customers. Swing GUI was chosen for its ease of use and intuitive drag-and-drop design, ensuring a smooth user experience. SQLite, as an embedded database, makes deployment simple without separate server setup. Additional JARs such as iTextPDF and JCalendar were used for generating printable booking PDFs and calendar-based date selection.",
    tech: [
      "Java",
      "Swing",
      "SQLite",
      "iTextPDF",
      "JCalendar",
      "JDBC",
      "NetBeans",
    ],
    github: "https://github.com/Afra1507/XYZRestaurantManagement",
    tags: ["Desktop", "CRUD", "Java Swing", "SQLite", "PDF"],
  },
  {
    id: "guru",
    title: "GURU.lk – Community Knowledge Sharing Platform",
    image: guru,
    description:
      "🎓 Full-stack, multilingual e-learning platform built with React, Spring Boot, and MySQL to democratize education across Sri Lanka.",
    longDescription:
      "GURU.lk is a full-stack community-based knowledge-sharing platform designed to make education inclusive and accessible to all Sri Lankans. The system addresses key issues in the current educational ecosystem—such as limited access to local-language resources, lack of centralized learning platforms, and high dependence on continuous internet access. By integrating Sinhala, Tamil, and English content, GURU.lk promotes community collaboration and lifelong learning through technology. Users can browse, view, and download lessons by subject or language; educators can upload content in video, text, or audio formats; and learners can participate in Q&A discussions for interactive help. Offline learning and multilingual support ensure accessibility for users in rural and low-income areas. The platform is powered by React (frontend), Spring Boot (backend), and MySQL (database), supported by Docker, Jenkins CI/CD, and Vercel for seamless deployment and scalability.",
    tech: [
      "React",
      "Spring Boot",
      "MySQL",
      "Docker",
      "Jenkins",
      "JWT",
      "TailwindCSS",
      "Vercel",
      "Postman",
    ],
    github: "https://github.com/Afra1507/guru.lk",
    demo: "#",
    tags: ["Full-Stack", "React", "Spring Boot", "MySQL", "Education"],
  },
];
