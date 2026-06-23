const PORTFOLIO = {
  name: "Salaheddine Daif",
  email: "contact.salahdaif@gmail.com",
  location: "Aachen, Germany",

  status: "Available for working student roles",

  school: {
    name: "FH Aachen",
    url: "https://www.fh-aachen.de",
  },

  hero: {
    intro:
      "CS student at FH Aachen. I've built real products for topsystem GmbH and Intense AG, and shipped an app my own family uses every day. Currently looking for a working student role in Aachen or Cologne.",
    photo: "WhatsApp Image 2026-06-10 at 13.03.14.jpeg",
    photoCaption: "fueled by mint tea",
  },

  about: {
    titleBefore: "A bit about",
    titleAccent: "me.",
    paragraphs: [
      "I'm <strong>Salaheddine</strong>, a 3rd year CS student at <a href='https://www.fh-aachen.de' target='_blank' rel='noopener'>FH Aachen</a> focused on full-stack development and automation. Two internships, two shipped products.",
      "At <strong>topsystem GmbH</strong> I built a WLAN signal analysis tool in a team of six. At <strong>Intense AG</strong> I designed an AI chatbot integrated with SAP from scratch: n8n, Docker, JavaScript, the works.",
      "Looking for a working student role in Aachen or Cologne. I want to build actual things, not just shadow someone.",
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
            "A gamified accountability platform where groups create high-stakes goal challenges, vote to penalize underperformers, and compete to claim a shared reward pot, turning personal growth into a social game. My family of 6 has been using it every day since launch. Built with Next.js, Prisma, and PostgreSQL. Real-time updates, NextAuth, and full Arabic RTL support. Live on Vercel.",
          tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Supabase", "Tailwind CSS"],
          links: { live: null, github: null },
        },
        {
          title: "WifiMap",
          subtitle: "Collaboration with topsystem GmbH",
          description:
            "Built in a 6-person team during my internship at topsystem GmbH. We mapped WLAN signal coverage to help businesses find dead zones and fix their network layout.",
          tags: ["React", "TypeScript", "Python"],
          links: {
            live: null,
            github: null,
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
            "Built during my internship at Intense AG. An autonomous advisor that handles energy tariff queries end-to-end: n8n for orchestration, SAP APIs for live data, Docker for deployment, JavaScript gluing it all together.",
          tags: ["n8n", "Docker", "JavaScript", "SAP"],
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
            "Designed and implemented an ETL pipeline using KNIME to clean and transform raw business data, then loaded it into a Star Schema PostgreSQL data warehouse. The goal was giving business teams dashboards they could actually read and use.",
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
    titleBefore: "Get in",
    titleAccent: "touch.",
    text: "I'm based in Aachen and looking for a working student role where I actually get to build things. If that sounds like a fit, drop me a line.",
  },

  experience: [
    { period: "2024", role: "Software Developer Intern", company: "topsystem GmbH" },
    { period: "2025", role: "Software Developer Intern", company: "Intense AG" },
  ],

  social: [
    { label: "GitHub",   url: "https://github.com/daif-salaheddine" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/salaheddine-daif-82366631a/" },
    { label: "Email",    url: "mailto:contact.salahdaif@gmail.com" },
  ],
};
