/*
 * ============================================================
 *  ALL SITE CONTENT LIVES HERE.
 *  Edit this file to update your portfolio. No build step needed.
 * ============================================================
 */
window.CONTENT = {
  profile: {
    name: "Sarah Sadiq",
    title: "Software Engineer",
    location: "Frisco, TX",
    // Short status line shown at the top. Set to "" to hide.
    availability: "",
    summary:
      "Full-stack software engineer with 4+ years at JPMorgan Chase building financial applications with Java, Spring Boot, React, and AWS. " +
      "Currently pursuing a Master's in Computer Science at UT Austin.",
    email: "sarahssadiq3@gmail.com",
    // Put your resume PDF in the /assets folder and set this to "assets/resume.pdf". "" hides the button.
    resume: "",
    links: {
      github: "https://github.com/sarahssadiq3",
      // linkedin: "https://www.linkedin.com/in/your-username",
    },
  },

  // Grouped skills. Add/remove groups freely.
  skills: [
    { group: "Languages", items: ["Java", "Python", "JavaScript", "Kotlin", "C#", "C++", "SQL"] },
    { group: "Backend", items: ["Spring Boot", "Spring Framework", "REST APIs", "GraphQL", "Swagger / OpenAPI"] },
    { group: "Frontend & Mobile", items: ["React", "Angular", "React Native", "Flutter", "HTML/CSS"] },
    {
      group: "Cloud & DevOps",
      items: ["AWS", "ECS", "EC2", "Lambda", "RDS", "ElastiCache", "CloudWatch", "Terraform", "CI/CD", "Git"],
    },
    { group: "Data & Process", items: ["Pandas", "JSON", "XML", "Jira", "Scrum"] },
  ],

  // Most recent first. Lead bullets with impact + numbers where you can.
  experience: [
    {
      company: "JPMorgan Chase & Co.",
      role: "Software Engineer II",
      location: "",
      start: "Jul 2022",
      end: "Present",
      url: "",
      highlights: [
        "Develop and maintain features for an in-house CRM application replacing Salesforce, using Java, Spring Boot, React, and ElastiCache.",
        "Build APIs, backend logic, and front-end applications for managing financial static data.",
        "Set up and maintain AWS architecture (ECS, EC2, Lambda, RDS, ElastiCache, CloudWatch) as infrastructure-as-code with Terraform.",
        "Support the Home Lending Advisor sales engagement flow by resolving production issues across its lifecycle.",
      ],
      tech: ["Java", "Spring Boot", "React", "AWS", "Terraform"],
    },
    {
      company: "Pebble Marketplace",
      role: "Software Engineering Intern",
      location: "",
      start: "Aug 2021",
      end: "Dec 2021",
      url: "",
      highlights: ["Developed UI features for the shopwithpebble.com e-commerce site."],
      tech: ["React", "GraphQL"],
    },
    {
      company: "Discover Financial Services",
      role: "Business & Technology Intern",
      location: "Riverwoods, IL",
      start: "Summer 2021",
      end: "",
      url: "",
      highlights: ["Helped improve the e-wallet tokenization process used for Apple Pay and Google Pay."],
      tech: [],
    },
    {
      company: "J.B. Hunt",
      role: "Engineering & Technology Intern",
      location: "Fayetteville, AR",
      start: "Jan 2020",
      end: "May 2020",
      url: "",
      highlights: [
        "Built features for the J.B. Hunt Drive mobile app.",
        "Developed a mobile app that trains future interns on test-driven development in React Native.",
      ],
      tech: ["React Native"],
    },
    {
      company: "SOFY.AI",
      role: "Software Intern",
      location: "Seattle, WA",
      start: "Summer 2019",
      end: "",
      url: "",
      highlights: [
        "Helped build a developer tool for testing apps and websites across platforms.",
        "Tested 1,000+ e-commerce apps to ensure the tool returned usable data.",
      ],
      tech: [],
    },
    {
      company: "Kimbel Mechanical",
      role: "IT Intern",
      location: "Fayetteville, AR",
      start: "Summer 2019",
      end: "",
      url: "",
      highlights: [
        "Streamlined data revision processing by using C++ to extract data from XML files and load it into SQL tables.",
      ],
      tech: ["C++", "XML", "SQL"],
    },
  ],

  // Section is hidden while this is empty. Put your strongest 3–6 projects here;
  // set `featured: true` on your best one. Example:
  // {
  //   name: "Project name",
  //   featured: true,
  //   description: "What it does, why you built it, what was technically interesting.",
  //   tech: ["React", "Node.js"],
  //   repo: "https://github.com/sarahssadiq3/project",
  //   demo: "",
  // },
  projects: [
    {
      name: "PantryPal",
      featured: true,
      date: "UT Austin · Spring 2026",
      description:
        "AI-powered Android app for household inventory, grocery tracking, and meal planning. Uses Google's Gemini API to suggest meals from the ingredients on hand, with Firebase Authentication and real-time Firestore sync so a whole household can collaborate.",
      tech: ["Kotlin", "Android", "Firebase", "Firestore", "Gemini API"],
      repo: "",
      demo: "",
    },
    {
      name: "Computer Vision for Autonomous Driving",
      date: "UT Austin · Fall 2025",
      description:
        "Multi-task CNN that performs semantic segmentation and depth estimation on simulated driving data. Encoder-decoder architecture with skip connections and dedicated prediction heads, trained with weighted cross-entropy + L1 loss and evaluated on accuracy and IoU.",
      tech: ["Python", "PyTorch", "CNNs"],
      repo: "",
      demo: "",
    },
    {
      name: "Deep Neural Networks for Image Classification",
      date: "UT Austin · Fall 2025",
      description:
        "Implemented and compared four architectures, from linear classifiers and MLPs to residual networks with layer normalization. Built SGD training and validation pipelines with momentum and weight decay, tracked in TensorBoard with saved model checkpoints.",
      tech: ["Python", "PyTorch", "TensorBoard"],
      repo: "",
      demo: "",
    },
  ],

  education: [
    {
      school: "University of Texas at Austin",
      degree: "M.S. in Computer Science",
      start: "Aug 2025",
      end: "May 2028 (expected)",
      details: "",
    },
    {
      school: "University of Arkansas",
      degree: "B.S. in Computer Science, Minor in Mathematics",
      start: "",
      end: "2022",
      details: "GPA 3.78 · Graduated with Distinction",
    },
  ],

  // Optional. Set to [] to hide the section.
  certifications: [],
};
