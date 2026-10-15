export const personalData = {
  name: "Abulele Maqungo",
  profession: "Data Engineer & Full-Stack Developer",
  email: "abu.maqungo@gmail.com",
  phone: "+27656624263",
  location: "Pretoria, South Africa",
  about: "Data Engineer with a BSc Honours in Computer Science and 3+ years of hands-on experience designing, building and administering data systems in high-impact environments. Proven ability to build ETL pipelines, administer SQL Server and PostgreSQL databases, write complex diagnostic SQL and automate data workflows using Python and T-SQL. Currently delivering a multi-domain Financial Intelligence Platform spanning banking, insurance and economics. Former Database Administrator at the Department of Home Affairs, maintaining data integrity across systems serving 400+ branches nationwide.",

  skills: [
    // Data Engineering
    "ETL Pipeline Design & Development",
    "PostgreSQL", "Microsoft SQL Server", "Azure SQL Database",
    "Python", "pandas", "psycopg2", "SQLAlchemy",
    "T-SQL", "Stored Procedures", "Query Optimisation",
    "Star Schema", "Data Modelling", "Data Warehousing",
    "Data Quality & Governance",

    // Analytics & BI
    "Power BI", "DAX Measures", "Google Looker Studio",
    "SQL Views & Aggregations", "Statistical Analysis",

    // Data Science & ML
    "scikit-learn", "Random Forest", "Logistic Regression",
    "Linear Regression", "Forecasting & Predictive Modelling",
    "matplotlib", "seaborn", "Google Colab",

    // Full-Stack Development
    "JavaScript", "TypeScript", "React", "Next.js",
    "FastAPI", "ASP.NET Core", "C#", "Java", "Spring Boot",
    "HTML5", "CSS3", "Tailwind CSS", "RESTful APIs",

    // DevOps & Infrastructure
    "Docker", "CI/CD", "GitHub", "GitLab",
    "Vercel", "Render", "Azure", "AWS",
    "Cloudflare DNS", "Neon PostgreSQL"
  ],

  tools: [
    "PyCharm", "VS Code", "Visual Studio Enterprise 2022",
    "IntelliJ Ultimate", "DBeaver", "Postman",
    "Power BI Desktop", "Google Colab", "Looker Studio",
    "SQL Server Management Studio", "GitHub", "GitLab",
    "Docker", "Jira"
  ],

  education: [
    {
      degree: "BSc (Hons) in Computer Science",
      institution: "University of Fort Hare",
      year: "2021",
      note: "Research: Real-time Twitter sentiment analysis using ML and NLP to classify reactions to national policy announcements"
    },
    {
      degree: "Bachelor of Science in Computer Science, GIS & Remote Sensing",
      institution: "University of Fort Hare",
      year: "2020"
    },
    {
      degree: "Grade 12 / Matric",
      institution: "Msobomvu Senior Secondary School",
      year: "2015"
    }
  ],

  certifications: [
    {
      name: "Data Engineering on AWS – Foundations",
      issuer: "Amazon Web Services (AWS)",
      year: "2026"
    },
    {
      name: "QCTO-Certified Aircraft Avionician",
      issuer: "Denel Technical Academy",
      certificateNo: "10/11/007",
      note: "Trade tested at OR Tambo International, Lanseria & Wonderboom Airports"
    }
  ],

  experience: [
    {
      position: "Data Engineer & Full-Stack Developer",
      company: "Self-Employed (Freelancer)",
      duration: "April 2026 – Present",
      location: "Pretoria, South Africa",
      description: "Delivering end-to-end data engineering, analytics and full-stack development across multiple live production platforms.",
      achievements: [
        "Designed and built a multi-domain Financial Intelligence Platform (banking, insurance, economics, aviation) with star schema PostgreSQL database, Python ETL pipelines, Power BI dashboards and ML models",
        "Built loan default prediction models (Random Forest & Logistic Regression, 85–86% accuracy), insurance claim risk scoring and SA economic indicator forecasting",
        "Published live Financial Intelligence Dashboard on Google Looker Studio connected to cloud PostgreSQL",
        "Architected and deployed ShelfForce Retail Solutions website (Next.js 16, TypeScript, Tailwind CSS, Vercel)",
        "Built SIAKA School Uniforms e-commerce platform (ASP.NET Core, Azure SQL, Docker, Render)",
        "Delivered iQula Lakwa Ntu enterprise platform (FastAPI, React/Vite, PostgreSQL on Neon)"
      ]
    },
    {
      position: "System Support & Database Administrator",
      company: "Department of Home Affairs",
      duration: "September 2023 – March 2026",
      location: "Pretoria, South Africa",
      description: "Administered SQL Server databases across central and 400+ branch locations nationwide.",
      achievements: [
        "Administered SQL Server databases across 400+ branch locations — monitoring performance, implementing replication and maintaining data integrity",
        "Executed complex diagnostic SQL queries to resolve stuck applications across passport and ID processing systems",
        "Developed T-SQL and Python automation scripts to streamline database maintenance and eliminate manual bottlenecks",
        "Designed and executed API test suites using Postman covering functional correctness, authentication flows and payload validation",
        "Managed GitLab CI/CD pipelines to automate build, test and deployment workflows"
      ]
    },
    {
      position: "IT Technical Support — Desktop & Network",
      company: "Department of Home Affairs",
      duration: "November 2022 – August 2023",
      location: "Pretoria, South Africa",
      description: "First and second line IT support across network infrastructure and enterprise systems.",
      achievements: [
        "Monitored all network systems using SCOM and Manage Engine across branches",
        "Configured switches, routers, hubs and PCs; troubleshot switches using PuTTY",
        "Managed users via CISCO Unified CM Administration — allocation, updates, password resets",
        "Migrated DHA users from GroupWise to Outlook"
      ]
    },
    {
      position: "Aircraft Avionician",
      company: "SAFAIR, Jetworx, Executive Avionic Solutions, Aero Electrical",
      duration: "January 2011 – December 2013",
      location: "Gauteng, South Africa",
      description: "Aircraft instrumentation, navigation systems and electrical systems maintenance.",
      achievements: [
        "Maintained aircraft instruments and navigation systems on MD80, Boeing 727 and B737 series",
        "Performed A, B, C and D-checks and pre-flight inspections",
        "Defect rectification using wiring and schematic diagrams at maintenance and flight line levels"
      ]
    }
  ],

  projects: [
    {
      title: "Financial Intelligence Platform",
      description: "Multi-domain data engineering and analytics platform spanning banking, insurance, economics and aviation. Features ETL pipelines, star schema PostgreSQL database, Power BI dashboards, Looker Studio live dashboard and machine learning models for loan default prediction, insurance risk scoring and economic forecasting.",
      technologies: ["Python", "PostgreSQL", "pandas", "scikit-learn", "Power BI", "Looker Studio", "psycopg2", "Faker", "matplotlib", "seaborn", "Google Colab"],
      liveUrl: "https://datastudio.google.com/reporting/ea65b2bf-9083-4846-8b02-72edc56164d6",
      colabUrls: {
        banking: "https://colab.research.google.com/drive/1y6jyRisLXv-zdTxUsFLo6iX1OFYZT8if",
        insurance: "https://colab.research.google.com/drive/1go4Yta9gvaZ-TcLwL-kVEgvAudsxjxey",
        economics: "https://colab.research.google.com/drive/12NimVbDACZFxkdqm-4Dkz_2XadDqYmYg"
      },
      category: "Data Engineering & Science",
      featured: true
    },
    {
      title: "ShelfIQ — Retail Intelligence SaaS",
      description: "Multi-tenant retail analytics SaaS platform with sales dashboards, inventory monitoring, regional performance tracking and 30-day demand forecasting powered by machine learning. Built for the South African SME market with subscription tiers from spaza shops to enterprise clients.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "pandas", "scikit-learn", "Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Neon"],
      liveUrl: "",
      comingSoon: true,
      category: "Data Engineering & Science",
      featured: true
    },
    {
      title: "ShelfForce Retail Solutions",
      description: "Full production web platform for ShelfForce Retail Solutions, a South African retail merchandising company. Built with Next.js 16, TypeScript, Tailwind CSS v4 and Framer Motion with SSR, SEO architecture, Open Graph metadata and Zoho Mail integration.",
      technologies: ["Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel", "Cloudflare", "Zoho Mail"],
      liveUrl: "https://shelfforce.co.za",
      category: "Full-Stack Development",
      featured: true
    },
    {
      title: "SIAKA School Uniforms",
      description: "Full-stack e-commerce platform for SIAKA School Uniforms. Features BCrypt authentication, role-based access control, Entity Framework Core ORM and a relational data model covering products, orders and order items. Deployed via Docker on Render with Azure SQL Database.",
      technologies: ["ASP.NET Core", ".NET 8", "Azure SQL", "Docker", "Render", "Cloudflare", "C#", "Entity Framework Core"],
      liveUrl: "https://siaka.co.za",
      category: "Full-Stack Development",
      featured: false
    },
    {
      title: "iQula Lakwa Ntu",
      description: "Enterprise full-stack platform with React/Vite frontend, FastAPI Python backend, SQLAlchemy ORM and PostgreSQL on Neon. Features an admin portal with CRUD operations, investor portal, Cloudinary media integration and EmailJS contact form. Deployed across Vercel and Render.",
      technologies: ["FastAPI", "Python", "React", "Vite", "PostgreSQL", "Neon", "SQLAlchemy", "Cloudinary", "EmailJS", "Vercel", "Render"],
      liveUrl: "https://iqulalakwantu.co.za",
      category: "Full-Stack Development",
      featured: false
    }
  ],

  socialLinks: {
    linkedin: "https://linkedin.com/in/abulele-maqungo-53938b241",
    github: "https://github.com/AbuMaqungo",
    twitter: "https://x.com/AbuMaqungo"
  },

  cvPath: "/docs/abulele-maqungo-cv.pdf"
};