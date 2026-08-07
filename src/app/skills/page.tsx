export default function Skills() {
  const skillGroups = [
    {
      category: "Languages",
      skills: ["Python", "C#", "JavaScript", "TypeScript", "Java", "HTML5", "CSS3", "SQL", "T-SQL"],
    },
    {
      category: "Frameworks & Libraries",
      skills: ["FastAPI", "ASP.NET Core (.NET 8)", "React", "Next.js 16 (App Router)", "Tailwind CSS v4", "Framer Motion", "SQLAlchemy", "Entity Framework Core"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL (Neon)", "Azure SQL Database", "Microsoft SQL Server", "MySQL", "SQLAlchemy"],
    },
    {
      category: "DevOps & Infrastructure",
      skills: ["Docker", "CI/CD (GitHub → Vercel / Render)", "GitLab CI/CD", "Cloudflare DNS", "Vercel", "Render", "Azure App Service"],
    },
    {
      category: "Cloud & Media",
      skills: ["Cloudinary", "Neon (Serverless PostgreSQL)", "Azure SQL (Serverless)"],
    },
    {
      category: "Testing & Tools",
      skills: ["Postman", "API Testing", "Regression Testing", "JIRA", "VS Code", "PyCharm", "Visual Studio 2022", "Git & GitHub", "npm"],
    },
  ];

  return (
    <div className="container py-12 bg-slate-900 min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h1>
      <p className="text-slate-300 text-lg mb-12">
        Technologies and tools I work with across full-stack development, database administration and cloud infrastructure.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillGroups.map((group, index) => (
          <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-lg font-semibold text-indigo-400 mb-4">{group.category}</h2>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-slate-700 text-slate-300 border border-slate-600 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}