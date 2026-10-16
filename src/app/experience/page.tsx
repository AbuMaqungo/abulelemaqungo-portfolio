'use client'

import { useState } from 'react'

const experiences = [
  {
    id: 1,
    company: 'Self-Employed (Freelancer)',
    role: 'Data Engineer & Full-Stack Developer',
    period: '01 April 2026 – Present',
    location: 'Pretoria, South Africa',
    category: 'freelance',
    description: [
      'End-to-end data engineering — schema design, ETL pipeline development, analytics and machine learning',
      'Full-stack application development across Python, React, Next.js, ASP.NET Core and FastAPI',
      'Managing end-to-end project delivery from requirements gathering through production deployment',
    ],
    technologies: [
      'Python', 'pandas', 'psycopg2', 'scikit-learn', 'PostgreSQL', 'Neon',
      'Power BI', 'DAX', 'Looker Studio', 'Google Colab',
      'Next.js 16', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion',
      'FastAPI', 'SQLAlchemy', 'ASP.NET Core', 'Azure SQL', 'Docker',
    ],
    highlights: [
      'Financial Intelligence Platform — multi-domain data engineering platform (banking, insurance, economics, aviation) with Python ETL pipelines, star schema PostgreSQL, Power BI dashboards and 3 ML models (85–86% accuracy)',
      'ShelfIQ — multi-tenant retail analytics SaaS with demand forecasting engine, inventory monitoring and subscription tiers for the SA SME market',
      'ShelfForce Retail Solutions — corporate website with Next.js 16, SSR, Framer Motion and full production infrastructure',
      'SIAKA School Uniforms — full-stack e-commerce platform with ASP.NET Core, Azure SQL and Docker deployment',
      'iQula Lakwa Ntu — enterprise platform with FastAPI, React/Vite and PostgreSQL on Neon',
    ],
    projects: [
      { name: 'Live Dashboard', url: 'https://datastudio.google.com/reporting/ea65b2bf-9083-4846-8b02-72edc56164d6' },
      { name: 'ShelfForce', url: 'https://shelfforce.co.za' },
      { name: 'SIAKA', url: 'https://siaka.co.za' },
      { name: 'iQula Lakwa Ntu', url: 'https://iqulalakwantu.co.za' },
    ],
    detailedAchievements: [
      'Designed a multi-domain PostgreSQL database with 4 domain schemas implementing star schema principles with fact and dimension tables',
      'Engineered Python ETL pipelines using psycopg2, Faker and pandas to generate and load realistic SA financial datasets: 500 customers, 986 accounts, 17,333 transactions, 199 loans, 300 insurance policies and 720 economic records',
      'Built 7 analytical SQL views using advanced SQL — JOINs, GROUP BY, DATE_TRUNC time-series windowing and derived financial metrics',
      'Developed multi-page Power BI Financial Intelligence Dashboards with DAX measures, slicers and interactive visuals',
      'Built loan default prediction (Random Forest & Logistic Regression, 85–86% accuracy), insurance claim risk scoring and SA economic indicator forecasting using Linear Regression',
      'Published live Looker Studio dashboard and 3 interactive Google Colab ML notebooks — all publicly accessible',
      'Architected ShelfIQ multi-tenant PostgreSQL schema with tenant isolation via tenant_id across all tables',
      'Built ShelfForce corporate website using Next.js 16 with SSR, per-page metadata, Open Graph/Twitter cards and auto-generated sitemap.xml',
      'Built SIAKA e-commerce with Azure SQL, BCrypt authentication, role-based access control and Docker deployment on Render',
      'Delivered iQula Lakwa Ntu enterprise platform with FastAPI backend, React/Vite frontend and PostgreSQL on Neon',
    ],
  },
  {
    id: 2,
    company: 'Department of Home Affairs',
    role: 'System Testing Specialist',
    period: '15 December 2025 – 31 March 2026',
    location: 'Pretoria, South Africa',
    category: 'dha',
    description: [
      'API Testing & Validation using Postman across all development streams',
      'Regression Testing for DHA Live Capture (Front Office & Back Office)',
      'Regression Testing for Electronic Travel Authorisation (ETA) & Reinstatement of Citizenship (ROC)',
      'Version Control & Collaboration using GitLab',
      'System and integration testing for applications',
    ],
    technologies: ['Postman', 'GitLab', 'JIRA', 'CI/CD', 'API Testing', 'Regression Testing', 'JWT', 'Docker', 'Python'],
    highlights: [
      'Reduced integration defects reaching UAT through comprehensive API testing',
      'Developed and maintained regression test scripts aligned to business-critical processes',
      'Automated testing workflows across development, staging, and production environments',
    ],
    detailedAchievements: [
      'Designed and executed comprehensive API test suites covering functional correctness, authentication flows, error handling, and edge-case scenarios',
      'Created reusable Postman collections with environment variables for consistent testing across environments',
      'Planned and executed structured regression testing for Live Capture system across front office and back office workflows',
      'Logged defects with detailed reproduction steps in JIRA and collaborated with development teams',
      'Managed feature branches, merge requests, and code reviews using GitLab',
      'Leveraged GitLab CI/CD pipelines to automate build, test, and deployment workflows',
    ],
    projects: [],
  },
  {
    id: 3,
    company: 'Department of Home Affairs',
    role: 'System Support & Database Administrator',
    period: '01 September 2023 – 12 December 2025',
    location: 'Pretoria, South Africa',
    category: 'dha',
    description: [
      'SQL Server database administration across central and 400+ branch locations nationwide',
      'Application support and sustenance for production environments across multiple business areas',
      'Developing T-SQL and Python automation scripts to streamline routine database maintenance',
      'Monitoring data pipelines and application flows across enterprise systems',
      'Technical support and training to end users',
    ],
    technologies: ['SQL Server', 'T-SQL', 'Python', 'Remote Desktop', 'Visual Studio 2022', 'Azure SQL', 'SSMS', 'GitLab'],
    highlights: [
      'Administered SQL Server databases across 400+ branch locations — monitoring performance, implementing replication and maintaining data integrity',
      'Executed complex diagnostic SQL queries to resolve stuck applications across passport and ID processing systems',
      'Developed T-SQL and Python automation scripts eliminating manual bottlenecks',
    ],
    detailedAchievements: [
      'Administered SQL Server databases across central and 400+ branch locations — monitoring performance, implementing replication and ensuring data consistency',
      'Executed complex diagnostic SQL queries to identify and resolve stuck applications and data integrity issues across passport and ID processing systems',
      'Implemented corrective stored procedures across distributed database architecture',
      'Developed T-SQL and Python automation scripts to streamline routine database maintenance tasks',
      'Monitored data pipelines and application flows, proactively identifying and resolving performance degradation',
      'Collaborated with Database Systems Engineers on backup procedures, security protocols and replication strategies',
      'Provided technical support and created documentation for non-technical stakeholders',
    ],
    projects: [],
  },
  {
    id: 4,
    company: 'Department of Home Affairs',
    role: 'IT Technical Support: Desktop & Network',
    period: '24 November 2022 – 31 August 2023',
    location: 'Pretoria, South Africa',
    category: 'dha',
    description: [
      'First and second line support using BCM Remedy IT Service',
      'Configuring switches, routers, hubs and network systems using PuTTY',
      'Monitoring network systems using SCOM and Manage Engine',
      'Creating new network systems using GNS3 and subnetting',
      'Joining new servers and computers to DHA domain',
    ],
    technologies: ['Cisco Unified CM', 'GNS3', 'PuTTY', 'SCOM', 'Manage Engine', 'Active Directory', 'GroupWise', 'Outlook'],
    highlights: [
      'Migrated DHA users from GroupWise to Outlook',
      'Configured switches, routers and network systems across department branches',
    ],
    detailedAchievements: [
      'Managed users via CISCO Unified CM Administration — allocation, updates, password resets and archiving',
      'Monitored all network systems using SCOM and Manage Engine ensuring proactive incident detection',
      'Supported roll-out and configuration of ICT infrastructure across branches',
      'Troubleshot switch speed and network performance issues using PuTTY',
      'Created new network systems using GNS3 and sliced new IP ranges into subnets',
    ],
    projects: [],
  },
  {
    id: 5,
    company: 'Aero Electrical',
    role: 'Aircraft Avionician',
    period: '14 October 2013 – 05 December 2013',
    location: 'Wonderboom National Airport, South Africa',
    category: 'aviation',
    description: [
      'Validated ULB/Black Box functionality per SARP requirements for accident data preservation compliance',
      'Fault-finding on aircraft wiring looms and avionics bus connections using AWM and CAA-approved procedures',
      'Tested and configured VHF/UHF radio navigation systems including VOR, DME, and ADF',
      'Performed Landing Gear and Anti-Skid System functional testing',
    ],
    technologies: ['RF Communications', 'VOR', 'DME', 'ADF', 'Aircraft Wiring Manuals', 'CAA Procedures', 'Signal Testing'],
    highlights: [
      'Developed practical knowledge of RF communications protocols and frequency management',
      'Validated sensor feedback loops — translatable to industrial control systems and embedded IoT device testing',
    ],
    detailedAchievements: [],
    projects: [],
  },
  {
    id: 6,
    company: 'Executive Avionic Solution',
    role: 'Aircraft Avionician',
    period: '04 February 2013 – 11 October 2013',
    location: 'Lanseria International Airport, South Africa',
    category: 'aviation',
    description: [
      'Tested and validated Underwater Locator Beacon (ULB) and Flight Data Recorder (Black Box)',
      'Validated ULB/Black Box functionality per SARP requirements for accident data preservation compliance',
      'Performed Landing Gear and Anti-Skid System functional testing',
      'Performed complete functional testing of cockpit instrument systems',
    ],
    technologies: ['ULB', 'Flight Data Recorder', 'HSI', 'AI', 'ELT', 'Gyro Units', 'Diagnostic Tools'],
    highlights: [
      'Critical data recording and telemetry systems analogous to enterprise data logging and IT audit trail systems',
      'Equivalent to IT systems baseline acceptance testing and hardware commissioning',
    ],
    detailedAchievements: [],
    projects: [],
  },
  {
    id: 7,
    company: 'SAfair, Jetworx',
    role: 'Aircraft Avionician',
    period: '24 October 2011 – 01 February 2013',
    location: 'OR Tambo International Airport, South Africa',
    category: 'aviation',
    description: [
      'Executed Pitot-Static system pressure tests using digital manometers and computerized test equipment',
      'Systematic fault diagnosis on aircraft electrical wiring networks using technical schematics',
      'Administered, tested, and verified Instrument Landing System (ILS) endpoints and data integrity',
      'Tested and configured VHF/UHF radio navigation systems including VOR, DME, and ADF',
      'Performed Landing Gear and Anti-Skid System functional testing',
    ],
    technologies: ['Pitot-Static Systems', 'Digital Manometers', 'ILS', 'VOR', 'DME', 'ADF', 'RF Communications', 'ICAO Doc 8168'],
    highlights: [
      'Structured troubleshooting methodologies consistent with ICT systems fault isolation',
      'Signal processing verification and localizer/glideslope system testing',
      'RF signal validation and communications systems commissioning',
    ],
    detailedAchievements: [],
    projects: [],
  },
  {
    id: 8,
    company: 'Denel Technical Academy',
    role: 'Aircraft Avionician — Trade Foundation Programme',
    period: '24 January 2011 – 14 October 2011',
    location: 'OR Tambo International Airport, South Africa',
    category: 'aviation',
    description: [
      'Studied Mechanics of Flight and Trade Theory in accordance with Manpower Training Act 1981',
      'Completed structured training in Basic Electronics and Basic Digital Techniques',
      'Trained in Syncro & Servos systems — electromechanical feedback control loops',
      'Applied Basic Electricity principles (Ohm\'s Law, circuit analysis, AC/DC theory)',
      'Completed Soldering & Desoldering training to professional trade standard',
    ],
    technologies: ['Basic Electronics', 'Digital Techniques', 'Syncro & Servos', 'Ohm\'s Law', 'Circuit Analysis', 'Soldering', 'PCB Assembly'],
    highlights: [
      'Certificate No. 10/11/007 issued by Denel Technical Academy',
      'Foundation for hardware repair, server component handling, and electronics-level IT maintenance',
      'Logic gates, digital circuits, binary arithmetic — foundational to embedded systems and hardware diagnostics',
    ],
    detailedAchievements: [],
    projects: [],
  },
]

