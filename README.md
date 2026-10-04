# Nitin Bane — Portfolio

Personal portfolio for **Nitin Ashok Bane**, Electronics & Telecommunication Engineer (Embedded Systems · Web Development).

Built with **React 19**, **Vite**, **Tailwind CSS v4**, **Motion** (Framer Motion), and **react-icons**.

## Features

- Light / dark theme toggle (remembers the choice, respects system preference, no flash on load)
- Animated circuit-board hero illustration
- Scroll-reveal animations (disabled automatically for users who prefer reduced motion)
- Active-section highlighting in the navbar, mobile menu
- Fully responsive, from 360px phones to large desktops
- Downloadable resume (`public/Nitin_Bane_Resume.pdf`)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Edit content

All text lives in **`src/data/profile.js`**: name, bio, contact details, skills, experience, projects, and education. Change it there and every section updates.

- **Resume:** replace `public/Nitin_Bane_Resume.pdf` (keep the same file name).
- **Accent color:** change `--color-brand` in `src/index.css`. There's one value for light mode (`@theme`) and one for dark mode (`.dark`).

## Project structure

```
src/
├── components/     Navbar, Hero, CircuitArt, About, Skills, Experience,
│                   Projects, Education, Contact, Footer, Section
├── data/profile.js All site content
├── hooks/          useTheme, useActiveSection
├── App.jsx
├── main.jsx
└── index.css       Tailwind setup, theme tokens, shared classes
```

## Deploy to Vercel

1. Push this folder to a new GitHub repository:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/nitin-portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com/new](https://vercel.com/new), import the repository, and click **Deploy**.
   Vercel detects Vite automatically (build command `npm run build`, output directory `dist`). No extra configuration is needed.

Every later push to `main` redeploys the site automatically.
