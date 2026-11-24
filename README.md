# Portfolio

A fast, dependency-free personal site for showing work experience and projects to recruiters and hiring managers.

- No build step, no frameworks, no `npm install`.
- All content lives in one file: **`js/content.js`**.
- Light/dark mode, mobile-friendly, accessible, and print-friendly (recruiters can "Save as PDF").

## Project structure

```
portfolio/
├── index.html        # Page layout
├── css/styles.css    # Styles (colors are CSS variables at the top)
├── js/content.js     # ← EDIT THIS: your name, experience, projects, skills, etc.
├── js/main.js        # Renders content.js into the page
└── assets/           # Put resume.pdf and any images here
```

## Editing your content

1. Open `js/content.js` and replace the placeholder text.
2. Drop your résumé into `assets/resume.pdf` (or set `resume: ""` to hide the button).
3. Update the `<title>` and `<meta name="description">` in `index.html` with your name (these are what show up in Google and link previews).
4. Any empty section (e.g. `certifications: []`) is hidden automatically.

To change the accent color, edit `--accent` in `css/styles.css`.

## Previewing locally

Just open `index.html` in a browser, or run a local server:

```sh
cd portfolio
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying (free)

**GitHub Pages**
1. Push this folder to a GitHub repo (e.g. `your-username.github.io` for a root URL).
2. Repo → Settings → Pages → Source: "Deploy from a branch" → `main` / root.

**Netlify / Vercel / Cloudflare Pages**
Drag-and-drop the `portfolio` folder, or connect the repo. No build command; publish directory is the folder root.

## Tips for recruiter-facing content

- Lead experience bullets with **impact and numbers** ("cut latency 40%"), not just tasks.
- Keep 3–6 projects; mark your best one `featured: true`.
- Make sure every project has a working link (live demo or repo).
- Keep the summary to 2–3 sentences: what you do, what you're good at, what you're looking for.
