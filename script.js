const siteContent = {
  profile: {
    name: "Samuel Stalder",
    title: "Data Science Candidate",
    summary:
      "I build application-ready narratives around data work: structured analysis, practical machine learning, and communication that makes results easy to act on.",
    availability:
      "Open to internships, thesis collaborations, and entry-level roles in data science, analytics, or machine learning.",
    contactSummary:
      "The fastest way to reach me is by email. GitHub is the best place to review code, notebooks, and future case studies.",
    email: "staldsam@students.zhaw.ch",
    github: "https://github.com/samuelstalder1-creator",
    heroChips: [
      "Predictive modeling",
      "Analytics storytelling",
      "Experiment design",
      "Reproducible workflows",
    ],
    roles: [
      "Data Scientist",
      "Machine Learning Engineer",
      "Analytics Engineer",
    ],
    signals: [
      {
        label: "Strength",
        value: "Problem framing",
        copy: "Turn ambiguous requests into measurable questions and useful outputs.",
      },
      {
        label: "Approach",
        value: "Model with context",
        copy: "Choose methods that match the decision, not just the benchmark.",
      },
      {
        label: "Delivery",
        value: "Readable results",
        copy: "Present analysis so product, ops, and business teams can use it.",
      },
      {
        label: "Standard",
        value: "Reliable process",
        copy: "Bias toward reproducibility, versioning, and careful evaluation.",
      },
    ],
  },
  strengths: [
    {
      title: "Applied machine learning",
      body: "Comfortable moving from exploratory analysis to feature engineering, baseline comparison, model evaluation, and interpretation.",
      meta: "Good for predictive modeling and classification work",
    },
    {
      title: "Analytics with business context",
      body: "I care about the operational meaning of a metric, not just whether it improved on paper.",
      meta: "Useful when teams need data work tied to decisions",
    },
    {
      title: "Communication that travels",
      body: "Strong data work only matters if stakeholders understand the assumptions, tradeoffs, and outcome.",
      meta: "Ideal for presentations, dashboards, and written summaries",
    },
    {
      title: "Clean working habits",
      body: "Reproducible notebooks, organized experiments, and careful handling of data quality issues are part of the baseline.",
      meta: "Important for reliable handoff and iteration",
    },
  ],
  projects: [
    {
      number: "01",
      label: "Case Study Slot",
      title: "Forecasting or planning project",
      body: "Use this section for the project that best shows how you improved a baseline, justified your evaluation metric, and connected the result to real planning decisions.",
      tags: ["Time series", "Feature design", "Model comparison"],
    },
    {
      number: "02",
      label: "Case Study Slot",
      title: "Classification or risk model",
      body: "Highlight a project where the question, threshold, or precision-recall tradeoff mattered. This is usually the strongest proof of practical modeling judgment.",
      tags: ["Classification", "Thresholds", "Decision support"],
    },
    {
      number: "03",
      label: "Case Study Slot",
      title: "NLP, experimentation, or product analytics",
      body: "Use one slot for work that shows range: unstructured data, experimentation, causal thinking, or a workflow that helped product or operations teams act faster.",
      tags: ["NLP", "Experiments", "Business impact"],
    },
  ],
  process: [
    {
      step: "01",
      title: "Frame the decision",
      body: "Clarify the question, success metric, time horizon, and which stakeholder decision the analysis needs to support.",
    },
    {
      step: "02",
      title: "Inspect the data",
      body: "Audit granularity, missingness, leakage risks, and what the dataset can honestly support before pushing toward modeling.",
    },
    {
      step: "03",
      title: "Build and compare",
      body: "Start with simple baselines, then increase sophistication only when it changes the result in a meaningful way.",
    },
    {
      step: "04",
      title: "Explain and ship",
      body: "Deliver outputs that are easy to re-run, easy to review, and clear enough that a non-specialist can trust the takeaway.",
    },
  ],
  timeline: [
    {
      year: "Now",
      title: "Targeting data science roles",
      body: "This homepage is designed as a reusable front door for applications in data science, analytics, and machine learning.",
    },
    {
      year: "Next",
      title: "Tailored case studies",
      body: "The project cards are ready to be replaced with role-specific examples, metrics, datasets, and repository links.",
    },
    {
      year: "Ongoing",
      title: "Portfolio that stays current",
      body: "Because the site is static and lightweight, it can be updated quickly whenever new coursework, internships, or personal projects are ready.",
    },
  ],
};

