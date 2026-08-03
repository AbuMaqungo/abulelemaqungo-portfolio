export default function Projects() {
  const projects = [
    {
      title: "ShelfForce Retail Solutions",
      description: "Corporate marketing website for a registered field merchandising company with ambitions to expand across African markets. Features scroll-triggered animations, dynamic routing and SEO-first architecture.",
      technologies: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Vercel", "Cloudflare", "EmailJS"],
      link: "https://shelfforce.co.za",
      live: true,
    },
    {
      title: "SIAKA School Uniforms",
      description: "Full-stack e-commerce platform for a school uniform retailer. Features full CRUD product management, admin authentication with BCrypt, role-based access control, Cloudinary image management and Azure SQL database.",
      technologies: ["ASP.NET Core (.NET 8)", "Azure SQL", "Entity Framework Core", "Docker", "Render", "Cloudinary", "Cloudflare"],
      link: "https://siaka.co.za",
      live: true,
    },
    {
      title: "iQula Lakwa Ntu",
      description: "Full-stack enterprise software platform with a React/Vite frontend, FastAPI Python backend, PostgreSQL on Neon and an AdminPortal with full CRUD and Cloudinary image management. Deployed across Vercel and Render.",
      technologies: ["React/Vite", "FastAPI", "Python", "SQLAlchemy", "PostgreSQL", "Neon", "Vercel", "Render", "Cloudinary"],
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-indigo-500 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                {project.live && (
                  <span className="text-xs bg-indigo-600 text-white px-2 py-1 rounded-full">Live</span>
                )}
              </div>
              <p className="text-slate-300 text-sm mb-5 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-slate-700 text-indigo-300 px-3 py-1 rounded-full text-xs border border-slate-600">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
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