import Link from 'next/link';

export default function About() {
  return (
    <div className="container py-12 bg-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Application Developer with a background spanning aviation technology and enterprise software,
            bringing precision engineering discipline to every digital solution.
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
                    <p className="text-indigo-400 font-medium">From aircraft avionics to enterprise software development</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    I'm an Application Developer with a unique background spanning aviation technology
                    and enterprise software. My career began in aircraft avionics, where I developed
                    a deep understanding of complex systems, precision fault diagnosis and compliance
                    with safety-critical procedures.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Transitioning into software development, I brought that same discipline to building
                    and supporting enterprise applications at the Department of Home Affairs — systems
                    serving over 400 branches nationwide — while simultaneously building three live
                    production platforms as a self-employed developer.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    I hold a BSc Honours in Computer Science from the University of Fort Hare and
                    specialize in full-stack development, SQL programming and cloud-native infrastructure.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-slate-700">
                {[
                  { value: "3+", label: "Years in Software Dev", color: "text-indigo-400" },
                  { value: "3", label: "Live Production Platforms", color: "text-indigo-400" },
                  { value: "20+", label: "Technologies", color: "text-indigo-400" },
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
              <h2 className="text-2xl font-bold text-white mb-6">Development Philosophy</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: "⚡", title: "Performance", desc: "Building fast, efficient applications that scale gracefully", color: "bg-indigo-600" },
                  { icon: "🎯", title: "Precision", desc: "Engineering discipline carried over from safety-critical avionics work", color: "bg-indigo-600" },
                  { icon: "🔧", title: "Quality", desc: "Writing clean, maintainable and thoroughly tested code", color: "bg-indigo-600" },
                  { icon: "🚀", title: "Delivery", desc: "End-to-end ownership from architecture through production deployment", color: "bg-indigo-600" },
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
                  <p className="text-slate-300 text-sm">Aircraft Avionician — Certificate No. 10/11/007, Denel Technical Academy</p>
                </div>
              </div>
            </div>

            {/* Core Competencies */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">Core Competencies</h3>
              <div className="space-y-2">
                {[
                  "Full-Stack Web Development (React, Next.js)",
                  "REST API Design & Development",
                  "API Testing & Validation (Postman)",
                  "Regression & System Testing",
                  "Docker & CI/CD Pipelines",
                  "SQL Server, PostgreSQL & Azure SQL",
                  "SQL Programming & Query Optimization",
                  "Cloud Infrastructure & DNS Configuration",
                  "Version Control (GitLab, GitHub)",
                  "Application Support & End-User Training",
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
              <p className="text-indigo-200 text-sm mb-4">Open to new opportunities in software development.</p>
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