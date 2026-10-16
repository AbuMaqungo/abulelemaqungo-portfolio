import Link from 'next/link';

export default function About() {
  return (
    <div className="container py-12 bg-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Data Engineer & Full-Stack Developer with a background spanning aviation technology,
            enterprise software and data systems — bringing precision engineering discipline to every solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">

            {/* Journey */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600 opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-800 opacity-10 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-indigo-500 overflow-hidden shadow-lg">
                      <img
                        src="/images/AbuleleMaqungo.jpg"
                        alt="Abulele Maqungo"
                        className="w-full h-full object-cover object-top"
                        style={{ objectPosition: 'center top' }}
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-white mb-2">My Journey</h2>
                    <p className="text-indigo-400 font-medium">From aircraft avionics to data engineering</p>
                  </div>
                </div>

               <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    I am a Data Engineer with a BSc Honours in Computer Science, specialising in ETL
                    pipeline development, PostgreSQL and SQL Server administration, Python data engineering
                    and Machine Learning. I design and build end-to-end data systems — from schema design
                    and data generation through to analytics dashboards and predictive models.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Alongside my data engineering work, I am a Full-Stack Application Developer — delivering
                    live production platforms using FastAPI, React, Next.js, JavaScript ASP.NET Core and cloud
                    infrastructure across AWS, Azure and Vercel. I have built and deployed five live
                    platforms serving real businesses in South Africa.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    My foundation was built at the Department of Home Affairs, where as a Database
                    Administrator I maintained data integrity across SQL Server systems serving 400+
                    branches nationwide including central database, writing complex diagnostic SQL, automating workflows with
                    Python and managing GitLab CI/CD pipelines.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Before joining IT tech, I also hold qualification in QCTO-certified Aircraft Avionician. Successfully completed my Apprenticeship at OR Tambo,
                    Lanseria and Wonderboom airports, working on MD80, Leajet, Falcon, Boeing 727 and B737 series aircraft.
                    That background in safety-critical systems, precision fault diagnosis and technical
                    documentation is what drives the discipline and rigour I bring to every data and
                    software solution today.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-slate-700">
                {[
                  { value: "3+", label: "Years in Data & Software", color: "text-indigo-400" },
                  { value: "5", label: "Live Production Platforms", color: "text-indigo-400" },
                  { value: "30+", label: "Technologies", color: "text-indigo-400" },
                  { value: "400+", label: "Branches Supported", color: "text-indigo-400" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6">Engineering Philosophy</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: "⚡", title: "Performance", desc: "Building fast, efficient data pipelines and applications that scale gracefully", color: "bg-indigo-600" },
                  { icon: "🎯", title: "Precision", desc: "Engineering discipline carried over from safety-critical avionics work", color: "bg-indigo-600" },
                  { icon: "🔧", title: "Quality", desc: "Writing clean, maintainable and thoroughly tested code and pipelines", color: "bg-indigo-600" },
                  { icon: "🚀", title: "Delivery", desc: "End-to-end ownership from schema design through production deployment", color: "bg-indigo-600" },
                ].map((item) => (
                  <div key={item.title} className="text-center">
                    <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-white text-xl">{item.icon}</span>
                    </div>
                    <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">

            {/* Education */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-indigo-400">BSc (Hons) in Computer Science</h4>
                  <p className="text-slate-400 text-sm">University of Fort Hare · 2021</p>
                  <p className="text-slate-500 text-xs mt-1">Research: Real-time Twitter sentiment analysis using ML and NLP</p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-400">BSc Computer Science, GIS & Remote Sensing</h4>
                  <p className="text-slate-400 text-sm">University of Fort Hare · 2020</p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-400">Grade 12 / Matric</h4>
                  <p className="text-slate-400 text-sm">Msobomvu Senior Secondary School · 2015</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">Certifications</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-slate-300 text-sm font-medium">Data Engineering on AWS — Foundations</p>
                    <p className="text-slate-500 text-xs">Amazon Web Services · 2026</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-slate-300 text-sm font-medium">QCTO-Certified Aircraft Avionician</p>
                    <p className="text-slate-500 text-xs">Denel Technical Academy · Cert No. 10/11/007</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Competencies */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">Core Competencies</h3>
              <div className="space-y-2">
                {[
                  "ETL Pipeline Design & Development",
                  "PostgreSQL, SQL Server & Azure SQL",
                  "Python Data Engineering (pandas, psycopg2)",
                  "Machine Learning (scikit-learn)",
                  "Power BI & Looker Studio Dashboards",
                  "Star Schema & Data Modelling",
                  "REST API Design (FastAPI, ASP.NET Core)",
                  "Full-Stack Development (React, Next.js)",
                  "Docker & CI/CD Pipelines",
                  "Cloud Infrastructure (AWS, Azure, Vercel)",
                  "Version Control (GitHub, GitLab)",
                  "Data Quality & Governance",
                ].map((c) => (
                  <div key={c} className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-slate-300 text-sm">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-indigo-700 rounded-2xl p-6 text-center border border-indigo-600">
              <h3 className="text-xl font-semibold text-white mb-2">Let's Work Together</h3>
              <p className="text-indigo-200 text-sm mb-4">Open to Data Engineering and full-stack opportunities.</p>
              <Link
                href="/contact"
                className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-block"
              >
                Get In Touch
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}