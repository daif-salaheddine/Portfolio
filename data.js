const PORTFOLIO = {
  name: "Salaheddine Daif",
  email: "contact.salahdaif@gmail.com",
  location: "Aachen, Germany",

  status: "Open to opportunities",

  school: {
    name: "FH Aachen",
    url: "https://www.fh-aachen.de",
  },

  hero: {
    intro:
      "I'm a Computer Science student at FH Aachen building full-stack web apps and automation pipelines. I turn real-world problems into clean, working software.",
    photo: "WhatsApp Image 2026-06-10 at 13.03.14.jpeg",
    photoCaption: "fueled by mint tea",
  },

  about: {
    titleBefore: "I build things that",
    titleAccent: "actually work.",
    paragraphs: [
      "I'm <strong>Salaheddine Daif</strong>, a Computer Science student at <a href='https://www.fh-aachen.de' target='_blank' rel='noopener'>FH Aachen</a> with a focus on full-stack web development and automation. I care about writing code that's clean, purposeful, and built to last.",
      "I've shipped real projects with companies like <strong>topsystem GmbH</strong> and <strong>Intense AG</strong>, from collaborative WLAN analysis tools to AI-powered chatbots with SAP integrations.",
      "Currently based in Aachen and actively looking for a <strong>working student position</strong> in the Aachen/Cologne area where I can keep learning and contribute to something meaningful.",
    ],
  },

  languages: [
    { flag: "🇲🇦", name: "Arabic",  level: "Native"       },
    { flag: "🇫🇷", name: "French",  level: "Fluent"        },
    { flag: "🇬🇧", name: "English", level: "Fluent"        },
    { flag: "🇩🇪", name: "German",  level: "Professional"  },
  ],

  projectCategories: [
    {
      name: "Web & Full-Stack",
      projects: [
        {
          title: "Family Accountability App",
          subtitle: "Personal Project, Full-Stack Web Development",
          description:
            "A full-stack web app for six family members to set weekly goals, nominate each other for missed targets, and contribute to a shared penalty pot. Built with Next.js, Prisma, and PostgreSQL, featuring real-time updates, NextAuth authentication, and full multilingual support with RTL for Arabic. Deployed and actively used by the family on Vercel.",
          tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Supabase", "Tailwind CSS"],
          links: { live: null, github: null },
        },
        {
          title: "WifiMap",
          subtitle: "Collaboration with topsystem GmbH",
          description:
            "WLAN analysis web app built in a 6-person agile team. The app visualises signal coverage and network data to help businesses optimise their wireless infrastructure.",
          tags: ["React", "TypeScript", "Python"],
          links: {
            live: null,
            github: "https://github.com/daif-salaheddine",
          },
        },
      ],
    },
    {
      name: "AI & Automation",
      projects: [
        {
          title: "AI-Powered Energy Tariff Advisor",
          subtitle: "Collaboration with Intense AG",
          description:
            "AI-powered chatbot with an n8n automation pipeline and SAP/OAuth2 integration. Built to answer tariff-related queries in real time by pulling live data from backend systems.",
          tags: ["Google Gemini", "n8n", "Docker", "SAP", "Cloudflare"],
          links: {
            live: null,
            github: null,
          },
        },
      ],
    },
    {
      name: "Data & Machine Learning",
      projects: [
        {
          title: "Calorie Burn Prediction Model",
          subtitle: "FH Aachen, Applied Data Analytics",
          description:
            "End-to-end ML project predicting calorie expenditure from training and lifestyle data. Covered the full analytics workflow: exploratory analysis, feature engineering, model training with Scikit-Learn, and performance evaluation.",
          tags: ["Python", "Apache Spark", "Scikit-Learn", "Jupyter", "ML"],
          links: { live: null, github: null },
        },
        {
          title: "ETL Pipeline & Data Warehouse",
          subtitle: "FH Aachen, Business Intelligence",
          description:
            "Designed and implemented an ETL pipeline using KNIME to clean and transform raw business data, then loaded it into a Star Schema PostgreSQL data warehouse. Delivered BI dashboards for actionable decision support.",
          tags: ["KNIME", "PostgreSQL", "ETL", "Star Schema", "BI"],
          links: { live: null, github: null },
        },
        {
          title: "Big Data Processing & CRISP-DM",
          subtitle: "FH Aachen, Big Data",
          description:
            "Applied the CRISP-DM methodology to a large-scale dataset. Built preprocessing and data-mining pipelines using Python's data stack and Apache Spark, following structured phases from business understanding through deployment.",
          tags: ["Python", "Apache Spark", "Scikit-Learn", "Data Mining", "CRISP-DM"],
          links: { live: null, github: null },
        },
      ],
    },
  ],

  contact: {
    titleBefore: "Let's build something",
    titleAccent: "together.",
    text: "If you have a working student role, a freelance project, or just want to connect, my inbox is open.",
  },

  skills: [
    "React", "TypeScript", "Python", "Node.js", "PostgreSQL",
    "n8n", "Scikit-Learn", "Apache Spark", "KNIME", "SAP", "OAuth2", "Git",
  ],

  stats: [
    { value: 6, label: "Projects" },
    { value: 2, label: "Companies" },
    { value: 4, label: "Languages" },
  ],

  social: [
    { label: "GitHub",   url: "https://github.com/daif-salaheddine" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/salaheddine-daif-82366631a/" },
    { label: "Email",    url: "mailto:contact.salahdaif@gmail.com" },
  ],
};
