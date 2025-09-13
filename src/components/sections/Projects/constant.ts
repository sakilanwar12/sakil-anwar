  export const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "fullstack",
      description:
        "A modern e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
      longDescription:
        "Built with Next.js and TypeScript, featuring Stripe integration, real-time notifications, and comprehensive admin tools.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Stripe",
        "Tailwind CSS",
      ],
      github: "https://github.com/username/ecommerce-platform",
      live: "https://ecommerce-demo.vercel.app",
      date: "2024",
      status: "Completed",
      featured: true,
      stats: { users: "1.2k", stars: 234, commits: 156 },
    },
    {
      id: 2,
      title: "AI Chat Application",
      category: "frontend",
      description:
        "Real-time chat application with AI integration and modern UI/UX design.",
      longDescription:
        "React-based chat app with OpenAI integration, real-time messaging, and responsive design across all devices.",
      image:
        "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop",
      technologies: ["React", "Socket.io", "Node.js", "OpenAI API", "MongoDB"],
      github: "https://github.com/username/ai-chat",
      live: "https://ai-chat-demo.netlify.app",
      date: "2024",
      status: "In Progress",
      featured: true,
      stats: { users: "800", stars: 189, commits: 97 },
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      category: "fullstack",
      description:
        "Comprehensive project management tool with team collaboration features.",
      longDescription:
        "Full-stack application with drag-and-drop functionality, team management, and detailed analytics dashboard.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Redis", "Chart.js"],
      github: "https://github.com/username/task-manager",
      live: "https://taskflow-demo.herokuapp.com",
      date: "2023",
      status: "Completed",
      featured: false,
      stats: { users: "2.1k", stars: 445, commits: 203 },
    },
    {
      id: 4,
      title: "Weather Forecast App",
      category: "mobile",
      description:
        "Mobile-first weather application with location-based forecasts and interactive maps.",
      longDescription:
        "Progressive Web App with offline capabilities, push notifications, and beautiful weather visualizations.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["React Native", "Redux", "Weather API", "Maps API", "PWA"],
      github: "https://github.com/username/weather-app",
      live: "https://weather-forecast-pwa.netlify.app",
      date: "2023",
      status: "Completed",
      featured: false,
      stats: { users: "650", stars: 123, commits: 89 },
    },
    {
      id: 5,
      title: "Cryptocurrency Tracker",
      category: "frontend",
      description:
        "Real-time crypto price tracking with portfolio management and analytics.",
      longDescription:
        "Interactive dashboard for tracking cryptocurrency prices with portfolio management and market analysis tools.",
      image:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop",
      technologies: [
        "React",
        "TypeScript",
        "CoinGecko API",
        "Chart.js",
        "Framer Motion",
      ],
      github: "https://github.com/username/crypto-tracker",
      live: "https://crypto-portfolio-tracker.vercel.app",
      date: "2024",
      status: "Completed",
      featured: true,
      stats: { users: "1.8k", stars: 312, commits: 134 },
    },
    {
      id: 6,
      title: "Social Media Analytics",
      category: "fullstack",
      description:
        "Analytics dashboard for social media performance tracking and insights.",
      longDescription:
        "Comprehensive analytics platform with data visualization, automated reporting, and multi-platform integration.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Python", "FastAPI", "PostgreSQL", "D3.js"],
      github: "https://github.com/username/social-analytics",
      live: "https://social-insights-dashboard.vercel.app",
      date: "2024",
      status: "In Progress",
      featured: false,
      stats: { users: "900", stars: 267, commits: 178 },
    },
  ];
export type TProject = typeof projects[0];