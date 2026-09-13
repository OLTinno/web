# Phase 1 Audit

## Project Overview

* **Framework:** React 18.2.0 (Create React App architecture via `react-scripts` 5.0.1)
* **Main Technologies:** JavaScript (ES6+), HTML5, Vanilla CSS3 (with CSS Custom Properties), Font Awesome 6.0.0 (CDN)
* **Entry Point:** `public/index.html` → `src/index.js` → `<App />` (`src/App.js`)
* **Main Components:** Header, Hero, About, Projects, Milestones, Team, Reach Us (Contact), Footer
* **Styling Approach:** Component-scoped CSS files with shared section styles (`src/styles/sectionStyles.css`) and global design tokens defined in `:root` (`src/index.css`)
* **Asset Structure:** Located in `public/images/` (logos, project media, team member portraits) and `public/` (favicons, manifest.json, robots.txt)

---

## Current Website Sections

1. **Header / Navigation (`src/components/Header/Header.js`)**
   * **Purpose:** Site navbar with brand logo ("OLT Innovations"), brand title, smooth anchor links to sections, and mobile drawer menu toggle.
   * **Main Content:** Home, About, Projects, Milestones, Team, Contact.
   * **Assets Used:** `/images/logo olt.jpg`.
   * **CSS File:** `Header.css`.
   * **Working Status:** Working correctly.

2. **Hero (`src/components/Hero/Hero.js`)**
   * **Purpose:** Welcome section presenting company introduction and core mission.
   * **Main Content:** Title "Welcome to OLT Innovations Private Limited", Mission statement.
   * **Assets Used:** None (CSS background color `#10cced`).
   * **CSS File:** `Hero.css`.
   * **Working Status:** Working correctly.

3. **About (`src/components/About/About.js`)**
   * **Purpose:** Company overview and statement on AI, IoT, and robotics solutions.
   * **Main Content:** Detailed paragraph explaining dedication to revolutionizing industries.
   * **Assets Used:** None.
   * **CSS File:** `About.css`.
   * **Working Status:** Working correctly.

4. **Projects (`src/components/Projects/Projects.js`)**
   * **Purpose:** Showcase of current ongoing projects.
   * **Main Content:** Track Inspection Robot (AI railway maintenance), Smart Bike Key Reminder (IoT safety device).
   * **Assets Used:** Emoji icons (`🤖`, `🔑`).
   * **CSS File:** `Projects.css`.
   * **Working Status:** Working correctly.

5. **Milestones (`src/components/Milestones/Milestones.js`)**
   * **Purpose:** Company funding and incubation achievements.
   * **Main Content:** ₹4 Lakhs from Kalpataru CoE STPI Vizag, ₹40,000 from KL University ACIC Incubation Centre.
   * **Assets Used:** `/images/kalpataru-logo.png`, `/images/klu-logo.jpg`.
   * **CSS File:** `Milestones.css`.
   * **Working Status:** Working correctly.

6. **Team (`src/components/Team/Team.js`)**
   * **Purpose:** Profiles of key leaders, co-founders, directors, and technical advisors.
   * **Main Content:** 8 team member cards with names, roles, bios, and LinkedIn profiles.
   * **Assets Used:** `/images/image-1.jpg` through `/images/image-8.jpg`.
   * **CSS File:** `Team.css`.
   * **Working Status:** Working correctly.

7. **Reach Us / Contact (`src/components/ReachUs/ReachUs.js`)**
   * **Purpose:** Company address, phone, email, and interactive contact form.
   * **Main Content:** Registered address in Guntakal (Andhra Pradesh), phone, email, contact form submitted to Formspree endpoint.
   * **Assets Used:** Font Awesome icons.
   * **CSS File:** `ReachUs.css`.
   * **Working Status:** Working correctly.

8. **Footer (`src/components/Footer/Footer.js`)**
   * **Purpose:** Site copyright footer.
   * **Main Content:** `© 2026 OLT Innovations Private Limited. All Rights Reserved.`
   * **Assets Used:** None.
   * **CSS File:** `Footer.css`.
   * **Working Status:** Working correctly.

---

## Project Structure

