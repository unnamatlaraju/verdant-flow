# Verdant Flow 🌊

> **Water, in better circulation.**  
> A modern, responsive web application showcasing engineering solutions for water infrastructure, reuse, and resource-recovery.

---

## ✨ Features

- **Interactive System Flow Diagram**: Visual 3-stage animated process (Inlet & Collect, Treat & Clarify, Return & Renew) powered by SVG pipelines and dynamic glowing states.
- **Dynamic Delivery Model Timeline**: Interactive phase navigation highlighting engineering principles and delivery phases (*Listen*, *Shape*, *Build*, *Evolve*).
- **Responsive & Modern UI**: Tailored dark-mode technical aesthetic built with CSS custom properties, backdrop blur, and fluid typography.
- **Scroll & Interaction Polish**:
  - Live top scroll progress indicator.
  - Interactive mouse-tracking lighting accents.
  - Intersection Observer scroll-reveal animations.
  - Mobile-responsive drawer navigation.
- **Fast Performance**: Bundled with Vite and React for ultra-fast load times and instant HMR.

---

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/)
- **Bundler & Tooling**: [Vite](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Modern CSS3 (CSS Variables, Flexbox, CSS Grid, Keyframe Animations)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18 or newer) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/verdant-flow.git
   cd verdant-flow
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Then open the link shown in your terminal (typically `http://localhost:5173`).

### Production Build

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```text
├── dist/                # Production build output (git-ignored)
├── node_modules/        # Installed dependencies (git-ignored)
├── src/
│   ├── main.jsx         # Main application entry point & component tree
│   └── styles.css       # Global styles, variables, typography, and animations
├── index.html           # HTML template
├── package.json         # Project metadata and dependencies
├── vite.config.js       # Vite configuration
├── .gitignore           # Git ignore rules
└── README.md            # Project documentation
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
