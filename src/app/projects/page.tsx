export default function Projects() {
  const projects = [
    {
      title: "eRecruitment System",
      description: "Full-stack eRecruitment web application for Department of Home Affairs using ASP.NET Core MVC and Blazor",
      technologies: ["ASP.NET Core", "Blazor", "C#", "SQL Server", "Bootstrap"],
      link: "https://erecruitment.dha.gov.za/"
    },
    {
      title: "Student Management System",
      description: "Custom internal system for University of Fort Hare handling student registration and exam results",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Biometric Data Application",
      description: "Application for receiving and storing biometric data including fingerprints, signatures, and photos",
      technologies: ["Java", "ReactJS", "SQL Server", "RESTful APIs"],
      link: "#"
    }
  ];

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-white mb-8">My Projects</h1>
      <p className="text-slate-300 text-lg mb-12">
        Here are some of the projects I've worked on throughout my career as an application developer.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
            <p className="text-slate-300 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}