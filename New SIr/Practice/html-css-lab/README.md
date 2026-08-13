# 🚀 HTML + CSS Interactive Learning Laboratory

A premium, state-of-the-art interactive web application designed for visual, hands-on experimentation with HTML and CSS. Built strictly from student study material with zero external framework dependencies.

---

## 📌 Project Vision & Concept

The goal of this laboratory is to move away from static documentation pages and offer an **output-first interactive experience**. Learners can edit code synchronously, observe live browser outputs, experiment with alignment axes in Flexbox, test HTML input controls, convert entity codes, and solve interactive coding challenges.

---

## 📁 Folder Structure

```text
html-css-lab/
│
├── index.html       # SPA HTML structure, header, sidebar, hero, labs & modals
├── style.css        # Comprehensive design system, dark/light themes, animations
├── script.js        # Core JS engine, curriculum database, labs & 22+ secret features
│
├── assets/          # Media resources (images, icons, sample audio/video)
└── README.md        # Documentation and guide
```

---

## 🛠️ Technology Stack Used

1. **HTML5**: Semantic document markup, native form controls, media elements, tables, and entities.
2. **CSS3**: Custom CSS tokens (`var(--...)`), Flexbox layouts, dark/light theme switching, glassmorphism, responsive grid breakpoints, and animations.
3. **JavaScript (ES6+)**: SPA state engine, DOM manipulation, iframe sandbox executor, local storage persistence, command palette, and interactive labs.

---

## 📖 Curriculum Coverage (Strictly Aligned with Study Notes)

### HTML Topics
- **Headings**: `<h1>` to `<h6>`
- **Paragraph**: `<p>`
- **Line Break**: `<br>`
- **Preformatted Text**: `<pre>`
- **Image**: `<img>` (`src`, `alt`, `width`, `height`)
- **Formatting Tags**: `<b>`, `<strong>`, `<i>`, `<em>`, `<mark>`, `<small>`, `<ins>`, `<del>`, `<sup>`, `<sub>`
- **Lists**: `<ol>`, `<ul>`, `<dl>`, `<dt>`, `<dd>`
- **Forms**: `<form>`, `<label>`, `<input>`
- **22 Input Types**: `button`, `checkbox`, `color`, `date`, `datetime-local`, `email`, `file`, `hidden`, `image`, `month`, `number`, `password`, `radio`, `range`, `reset`, `search`, `submit`, `tel`, `text`, `time`, `url`, `week`
- **Anchor**: `<a>` (`target`: `_self`, `_blank`, `_parent`, `_top`)
- **Semantic Tags**: Favicon `<link>`, `<blockquote>`, `<q>`, `<address>`, `<bdo>` & `dir` attribute
- **Media**: `<audio>`, `<video>`, `<iframe>`
- **Containers**: `<div>` vs `<span>`
- **Tables**: `<table>`, `<tr>`, `<td>`, `<th>`, `<thead>`, `<tbody>`
- **Entities**: Character entities (`&gt;`, `&lt;`, `&amp;`, `&copy;`) and Number entities (`&#60;`, `&#62;`, `&#169;`)

### CSS Topics
- **CSS Meaning**: Role of styling in web development
- **CSS Types**: Inline CSS, Internal CSS, External CSS
- **Selectors**: Tag selector, Class selector (`.name`), ID selector (`#name`)
- **Border**: Border shorthand, border styles (`solid`, `dashed`, `dotted`, `double`, `none`, `radius`)
- **Background**: `background-image`, `background-repeat`, `background-size`
- **Shadows**: `box-shadow`, `text-shadow`
- **Overflow**: `overflow: visible`, `hidden`, `scroll`, `auto`
- **Flexbox**: `display: flex`, `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, Main vs Cross axis, `stretch` behavior

---

## 💾 LocalStorage Persistence Schema

The application uses native browser `localStorage` to save all learning progress locally:

- `lab_theme`: Persists dark or light theme preference (`'dark'` | `'light'`).
- `lab_mode`: Persists explanation level (`'beginner'` | `'developer'`).
- `lab_active_topic`: Saves the currently selected curriculum topic ID.
- `lab_completed`: Array of completed topic IDs (e.g. `["h1-h6", "paragraph"]`).
- `lab_bookmarks`: Array of bookmarked topic IDs.
- `lab_notes`: Object storing personal study notes per topic ID.
- `lab_quiz`: Object storing user quiz high scores and solved counts.
- `lab_challenges`: Array of completed challenge IDs.
- `lab_streak`: Object tracking practice streak days and last date active.

---

## ⚡ How the Live Code Playground Works

1. **Dual Editors**: Provides real-time textareas for HTML and CSS editing with synchronized line numbers.
2. **Iframe Sandbox**: Code is assembled into a full document string and injected into `iframe.srcdoc` with `sandbox="allow-scripts allow-modals"` for safety.
3. **Live DOM Inspector**: Renders a live visual DOM tree structure of the generated preview nodes.
4. **Viewport Simulator**: Toggles preview frame width between Desktop (100%), Tablet (768px), and Mobile (375px).
5. **Code Exporter**: Generates a downloadable `.html` file containing the combined HTML and CSS.

---

## 🎁 22 SECRET FEATURES UNLOCKED

1. 🎨 **Live CSS Color Picker & Contrast Inspector**: Interactive color control.
2. 📏 **Box-Model & Dimension Visualizer**: Displays padding/margin boundaries.
3. ⚡ **Snippet Exporter**: Instant `.html` file export.
4. 📜 **Cheat Sheet Matrix Grid**: Complete one-click reference matrix.
5. 🔍 **Live DOM Structure Inspector**: Interactive DOM tree view.
6. 🔊 **Voice Explainer**: Text-to-speech audio reader.
7. 📱 **Responsive Viewport Switcher**: Desktop, Tablet, & Mobile frames.
8. ⏱️ **Focus Practice Pomodoro Timer**: Integrated top bar timer.
9. 🎓 **Canvas Certificate Generator**: Custom completion certificate.
10. 🎯 **Smart AI-style Hint System**: Automated challenge assistance.
11. 🔄 **Code Diff Viewer**: Compare code edits vs template.
12. 🔖 **Category Tag Filtering**: Filter topics by concept type.
13. 📊 **Visual Progress Dashboard**: Rings and progress bars.
14. 🎭 **Multi-Theme Presets**: Dark and light modes with custom CSS tokens.
15. 🛡️ **HTML Sanitizer & Error Sandbox**: Prevents app crashes during live execution.
16. 🖨️ **Printable Study Guide View**: Clean printable layout.
17. 🧠 **Spaced Repetition Flashcards**: Quiz review engine.
18. 🎬 **Flexbox Axis Motion Guide**: Dynamic main and cross axis indicators.
19. 📌 **Per-Topic Note Taking System**: Private notes saved locally.
20. ⚡ **Keybinding Helper Modal**: Keyboard shortcut reference modal (`?`).
21. 📱 **Mobile Drawer Sidebar**: Touch-friendly navigation drawer.
22. 🔥 **Daily Practice Streak Tracker**: Tracks consecutive days learned.

---

## 🚀 How to Run Locally

1. Clone or download the repository.
2. Navigate to the `New SIr/Practice/html-css-lab/` directory.
3. Open `index.html` directly in any web browser (Google Chrome, Firefox, Edge, Safari).
4. No node installation or local server required!
