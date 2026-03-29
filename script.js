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

const initParticleField = (profileName) => {
  const stage = document.querySelector("#particle-stage");
  const canvas = document.querySelector("#hero-canvas");
  const trigger = document.querySelector("#name-trigger");
  const stageCopy = document.querySelector("#hero-stage-copy");

  if (!stage || !canvas || !trigger) {
    return;
  }

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return;
  }

  const TAU = Math.PI * 2;
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pointPalette = ["#11263d", "#0e8f82", "#ef7a43", "#f6f1e7"];
  const state = {
    width: 0,
    height: 0,
    dpr: 1,
    mode: "scatter",
    particles: [],
    scatterTargets: [],
    figureTargets: [],
    frameId: 0,
    currentFigure: null,
  };

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  const lerp = (start, end, amount) => start + (end - start) * amount;
  const shuffle = (items) => {
    for (let index = items.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [items[index], items[swapIndex]] = [items[swapIndex], items[index]];
    }

    return items;
  };

  const samplePolyline = (points, count, closed = true) => {
    const path = closed ? [...points, points[0]] : points;
    const segments = [];
    let totalLength = 0;

    for (let index = 0; index < path.length - 1; index += 1) {
      const start = path[index];
      const end = path[index + 1];
      const length = Math.hypot(end.x - start.x, end.y - start.y);

      segments.push({ start, end, length });
      totalLength += length;
    }

    if (!totalLength) {
      return Array.from({ length: count }, () => ({ x: 0, y: 0 }));
    }

    return Array.from({ length: count }, (_, index) => {
      const targetDistance = (index / Math.max(count, 1)) * totalLength;
      let distance = 0;

      for (const segment of segments) {
        if (distance + segment.length >= targetDistance) {
          const amount = (targetDistance - distance) / Math.max(segment.length, 1);

          return {
            x: lerp(segment.start.x, segment.end.x, amount),
            y: lerp(segment.start.y, segment.end.y, amount),
          };
        }

        distance += segment.length;
      }

      return {
        x: segments[segments.length - 1].end.x,
        y: segments[segments.length - 1].end.y,
      };
    });
  };

  const figures = [
    {
      key: "star",
      label: "star figure",
      build(count) {
        const vertices = Array.from({ length: 10 }, (_, index) => {
          const angle = -Math.PI / 2 + (index / 10) * TAU;
          const radius = index % 2 === 0 ? 1 : 0.42;

          return {
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius,
          };
        });

        return samplePolyline(vertices, count, true);
      },
    },
    {
      key: "spiral",
      label: "spiral figure",
      build(count) {
        return Array.from({ length: count }, (_, index) => {
          const amount = index / Math.max(count - 1, 1);
          const angle = amount * Math.PI * 4.5;
          const radius = 0.14 + amount * 0.82;

          return {
            x: Math.cos(angle) * radius * 0.88,
            y: Math.sin(angle) * radius * 0.68,
          };
        });
      },
    },
    {
      key: "infinity",
      label: "infinity figure",
      build(count) {
        return Array.from({ length: count }, (_, index) => {
          const angle = (index / Math.max(count, 1)) * TAU;

          return {
            x: Math.sin(angle),
            y: Math.sin(angle * 2) * 0.56,
          };
        });
      },
    },
    {
      key: "flower",
      label: "flower figure",
      build(count) {
        return Array.from({ length: count }, (_, index) => {
          const angle = (index / Math.max(count, 1)) * TAU;
          const radius = 0.28 + 0.54 * Math.cos(angle * 5);

          return {
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius,
          };
        });
      },
    },
    {
      key: "lightning",
      label: "lightning figure",
      build(count) {
        return samplePolyline(
          [
            { x: -0.48, y: -0.92 },
            { x: -0.12, y: -0.2 },
            { x: -0.34, y: -0.18 },
            { x: 0.2, y: 0.92 },
            { x: 0.04, y: 0.18 },
            { x: 0.42, y: 0.18 },
            { x: -0.04, y: -0.88 },
          ],
          count,
          false,
        );
      },
    },
    {
      key: "wave",
      label: "wave figure",
      build(count) {
        return Array.from({ length: count }, (_, index) => {
          const amount = index / Math.max(count - 1, 1);
          const x = -1 + amount * 2;
          const y = Math.sin(amount * TAU * 2.2) * 0.38;

          return { x, y };
        });
      },
    },
  ];

  const pickRandomFigure = () => {
    let nextIndex = Math.floor(Math.random() * figures.length);

    if (
      state.currentFigure &&
      figures.length > 1 &&
      figures[nextIndex].key === state.currentFigure.key
    ) {
      nextIndex =
        (nextIndex + 1 + Math.floor(Math.random() * (figures.length - 1))) %
        figures.length;
    }

    return figures[nextIndex];
  };

  const setStageCopy = () => {
    if (!stageCopy) {
      return;
    }

    stageCopy.textContent =
      state.mode === "figure" && state.currentFigure
        ? `The points are holding a ${state.currentFigure.label}. Click ${profileName} again to release them.`
        : `Random points drift until you click ${profileName} and pull them into a random figure.`;
  };

  const setMode = (nextMode) => {
    state.mode = nextMode;
    const isFigure = nextMode === "figure";
    trigger.classList.toggle("is-active", isFigure);
    trigger.setAttribute("aria-pressed", String(isFigure));
    stage.classList.toggle("is-figure", isFigure);
    setStageCopy();
  };

  const createScatterTargets = (count) =>
    Array.from({ length: count }, (_, index) => ({
      x: 24 + Math.random() * Math.max(state.width - 48, 1),
      y: 24 + Math.random() * Math.max(state.height - 48, 1),
      swingX: 8 + Math.random() * 24,
      swingY: 8 + Math.random() * 22,
      phase: Math.random() * TAU + index * 0.03,
      speed: 0.55 + Math.random() * 0.75,
    }));

  const createFigureTargets = (count, figure) => {
    const rawPoints = figure.build(count);
    const frameWidth = state.width * 0.6;
    const frameHeight = state.height * 0.54;
    const centerX = state.width * 0.5;
    const centerY = state.height * 0.52;
    const angle =
      figure.key === "lightning"
        ? -0.18 + Math.random() * 0.36
        : Math.random() * TAU;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    return shuffle(
      rawPoints.map((point, index) => {
        const rotatedX = point.x * cos - point.y * sin;
        const rotatedY = point.x * sin + point.y * cos;

        return {
          x: centerX + rotatedX * frameWidth * 0.5,
          y: centerY + rotatedY * frameHeight * 0.5,
          wobbleX: 0.8 + Math.random() * 2,
          wobbleY: 0.8 + Math.random() * 2,
          phase: Math.random() * TAU + index * 0.02,
          speed: 0.8 + Math.random() * 0.7,
        };
      }),
    );
  };

  const buildParticles = () => {
    const particleCount = Math.max(
      180,
      Math.min(340, Math.floor((state.width * state.height) / 1200)),
    );

    state.scatterTargets = createScatterTargets(particleCount);
    state.figureTargets = createFigureTargets(
      particleCount,
      state.currentFigure || figures[0],
    );
    state.particles = state.scatterTargets.map((target, index) => ({
      x: target.x + (Math.random() - 0.5) * 64,
      y: target.y + (Math.random() - 0.5) * 64,
      vx: 0,
      vy: 0,
      radius: 1.25 + Math.random() * 1.9,
      color: pointPalette[index % pointPalette.length],
      phase: Math.random() * TAU,
    }));
  };

  const getTargetPosition = (index, time) => {
    if (state.mode === "figure") {
      const target = state.figureTargets[index];

      return {
        x: target.x + Math.cos(time * target.speed + target.phase) * target.wobbleX,
        y:
          target.y +
          Math.sin(time * (target.speed + 0.22) + target.phase) * target.wobbleY,
      };
    }

    const target = state.scatterTargets[index];

    return {
      x: target.x + Math.cos(time * target.speed + target.phase) * target.swingX,
      y:
        target.y +
        Math.sin(time * (target.speed + 0.18) + target.phase) * target.swingY,
    };
  };

  const paint = (timestamp, freeze = false) => {
    const time = timestamp * 0.001;

    ctx.clearRect(0, 0, state.width, state.height);

    const glow = ctx.createRadialGradient(
      state.width * 0.58,
      state.height * 0.5,
      24,
      state.width * 0.58,
      state.height * 0.5,
      state.width * 0.34,
    );

    if (state.mode === "figure") {
      glow.addColorStop(0, "rgba(14, 143, 130, 0.26)");
      glow.addColorStop(0.5, "rgba(239, 122, 67, 0.12)");
      glow.addColorStop(1, "rgba(14, 143, 130, 0)");
    } else {
      glow.addColorStop(0, "rgba(17, 38, 61, 0.08)");
      glow.addColorStop(0.5, "rgba(14, 143, 130, 0.08)");
      glow.addColorStop(1, "rgba(14, 143, 130, 0)");
    }

    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, state.width, state.height);

    state.particles.forEach((particle, index) => {
      const target = getTargetPosition(index, time);

      if (freeze) {
        particle.x = target.x;
        particle.y = target.y;
      } else {
        const tension = state.mode === "figure" ? 0.026 : 0.018;
        const damping = state.mode === "figure" ? 0.86 : 0.9;

        particle.vx = (particle.vx + (target.x - particle.x) * tension) * damping;
        particle.vy = (particle.vy + (target.y - particle.y) * tension) * damping;
        particle.x += particle.vx;
        particle.y += particle.vy;
      }

      const pulse = state.mode === "figure" ? 0.32 : 0.22;

      ctx.globalAlpha = state.mode === "figure" ? 0.92 : 0.72;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(
        particle.x,
        particle.y,
        particle.radius + Math.sin(time * 2.4 + particle.phase) * pulse,
        0,
        TAU,
      );
      ctx.fill();
    });

    ctx.globalAlpha = 1;
  };

  const render = (timestamp) => {
    paint(timestamp);
    state.frameId = window.requestAnimationFrame(render);
  };

  const syncAnimation = () => {
    window.cancelAnimationFrame(state.frameId);

    if (motionQuery.matches) {
      paint(performance.now(), true);
      return;
    }

    state.frameId = window.requestAnimationFrame(render);
  };

  const resizeScene = () => {
    state.width = Math.max(Math.round(stage.clientWidth), 1);
    state.height = Math.max(Math.round(stage.clientHeight), 1);
    state.dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = state.width * state.dpr;
    canvas.height = state.height * state.dpr;
    ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);

    buildParticles();

    if (state.mode === "figure" && state.currentFigure) {
      state.figureTargets = createFigureTargets(
        state.particles.length,
        state.currentFigure,
      );
    }

    syncAnimation();
  };

  trigger.addEventListener("click", () => {
    if (state.mode === "figure") {
      setMode("scatter");
    } else {
      state.currentFigure = pickRandomFigure();
      state.figureTargets = createFigureTargets(
        state.particles.length || state.scatterTargets.length,
        state.currentFigure,
      );
      setMode("figure");
    }

    if (motionQuery.matches) {
      paint(performance.now(), true);
    }
  });

  if ("ResizeObserver" in window) {
    const resizeObserver = new ResizeObserver(() => resizeScene());
    resizeObserver.observe(stage);
  } else {
    window.addEventListener("resize", resizeScene);
  }

  if (typeof motionQuery.addEventListener === "function") {
    motionQuery.addEventListener("change", syncAnimation);
  } else if (typeof motionQuery.addListener === "function") {
    motionQuery.addListener(syncAnimation);
  }

  setMode("scatter");
  resizeScene();
};

const init = () => {
  const { profile } = siteContent;
  const emailHref = `mailto:${profile.email}?subject=Data%20Science%20Opportunity`;

  document.title = `${profile.name} | ${profile.title}`;

  text("#brand-name", profile.name);
  text("#hero-name", profile.name);
  text("#hero-role", `${profile.title}.`);
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
  initParticleField(profile.name);
  initReveal();
  initNav();
};

document.addEventListener("DOMContentLoaded", init);
