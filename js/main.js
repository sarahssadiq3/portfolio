(function () {
  "use strict";

  const C = window.CONTENT;
  if (!C) {
    document.body.innerHTML = "<p style='padding:2rem'>Could not load js/content.js</p>";
    return;
  }
  const P = C.profile;

  // ---------- helpers ----------
  const $ = (sel) => document.querySelector(sel);

  function el(tag, attrs, ...children) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false || v === "") continue;
      if (k === "class") node.className = v;
      else node.setAttribute(k, v);
    }
    for (const child of children.flat()) {
      if (child == null || child === false || child === "") continue;
      node.append(child instanceof Node ? child : document.createTextNode(String(child)));
    }
    return node;
  }

  const ext = (href) => ({ href, target: "_blank", rel: "noopener noreferrer" });

  const tags = (list) =>
    list && list.length ? el("ul", { class: "tags", "aria-label": "Technologies" }, list.map((t) => el("li", {}, t))) : null;

  const hideSection = (id) => {
    const s = document.getElementById(id);
    if (s) s.hidden = true;
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) link.parentElement.hidden = true;
  };

  // ---------- profile bindings ----------
  document.querySelectorAll("[data-bind]").forEach((node) => {
    const value = P[node.dataset.bind];
    if (value) node.textContent = value;
    else if (node.dataset.bind === "availability") node.hidden = true;
  });
  document.title = `${P.name} · ${P.title}`;
  $("#year").textContent = new Date().getFullYear();

  // ---------- call-to-action buttons ----------
  function actions() {
    const out = [];
    if (P.email) out.push(el("a", { class: "btn btn-primary", href: `mailto:${P.email}` }, "Email me"));
    if (P.resume) out.push(el("a", { class: "btn", ...ext(P.resume) }, "Résumé (PDF)"));
    const labels = { github: "GitHub", linkedin: "LinkedIn", website: "Website" };
    for (const [key, url] of Object.entries(P.links || {})) {
      if (url) out.push(el("a", { class: "btn", ...ext(url) }, labels[key] || key));
    }
    return out;
  }
  $("#hero-actions").append(...actions());
  $("#contact-actions").append(...actions());
  if (P.email) {
    $("#contact-actions").append(el("p", { class: "email-plain" }, P.email));
  }

  // ---------- experience ----------
  if (C.experience && C.experience.length) {
    $("#experience-list").append(
      ...C.experience.map((job) =>
        el(
          "li",
          { class: "timeline-item" },
          el(
            "div",
            { class: "timeline-head" },
            el(
              "div",
              {},
              el("h3", { class: "role" }, job.role),
              el(
                "p",
                { class: "company" },
                job.url ? el("a", ext(job.url), job.company) : job.company,
                job.location ? el("span", { class: "muted" }, ` · ${job.location}`) : null
              )
            ),
            el("p", { class: "dates" }, [job.start, job.end].filter(Boolean).join(" – "))
          ),
          job.highlights && job.highlights.length
            ? el("ul", { class: "highlights" }, job.highlights.map((h) => el("li", {}, h)))
            : null,
          tags(job.tech)
        )
      )
    );
  } else hideSection("experience");

  // ---------- projects ----------
  if (C.projects && C.projects.length) {
    const sorted = [...C.projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    $("#project-list").append(
      ...sorted.map((p) =>
        el(
          "article",
          { class: `card${p.featured ? " featured" : ""}` },
          p.featured ? el("p", { class: "badge" }, "Featured") : null,
          el("h3", {}, p.name),
          p.date ? el("p", { class: "card-meta" }, p.date) : null,
          el("p", { class: "card-desc" }, p.description),
          tags(p.tech),
          el(
            "div",
            { class: "card-links" },
            p.demo ? el("a", ext(p.demo), "Live demo ↗") : null,
            p.repo ? el("a", ext(p.repo), "Source code ↗") : null
          )
        )
      )
    );
  } else hideSection("projects");

  // ---------- skills ----------
  if (C.skills && C.skills.length) {
    $("#skill-list").append(
      ...C.skills.map((g) => el("div", { class: "skill-group" }, el("h3", {}, g.group), tags(g.items)))
    );
  } else hideSection("skills");

  // ---------- education ----------
  if (C.education && C.education.length) {
    $("#education-list").append(
      ...C.education.map((e) =>
        el(
          "div",
          { class: "edu-item" },
          el("div", {}, el("h3", {}, e.degree), el("p", { class: "muted" }, e.school), e.details ? el("p", { class: "muted" }, e.details) : null),
          el("p", { class: "dates" }, [e.start, e.end].filter(Boolean).join(" – "))
        )
      )
    );
  } else hideSection("education");

  // ---------- certifications ----------
  if (C.certifications && C.certifications.length) {
    $("#cert-list").append(
      ...C.certifications.map((c) =>
        el(
          "li",
          { class: "edu-item" },
          el("div", {}, el("h3", {}, c.url ? el("a", ext(c.url), c.name) : c.name), el("p", { class: "muted" }, c.issuer)),
          el("p", { class: "dates" }, c.year)
        )
      )
    );
  } else hideSection("certifications");

  // ---------- theme toggle ----------
  const root = document.documentElement;
  try {
    const saved = localStorage.getItem("theme");
    if (saved) root.dataset.theme = saved;
  } catch (_) {}
  $(".theme-toggle").addEventListener("click", () => {
    const isDark =
      root.dataset.theme === "dark" ||
      (!root.dataset.theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    root.dataset.theme = isDark ? "light" : "dark";
    try {
      localStorage.setItem("theme", root.dataset.theme);
    } catch (_) {}
  });
})();
