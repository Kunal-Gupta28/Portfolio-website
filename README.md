# Kunal Gupta — Software Engineer Portfolio

Production-grade, full-stack portfolio application built with Next.js 16 App Router, React 18, Tailwind CSS v4, GSAP ScrollTrigger, and Framer Motion. Features interactive 3D Spline canvas rendering, 60FPS inertia motion physics, and a serverless contact dispatch system powered by Nodemailer.

---

## Technical Specifications & Architecture

### Tech Stack

| Category | Technologies & Tools |
| :--- | :--- |
| Framework & Core | Next.js 16 (App Router), React 18, Node.js 20+ |
| Styling & Design Token | Tailwind CSS v4, Custom CSS Clamp Grids, Glassmorphism UI |
| Animation & Motion | GSAP 3 (ScrollTrigger, Lerp Ticker), Framer Motion, Lenis Smooth Scroll |
| 3D Visualization | Spline 3D WebGL Engine, WebGL Shader Containers |
| Serverless Backend | Next.js Serverless API Routes (`/api/contact`), Nodemailer SMTP Engine |
| Deployment & Edge | Vercel Edge Network, Gzip/Brotli Compression, Asset Caching |

---

## Architectural Highlights

- **Unified Next.js 16 App Router**: Standardized single-repository architecture replacing separate SPA frontend and Express backend servers.
- **Serverless Direct Contact System**: Asynchronous contact dispatch via Nodemailer using Gmail SMTP integration.
- **Interactive 3D Spline Canvas**: Dynamic component loading with WebGL shader initialization and custom fallback loading skeletons.
- **GSAP ScrollTrigger Case Studies**: Pinned scroll showcase mapping project state transitions with smooth inertiaLerp.
- **Dual-View Hero Component**: Interactive switcher between 3D Spline scene and cinematic split-portrait camera reveal.
- **Zero Hydration Mismatch**: Client-side layout wrappers handling cursor followers, smooth scroll, and spotlight followers post-mount.
- **Strict Component Isolation**: Modular component architecture ensuring maintainability across all UI sections.

---

## Repository File Structure

```
Portfolio-website/
├── public/
│   ├── images/              # WebP optimized project screenshots & assets
│   ├── favicon.ico          # Application favicon
│   └── resume.pdf           # Software engineering resume document
├── src/
│   ├── app/                 # Next.js App Router hierarchy
│   │   ├── api/
│   │   │   └── contact/     # Serverless POST endpoint for email dispatch
│   │   ├── about/           # About view page route
│   │   ├── contact/         # Contact view page route
│   │   ├── experience/      # Work experience page route
│   │   ├── projects/        # Projects showcase page route
│   │   ├── skills/          # Engineering skills page route
│   │   ├── layout.js        # Root HTML layout & fonts metadata
│   │   ├── page.js          # Root landing page entry
│   │   └── not-found.js     # 404 Error page route
│   ├── components/          # Reusable UI component modules
│   │   ├── About/           # About section & quote philosophy components
│   │   ├── Experience/      # Work experience timeline components
│   │   ├── Footer/          # Application footer component
│   │   ├── Hero/            # Hero section & showcase card components
│   │   ├── contact/         # Contact form, direct channels & confetti components
│   │   ├── navigation/      # Fixed navigation bar component
│   │   ├── projects/        # Project grids, blueprint cards & case study modals
│   │   ├── shared/          # Command palette, torch glow, magnetic buttons & badges
│   │   ├── skills/          # Skill matrix & capability map components
│   │   ├── ClientLayout.jsx # Mounted client overlay wrapper
│   │   ├── GlassCursor.jsx  # Interactive desktop custom cursor
│   │   └── SplineScene.jsx  # Dynamic Spline 3D canvas loader
│   ├── data/                # Static data models & portfolio configurations
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Server utilities (Nodemailer email helper)
│   ├── views/               # Page view implementations
│   └── index.css            # Tailwind CSS v4 & custom keyframe styling
├── .env.local               # Environment variables configuration
├── next.config.js           # Next.js configuration settings
├── postcss.config.mjs       # PostCSS Tailwind v4 configuration
└── package.json             # Project dependencies & build scripts
```

---

## Local Development Setup

### Prerequisites

- **Node.js**: `v18.17.0` or higher
- **npm**: `v9.0.0` or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Kunal-Gupta28/Portfolio-website.git
   cd Portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
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

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Production Build & Verification

To execute a local production build and verify page data generation:

```bash
npm run build
```

To run the compiled production build locally:

```bash
npm run start
```

---

## Deployment on Vercel

1. Push your repository to GitHub.
2. Import the repository into your Vercel Dashboard.
3. Verify project settings:
   - **Framework Preset**: `Next.js`
   - **Root Directory**: `./` (Project Root)
4. Add Environment Variables under **Project Settings -> Environment Variables**:
   - `SMTP_HOST` = `smtp.gmail.com`
   - `SMTP_PORT` = `465`
   - `SMTP_SECURE` = `true`
   - `SMTP_USER` = `kunal.gupta.91165@gmail.com`
   - `SMTP_PASS` = *(Your 16-character Google App Password)*
   - `ADMIN_EMAIL` = `kunal.gupta.91165@gmail.com`
   - `NEXT_PUBLIC_RESUME_URL` = `/resume.pdf`
5. Click **Deploy**.

---

## Author & Contact

**Kunal Gupta**  
Software Engineer | B.Tech in Electronics & Communication Engineering (ECE)  
Delhi Technological University (DTU)  
Email: `kunal.gupta.91165@gmail.com`  
GitHub: [@Kunal-Gupta28](https://github.com/Kunal-Gupta28)  
LinkedIn: [kunal-gupta28](https://linkedin.com/in/kunal-gupta28)
