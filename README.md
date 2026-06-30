# Wongsaton (Tee) Pattanantapong - Portfolio Website

A premium, fast, and interactive portfolio website built for a **Paid Performance Marketing Specialist**. The site features a cyber-finance dark theme, custom responsive grid visualizers, performance metrics counters, and a built-in dark/light theme toggle.

---

## 🎨 Features & Aesthetic

* **Design**: Custom modern dark theme using **JetBrains Mono** font, with neon emerald/mint green elements symbolizing positive ROAS and financial growth.
* **Theme Toggle**: Real-time toggle between dark mode (default) and light mode. The selected preference is saved and loaded from `localStorage`.
* **Dynamic Metrics Dashboard**: Counters automatically animate from zero to target values when scrolled into view.
* **Interactive Campaign Card**: Interactive bar chart and live metric hover glows built with CSS animations and micro-interactions.
* **Responsiveness**: Fully optimized for mobile, tablet, and desktop viewports with a glassmorphic sliding navigation drawer.

---

## 🏗️ Project Structure

```text
my_portfolio/
├── index.html       # Semantically structured HTML5 skeleton & OpenGraph SEO tags
├── style.css        # Vanilla CSS defining layout grids, theme variables, and keyframe animations
├── script.js        # JavaScript handling theme toggles, scroll trackers, and numeric counters
├── plan/
│   └── our_plan.md  # Detailed build plan of the website structure and design ideas
└── README.md        # Project description and deployment documentation
```

---

## 🚀 How to Run Locally

You can preview the website by double-clicking the `index.html` file, or by serving it through a local development server.

### Using Python (Built-in)
Run the following command inside the root folder:
```bash
python -m http.server 8000
```
Open **[http://localhost:8000](http://localhost:8000)** in your browser.

---

## 🌐 Deploying to GitHub Pages

This repository is ready to be hosted for free on GitHub Pages:
1. Navigate to your repository page on GitHub.
2. Click the **Settings** tab.
3. In the left-hand sidebar under **Code and automation**, click **Pages**.
4. Under **Build and deployment**:
   * Set **Source** to `Deploy from a branch`.
   * Set **Branch** to `main` and select `/ (root)`.
5. Click **Save**.
6. The site will be live at `https://wstptntp.github.io/cli_my-portfolio/` within 1-2 minutes.