const coreCompetencies = [
  'ETL Pipeline Design & Development',
  'PostgreSQL, SQL Server & Azure SQL Administration',
  'Python Data Engineering (pandas, psycopg2)',
  'Star Schema & Data Modelling',
  'Machine Learning (scikit-learn, Random Forest, Logistic Regression)',
  'Power BI Dashboards & DAX Measures',
  'Statistical Analysis, Forecasting & Predictive Modelling',
  'Data Quality, Integrity & Governance',
  'REST API Design (FastAPI, ASP.NET Core)',
  'Full-Stack Development (React, Next.js)',
  'Docker & CI/CD Pipelines',
  'Cloud Infrastructure (AWS, Azure, Vercel, Render)',
  'Version Control (GitHub, GitLab)',
  'API Testing & Validation (Postman)',
]

const technicalSkills = {
  dataEngineering: ['ETL Pipeline Development', 'Star Schema', 'Data Modelling', 'Data Warehousing', 'psycopg2', 'pandas', 'Faker', 'SQLAlchemy', 'T-SQL', 'Stored Procedures', 'Query Optimisation'],
  analyticsAndBI: ['Power BI Desktop', 'DAX Measures', 'Google Looker Studio', 'SQL Views & Aggregations', 'Statistical Analysis', 'matplotlib', 'seaborn'],
  dataScience: ['scikit-learn', 'Random Forest', 'Logistic Regression', 'Linear Regression', 'Forecasting & Predictive Modelling', 'Google Colab', 'Confusion Matrix', 'Feature Importance'],
  languages: ['Python', 'SQL', 'T-SQL', 'C#', 'JavaScript', 'TypeScript', 'Java', 'HTML5', 'CSS3'],
  frameworks: ['FastAPI', 'ASP.NET Core (.NET 8)', 'React', 'Next.js 16', 'Tailwind CSS v4', 'Framer Motion', 'SQLAlchemy', 'Entity Framework Core', 'Spring Boot'],
  databases: ['PostgreSQL (Neon)', 'Azure SQL Database', 'Microsoft SQL Server', 'MySQL'],
  devops: ['Docker', 'CI/CD (GitHub → Vercel / Render)', 'GitLab CI/CD', 'Cloudflare DNS', 'Vercel', 'Render', 'Azure App Service'],
  tools: ['PyCharm', 'VS Code', 'Visual Studio Enterprise 2022', 'IntelliJ Ultimate', 'DBeaver', 'Postman', 'Power BI Desktop', 'Google Colab', 'SSMS', 'Git', 'GitHub', 'GitLab', 'Jira'],
}

