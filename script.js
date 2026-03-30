const siteContent = {
  profile: {
    name: "Samuel Stalder",
    title: "Data Scientist / ML Engineer",
    summary:
      "ML Engineer with production experience building and deploying NLP and generative AI systems for enterprise clients. Delivered multimodal document understanding pipelines, RAG-based support assistants, and text classification solutions, and operated model-serving infrastructure in Kubernetes environments. Currently pursuing a part-time M.Sc. in Data Science with research in NLP and information retrieval.",
    heroSummary:
      "Building production NLP and generative AI systems for enterprise clients, with a background that combines software engineering, research, and pragmatic delivery.",
    availability:
      "Currently Machine Learning Engineer at BSI Software, pursuing a part-time M.Sc. in Data Science at ZHAW, and contributing to NLP-related research at InIT.",
    contactSummary:
      "Email is the fastest way to reach me. Happy to discuss data science, ML engineering, NLP, and applied AI work.",
    location: "Zurich, Switzerland",
    status: "BSI Software + ZHAW Data Science M.Sc.",
    email: "samu.stalder@gmail.com",
    phoneDisplay: "079 269 40 25",
    phoneHref: "+41792694025",
    linkedin: "https://www.linkedin.com/in/samuel-stalder",
    github: "https://github.com/samuelstalder1-creator",
    heroChips: [
      "Multimodal NLP",
      "RAG Systems",
      "Text Classification",
      "vLLM",
      "Kubernetes",
      "Responsible AI",
    ],
    focus: [
      "Multimodal document understanding for noisy real-world inputs",
      "Support automation with retrieval-augmented generation",
      "NLP classifiers for operational workflows",
      "Reliable model serving and governance in enterprise settings",
    ],
    metrics: [
      {
        value: "50%",
        label: "Process automation",
        copy: "Achieved in document extraction workflows for a major German retailer.",
      },
      {
        value: "2%",
        label: "Error rate",
        copy: "Delivered by a production document understanding pipeline.",
      },
      {
        value: "-20%",
        label: "Inbound support emails",
        copy: "Reduced through a RAG-based assistant for a logistics client.",
      },
      {
        value: "vLLM + K8s",
        label: "Serving stack",
        copy: "Operated model-serving infrastructure in an AI-as-a-Service setup.",
      },
    ],
  },
  highlights: [
    {
      label: "01",
      title: "Multimodal document understanding",
      body: "Designed and deployed a Qwen-based pipeline for scanned order cards, extracting structured data from noisy retail documents with measurable production impact.",
      meta: "LLMs / data extraction / enterprise rollout",
    },
    {
      label: "02",
      title: "RAG support assistant",
      body: "Built a retrieval-augmented customer support chatbot for a logistics company, reducing inbound support emails and shifting recurring work away from manual handling.",
      meta: "RAG / support workflows / business impact",
    },
    {
      label: "03",
      title: "Email routing automation",
      body: "Developed NLP classifiers for a mobility service provider to automate customer support email routing and improve downstream operational handling.",
      meta: "Classification / workflow automation / NLP",
    },
    {
      label: "04",
      title: "Serving and responsible AI",
      body: "Combined model-serving operations with responsible AI work, including vLLM and Kubernetes infrastructure as well as project-level ethics enablement.",
      meta: "MLOps / governance / delivery",
    },
  ],
  experience: [
    {
      company: "BSI Software",
      location: "Zurich, Switzerland",
      roles: [
        {
          title: "Machine Learning Engineer",
          period: "2024 - Present",
          bullets: [
            "Designed and deployed a Qwen-based multimodal LLM pipeline for document understanding and data extraction from scanned order cards for a major German retailer, achieving 50% process automation with a 2% error rate.",
            "Built a RAG-based customer support chatbot for a logistics company, reducing inbound support emails by 20%.",
            "Developed NLP classifiers to automate routing of customer support emails for a mobility service provider.",
            "Operated model serving infrastructure using vLLM and Kubernetes in an AI-as-a-Service architecture.",
            "Served as Ethics Enabler, embedding responsible AI practices across project delivery.",
          ],
        },
        {
          title: "Software Engineer",
          period: "2022 - 2024",
          bullets: [
            "Engineered backend and frontend components of a mission-critical retail application for Swiss Post using Java, Eclipse Scout, and web technologies.",
            "Integrated external hardware such as payment terminals and connected data systems including Kafka, Oracle, and MariaDB.",
            "Contributed to requirements engineering, testing, and system maintenance in an agile environment.",
          ],
        },
      ],
    },
    {
      company: "ZHAW InIT",
      location: "Winterthur, Switzerland",
      roles: [
        {
          title: "Research Project",
          period: "2025 - Present",
          bullets: [
            "Training a BERT-based classifier to detect covert advertisement injected into RAG system outputs.",
            "Researching detection of AI-generated text using supervised, stylometric, and zero-shot approaches.",
            "Authoring a survey paper on the Dead Internet Theory, linking technical findings to societal implications.",
          ],
        },
      ],
    },
    {
      company: "Novalink",
      location: "Frauenfeld, Thurgau",
      roles: [
        {
          title: "Full Stack Intern",
          period: "2017 - 2018",
          bullets: [
            "Developed features for an enterprise alerting web application using JavaScript, Angular.js, .NET, and MySQL.",
          ],
        },
      ],
    },
  ],
  research: [
    {
      title: "RAG output integrity",
      body: "Training a BERT-based classifier to identify covert advertising injected into retrieval-augmented generation outputs.",
      meta: "Classification / trust / evaluation",
    },
    {
      title: "AI-generated text detection",
      body: "Comparing supervised, stylometric, and zero-shot approaches for detecting machine-generated text in realistic settings.",
      meta: "NLP / stylometry / detection",
    },
    {
      title: "Dead Internet Theory survey",
      body: "Writing a survey paper that links technical findings around synthetic content and online signals to broader societal implications.",
      meta: "Research synthesis / societal context",
    },
  ],
  skills: [
    {
      label: "ML / AI",
      items:
        "PyTorch, Hugging Face Transformers, scikit-learn, vLLM, RAG, agentic systems, NLP",
    },
    {
      label: "Languages",
      items: "Python, TypeScript, Java, SQL",
    },
    {
      label: "Infrastructure",
      items: "Kubernetes, Docker, Kafka, Oracle, MariaDB, Jupyter, n8n",
    },
    {
      label: "Practices",
      items: "Responsible AI, MLOps, Agile / Scrum",
    },
  ],
  communication: ["German (native)", "English (C1)"],
  education: [
    {
      degree: "M.Sc. Data Science (part-time)",
      institution: "ZHAW School of Engineering, InIT",
      period: "2024 - Present",
      note: "Advanced study alongside industry work, centered on data science and NLP-related research.",
    },
    {
      degree: "B.Sc. Computer Science",
      institution: "ZHAW School of Engineering",
      period: "2019 - 2022",
      note: "Academic foundation in software engineering and computing.",
    },
    {
      degree: "EFZ Application Developer",
      institution: "IMS Frauenfeld",
      period: "2014 - 2018",
      note: "Vocational training in application development.",
    },
  ],
  additional: {
    service:
      "Nursing assistance, refugee aid, farm work, and youth hostel operations (2018 - 2024).",
    interests: "Triathlon, fermentation, photography, and violin.",
  },
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

const renderChips = () => {
  html(
    "#hero-chips",
    siteContent.profile.heroChips
      .map((chip) => `<span class="chip">${chip}</span>`)
      .join(""),
  );
};

const renderMetrics = () => {
  const container = document.querySelector("#metric-grid");
  container.innerHTML = siteContent.profile.metrics
    .map(
      ({ value, label, copy }) => `
        <article class="metric-card">
          <span class="metric-value">${value}</span>
          <p class="metric-label">${label}</p>
          <p>${copy}</p>
        </article>
      `,
    )
    .join("");
};

const renderFocus = () => {
  html(
    "#focus-list",
    siteContent.profile.focus.map((item) => `<li>${item}</li>`).join(""),
  );
};

const renderHighlights = () => {
  const container = document.querySelector("#highlight-grid");
  container.innerHTML = siteContent.highlights
    .map(
      ({ label, title, body, meta }) => `
        <article class="highlight-card">
          <p class="card-kicker">${label}</p>
          <h3>${title}</h3>
          <p>${body}</p>
          <span class="highlight-meta">${meta}</span>
        </article>
      `,
    )
    .join("");
};

const renderExperience = () => {
  const container = document.querySelector("#experience-grid");
  container.innerHTML = siteContent.experience
    .map(
      ({ company, location, roles }) => `
        <article class="experience-card" data-reveal>
          <div class="card-header">
            <div>
              <p class="card-kicker">Experience</p>
              <h3>${company}</h3>
            </div>
            <p class="card-location">${location}</p>
          </div>
          ${roles
            .map(
              ({ title, period, bullets }) => `
                <section class="role-block">
                  <div class="role-head">
                    <h4>${title}</h4>
                    <p class="role-period">${period}</p>
                  </div>
                  <ul class="role-points">
                    ${bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
                  </ul>
                </section>
              `,
            )
            .join("")}
        </article>
      `,
    )
    .join("");
};

const renderResearch = () => {
  const container = document.querySelector("#research-grid");
  container.innerHTML = siteContent.research
    .map(
      ({ title, body, meta }) => `
        <article class="research-card" data-reveal>
          <p class="card-kicker">Topic</p>
          <h3>${title}</h3>
          <p>${body}</p>
          <span class="research-meta">${meta}</span>
        </article>
      `,
    )
    .join("");
};

const renderSkills = () => {
  const container = document.querySelector("#skills-table");
  container.innerHTML = siteContent.skills
    .map(
      ({ label, items }) => `
        <article class="skill-row" data-reveal>
          <div class="skill-label">${label}</div>
          <p>${items}</p>
        </article>
      `,
    )
    .join("");
};

const renderCommunication = () => {
  html(
    "#communication-list",
    siteContent.communication.map((item) => `<li>${item}</li>`).join(""),
  );
};

const renderEducation = () => {
  const container = document.querySelector("#education-grid");
  container.innerHTML = siteContent.education
    .map(
      ({ degree, institution, period, note }) => `
        <article class="education-card" data-reveal>
          <p class="card-kicker">Education</p>
          <h3>${degree}</h3>
          <p>${institution}</p>
          <p class="education-period">${period}</p>
          <p class="education-note">${note}</p>
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
    { threshold: 0.16 },
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
  const { profile, additional } = siteContent;
  const emailHref = `mailto:${profile.email}?subject=ML%20Engineering%20Conversation`;

  document.title = `${profile.name} | ${profile.title}`;

  text("#brand-name", profile.name);
  text("#hero-role", profile.title);
  text("#hero-summary", profile.heroSummary);
  text("#hero-location", profile.location);
  text("#hero-status", profile.status);
  text("#availability", profile.availability);
  text("#profile-summary", profile.summary);
  text("#service-copy", additional.service);
  text("#interests-copy", additional.interests);
  text("#contact-summary", profile.contactSummary);
  text("#footer-name", profile.name);
  text("#year", new Date().getFullYear());

  setLink("#email-link", emailHref, "Email");
  setLink("#contact-email-link", emailHref, "Email");
  setLink("#linkedin-link", profile.linkedin, "LinkedIn");
  setLink("#contact-linkedin-link", profile.linkedin, "LinkedIn");
  setLink("#github-link", profile.github, "GitHub");
  setLink("#phone-link", `tel:${profile.phoneHref}`, profile.phoneDisplay);

  renderChips();
  renderMetrics();
  renderFocus();
  renderHighlights();
  renderExperience();
  renderResearch();
  renderSkills();
  renderCommunication();
  renderEducation();
  initReveal();
  initNav();
};

document.addEventListener("DOMContentLoaded", init);
