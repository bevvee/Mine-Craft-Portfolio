# Mohammed Amine El Aazzouzi — Portfolio (Source Code)

## Requirements
- Node.js 18+  (https://nodejs.org)
- pnpm  →  npm install -g pnpm

## Setup & Run

```bash
# 1. Install dependencies
pnpm install

# 2. Start the dev server
PORT=3000 BASE_PATH=/ pnpm run dev
```

Then open http://localhost:3000 in your browser.

## Build for production (static HTML/CSS/JS)

```bash
PORT=3000 BASE_PATH=/ pnpm run build
# Output → dist/public/
```

## Project structure

src/
  components/
    layout/       → Navbar (Minecraft hotbar)
    sections/     → Hero, About, Experience, Projects, Skills, Education, Contact
    ui/           → MinecraftPanel, MinecraftButton, shadcn components
  pages/
    Home.tsx      → All sections assembled
  index.css       → Minecraft theme (Press Start 2P font, colors, pixel styles)
  App.tsx         → Root app + router
