<div align="center">

  <h1> Kunal Gupta – Developer Portfolio</h1>
  <p><b>Production-Grade Interactive 3D Portfolio & Engineering Showcase</b></p>

  <p>
    <a href="https://portfolio-website-chi-gilt.vercel.app"><img src="https://img.shields.io/badge/Live_Demo-Vercel-black?style=for-the-badge&logo=vercel" alt="Live Demo"/></a>
    <img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 16"/>
    <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 18"/>
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS v4"/>
    <img src="https://img.shields.io/badge/Spline-3D_WebGL-FF5C8A?style=for-the-badge&logo=spline&logoColor=white" alt="Spline 3D"/>
    <img src="https://img.shields.io/badge/GSAP-ScrollTrigger-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP"/>
  </p>

</div>

---

##  Overview

A modern, high-performance personal engineering portfolio engineered with **Next.js 16 App Router**, **React 18**, **Tailwind CSS v4**, **GSAP ScrollTrigger**, and **Framer Motion**. Features interactive **3D Spline WebGL canvas rendering**, 60FPS inertia motion physics, dynamic project modals, and a serverless contact dispatch system powered by Nodemailer.

---

##  Key Highlights & Technical Specs

| Category | Technologies & Tools |
| :--- | :--- |
| **Framework & Core** | Next.js 16 (App Router), React 18, Node.js 20+ |
| **Styling & Design Tokens** | Tailwind CSS v4, Custom CSS Clamp Grids, Glassmorphism UI |
| **Animation & Motion** | GSAP 3 (ScrollTrigger, Lerp Ticker), Framer Motion, Lenis Smooth Scroll |
| **3D Visualization** | Spline 3D WebGL Engine, WebGL Shader Containers |
| **Serverless Backend** | Next.js Serverless API Routes (`/api/contact`), Nodemailer SMTP Engine |
| **Deployment & Edge** | Vercel Edge Network, Gzip/Brotli Compression, Asset Caching |

---

##  Architectural Highlights

- **Unified Next.js 16 App Router**: Standardized single-repository architecture replacing separate SPA frontend and Express backend servers.
- **Serverless Direct Contact System**: Asynchronous contact dispatch via Nodemailer using Gmail SMTP integration.
- **Interactive 3D Spline Canvas**: Dynamic component loading with WebGL shader initialization and custom fallback skeletons.
- **GSAP ScrollTrigger Case Studies**: Pinned scroll showcase mapping project state transitions with smooth inertia lerping.
- **Dual-View Hero Component**: Interactive switcher between 3D Spline scene and cinematic split-portrait camera reveal.
- **Zero Hydration Mismatch**: Client-side layout wrappers handling cursor followers, smooth scroll, and spotlight followers post-mount.

---

##  Repository Structure

```text
Portfolio-website/
├── public/
│   ├── images/              # WebP optimized project screenshots & assets
│   ├── favicon.ico          # Application favicon
│   └── resume.pdf           # Software engineering resume document
├── src/
│   ├── app/                 # Next.js App Router hierarchy
│   │   ├── api/contact/     # Serverless POST endpoint for email dispatch
│   │   ├── layout.js        # Root HTML layout & fonts metadata
│   │   └── page.js          # Root landing page entry
│   ├── components/          # Reusable UI component modules
│   │   ├── Hero/            # Hero section & showcase card components
│   │   ├── projects/        # Project grids, blueprint cards & modals
│   │   ├── skills/          # Skill matrix & capability map components
│   │   ├── contact/         # Contact form, direct channels & confetti
│   │   ├── GlassCursor.jsx  # Interactive desktop custom cursor
│   │   └── SplineScene.jsx  # Dynamic Spline 3D canvas loader
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Server utilities (Nodemailer helper)
│   └── index.css            # Tailwind CSS v4 & custom keyframe styling
└── README.md
```

---

##  Local Development Setup

### 1. Prerequisites
- **Node.js**: `v18.17.0` or higher
- **npm**: `v9.0.0` or higher

### 2. Installation
```bash
git clone https://github.com/Kunal-Gupta28/Portfolio-website.git
cd Portfolio-website
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the root directory:
```env
# Gmail SMTP Email Dispatch Credentials
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=kunal.gupta.91165@gmail.com
SMTP_PASS=your_google_app_password
ADMIN_EMAIL=kunal.gupta.91165@gmail.com

# Public Resume Document Path
NEXT_PUBLIC_RESUME_URL=/resume.pdf
```

### 4. Run Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

##  Live Deployment

* **Live Demo**: [https://portfolio-website-chi-gilt.vercel.app](https://portfolio-website-chi-gilt.vercel.app)

---

##  Author & Contact

**Kunal Gupta**  
Software Engineer | Delhi Technological University (DTU)  
Email: `kunal.gupta.91165@gmail.com`  
GitHub: [@Kunal-Gupta28](https://github.com/Kunal-Gupta28)  
LinkedIn: [kunal-gupta28](https://linkedin.com/in/kunal-gupta28)
