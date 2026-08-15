# 📋 Project Optimization TODO List — Kunal Gupta Portfolio

---

## 🔴 High Priority (Immediate Performance Gains)

- [x] **Image Compression & WebP Conversion**:
  - [x] Convert `public/images/kubik.png` (1.89 MB) to WebP format (`kubik.webp` ~86 KB).
  - [x] Convert `public/images/hero-mobile.jpg` (345 KB) and `public/images/hero-tablet.jpg` (108 KB) to `.webp` format (`hero-mobile.webp` ~23 KB & `hero-tablet.webp` ~22 KB).
  - [x] Update `srcSet` image paths in `HeroBackground.jsx` and `Background.jsx`.

- [x] **MUI to Pure Tailwind CSS Refactoring (JS Bundle Reduction)**:
  - [x] Refactor `ContactForm.jsx` to replace Material UI `TextField`, `Button`, `Paper`, `Typography` with Tailwind v4.
  - [x] Refactor `ProjectDialog.jsx`, `ProjectCard.jsx`, `CategoryFilter.jsx`, `ComingSoonCard.jsx`, `ContactActions.jsx`, `Contact.jsx`, `Projects.jsx`, and `GlassCard.jsx` to pure Tailwind v4.

---

## 🟡 Medium Priority (Code Cleanliness & Backend Hardening)

- [x] **Backend Response Compression & Security**:
  - [x] Install and configure `compression` middleware in `backend/app.js` for Gzip/Brotli JSON compression.
  - [x] Add `helmet` middleware in `backend/app.js` for production security headers.

- [x] **Reusable Component Extraction**:
  - [x] Create `components/About/AboutSection.jsx` wrapper for `Qualifications.jsx`, `Experience.jsx`, `Values.jsx`, `Interests.jsx`, `Story.jsx`.
  - [x] Create `components/projects/TechPills.jsx` for sharing technology badges between `ProjectCard` & `ProjectDialog`.

---

## 🟢 Low Priority (Visual Polish & Enhancements)

- [ ] **Project Showcase Content Polish**:
  - [ ] Add live preview GIFs or fallback badges for projects with empty live links (`live: ""`).
  - [x] Increase text contrast for muted secondary text (`opacity-50` -> `opacity-75`) for WCAG AA accessibility compliance.

---

*TODO list generated for Kunal Gupta's Portfolio Website.*
