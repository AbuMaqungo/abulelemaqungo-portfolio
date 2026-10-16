export default function Skills() {
  const skillGroups = [
    {
      category: "Data Engineering",
      skills: [
        "ETL Pipeline Development", "Star Schema", "Data Modelling",
        "Data Warehousing", "psycopg2", "pandas", "Faker",
        "SQLAlchemy", "T-SQL", "Stored Procedures", "Query Optimisation",
      ],
    },
        {
      category: "Data Analytics & Visualisation",
      skills: [
        "SQL Views & Aggregations", "Exploratory Data Analysis (EDA)",
        "Statistical Analysis", "Data Validation & Verification",
        "Time-Series Analysis", "DATE_TRUNC Windowing",
        "Derived Financial Metrics", "Power BI Desktop",
        "DAX Measures", "Google Looker Studio",
        "matplotlib", "seaborn", "Recharts",
      ],
    },
    {
      category: "Data Science & Machine Learning",
      skills: [
        "scikit-learn", "Random Forest", "Logistic Regression",
        "Linear Regression", "Forecasting & Predictive Modelling",
        "Google Colab", "Confusion Matrix", "Feature Importance",
      ],
    },
    {
      category: "Programming Languages",
      skills: [
        "Python", "SQL", "T-SQL", "C#", "JavaScript",
        "TypeScript", "Java", "HTML5", "CSS3",
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        "FastAPI", "ASP.NET Core (.NET 8)", "React", "Next.js 16",
        "Tailwind CSS v4", "Framer Motion", "SQLAlchemy", "Entity Framework Core", "Spring Boot",
      ],
    },
    {
      category: "Databases",
      skills: [
        "PostgreSQL (Neon)", "Azure SQL Database", "Microsoft SQL Server", "MySQL",
      ],
    },
    {
      category: "DevOps & Infrastructure",
      skills: [
        "Docker", "CI/CD (GitHub → Vercel / Render)", "GitLab CI/CD",
        "Cloudflare DNS", "Vercel", "Render", "Azure App Service",
      ],
    },
    {
      category: "IDEs & Tools",
      skills: [
        "PyCharm", "VS Code", "Visual Studio Enterprise 2022", "IntelliJ Ultimate",
        "DBeaver", "Postman", "Power BI Desktop", "Google Colab",
        "SSMS", "Git", "GitHub", "GitLab", "Jira",
      ],
    },
  ];

  return (
    <div className="container py-12 bg-slate-900 min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h1>
      <p className="text-slate-300 text-lg mb-12">
        Technologies and tools I work with across data engineering, machine learning, full-stack development and cloud infrastructure.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillGroups.map((group, index) => (
          <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-indigo-500/50 transition-colors">
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