# Test Your Knowledge - Quiz Application

A pixel-perfect, interactive quiz application built with React, TypeScript, and Tailwind CSS, replicating the provided Figma design with strict attention to detail.

## 🚀 Live Demo
https://testyourknowledge1.netlify.app/

---

## 🛠️ Tech Stack
- **Framework**: React 18 (Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (v3)
- **Animations**: Framer Motion
- **Package Manager**: npm

## ✨ Key Features
- **Pixel-Perfect Design**: Implemented exact colors ("Deep Teal", "Light Cyan"), fonts (Playfair Display, Inter), and dimensions (960px card, 40px radius) as per specifications.
- **Dynamic Progress Bar**: Visualizes progress through the 4-question quiz.
- **Logic & State**:
  - Tracks current question index and selected answers.
  - Prevents navigation until an option is selected.
  - Context-aware navigation buttons (Hidden Previous on Q1, Submit on Last).
- **Rolling Score Animation**: The final results screen features a smooth counting animation for the score percentage.
- **Responsive Layout**: Adapts gracefully to tablet and mobile screens, hiding decorative elements on smaller viewports.
- **Accessibility**: Semantic HTML buttons, ARIA labels for navigation icons, and keyboard focus states.

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd quiz-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production
```bash
npm run build
```

## 📝 Assumptions
- **Color Palette**: exact hex codes were inferred from the "Deep Teal" and "Light Cyan" descriptions to match standard design system values (Teal 50-900 spectrum) while visually matching the reference PDF.
- **Icons**: Simple arrow text characters (`←`, `→`) were used for navigation to keep the bundle lightweight and dependency-free, styled to match the design.
- **Responsiveness**: The "Cat Paw" decoration is decorative and removed on mobile to preserve screen real estate for the content.

## ⏱️ Time Spent
Approx. 4 hours (Planning, Implementation, Refactoring, Polish)
