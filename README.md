# 🌌 Cosmos Explorer — TS Academy Capstone Project

A visually stunning, interactive Solar System web application built with **React**. This project brings together HTML, CSS, JavaScript, the Fetch API, responsive design, and Git collaboration as part of the TS Academy Capstone.

---

## 🚀 Project Summary

**Cosmos Explorer** is an immersive web experience that lets users explore our solar system. It fetches real planetary data from an external API, displays rich planet cards, plays a space video, and includes a contact form — all built with a component-based React architecture.

**Design Direction:** Deep-space retro-futuristic dark theme with animated nebulae, orbital rings, glowing accents, and the **Orbitron** display font for a NASA-inspired aesthetic.

---

## 👨‍🚀 Group Members

| Name | GitHub |
|------|--------|
| Member 1 | [github.com/member1](https://github.com/member1) |
| Member 2 | [github.com/member2](https://github.com/member2) |
| Member 3 | [github.com/member3](https://github.com/member3) |
| Member 4 | [github.com/member4](https://github.com/member4) |

> **Update the names and GitHub links above with your actual group members.**

---

## 🧩 Components & Contributors

| Component | File | Description | Contributor |
|-----------|------|-------------|-------------|
| App | `src/App.js` | Root component, layout orchestrator | Group |
| Header | `src/components/Header.js` | Fixed nav, mobile menu, scroll CTAs | Member 1 |
| Hero | `src/components/Hero.js` | Landing section with solar system animation | Member 2 |
| PlanetsSection | `src/components/PlanetsSection.js` | Fetch API integration, planet grid | Member 3 |
| PlanetCard | `src/components/PlanetCard.js` | Individual planet `<figure>` card | Member 3 |
| FeaturesSection | `src/components/FeaturesSection.js` | Info/features grid | Member 1 |
| VideoSection | `src/components/VideoSection.js` | Native `<video>` autoplay section | Member 4 |
| ContactSection | `src/components/ContactSection.js` | Form with validation + API submit | Member 2 |
| Footer | `src/components/Footer.js` | Footer with links, tech stack | Group |
| Global CSS | `src/styles/global.css` | Design tokens, animations, starfield | Group |

> **Update the "Contributor" column with your actual team assignments.**

---

## ✅ Functionality Checklist

- [x] **"Explore the Data" CTA** → scrolls to planet section (`#planets`)
- [x] **"Contact Us" CTA** → scrolls to form section (`#contact`)
- [x] **`<meta name="author">`** → set to group name in `public/index.html`
- [x] **Video** → native `<video>` element (NO iframe), `autoPlay`, `muted`, `loop`
- [x] **Planet data** → fetched from `https://anurella.github.io/json/planets.json`
- [x] **Planet cards** → show name, distance from sun, image, wrapped in `<figure>`
- [x] **Form submission** → `POST` to `https://whitebricks.com/tsacademy.php`
- [x] **Client-side form validation** → all fields validated, error messages shown
- [x] **Success message** → displayed after form submission
- [x] **Responsive design** → mobile-first with media queries at 480px, 768px, 1100px
- [x] **Component-based** → all sections are isolated React components
- [x] **React Hooks** → `useState`, `useEffect`, `useRef` used throughout

---

## 🛠️ Tech Stack

- **React 18** — Component-based UI
- **Fetch API** — Planetary data retrieval
- **CSS3** — Custom properties, animations, media queries
- **Google Fonts** — Orbitron, Syne, Space Mono
- **HTML5** — Semantic elements (`<figure>`, `<figcaption>`, `<video>`, `<section>`)

---

## 💻 Running the Project Locally

### Prerequisites

- Node.js (v16 or higher) — [Download here](https://nodejs.org)
- npm (comes with Node.js)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_GROUP/cosmos-explorer.git

# 2. Navigate into the project folder
cd cosmos-explorer

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

The app will open at **http://localhost:3000**

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `/build` folder.

---

## 🌐 Live Deployment

> 🚀 **[Live Demo Link — Update this after deployment](https://your-deployment-url.com)**

**Recommended deployment platforms:**
- [Netlify](https://netlify.com) — Drag & drop the `/build` folder
- [Vercel](https://vercel.com) — Connect GitHub repo
- [GitHub Pages](https://pages.github.com) — Use `gh-pages` package

---

## 📡 API Reference

### Planets Data
```
GET https://anurella.github.io/json/planets.json
```

Returns an array of planet objects:
```json
[
  {
    "planet": "Mercury",
    "distanceFromSun": 57.9,
    "image": "../images/mercury.jpg"
  },
  ...
]
```

### Contact Form
```
POST https://whitebricks.com/tsacademy.php
Content-Type: multipart/form-data
```

Fields: `name`, `email`, `subject`, `message`

---

## 📁 Project Structure

```
cosmos-explorer/
├── public/
│   └── index.html          # HTML shell with <meta name="author">
├── src/
│   ├── App.js              # Root component
│   ├── index.js            # React entry point
│   ├── styles/
│   │   └── global.css      # Global styles & design tokens
│   └── components/
│       ├── Header.js / .css
│       ├── Hero.js / .css
│       ├── PlanetsSection.js / .css
│       ├── PlanetCard.js / .css
│       ├── FeaturesSection.js / .css
│       ├── VideoSection.js / .css
│       ├── ContactSection.js / .css
│       └── Footer.js / .css
├── package.json
└── README.md
```

---

## 🎨 Design Credits

- **Fonts:** Google Fonts (Orbitron, Syne, Space Mono)
- **Planet images:** Wikimedia Commons (public domain NASA photography)
- **Color Palette:** Deep space dark (#020817) with cyan (#00d4ff) accents

---

*Built with ☄️ by the TS Academy Capstone Group*
