# Upflair Full Stack — Training Code

All of my code and practice work from the Upflair full-stack training program, for beginners learning web development from zero.

## What it does

This repo holds two rounds of training material, each organized day by day:

- **New SIr / HTML & CSS** — the latest training round:
  - `HTML/Day1` … `HTML/day5` — HTML pages covering basics, text formatting, forms, and a day-5 task page
  - `css/day1`, `css/day2` — CSS practice: selectors, overflow, and external stylesheets
- **Old SIr** — the earlier training round:
  - `Day1` … `day9` — daily HTML/CSS lessons: pages, forms, tables, lists, images, borders, margin & padding, flexbox, positioning, and shadows
  - `Practice/` — extra practice pages, a typewriter text-animation script (`script.js`), and a CSS quiz question list (`task Questions.txt`)
  - `liet-fs-training/` — basic HTML/CSS files (forms, tables, lists, images, borders)
  - **`Resturant Website/` — a multi-page restaurant website built with React + Vite** (see below)

### The Restaurant Website project

A small restaurant site built with React and React Router, with pages for:

- Home (`/`), Contact (`/contact`), Menu (`/menu`), Lunch (`/lunch`), Book Room (`/bookroom`), and Timings (`/timing`)
- Reusable components: Navbar, Hero, Menu, Card, Timing, Contact, Layout, Background

This is the biggest project in the repo and the closest thing to a real full-stack-style frontend project.

## Tech stack

- **HTML & CSS** — the majority of the repo (daily lesson pages and tasks)
- **Vanilla JavaScript** — small scripts (e.g. the typewriter animation)
- **React 19** + **react-router-dom 7** — the restaurant website
- **Vite 8** — dev server and build tool for the React project
- **ESLint** — linting for the React project

## Project structure

```
Upflair_Full__Stack/
├── New SIr/
│   ├── HTML/          # Day1–day5 lesson pages (index, forms, formatting, task)
│   └── css/           # day1, day2 — CSS practice files
├── Old SIr/
│   ├── Day1/ … day9/  # daily HTML/CSS lessons from the earlier round
│   ├── Practice/      # extra practice pages + JS typewriter + CSS quiz
│   ├── liet-fs-training/ # basic HTML/CSS exercises
│   └── Resturant Website/Resturant Website/  # React + Vite restaurant site
└── README.md
```

## Run it locally

**Plain HTML/CSS lesson pages** — no setup needed. Just open any `.html` file in your browser:

```text
Old SIr/day6/flexboxtask.html   →  double-click / open with browser
```

**Restaurant Website (React):**

```bash
cd "Old SIr/Resturant Website/Resturant Website"
npm install
npm run dev     # start the dev server
npm run build   # production build
npm run lint    # run ESLint
```

## Notes

- The training folders use two naming styles (`Day1`, `day2`, …) because they were created in two separate training rounds — that's normal here.
- The stub README that used to be here only said "ALL Code Upflairs Training"; this file replaces it with real documentation.
- This repo is a learning archive: lesson files are practice exercises, not production code.
