/*
 * ============================================================
 *  ALL SITE CONTENT LIVES HERE.
 *  Edit this file to update your portfolio. No build step needed.
 * ============================================================
 */
window.CONTENT = {
  profile: {
    name: "Your Name",
    title: "Software Engineer",
    location: "City, State",
    // Short status line shown at the top. Set to "" to hide.
    availability: "Open to full-time Software Engineering roles",
    summary:
      "Software engineer with X years of experience building scalable web services and user-facing products. " +
      "I care about clean architecture, measurable impact, and shipping features that customers actually use.",
    email: "you@example.com",
    // Put your resume PDF in the /assets folder and keep this path in sync. Set to "" to hide.
    resume: "assets/resume.pdf",
    links: {
      github: "https://github.com/your-username",
      linkedin: "https://www.linkedin.com/in/your-username",
      // website: "https://example.com",
    },
  },

  // Grouped skills. Add/remove groups freely.
  skills: [
    { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "SQL"] },
    { group: "Frontend", items: ["React", "Next.js", "HTML/CSS", "Tailwind"] },
    { group: "Backend", items: ["Node.js", "Express", "REST", "GraphQL", "PostgreSQL"] },
    { group: "Cloud & Tools", items: ["AWS", "Docker", "CI/CD", "Git", "Linux"] },
  ],

  // Most recent first. Lead bullets with impact + numbers where you can.
  experience: [
    {
      company: "Company Name",
      role: "Software Engineer",
      location: "City, State · Remote",
      start: "Jan 2023",
      end: "Present",
      url: "https://example.com",
      highlights: [
        "Led the redesign of the checkout service, cutting p95 latency by 40% and increasing conversion by 6%.",
        "Built an internal feature-flag platform adopted by 12 teams, reducing release rollbacks by 30%.",
        "Mentored 3 junior engineers and drove code-review standards across the team.",
      ],
      tech: ["TypeScript", "React", "Node.js", "PostgreSQL", "AWS"],
    },
    {
      company: "Previous Company",
      role: "Software Engineer Intern",
      location: "City, State",
      start: "May 2022",
      end: "Aug 2022",
      url: "",
      highlights: [
        "Shipped a data-export feature used by 2,000+ customers in its first month.",
        "Wrote integration tests that raised coverage from 55% to 82% on a critical service.",
      ],
      tech: ["Python", "Django", "Docker"],
    },
  ],

  // Put your strongest 3–6 projects first. Set `featured: true` to highlight one.
  projects: [
    {
      name: "Project One",
      featured: true,
      description:
        "A one-to-two sentence description of what it does and the problem it solves. Mention scale or results if you have them.",
      tech: ["React", "Node.js", "PostgreSQL"],
      repo: "https://github.com/your-username/project-one",
      demo: "https://project-one.example.com",
    },
    {
      name: "Project Two",
      description: "What it is, why you built it, and what was technically interesting about it.",
      tech: ["Python", "FastAPI", "Docker"],
      repo: "https://github.com/your-username/project-two",
      demo: "",
    },
    {
      name: "Project Three",
      description: "Another project. Recruiters skim, so keep it short and concrete.",
      tech: ["TypeScript", "Next.js", "Vercel"],
      repo: "https://github.com/your-username/project-three",
      demo: "",
    },
  ],

  education: [
    {
      school: "University Name",
      degree: "B.S. in Computer Science",
      start: "2018",
      end: "2022",
      details: "", // e.g. "GPA 3.8 · Dean's List"
    },
  ],

  // Optional. Set to [] to hide the section.
  certifications: [
    // { name: "AWS Certified Developer – Associate", issuer: "Amazon Web Services", year: "2024", url: "" },
  ],
};
