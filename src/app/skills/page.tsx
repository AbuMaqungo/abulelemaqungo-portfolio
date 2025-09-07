export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "Angular", "HTML5", "CSS3", "JavaScript", "TypeScript", "Blazor"],
      color: "text-blue-400"
    },
    {
      title: "Backend Development", 
      skills: ["Node.js", "Java", "Spring Boot", "C#", ".NET", "ASP.NET Core", "Python", "RESTful APIs"],
      color: "text-green-400"
    },
    {
      title: "Databases",
      skills: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Database Design", "Query Optimization"],
      color: "text-purple-400"
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "Docker", "Azure", "AWS", "Jenkins", "Jira", "VS Code", "IntelliJ"],
      color: "text-orange-400"
    }
  ];

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-white mb-8">Skills & Technologies</h1>
      <p className="text-slate-300 text-lg mb-12">
        Here are the technologies and tools I work with to create innovative digital solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className={`text-xl font-semibold mb-4 ${category.color}`}>{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm">
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