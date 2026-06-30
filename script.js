(function () {
  "use strict";

  const data = PORTFOLIO;

  // ── Page meta ────────────────────────────────────────────────────
  document.title = data.name;
  document.getElementById("nav-name").textContent = data.name;
  document.getElementById("footer-name").textContent = data.name;
  document.getElementById("hero-status").textContent = data.status;
  document.getElementById("location-text").textContent = data.location;
  document.getElementById("footer-location").textContent = data.location;
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("loader-name").textContent = data.name;

  // Hero name split into first / last
  const nameParts = data.name.split(" ");
  const firstName = nameParts[0].toUpperCase();
  const lastName  = nameParts.slice(1).join(" ").toUpperCase();
  document.querySelector("#hero-firstname .hero__name-inner").textContent = firstName;
  document.querySelector("#hero-lastname .hero__name-inner").textContent  = lastName;

  // Hero intro
  const introEl = document.getElementById("hero-intro");
  if (data.school) {
    introEl.innerHTML = data.hero.intro.replace(
      data.school.name,
      `<a href="${data.school.url}" target="_blank" rel="noopener">${data.school.name}</a>`
    );
  } else {
    introEl.textContent = data.hero.intro;
  }

  // Hero mini stats
  const heroStatsRow = document.getElementById("hero-stats-row");
  if (heroStatsRow && data.stats) {
    data.stats.forEach(function (stat) {
      const item = document.createElement("div");
      item.className = "hero__stat-item";
      item.innerHTML = `<span class="hero__stat-value">${stat.value}+</span><span class="hero__stat-label">${stat.label}</span>`;
      heroStatsRow.appendChild(item);
    });
  }

  // About
  document.getElementById("about-title").innerHTML =
    `${data.about.titleBefore} <em>${data.about.titleAccent}</em>`;

  const aboutText = document.getElementById("about-text");
  data.about.paragraphs.forEach(function (p) {
    const para = document.createElement("p");
    para.innerHTML = p;
    aboutText.appendChild(para);
  });

  // Languages
  const langList = document.getElementById("languages-list");
  data.languages.forEach(function (lang) {
    const li = document.createElement("li");
    li.className = "about__lang-item";
    li.innerHTML = `
      <span class="about__lang-flag">${lang.flag}</span>
      <span class="about__lang-name">${lang.name}</span>
      <span class="about__lang-level">${lang.level}</span>
    `;
    langList.appendChild(li);
  });

  // About stats countup
  const statsContainer = document.getElementById("about-stats");
  if (statsContainer && data.stats) {
    data.stats.forEach(function (stat) {
      const item = document.createElement("div");
      item.className = "stat-item";
      item.innerHTML = `<span class="stat-item__value" data-target="${stat.value}">0</span><span class="stat-item__label">${stat.label}</span>`;
      statsContainer.appendChild(item);
    });

    const countupObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          statsContainer.querySelectorAll(".stat-item__value").forEach(function (el) {
            const target = parseInt(el.dataset.target, 10);
            const dur = 900;
            const start = performance.now();
            (function step(now) {
              const t = Math.min((now - start) / dur, 1);
              const ease = 1 - Math.pow(1 - t, 3);
              el.textContent = Math.round(ease * target);
              if (t < 1) requestAnimationFrame(step);
            })(start);
          });
          countupObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    countupObs.observe(statsContainer);
  }

  const socialIcons = {
    "GitHub":   `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
    "LinkedIn": `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    "Email":    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  };

  // About socials
  const aboutSocials = document.getElementById("about-socials");
  data.social.forEach(function ({ label, url }) {
    const a = document.createElement("a");
    a.className = "about__social-link";
    a.href = url;
    a.innerHTML = `${socialIcons[label] || ""}${label}`;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    aboutSocials.appendChild(a);
  });

  // Tech icon map
  const techIcons = {
    "React":        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "TypeScript":   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
    "JavaScript":   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
    "Python":       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "Node.js":      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    "PostgreSQL":   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg",
    "Docker":       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    "Git":          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "Next.js":      "https://cdn.simpleicons.org/nextdotjs",
    "Prisma":       "https://cdn.simpleicons.org/prisma",
    "Supabase":     "https://cdn.simpleicons.org/supabase",
    "Scikit-Learn": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
    "Jupyter":      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg",
    "Apache Spark": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg",
    "MySQL":        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    "MongoDB":      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    "n8n":           "https://cdn.simpleicons.org/n8n",
    "SAP":           "https://cdn.simpleicons.org/sap",
  };

  function renderTag(t) {
    const icon = techIcons[t];
    if (icon) {
      return `<span class="project-item__icon-tag" title="${t}"><img src="${icon}" alt="${t}" loading="lazy" onerror="this.parentElement.outerHTML='<span class=\\'project-item__tag\\'>${t}</span>'"></span>`;
    }
    return `<span class="project-item__tag">${t}</span>`;
  }

  // Projects
  const projectsList = document.getElementById("projects-list");
  data.projectCategories.forEach(function (category, ci) {
    const section = document.createElement("div");
    section.className = "project-category reveal";
    section.style.transitionDelay = `${ci * 0.1}s`;
    section.innerHTML = `<h3 class="project-category__title">${category.name}</h3>`;

    category.projects.forEach(function (project, pi) {
      const item = document.createElement("article");
      item.className = "project-item reveal";
      item.style.transitionDelay = `${ci * 0.1 + pi * 0.08}s`;

      const links = [];
      if (project.links?.live)
        links.push(`<a href="${project.links.live}" target="_blank" rel="noopener">Live ↗</a>`);
      if (project.links?.github)
        links.push(`<a href="${project.links.github}" target="_blank" rel="noopener">GitHub ↗</a>`);

      item.innerHTML = `
        <h4 class="project-item__title">${project.title}</h4>
        ${project.subtitle ? `<p class="project-item__subtitle">${project.subtitle}</p>` : ""}
        <p class="project-item__desc">${project.description}</p>
        <div class="project-item__footer">
          <div class="project-item__tags">
            ${project.tags.map(renderTag).join("")}
          </div>
          ${links.length ? `<div class="project-item__links">${links.join("")}</div>` : ""}
        </div>
      `;
      section.appendChild(item);
    });

    projectsList.appendChild(section);
  });

  // Contact
  document.getElementById("contact-title").innerHTML =
    `${data.contact.titleBefore} <em>${data.contact.titleAccent}</em>`;
  document.getElementById("contact-text").textContent = data.contact.text;

  const contactEmail = document.getElementById("contact-email");
  contactEmail.href = `mailto:${data.email}`;
  contactEmail.childNodes[0].textContent = data.email;

  // Footer social
  const footerSocial = document.getElementById("footer-social");
  data.social.forEach(function ({ label, url }) {
    const a = document.createElement("a");
    a.href = url;
    a.textContent = label;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    footerSocial.appendChild(a);
  });

  // ── Marquee strip ────────────────────────────────────────────────
  const marqueeTrack = document.getElementById("marquee-track");
  if (marqueeTrack && data.skills) {
    const items = [...data.skills, ...data.skills];
    items.forEach(function (skill) {
      const span = document.createElement("span");
      span.className = "marquee__item";
      span.textContent = skill;
      marqueeTrack.appendChild(span);
    });
  }

  // ── Split-text helper (for section titles) ───────────────────────
  function splitWords(el) {
    const nodes = [...el.childNodes];
    el.innerHTML = "";
    nodes.forEach(function (node) {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent.split(/(\s+)/).forEach(function (part) {
          if (/^\s+$/.test(part)) {
            el.appendChild(document.createTextNode(part));
          } else if (part.length > 0) {
            const wrap = document.createElement("span");
            wrap.className = "word-wrap";
            const inner = document.createElement("span");
            inner.className = "word-inner";
            inner.textContent = part;
            wrap.appendChild(inner);
            el.appendChild(wrap);
          }
        });
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const wrap = document.createElement("span");
        wrap.className = "word-wrap";
        const inner = document.createElement("span");
        inner.className = "word-inner";
        inner.appendChild(node.cloneNode(true));
        wrap.appendChild(inner);
        el.appendChild(wrap);
      }
    });
  }

  // ── Custom Cursor ─────────────────────────────────────────────────
  const cursorDot  = document.getElementById("cursor");
  const cursorRing = document.getElementById("cursor-ring");

  let mouseX = -100, mouseY = -100;
  let ringX  = -100, ringY  = -100;

  document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
  }, { passive: true });

  (function tickCursor() {
    ringX += (mouseX - ringX) * 0.1;
    ringY += (mouseY - ringY) * 0.1;
    cursorRing.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
    requestAnimationFrame(tickCursor);
  })();

  function addCursorHover(el) {
    el.addEventListener("mouseenter", function () {
      cursorDot.classList.add("is-hovering");
      cursorRing.classList.add("is-hovering");
    });
    el.addEventListener("mouseleave", function () {
      cursorDot.classList.remove("is-hovering");
      cursorRing.classList.remove("is-hovering");
    });
  }

  document.querySelectorAll("a, button").forEach(addCursorHover);
  document.addEventListener("mousedown", function () { cursorRing.classList.add("is-clicking"); });
  document.addEventListener("mouseup",   function () { cursorRing.classList.remove("is-clicking"); });

  // ── Page Loader ───────────────────────────────────────────────────
  const loader     = document.getElementById("page-loader");
  const loaderBar  = document.getElementById("loader-bar");
  const loaderName = document.getElementById("loader-name");

  const heroBadge    = document.querySelector(".hero__badge");
  const heroFirstLine = document.getElementById("hero-firstname");
  const heroLastLine  = document.getElementById("hero-lastname");
  const heroRole     = document.getElementById("hero-role");
  const heroSub      = document.getElementById("hero-intro");
  const heroStats    = document.getElementById("hero-stats-row");
  const heroCtas     = document.querySelector(".hero__ctas");
  const heroScroll   = document.querySelector(".hero__scroll");

  setTimeout(function () { loaderName.classList.add("is-visible"); }, 120);
  setTimeout(function () { loaderBar.style.width = "100%"; }, 220);

  setTimeout(function () {
    loader.classList.add("is-hidden");

    // Badge
    setTimeout(function () { heroBadge.classList.add("is-visible"); }, 80);

    // Name lines — slide up from clip, first then last
    setTimeout(function () { heroFirstLine.classList.add("is-visible"); }, 200);
    setTimeout(function () { heroLastLine.classList.add("is-visible"); }, 380);

    // Role + sub + stats + ctas cascade
    setTimeout(function () { heroRole.classList.add("is-visible"); }, 620);
    setTimeout(function () { heroSub.classList.add("is-visible"); }, 720);
    setTimeout(function () { heroStats.classList.add("is-visible"); }, 820);
    setTimeout(function () { heroCtas.classList.add("is-visible"); }, 940);
    setTimeout(function () { heroScroll.classList.add("is-visible"); }, 1080);

  }, 1450);

  // ── Scroll Reveal ─────────────────────────────────────────────────
  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach(function (el) { revealObserver.observe(el); });

  // ── Section title split-text (scroll-triggered) ──────────────────
  document.querySelectorAll(".section-title").forEach(function (el) {
    el.classList.remove("reveal", "reveal-delay-1", "reveal-delay-2");
    el.style.opacity = "0";
    splitWords(el);
    const words = el.querySelectorAll(".word-inner");

    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          words.forEach(function (w, i) {
            setTimeout(function () { w.classList.add("is-visible"); }, i * 70);
          });
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    obs.observe(el);
  });

  // ── Parallax (zellige bg elements) ───────────────────────────────
  const zellige  = document.querySelector(".zellige");

  window.addEventListener("scroll", function () {
    const sy = window.scrollY;
    if (zellige) zellige.style.transform = `translateY(${sy * 0.18}px)`;
  }, { passive: true });

  // ── Scroll Progress + Navbar + Back to top ────────────────────────
  const progressBar = document.getElementById("scroll-progress");
  const backToTop   = document.getElementById("back-to-top");
  const navbar      = document.getElementById("navbar");
  const navLinks    = document.querySelectorAll(".navbar__link");
  const sections    = ["about", "projects", "contact"].map(function (id) { return document.getElementById(id); });

  const sectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(function (link) {
            link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-10% 0px -80% 0px", threshold: 0 }
  );
  sections.forEach(function (s) { s && sectionObserver.observe(s); });

  window.addEventListener("scroll", function () {
    const sy  = window.scrollY;
    const max = document.body.scrollHeight - window.innerHeight;
    if (progressBar) progressBar.style.width = (sy / max * 100) + "%";
    navbar.classList.toggle("navbar--scrolled", sy > 40);
    if (backToTop) backToTop.classList.toggle("is-visible", sy > 400);
  }, { passive: true });

  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ── Magnetic CTA Buttons ─────────────────────────────────────────
  document.querySelectorAll(".hero__btn").forEach(function (btn) {
    btn.addEventListener("mousemove", function (e) {
      const rect = btn.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width  / 2);
      const dy = e.clientY - (rect.top  + rect.height / 2);
      btn.style.transform = `translate(${dx * 0.28}px, ${dy * 0.28}px)`;
    });
    btn.addEventListener("mouseleave", function () {
      btn.style.transform = "";
    });
  });

  // ── Theme toggle ─────────────────────────────────────────────────
  const themeToggle = document.getElementById("theme-toggle");
  if (localStorage.getItem("theme") === "light") {
    document.documentElement.classList.add("light");
    themeToggle.setAttribute("aria-label", "Switch to dark mode");
  }

  themeToggle.addEventListener("click", function () {
    const isLight = document.documentElement.classList.toggle("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    themeToggle.setAttribute(
      "aria-label",
      isLight ? "Switch to dark mode" : "Switch to light mode"
    );
  });

  // ── Mobile nav ───────────────────────────────────────────────────
  const burger    = document.querySelector(".navbar__burger");
  const mobileNav = document.getElementById("mobile-nav");

  burger.addEventListener("click", function () {
    const open = burger.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", open);
    mobileNav.hidden = !open;
  });

  mobileNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      burger.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      mobileNav.hidden = true;
    });
  });

})();
