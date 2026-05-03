<div align="center">
  <img src="public/thumbnail.png" alt="Soto Anggut Thumbnail" width="100%">
  
  <br />
  <br />

  # 🍲 Soto Anggut
  **A Cinematic Scrollytelling Web Experience**

  [![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

  *A high-fidelity conceptual landing page showcasing Indonesian culinary heritage through deep-scroll frame sequencing and fluid typography.*
</div>

---

## 📖 Overview

**Soto Anggut** is a front-end engineering showcase pushing the boundaries of web-based visual storytelling. Built entirely on Next.js 16 and the React 19 ecosystem, this project moves away from static layouts and instead leverages an advanced **HTML5 Canvas Frame Sequence** linked dynamically to the user's scroll state. 

The application architecture heavily prioritizes rendering performance. By bridging `Lenis` for smooth-scrolling kinetics and `Framer Motion` for typographic choreography, the app maintains a rigid 60fps experience while unpacking a massive 240-frame visual journey—without causing browser layout thrashing.

---

## ✨ Core Engineering Features

*   **🎬 Cinematic Canvas Sequencing:** Implements a strictly controlled, high-performance HTML `<canvas>` component that paints pre-loaded JPG image arrays frame-by-frame based on the normalized scroll progress.
*   **💨 Lenis Smooth Scroll Kinetics:** Overrides native browser scroll ticking with the `@studio-freight/react-lenis` engine, enforcing fluid, dampened momentum essential for scrollytelling syncing.
*   **🧠 Concurrent Asset Preloading:** Custom built `useEffect` pipelines handle the asynchronous fetching and caching of hundreds of high-resolution frame assets into browser memory instantly to avoid visual stutter during scroll descent.
*   **🪄 Luxury UX Aesthetics:** Incorporates nuanced CSS techniques including 4% stochastic noise overlays, dynamic vignette masking, and carefully structured typography hierarchies to eliminate generic digital artifacts.
*   **⚡ Hardware Accelerated Animations:** Typographic reveals and layout shifts are powered by Framer Motion leveraging CSS `transform` properties directly on the GPU composite layer.

  ---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js 16.x](https://nextjs.org/) (App Router Paradigm)
- **Language**: [TypeScript v5](https://www.typescriptlang.org/) (Strict Mode Enforced)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (PostCSS Configuration)
- **Animation Orchestration**: [Framer Motion v12](https://www.framer.com/motion/)
- **Scroll Engine**: [Lenis](https://lenis.studiofreight.com/)

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed on your local development machine:
- **Node.js** (v20.x or newer recommended for Next v16 compatibility)
- **NPM**, **Yarn**, or **PNPM**

### 1. Installation

Clone the repository and install the locked dependencies.

```bash
git clone https://github.com/FilbertSM/soto-anggut.git
cd soto-anggut
npm install
```

### 2. Startup

Initialize the local development environment:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) inside a Chromium-based browser or Safari to experience the frame sequencing engine.

---

## 🏗️ Production Build Optimization

Due to the heavy static asset pipeline, optimizing for a production deployment requires the Next.js build compiler to trace and chunk the JavaScript properly.

```bash
npm run build
npm start
```
*(Note: If deploying to Vercel, the edge CDN will automatically cache the image sequence frames, drastically reducing the initial TTFB).*

---

## 👨‍💻 Creator

**Filbert Sembiring Meliala**  
*Front-End Engineer & Digital Experience Craftsman*

- **Portfolio:** [filbertsm.vercel.app](https://filbertsm.vercel.app/)
- **LinkedIn:** [Filbert Sembiring Meliala](https://www.linkedin.com/in/filbert-sembiring-meliala/)
- **GitHub:** [@FilbertSM](https://github.com/FilbertSM)

---

*Project developed as a proprietary conceptual execution. All creative assets and framework logic belong to their respective execution spaces.*