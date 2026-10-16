export default function Projects() {
  const projects = [
    {
      title: "Financial Intelligence Platform",
      role: "Data Engineer & Data Scientist — End-to-End Pipeline, Analytics & Machine Learning",
      year: "2026",
      description:
        "Multi-domain data engineering and analytics platform spanning banking, insurance, economics and aviation. Features Python ETL pipelines, a star schema PostgreSQL database, Power BI dashboards, a live Looker Studio dashboard and three machine learning models — all publicly accessible online.",
      highlights: [
        "Designed a multi-domain PostgreSQL database with 4 domain schemas implementing star schema principles with fact and dimension tables",
        "Engineered Python ETL pipelines using psycopg2, Faker and pandas to generate and load realistic SA financial datasets: 500 customers, 986 accounts, 17,333 transactions, 199 loans, 300 insurance policies and 720 economic records",
        "Built 7 analytical SQL views using advanced SQL — JOINs, GROUP BY, DATE_TRUNC time-series windowing and derived financial metrics",
        "Developed multi-page Power BI Financial Intelligence Dashboards with DAX measures, slicers and interactive visuals across Banking, Insurance and Economics pages",
        "Built loan default prediction (Random Forest & Logistic Regression, 85–86% accuracy), insurance claim risk scoring and SA economic indicator forecasting using Linear Regression",
        "Published live Looker Studio dashboard and 3 interactive Google Colab ML notebooks — all publicly accessible",
      ],
      technologies: [
        "Python", "PostgreSQL", "pandas", "psycopg2", "Faker",
        "scikit-learn", "Power BI", "DAX", "Looker Studio",
        "matplotlib", "seaborn", "Google Colab", "Neon",
      ],
      link: "https://datastudio.google.com/reporting/ea65b2bf-9083-4846-8b02-72edc56164d6",
      live: true,
      featured: true,
      buttonText: "View Live Dashboard",
      extraLinks: [
        { label: "Banking ML Model", url: "https://colab.research.google.com/drive/1y6jyRisLXv-zdTxUsFLo6iX1OFYZT8if" },
        { label: "Insurance ML Model", url: "https://colab.research.google.com/drive/1go4Yta9gvaZ-TcLwL-kVEgvAudsxjxey" },
        { label: "Economics ML Model", url: "https://colab.research.google.com/drive/12NimVbDACZFxkdqm-4Dkz_2XadDqYmYg" },
      ],
    },
    {
      title: "ShelfIQ — Retail Intelligence SaaS",
      role: "Data Engineer & Full-Stack Developer — Architecture, Data Science & Product Development",
      year: "2026",
      description:
        "Multi-tenant retail analytics SaaS platform built for the South African SME market. Features sales dashboards, inventory monitoring, regional performance tracking and a 30-day demand forecasting engine powered by machine learning. Subscription tiers from spaza shops to enterprise clients.",
      highlights: [
        "Multi-tenant PostgreSQL architecture on Neon — each business's data fully isolated via tenant_id",
        "Python ETL pipeline seeding 1 year of realistic SA retail data across 3 mock businesses, 5 stores and 30 products",
        "FastAPI backend with pandas-powered analytics endpoints — sales trends, top products, regional breakdowns",
        "30-day demand forecasting engine using scikit-learn time-series modelling",
        "Next.js + TypeScript dashboard with Recharts visualisations — sales, inventory, forecast and PDF export modules",
        "Subscription model: Starter (R99/mo), Growth (R249/mo), Pro (R499/mo) — roadmap includes mobile and desktop apps",
      ],
      technologies: [
        "Python", "FastAPI", "PostgreSQL", "Neon", "pandas",
        "scikit-learn", "Next.js", "TypeScript", "Tailwind CSS",
        "Recharts", "Vercel", "Render",
      ],
      link: "",
      live: false,
      featured: true,
      comingSoon: true,
      buttonText: "Coming Soon",
      extraLinks: [],
    },
    {
      title: "ShelfForce Retail Solutions",
      role: "Full-Stack Developer — Planning, Development, Infrastructure & Deployment",
      year: "2026",
      description:
        "Corporate marketing website for a registered South African field merchandising company. Built with SSR, SEO-first architecture, scroll-triggered animations and a full production infrastructure stack.",
      highlights: [
        "Next.js 16 App Router with TypeScript, Tailwind CSS v4 and Framer Motion animations",
        "SSR with per-page metadata, Open Graph/Twitter cards, auto-generated sitemap.xml and robots.txt",
        "GitHub → Vercel CI/CD pipeline with sub-two-minute deployments and instant rollback",
        "Cloudflare DNS, Zoho Mail with MX, SPF and DKIM authentication",
        "Integrated EmailJS contact delivery, WhatsApp Business chat and downloadable QR code",
      ],
      technologies: [
        "Next.js 16", "TypeScript", "Tailwind CSS v4", "Framer Motion",
        "Vercel", "Cloudflare", "EmailJS", "Zoho Mail",
      ],
      link: "https://shelfforce.co.za",
      live: true,
      featured: false,
      comingSoon: false,
      buttonText: "Visit ShelfForce",
      extraLinks: [],
    },
    {
      title: "SIAKA School Uniforms",
      role: "Full-Stack Developer — Planning, Development, Infrastructure & Deployment",
      year: "2026",
      description:
        "Full-stack e-commerce platform for a school uniform retailer. REST API backend with a relational data model, admin authentication, role-based access control and containerised deployment via Docker.",
      highlights: [
        "ASP.NET Core (.NET 8) REST API with versioned controllers and Entity Framework Core",
        "Azure SQL Database schema covering Products, Orders and OrderItems with full CRUD",
        "BCrypt admin authentication, sub-admin management, role-based access control and activity logging",
        "Cloudinary integration for product image upload, storage and delivery",
        "Containerised deployment via Docker on Render; Cloudflare DNS and Zoho Mail",
      ],
      technologies: [
        "ASP.NET Core (.NET 8)", "C#", "Azure SQL", "Entity Framework Core",
        "Docker", "Render", "Cloudinary", "Cloudflare",
      ],
      link: "https://siaka.co.za",
      live: true,
      featured: false,
      comingSoon: false,
      buttonText: "Visit SIAKA",
      extraLinks: [],
    },
    {
      title: "iQula Lakwa Ntu",
      role: "Full-Stack Developer — Architecture, Development, Infrastructure & Deployment",
      year: "2025–2026",
      description:
        "Full-stack enterprise software platform with a React/Vite frontend, FastAPI Python backend, PostgreSQL on Neon and an AdminPortal with full CRUD and Cloudinary image management.",
      highlights: [
        "React/Vite frontend deployed on Vercel; FastAPI/Python backend deployed on Render",
        "SQLAlchemy ORM with PostgreSQL on Neon; database seeded via custom Python script",
        "BCrypt admin authentication with AdminPortal featuring full CRUD and Cloudinary image management",
        "EmailJS transactional contact forms with auto-reply and graceful error fallback",
        "Cloudflare DNS, Truehost domain, business email and full SEO meta architecture",
      ],
      technologies: [
        "React", "Vite", "FastAPI", "Python", "SQLAlchemy",
        "PostgreSQL", "Neon", "Vercel", "Render", "Cloudinary",
      ],
      link: "https://iqulalakwantu.co.za",
      live: true,
      featured: false,
      comingSoon: false,
      buttonText: "Visit iQula",
      extraLinks: [],
    },
  ];

  return (
    <div className="container py-12 bg-slate-900 min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-4">My Projects</h1>
      <p className="text-slate-300 text-lg mb-12">
        Five platforms spanning data engineering, machine learning, full-stack development and SaaS — planned, built and deployed end-to-end.
      </p>

      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-slate-800 rounded-xl p-8 border transition-colors ${
              project.featured
                ? "border-indigo-500 hover:border-indigo-400"
                : "border-slate-700 hover:border-indigo-500"
            }`}
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
              <div>
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  {project.featured && (
                    <span className="text-xs bg-indigo-600 text-white px-2 py-1 rounded-full">Featured</span>
                  )}
                  {project.live && (
                    <span className="text-xs bg-green-700 text-white px-2 py-1 rounded-full">Live</span>
                  )}
                  {project.comingSoon && (
                    <span className="text-xs bg-amber-600 text-white px-2 py-1 rounded-full">Coming Soon</span>
                  )}
                </div>
                <p className="text-indigo-400 text-sm font-medium">{project.role}</p>
              </div>
              <span className="text-slate-400 text-sm font-medium">{project.year}</span>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm leading-relaxed mb-5">{project.description}</p>

            {/* Highlights */}
            <ul className="space-y-2 mb-6">
              {project.highlights.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                  <span className="text-indigo-400 mt-1">▸</span>
                  {point}
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-slate-700 text-indigo-300 px-3 py-1 rounded-full text-xs border border-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 items-center">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center text-sm"
                >
                  {project.buttonText} →
                </a>
              )}
              {project.comingSoon && !project.link && (
                <span className="text-amber-400 font-medium text-sm">🚧 {project.buttonText}</span>
              )}
              {project.extraLinks && project.extraLinks.map((extra, i) => (
                <a
                  key={i}
                  href={extra.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-indigo-300 font-medium inline-flex items-center text-sm border border-slate-600 px-3 py-1 rounded-lg hover:border-indigo-500 transition-colors"
                >
                  {extra.label} →
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}