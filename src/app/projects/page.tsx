export default function Projects() {
  const projects = [
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
        "Containerised deployment via Docker on Render (Frankfurt); Cloudflare DNS and Zoho Mail",
      ],
      technologies: [
        "ASP.NET Core (.NET 8)", "C#", "Azure SQL", "Entity Framework Core",
        "Docker", "Render", "Cloudinary", "Cloudflare",
      ],
      link: "https://siaka.co.za",
      live: true,
    },
    {
      title: "iQula Lakwa Ntu",
      role: "Full-Stack Developer — Architecture, Development, Infrastructure & Deployment",
      year: "2025–2026",
      description:
        "Full-stack enterprise software platform with a React/Vite frontend, FastAPI Python backend, PostgreSQL on Neon and an AdminPortal with full CRUD and Cloudinary image management.",
      highlights: [
        "React/Vite frontend deployed on Vercel; FastAPI/Python backend deployed on Render",
        "SQLAlchemy ORM with PostgreSQL on Neon (serverless); database seeded via custom Python script",
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
    },
  ];

  return (
    <div className="container py-12 bg-slate-900 min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-4">My Projects</h1>
      <p className="text-slate-300 text-lg mb-12">
        Three live production platforms planned, built and deployed end-to-end as a self-employed developer.
      </p>

      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-indigo-500 transition-colors"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  {project.live && (
                    <span className="text-xs bg-indigo-600 text-white px-2 py-1 rounded-full">Live</span>
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

            {/* Link */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center text-sm"
            >
              View Live Site →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}