```text
web-main/
├── public/
│   ├── favicon.ico
│   ├── favicon1.jpg
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
│   ├── index.html
│   └── images/
│       ├── iit@.2551f259842b850fff65.png
│       ├── image-1.jpg ... image-8.jpg
│       ├── kalpataru-logo.png
│       ├── klu-logo.jpg
│       ├── logo olt.jpg
│       └── olt logo.jpg
├── src/
│   ├── components/
│   │   ├── About/ (About.js, About.css)
│   │   ├── Footer/ (Footer.js, Footer.css)
│   │   ├── Header/ (Header.js, Header.css)
│   │   ├── Hero/ (Hero.js, Hero.css)
│   │   ├── Milestones/ (Milestones.js, Milestones.css)
│   │   ├── Projects/ (Projects.js, Projects.css)
│   │   ├── ReachUs/ (ReachUs.js, ReachUs.css)
│   │   └── Team/ (Team.js, Team.css)
│   ├── styles/
│   │   └── sectionStyles.css
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── package.json
├── package-lock.json
├── PHASE_1_AUDIT.md
└── README.md
```

---

## Dependencies

| Dependency | Version | Purpose |
| :--- | :--- | :--- |
| `react` | `^18.2.0` | Core UI library |
| `react-dom` | `^18.2.0` | DOM rendering engine for React |
| `react-scripts` | `5.0.1` | Build, bundle, and development scripts (Create React App) |
| `cross-env` | `^7.0.3` | Cross-platform environment variable utility for scripts |
| `typescript` | `4.9.5` | TypeScript support definitions |
| `web-vitals` | `^3.5.0` | Performance telemetry |
| `@testing-library/*` | `^14.x / ^6.x` | Component unit testing utilities |

---

## Current Issues

| Issue | Severity | Status | File |
| :--- | :--- | :--- | :--- |
| Unix-style environment syntax (`CI=false react-scripts build`) broke Windows builds with `'CI' is not recognized` error | Critical | Fixed | `package.json` |
| `sectionStyles.css` was missing from imports, breaking `.section-title` and `.section-subtitle` typography formatting | Medium | Fixed | `src/App.js` |
| CSS custom properties (`var(--primary-color)`, `var(--text-primary)`, `var(--background-light)`, etc.) were used in component stylesheets without a `:root` definition | Medium | Fixed | `src/index.css` |
| Invalid duplicate `@import` statements placed at the bottom of stylesheet after CSS rules | Minor | Fixed | `src/components/Team/Team.css` |

---

## Assets

| Asset Name | Location | Usage |
| :--- | :--- | :--- |
| `logo olt.jpg` | `/images/logo olt.jpg` | Header navbar logo |
| `olt logo.jpg` | `/images/olt logo.jpg` | Alternative logo asset |
| `kalpataru-logo.png` | `/images/kalpataru-logo.png` | Milestones section (Kalpataru CoE STPI) |
| `klu-logo.jpg` | `/images/klu-logo.jpg` | Milestones section (KL University ACIC) |
| `iit@.2551f259842b850fff65.png` | `/images/iit@...png` | Institutional logo asset |
| `image-1.jpg` to `image-8.jpg` | `/images/image-X.jpg` | Team member portraits (8 members) |
| `favicon1.jpg` / `favicon.ico` | `public/` | Browser tab icon and apple touch icon |

---

## Responsive Status

* **Desktop (>1024px):** Displays full wide grid layouts for Projects, Team, Reach Us, and fixed header navigation.
* **Laptop / Tablet (768px - 1024px):** Grids adapt dynamically; layout remains clean without horizontal scroll.
* **Mobile (<768px):** Navigation transitions to sliding drawer menu. Grid layouts stack into single/double columns. Touch targets and text sizing remain responsive and accessible.

---

## Phase 1 Changes

1. **Updated `package.json`:** Changed `"build"` script to `"cross-env CI=false react-scripts build"` to support Windows environments.
2. **Updated `src/App.js`:** Added `import './styles/sectionStyles.css';` so shared section headings render with proper styling.
3. **Updated `src/index.css`:** Defined global `:root` CSS custom properties (`--primary-color`, `--primary-light`, `--dark-color`, `--text-primary`, `--text-secondary`, `--background-light`, `--background-off`, `--transition`).
4. **Updated `src/components/Team/Team.css`:** Removed invalid trailing `@import` rules.

---

## Phase 2 Readiness

**READY FOR PHASE 2.**

The existing website codebase is now fully audited, stabilized, and verified:
* Zero runtime or build errors (`npm run build` exits with code 0).
* All 8 existing sections and content preserved without aesthetic redesign.
* All assets verified and mapped.
* Dev server runs smoothly.
