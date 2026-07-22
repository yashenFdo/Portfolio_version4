# Yashen Fernando — Portfolio

A personal portfolio for an Electronic Engineering undergraduate (HCI / embedded systems / AI focus), built with React, React Router, and Framer Motion. Dark navy + cyan aesthetic, card-based sections, scroll-reveal animation.

## Stack

- [Vite](https://vite.dev) + React 19
- [React Router](https://reactrouter.com) for client-side routing
- [Framer Motion](https://motion.dev) for state-driven scroll-reveal animation
- CSS Modules for scoped, real `:hover`/`:focus` styling

## Routes

- `/` — single scrolling home page (hero, updates, quick-nav, about, experience, education, research, writing, projects, volunteering, contact)
- `/blog` — All Articles page with platform + topic filters and pagination

## Getting started

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build
npm run lint     # oxlint
```

## Notes

- All imagery (portrait, project screenshots, research covers, article covers, photo collages) is placeholder — swap in real photography, screenshots, and covers before shipping.
- All copy is placeholder: bio, dates, institutions, publications, project descriptions, blog posts, and contact details (email/phone/location) should be replaced with real content.
- Social links (GitHub/LinkedIn/X/Email/Scholar/Instagram), the resume link, and the WhatsApp/calendar links in the Contact section currently point at placeholder addresses — update them before launch.
- Social icons are minimal inline SVGs (`src/components/Icons.jsx`) rather than brand marks — swap in real brand icon assets under their respective guidelines if needed.