export default function ExperiencePage() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>('all')

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const filteredExperiences = filter === 'all'
    ? experiences
    : experiences.filter(exp => exp.category === filter)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'freelance': return 'bg-purple-500/10 text-purple-400 border-purple-500/20'
      case 'dha': return 'bg-blue-500/10 text-blue-400 border-blue-500/20'
      case 'aviation': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20'
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'freelance': return 'Freelance'
      case 'dha': return 'Department of Home Affairs'
      case 'aviation': return 'Aviation'
      default: return category
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 py-20">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h1>
          <p className="text-slate-300 text-lg max-w-4xl leading-relaxed">
            Data Engineer and Full-Stack Developer with a BSc Honours in Computer Science and 3+ years
            of hands-on experience designing, building and administering data systems in high-impact
            environments. Proven ability to build end-to-end ETL pipelines, administer SQL Server and
            PostgreSQL databases, develop machine learning models and deliver full-stack production
            platforms — from schema design through to live deployment. Former Database Administrator
            at the Department of Home Affairs, maintaining data integrity across systems serving
            400+ branches nationwide.
          </p>
        </div>

        {/* Core Competencies */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-white mb-4">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {coreCompetencies.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-800 px-4 py-2.5 rounded-lg border border-slate-700 hover:border-indigo-500/50 transition-colors"
              >
                <span className="text-slate-300 text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {[
            { key: 'all', label: 'All Experience', active: 'bg-indigo-600', hover: 'hover:border-indigo-500/50' },
            { key: 'freelance', label: 'Self-Employed (Freelancer)', active: 'bg-purple-600', hover: 'hover:border-purple-500/50' },
            { key: 'dha', label: 'Department of Home Affairs', active: 'bg-blue-600', hover: 'hover:border-blue-500/50' },
            { key: 'aviation', label: 'Aviation', active: 'bg-emerald-600', hover: 'hover:border-emerald-500/50' },
          ].map((btn) => (
            <button
              key={btn.key}
              onClick={() => setFilter(btn.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === btn.key
                  ? `${btn.active} text-white`
                  : `bg-slate-800 text-slate-300 hover:text-white border border-slate-700 ${btn.hover}`
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-slate-800 rounded-xl border border-slate-700 hover:border-indigo-500/30 transition-all duration-300 overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 cursor-pointer" onClick={() => toggleExpand(exp.id)}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h2 className="text-xl font-semibold text-white">{exp.role}</h2>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(exp.category)}`}>
                        {getCategoryLabel(exp.category)}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-400">
                      <span>{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span>{exp.period}</span>
                      <span className="text-slate-600">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <button
                    className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-700 rounded-lg"
                    onClick={(e) => { e.stopPropagation(); toggleExpand(exp.id) }}
                  >
                    <span className="text-sm">{expandedId === exp.id ? '−' : '+'}</span>
                  </button>
                </div>

                {/* Technologies preview */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.slice(0, 6).map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-slate-700 text-slate-300 rounded-md text-xs border border-slate-600 hover:border-indigo-500/30 transition-colors">
                      {tech}
                    </span>
                  ))}
                  {exp.technologies.length > 6 && (
                    <span className="px-2.5 py-1 text-slate-500 text-xs">+{exp.technologies.length - 6} more</span>
                  )}
                </div>
              </div>

              {/* Expanded Content */}
              {expandedId === exp.id && (
                <div className="px-6 pb-6 pt-4 border-t border-slate-700">
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-slate-400 mb-2">Key Responsibilities</h3>
                    <ul className="list-disc list-inside space-y-1.5 text-slate-300 text-sm">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>

                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="mb-4">
                      <h3 className="text-sm font-medium text-slate-400 mb-2">Key Highlights</h3>
                      <ul className="list-disc list-inside space-y-1.5 text-slate-300 text-sm">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="leading-relaxed">{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.detailedAchievements && exp.detailedAchievements.length > 0 && (
                    <div className="mb-4">
                      <h3 className="text-sm font-medium text-slate-400 mb-2">Detailed Achievements</h3>
                      <ul className="list-disc list-inside space-y-1.5 text-slate-300 text-sm">
                        {exp.detailedAchievements.map((achievement, idx) => (
                          <li key={idx} className="leading-relaxed">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.projects && exp.projects.length > 0 && (
                    <div className="mb-4">
                      <h3 className="text-sm font-medium text-slate-400 mb-2">Live Projects</h3>
                      <div className="flex flex-wrap gap-3">
                        {exp.projects.map((project) => (
                          <a
                            key={project.name}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 bg-slate-700 text-indigo-400 rounded-lg text-sm hover:bg-slate-600 transition-colors"
                          >
                            {project.name} →
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-4 border-t border-slate-700">
                    <h3 className="text-sm font-medium text-slate-400 mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-xs border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Technical Skills */}
        <div className="mt-16">
          <h2 className="text-lg font-semibold text-white mb-4">Technical Skills</h2>
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 space-y-4">
            {[
              { label: 'Data Engineering', skills: technicalSkills.dataEngineering },
              { label: 'Analytics & Business Intelligence', skills: technicalSkills.analyticsAndBI },
              { label: 'Data Science & Machine Learning', skills: technicalSkills.dataScience },
              { label: 'Programming Languages', skills: technicalSkills.languages },
              { label: 'Frameworks & Libraries', skills: technicalSkills.frameworks },
              { label: 'Databases', skills: technicalSkills.databases },
              { label: 'DevOps & Infrastructure', skills: technicalSkills.devops },
              { label: 'IDEs & Tools', skills: technicalSkills.tools },
            ].map((section) => (
              <div key={section.label}>
                <h3 className="text-sm font-medium text-slate-400 mb-2">{section.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {section.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs border border-slate-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Education</h2>
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="space-y-4">
              {[
                { degree: 'Bachelor of Science (Honours) in Computer Science', school: 'University of Fort Hare | 2021', note: 'Research: Real-time Twitter sentiment analysis using ML and NLP to classify reactions to national policy announcements' },
                { degree: 'Bachelor of Science in Computer Science, GIS & Remote Sensing', school: 'University of Fort Hare | 2020', note: '' },
                { degree: 'Grade 12 / Matric', school: 'Msobomvu Senior Secondary School | 2015', note: '' },
              ].map((edu) => (
                <div key={edu.degree} className="border-l-2 border-indigo-500/50 pl-4">
                  <h3 className="text-white font-medium">{edu.degree}</h3>
                  <p className="text-slate-400 text-sm">{edu.school}</p>
                  {edu.note && <p className="text-slate-500 text-xs mt-1">{edu.note}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}