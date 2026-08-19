export const projects = [
  {
    id: "chatcraft",
    title: "ChatCraft — Collaborative Workspace",
    description: "Full-stack real-time collaborative coding & chat platform powered by WebSockets, Google Gemini AI, and Redis in-memory caching for low-latency team workflows.",
    longDescription: `ChatCraft is a full-stack real-time collaboration workspace designed for developers, teams, and AI-assisted workflows.

Key Highlights & Architecture:
• Real-time chat & socket event distribution using Socket.io
• Integrated Google Gemini AI for contextual coding help, auto-suggestions, and automated response generation
• High-performance in-memory caching & pub/sub events using Redis
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
      "Redis",
      "MongoDB",
    ],
    github: "https://github.com/Kunal-Gupta28/ChatCraft",
    live: "https://chat-craft-xi.vercel.app",
    videoDemo: "",
    category: "Flagship",
    isFlagship: true,
    hasApiDependency: true,
  },

  {
    id: "kubik-ride",
    title: "Kubik — Ride Booking Platform",
    description: "Full-stack Uber-style ride hailing platform with live WebSockets driver tracking, dynamic fare calculation, and secure Razorpay payment integration.",
    longDescription: `Kubik is an end-to-end transportation platform inspired by real-world ride hailing systems like Uber.

Key Highlights & Architecture:
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
    category: "Flagship",
    isFlagship: true,
    hasApiDependency: true,
  },

  {
    id: "london-cert",
    title: "London Cert (londoner.co.uk) — Dynamic Full-Stack Platform",
    description: "Full-stack CMS-driven production platform (londoner.co.uk) built with Next.js, Payload CMS, and PostgreSQL. Features dynamic Country → State → City location hierarchy and hosting on Render + HostingRaja Windows VPS via Plesk Panel.",
    longDescription: `London Cert (londoner.co.uk) is a full-stack, CMS-driven production platform built for Quality Control Certification to automate SEO-focused certification page creation across global standards, industries, and locations.

Key Highlights & Architecture:
• Rebuilt legacy website into a modern full-stack Next.js application integrated with Payload CMS
• Designed hierarchical dynamic location content supporting Country → State → City relationships for automated SEO page expansion
• Integrated Payload CMS with role-based admin access control for non-technical SEO team self-service
• Built reusable page templates for standards, industries, and locations, reducing developer overhead
• Deployed full-stack Next.js app on Render with PostgreSQL database hosted on a HostingRaja Windows Server VPS via Plesk Panel
• Optimized for top SEO ranking, performance, Core Web Vitals, and long-term maintainability`,
    technologies: [
      "Next.js",
      "Payload CMS",
      "PostgreSQL",
      "HostingRaja VPS",
      "Windows Server",
      "Plesk Panel",
      "Render",
      "Tailwind CSS",
    ],
    github: null,
    live: null,
    isProprietary: true,
    company: "Quality Control Certification",
    videoDemo: "",
    category: "Production",
    hasApiDependency: true,
  },

  {
    id: "prime-success",
    title: "Prime Success",
    description: "Full-stack production web application built with Next.js & custom backend API, featuring automated daily News API fetching (12:00 PM schedule), contact form handling, and an admin panel for interview video uploads.",
    longDescription: `Prime Success is a production web application engineered for business compliance and certification requirements, powered by a custom backend system with automated content delivery.

Key Highlights & Architecture:
• Automated Daily News API: Integrated a third-party News API that automatically fetches and updates fresh news content at 12:00 PM daily for live platform display
• Admin Interview Video Portal: Developed admin-side management allowing seamless upload and publishing of candidate interview videos
• Backend API & Contact Form: Built server-side REST API endpoints for processing contact form submissions and lead management
• Next.js Re-architecture & SEO: Re-engineered legacy WordPress codebase into a modern Next.js application with Core Web Vitals optimization`,
    technologies: [
      "Next.js",
      "Node.js",
      "News API",
      "REST API",
      "Admin Panel",
      "Tailwind CSS",
      "JavaScript",
      "SEO Optimization",
      "Render",
    ],
    github: null,
    live: null,
    isProprietary: true,
    company: "Quality Control Certification",
    videoDemo: "",
    category: "Production",
    hasApiDependency: true,
  },

  {
    id: "qccertification",
    title: "QCCertification Portal",
    description: "Core production web portal for Quality Control Certification built with Next.js component architecture, reusable templates, responsive layouts, and Core Web Vitals SEO optimization.",
    longDescription: `QCCertification is the primary production web portal engineered for Quality Control Certification to support ISO standards and compliance workflows.

Key Highlights & Architecture:
• Engineered Next.js frontend application to support ISO certification workflows and compliance standards
• Built reusable component page layouts enabling rapid deployment of new certification offerings
• Implemented responsive UI design, dynamic content rendering, and Core Web Vitals SEO optimizations
• Deployed production application on Render edge infrastructure for fast global access`,
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "SEO Optimization",
      "Render",
    ],
    github: null,
    live: null,
    isProprietary: true,
    company: "Quality Control Certification",
    videoDemo: "",
    category: "Production",
    hasApiDependency: false,
  },

  {
    id: "wanderlust",
    title: "WanderLust",
    description: "Airbnb-inspired travel destination discovery marketplace with MVC server-rendered EJS templates, Passport session auth, and Cloudinary media uploads.",
    longDescription: `WanderLust is an Airbnb-inspired travel community platform where users can explore, list, and review unique travel destinations.

Key Highlights & Architecture:
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

Key Highlights & Architecture:
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
    description: "Frontend web application utility connected to PicWish API for image upscaling, clarity enhancement, and background removal with live side-by-side comparison sliders.",
    longDescription: `Image Enhancer is a frontend utility web application built with React that connects to external image processing APIs to upscale image resolution and remove backgrounds on-the-fly.

Key Highlights & Architecture:
• Frontend integration with PicWish external image processing APIs
• Instant side-by-side comparison slider for original vs API-processed images
• Asynchronous Blob & DataURL handling for instant browser previews
• Responsive dark-mode interface built with React and Tailwind CSS
• Error handling & rate limiting for external API requests`,
    technologies: [
      "React",
      "Tailwind CSS",
      "PicWish API",
      "JavaScript",
    ],
    github: "https://github.com/Kunal-Gupta28/Image-enhancer",
    live: "https://image-enhancer-azure.vercel.app",
    videoDemo: "",
    category: "Web App",
    hasApiDependency: true,
  },

  {
    id: "cyberfiction",
    title: "CyberFiction",
    description: "Visually immersive 3D canvas animation showcase featuring frame-by-frame HTML5 canvas sequence rendering and GSAP scroll-scrubbed timelines.",
    longDescription: `CyberFiction is a 3D canvas animation showcase inspired by futuristic cyberpunk aesthetics.

Key Highlights & Architecture:
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

Key Highlights & Architecture:
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

Key Highlights & Architecture:
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

Key Highlights & Architecture:
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

Key Highlights & Architecture:
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

export const categories = ["All", "Flagship", "Production", "Web App"];
