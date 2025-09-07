export default function Experience() {
  const experiences = [
    {
      company: "Department of Home Affairs",
      position: "Application Developer",
      duration: "January 2023 – Current",
      location: "Pretoria, South Africa",
      description: "Full-stack development using modern technologies in an agile environment.",
      achievements: [
        "Developed eRecruitment web application using ASP.NET Core MVC and Blazor",
        "Created applications handling biometric data (fingerprints, signatures, photos)",
        "Worked with React, Angular, Java, C#, and various databases",
        "Participated in agile Scrum methodology with daily standups and sprint planning",
        "Designed database tables, stored procedures, and optimized queries"
      ],
      technologies: ["React", "Angular", "Java", "C#", "ASP.NET Core", "Blazor", "SQL Server", "RESTful APIs"]
    },
    {
      company: "Department of Home Affairs", 
      position: "Application Support and Database Administrator",
      duration: "November 2022 – December 2022",
      location: "Pretoria, South Africa",
      description: "Application maintenance, support, and database administration.",
      achievements: [
        "Installed, updated, and patched applications across multiple branches",
        "Responded to and resolved application-related issues through helpdesk system",
        "Monitored application performance and availability",
        "Performed database troubleshooting and maintenance",
        "Implemented database replication and resolved stuck applications"
      ],
      technologies: ["SQL Server", "Windows Server", "Helpdesk Systems", "Database Replication"]
    },
    {
      company: "University of Fort Hare",
      position: "Application Developer and Support (Volunteer)",
      duration: "January 2020 – November 2022", 
      location: "Eastern Cape, South Africa",
      description: "Developed and maintained custom internal systems for university operations.",
      achievements: [
        "Built Student Registration, Exam Results, and Leave Application systems",
        "Developed Lecturer Portal and other internal management systems",
        "Created RESTful APIs for integration with third-party platforms",
        "Implemented user authentication and role-based authorization",
        "Built dynamic report generators with export functionality"
      ],
      technologies: ["Java", "Spring Boot", "React", "MySQL", "PostgreSQL", "RESTful APIs"]
    },
    {
      company: "SAFAIR, Jetworx, Executive Avionic Solutions, Aero Electrical",
      position: "Aircraft Avionician",
      duration: "January 2011 - December 2013",
      location: "Gauteng, South Africa",
      description: "Aircraft instrumentation, navigation systems, and electrical systems maintenance.",
      achievements: [
        "Maintained aircraft instruments and navigation systems",
        "Performed defect rectifications using wiring and schematic diagrams",
        "Worked on various aircraft including MD80, Boeing 727, B737 series",
        "Carried out A, B, C, and D-checks and pre-flight inspections",
        "Troubleshooting and defect resolution at maintenance and flight line levels"
      ],
      technologies: ["Aircraft Instruments", "Aircraft Systems & Navigation", "Avionics", "Electrical Systems", "Maintenance Documentation"]
    }
  ];

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-white mb-8">Work Experience</h1>
      <p className="text-slate-300 text-lg mb-12">
        My professional journey through various roles in software development and aviation technology.
      </p>

      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <div key={index} className="bg-slate-800 rounded-lg p-8 border border-slate-700 relative">
            {/* Timeline connector */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-8 top-full w-1 h-8 bg-blue-500 ml-4"></div>
            )}
            
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Timeline dot */}
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{experience.position}</h3>
                    <p className="text-blue-400 font-medium text-lg">{experience.company}</p>
                  </div>
                  <div className="text-slate-400 text-sm md:text-right mt-2 md:mt-0">
                    <p>{experience.duration}</p>
                    <p>{experience.location}</p>
                  </div>
                </div>

                <p className="text-slate-300 mb-4">{experience.description}</p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-slate-300 flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}