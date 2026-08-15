export const projects = [
  {
    id: "chatcraft",
    title: "ChatCraft",
    description: "Full-stack real-time collaborative coding & chat platform powered by WebSockets, Google Gemini AI, and Redis in-memory caching for low-latency team workflows.",
    longDescription: `ChatCraft is a full-stack real-time collaboration workspace designed for developers, teams, and AI-assisted workflows.

🚀 Key Highlights & Architecture:
• Real-time chat & socket event distribution using Socket.io
• Integrated Google Gemini AI for contextual coding help, auto-suggestions, and automated response generation
• High-performance in-memory caching & pub/sub events using Redis
• Media & asset pipeline management via Cloudinary CDN
• Scalable RESTful API architecture built with Node.js and Express.js
• Data persistence & schemas managed with MongoDB Atlas
• Ultra-fast responsive UI built with React.js and Tailwind CSS

This project demonstrates advanced real-time system design, AI prompt pipelines, caching strategies, and multi-user synchronization.`,
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Socket.io",
      "Gemini AI",
      "Cloudinary",
      "Redis",
      "MongoDB",
    ],
    github: "https://github.com/Kunal-Gupta28/ChatCraft",
    live: "https://chat-craft-xi.vercel.app",
    videoDemo: "",
    category: "Web App",
    hasApiDependency: true,
  },

  {
    id: "kubik-ride",
    title: "Kubik Ride Booking App",
    description: "Full-stack Uber-style ride hailing platform with live WebSockets driver tracking, dynamic fare calculation, and secure Razorpay payment integration.",
    longDescription: `Kubik is an end-to-end transportation platform inspired by real-world ride hailing systems like Uber.

🚀 Key Highlights & Architecture:
• Geolocation streaming & live ride tracking powered by Socket.io WebSockets
• Secure online payment gateway integration using Razorpay Webhook APIs
• JWT authentication with encrypted passwords and session persistence
• Asset & document verification uploads using Cloudinary CDN
• Smooth 60FPS UI interactions and micro-animations with GSAP
• Modular REST API backend powered by Express.js and MongoDB
• Mobile-first responsive frontend built with React and Tailwind CSS

This project highlights real-time WebSocket communication, payment gateway integrations, and complex state synchronization.`,
    technologies: [
      "React",
      "Tailwind CSS",
      "GSAP",
      "Node.js",
      "Express.js",
      "Socket.io",
      "Cloudinary",
      "Razorpay",
      "MongoDB",
    ],
    github: "https://github.com/Kunal-Gupta28/kubik",
    live: "https://kuber-tau.vercel.app",
    videoDemo: "",
    category: "Web App",
    hasApiDependency: true,
  },

  {
    id: "wanderlust",
    title: "WanderLust",
    description: "Airbnb-inspired travel destination discovery marketplace with MVC server-rendered EJS templates, Passport session auth, and Cloudinary media uploads.",
    longDescription: `WanderLust is an Airbnb-inspired travel community platform where users can explore, list, and review unique travel destinations.

🚀 Key Highlights & Architecture:
• Clean Model-View-Controller (MVC) server-side architecture
• User authentication & session management using Passport.js & Express-session
• Cloud-based image upload and optimization using Cloudinary
• Dynamic server-side page rendering with EJS templates
• Cloud database storage & indexing with MongoDB Atlas
• Full CRUD functionality for destination listings and user reviews

This project demonstrates core backend engineering, session authentication, and server-rendered web application architecture.`,
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "EJS",
      "Passport.js",
      "Cloudinary",
    ],
    github: "https://github.com/Kunal-Gupta28/WanderLust",
    live: "https://offends.onrender.com",
    videoDemo: "",
    category: "Web App",
    hasApiDependency: false,
  },

  {
    id: "works-studio",
    title: "Works Studio",
    description: "Awwwards-inspired interactive agency portfolio featuring Locomotive smooth scroll, 60FPS GSAP ScrollTrigger timelines, and fluid Framer Motion transitions.",
    longDescription: `Works Studio is a high-end interactive portfolio template crafted to showcase modern design engineering and fluid web animations.

🚀 Key Highlights & Architecture:
• Inertia-based smooth scrolling experience using Locomotive Scroll
• Complex timeline scroll animations powered by GSAP and ScrollTrigger
• Interactive micro-animations and page transitions with Framer Motion
• Dark-mode aesthetic with custom cursor physics and typography
• Fully responsive, GPU-accelerated layout built with React and Tailwind CSS

This project showcases creative frontend motion design, 60FPS animation pipelines, and modern visual aesthetics.`,
    technologies: [
      "React",
      "Tailwind CSS",
      "GSAP",
      "Locomotive Scroll",
      "Framer Motion",
    ],
    github: "https://github.com/Kunal-Gupta28/Works-sutdio",
    live: "https://works-sutdio.vercel.app",
    videoDemo: "",
    category: "Web App",
    hasApiDependency: false,
  },

  {
    id: "image-enhancer",
    title: "Image Enhancer",
    description: "AI-powered image utility for automated clarity enhancement, upscaling, and background removal with live side-by-side preview sliders via PicWish AI APIs.",
    longDescription: `Image Enhancer is an intelligent web application that leverages AI vision APIs to automatically upscale images and strip backgrounds in seconds.

🚀 Key Highlights & Architecture:
• Automated background removal & clarity enhancement via PicWish AI APIs
• Instant side-by-side comparison slider for original vs processed images
• Asynchronous Blob & DataURL handling for instant browser previews
• Responsive dark-mode interface built with React and Tailwind CSS
• Error handling & rate limiting for external API integration

This project highlights frontend API integration, asynchronous image processing, and utility UI design.`,
    technologies: [
      "React",
      "Tailwind CSS",
      "PicWish AI API",
      "JavaScript",
    ],
    github: "https://github.com/Kunal-Gupta28/Image-enhancer",
    live: "https://image-enhancer-azure.vercel.app",
    videoDemo: "",
    category: "ML/AI",
    hasApiDependency: true,
  },

  {
    id: "cyberfiction",
    title: "CyberFiction",
    description: "Visually immersive 3D canvas animation showcase featuring frame-by-frame HTML5 canvas sequence rendering and GSAP scroll-scrubbed timelines.",
    longDescription: `CyberFiction is a 3D canvas animation showcase inspired by futuristic cyberpunk aesthetics.

🚀 Key Highlights & Architecture:
• Frame-by-frame HTML5 canvas image sequence rendering
• Smooth scroll-scrubbed timeline synchronization using GSAP ScrollTrigger
• Inertia scroll physics integrated with Locomotive Scroll
• Optimized image asset preloading to prevent canvas flickering
• Mobile-responsive canvas viewport scaling

This project demonstrates high-performance 2D/3D canvas rendering and scroll-driven animation engineering.`,
    technologies: [
      "HTML5 Canvas",
      "CSS3",
      "JavaScript",
      "GSAP ScrollTrigger",
      "Locomotive Scroll",
    ],
    github: "https://github.com/Kunal-Gupta28/Cyberfiction",
    live: "https://cyberfiction-pi.vercel.app",
    videoDemo: "",
    category: "Web App",
    hasApiDependency: false,
  },

  {
    id: "ecommerce",
    title: "ShopCraft E-Commerce",
    description: "Scalable frontend e-commerce platform featuring reactive cart state management, dynamic category filtering, search, and responsive product detail modals.",
    longDescription: `ShopCraft is a modular frontend e-commerce platform built for online shopping experiences.

🚀 Key Highlights & Architecture:
• Reactive shopping cart state management with persistent local storage
• Dynamic product category filtering and keyword search
• Reusable UI component architecture for product grids and modal cards
• Optimized responsive layouts for mobile, tablet, and desktop viewports

This project showcases frontend architecture, state management, and e-commerce UI patterns.`,
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Kunal-Gupta28/Ecommerce",
    live: "https://github.com/Kunal-Gupta28/Ecommerce",
    videoDemo: "",
    category: "Web App",
    hasApiDependency: false,
  },

  {
    id: "k72-agency",
    title: "K72 Creative Agency",
    description: "Minimalist editorial agency landing page built with wide grid layouts, bold typography scaling, micro-interactions, and high-performance vanilla JavaScript.",
    longDescription: `K72 Agency is a sleek, editorial landing page designed for creative studios and digital agencies.

🚀 Key Highlights & Architecture:
• Wide editorial grid layout with bold typography scaling
• Micro-interactions & hover reveal animations for portfolio showcases
• Lightweight, performance-first vanilla JavaScript implementation
• Cross-browser compatible responsive layout

This project emphasizes editorial web design, grid layouts, and typography systems.`,
    technologies: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Kunal-Gupta28/K72-AGENCY",
    live: "https://github.com/Kunal-Gupta28/K72-AGENCY",
    videoDemo: "",
    category: "Web App",
    hasApiDependency: false,
  },

  {
    id: "connectly",
    title: "Connectly SaaS Landing Page",
    description: "Modern SaaS product landing page featuring interactive pricing toggle cards, team collaboration feature grids, FAQ accordions, and dark glassmorphic styling.",
    longDescription: `Connectly is a modern SaaS product landing page designed for team communication and productivity tools.

🚀 Key Highlights & Architecture:
• Clean component-driven architecture built with React and Tailwind CSS
• Interactive pricing toggle cards, feature comparison grids, and FAQ accordions
• Dark glassmorphic aesthetic with subtle hover glow effects
• Fully responsive layout designed for high conversion rates

This project showcases SaaS landing page UX design, component structure, and responsive styling.`,
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Kunal-Gupta28/Connectly",
    live: "https://github.com/Kunal-Gupta28/Connectly",
    videoDemo: "",
    category: "Web App",
    hasApiDependency: false,
  },

  {
    id: "sundown-ui-clone",
    title: "Sundown Studio UI Clone",
    description: "Pixel-perfect interactive clone of Sundown Studio design agency featuring custom video hover overlays that follow cursor movement and infinite marquee text scrolls.",
    longDescription: `A pixel-perfect recreation of the award-winning Sundown Studio agency website.

🚀 Key Highlights & Architecture:
• Custom video hover overlays that follow cursor movements
• Continuous infinite marquee text scroll animations
• Custom smooth scroll integration and responsive drawer navigation
• Pixel-perfect typography, color tokens, and spatial consistency

This project highlights high-precision UI cloning, media hover interactions, and front-end fidelity.`,
    technologies: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Kunal-Gupta28/Sundown-studio-UI-clone",
    live: "https://github.com/Kunal-Gupta28/Sundown-studio-UI-clone",
    videoDemo: "",
    category: "Web App",
    hasApiDependency: false,
  },
];

export const categories = ["All", "Web App", "ML/AI"];