const text = (selector, value) => {
  const node = document.querySelector(selector);
  if (node) {
    node.textContent = value;
  }
};

const html = (selector, value) => {
  const node = document.querySelector(selector);
  if (node) {
    node.innerHTML = value;
  }
};

const setLink = (selector, href, label) => {
  const node = document.querySelector(selector);
  if (node) {
    node.href = href;
    if (label) {
      node.textContent = label;
    }
  }
};

const renderSignals = () => {
  const container = document.querySelector("#signal-grid");
  container.innerHTML = siteContent.profile.signals
    .map(
      ({ label, value, copy }) => `
        <article class="signal">
          <strong>${label}</strong>
          <h3>${value}</h3>
          <p>${copy}</p>
        </article>
      `,
    )
    .join("");
};

const renderChips = () => {
  html(
    "#hero-chips",
    siteContent.profile.heroChips
      .map((chip) => `<span class="chip">${chip}</span>`)
      .join(""),
  );
};

const renderRoles = () => {
  html(
    "#role-list",
    siteContent.profile.roles.map((role) => `<li>${role}</li>`).join(""),
  );
};

const renderStrengths = () => {
  const container = document.querySelector("#strength-grid");
  container.innerHTML = siteContent.strengths
    .map(
      ({ title, body, meta }) => `
        <article class="card" data-reveal>
          <h3>${title}</h3>
          <p>${body}</p>
          <div class="meta-row">
            <span class="meta-dot" aria-hidden="true"></span>
            <span>${meta}</span>
          </div>
        </article>
      `,
    )
    .join("");
};

const renderProjects = () => {
  const container = document.querySelector("#project-grid");
  container.innerHTML = siteContent.projects
    .map(
      ({ number, label, title, body, tags }) => `
        <article class="project-card" data-reveal>
          <div class="project-top">
            <p class="project-label">${label}</p>
            <span class="project-number">${number}</span>
          </div>
          <div>
            <h3>${title}</h3>
            <p>${body}</p>
          </div>
          <ul class="project-tags">
            ${tags.map((tag) => `<li>${tag}</li>`).join("")}
          </ul>
        </article>
      `,
    )
    .join("");
};

const renderProcess = () => {
  const container = document.querySelector("#process-grid");
  container.innerHTML = siteContent.process
    .map(
      ({ step, title, body }) => `
        <article class="process-card" data-reveal>
          <span class="process-step">${step}</span>
          <h3>${title}</h3>
          <p>${body}</p>
        </article>
      `,
    )
    .join("");
};

const renderTimeline = () => {
  const container = document.querySelector("#timeline-grid");
  container.innerHTML = siteContent.timeline
    .map(
      ({ year, title, body }) => `
        <article class="timeline-card" data-reveal>
          <p class="timeline-year">${year}</p>
          <h3>${title}</h3>
          <p>${body}</p>
        </article>
      `,
    )
    .join("");
};

const initReveal = () => {
  const revealNodes = document.querySelectorAll("[data-reveal]");

  if (!("IntersectionObserver" in window)) {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 },
  );

  revealNodes.forEach((node) => observer.observe(node));
};

const initNav = () => {
  const toggle = document.querySelector("#nav-toggle");
  const nav = document.querySelector("#site-nav");

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
};

const init = () => {
  const { profile } = siteContent;
  const emailHref = `mailto:${profile.email}?subject=Data%20Science%20Opportunity`;

  document.title = `${profile.name} | ${profile.title}`;

  text("#brand-name", profile.name);
  text("#hero-title", `${profile.name}. ${profile.title}.`);
  text("#hero-summary", profile.summary);
  text("#availability", profile.availability);
  text("#contact-summary", profile.contactSummary);
  text("#footer-name", profile.name);
  text("#year", new Date().getFullYear());

  setLink("#email-link", emailHref, "Email me");
  setLink("#contact-email-link", emailHref, "Start a conversation");
  setLink("#github-link", profile.github, "View GitHub");
  setLink("#contact-github-link", profile.github, "Explore repositories");

  renderChips();
  renderSignals();
  renderRoles();
  renderStrengths();
  renderProjects();
  renderProcess();
  renderTimeline();
  initReveal();
  initNav();
};

document.addEventListener("DOMContentLoaded", init);
