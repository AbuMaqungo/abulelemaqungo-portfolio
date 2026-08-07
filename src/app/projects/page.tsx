'use client'

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      name: 'ShelfForce Retail Solutions',
      status: 'Live',
      year: '2026',
      role: 'Full-Stack Developer — Planning, Development, Infrastructure & Deployment',
      description: 'Corporate marketing website for a registered South African field merchandising company. Built with SSR, SEO-first architecture, scroll-triggered animations and a full production infrastructure stack.',
      technologies: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Vercel', 'Cloudflare', 'EmailJS', 'Zoho Mail'],
      url: 'https://shelfforce.co.za',
      buttonText: 'Visit ShelfForce →'
    },
    {
      id: 2,
      name: 'SIAKA School Uniforms',
      status: 'Live',
      year: '2026',
      role: 'Full-Stack Developer — Planning, Development, Infrastructure & Deployment',
      description: 'Full-stack e-commerce platform for a school uniform retailer. REST API backend with a relational data model, admin authentication, role-based access control and containerised deployment via Docker.',
      technologies: ['ASP.NET Core (.NET 8)', 'C#', 'Azure SQL', 'Entity Framework Core', 'Docker', 'Render', 'Cloudinary', 'Cloudflare'],
      url: 'https://siaka.co.za',
      buttonText: 'Visit SIAKA →'
    },
    {
      id: 3,
      name: 'iQula Lakwa Ntu',
      status: 'Live',
      year: '2025–2026',
      role: 'Full-Stack Developer — Architecture, Development, Infrastructure & Deployment',
      description: 'Full-stack enterprise software platform with a React/Vite frontend, FastAPI Python backend, PostgreSQL on Neon and an AdminPortal with full CRUD and Cloudinary image management.',
      technologies: ['React', 'Vite', 'FastAPI', 'Python', 'SQLAlchemy', 'PostgreSQL', 'Neon', 'Vercel', 'Render', 'Cloudinary'],
      url: 'https://iqulalakwantu.co.za',
      buttonText: 'Visit iQula →'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          My Projects
        </h1>
        <p className="text-slate-300 text-lg max-w-3xl mb-12 leading-relaxed">
          Three live production platforms planned, built and deployed end-to-end as a self-employed developer.
        </p>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-slate-800 rounded-xl border border-slate-700 hover:border-indigo-500/30 transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {project.name}
                    </h2>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-medium border border-emerald-500/20">
                        {project.status}
                      </span>
                      <span className="text-slate-500 text-sm">{project.year}</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 text-sm mb-2">
                  {project.role}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 bg-slate-700 text-slate-300 rounded-md text-xs border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors text-sm font-medium"
                >
                  {project.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}