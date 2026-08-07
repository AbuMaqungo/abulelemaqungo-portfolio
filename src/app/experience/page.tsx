'use client'

import { useState } from 'react'

// Experience data with updated categories
const experiences = [
  {
    id: 1,
    company: 'Self-Employed',
    role: 'Application Developer',
    period: '01 April 2026 – Current',
    location: 'Cape Town, South Africa',
    category: 'freelance',
    description: [
      'Application Support & End-User Training',
      'Building full-stack web applications for clients across multiple industries',
      'Managing end-to-end project delivery from requirements gathering to deployment'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'PostgreSQL', 'Docker', 'ASP.NET Core', 'FastAPI', 'Python', 'C#'],
    highlights: [
      'ShelfForce Retail Solutions — Built responsive corporate website with Next.js 16, SSR, and Framer Motion animations',
      'SIAKA School Uniforms — Developed full-stack e-commerce platform with ASP.NET Core API and Azure SQL',
      'iQula Lakwa Ntu — Built enterprise platform using FastAPI, React/Vite, and PostgreSQL'
    ],
    projects: [
      { name: 'ShelfForce', url: 'https://shelfforce.co.za' },
      { name: 'SIAKA', url: 'https://siaka.co.za' },
      { name: 'iQula Lakwa Ntu', url: 'https://iqulalakwantu.co.za' }
    ],
    detailedAchievements: [
      'Built ShelfForce corporate website using Next.js 16 with SSR, per-page metadata, Open Graph/Twitter cards, auto-generated sitemap.xml and robots.txt',
      'Configured full production infrastructure: Truehost (domain), Cloudflare (DNS), Vercel (hosting/HTTPS) and Zoho Mail with MX, SPF and DKIM authentication',
      'Established GitHub → Vercel CI/CD pipeline with sub-two-minute deployments and instant rollback',
      'Integrated EmailJS contact delivery, WhatsApp Business chat and downloadable QR code feature',
      'Architected SIAKA e-commerce with Azure SQL Database covering Products, Orders and OrderItems',
      'Implemented admin authentication with BCrypt password hashing, role-based access control and activity logging',
      'Integrated Cloudinary for product image upload, storage and delivery'
    ]
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
      'System and integration testing for applications'
    ],
    technologies: ['Postman', 'GitLab', 'JIRA', 'CI/CD', 'API Testing', 'Regression Testing', 'JWT', 'Docker', 'Python'],
    highlights: [
      'Reduced integration defects reaching UAT through comprehensive API testing',
      'Developed and maintained regression test scripts aligned to business-critical processes',
      'Automated testing workflows across development, staging, and production environments'
    ],
    detailedAchievements: [
      'Designed and executed comprehensive API test suites covering functional correctness, authentication flows, error handling, and edge-case scenarios',
      'Created reusable Postman collections with environment variables for consistent testing across environments',
      'Planned and executed structured regression testing for Live Capture system across front office and back office workflows',
      'Logged defects with detailed reproduction steps in JIRA and collaborated with development teams',
      'Managed feature branches, merge requests, and code reviews using GitLab',
      'Leveraged GitLab CI/CD pipelines to automate build, test, and deployment workflows'
    ]
  },
  {
    id: 3,
    company: 'Department of Home Affairs',
    role: 'System Support & Database Administrator',
    period: '01 September 2023 – 12 December 2025',
    location: 'Pretoria, South Africa',
    category: 'dha',
    description: [
      'Installing new applications, updating and patching existing applications',
      'Application support and sustenance for production environments across multiple business areas',
      'Supporting design and maintenance of enterprise applications serving over 400 branches nationwide',
      'Technical support and training to end users',
      'SQL Server database administration across central and branch locations',
      'Developing automation scripts using T-SQL and Python'
    ],
    technologies: ['SQL Server', 'T-SQL', 'Python', 'Remote Desktop', 'Visual Studio 2022', 'Service Manager', 'Azure SQL', 'Microsoft SQL Server Studio'],
    highlights: [
      'Supported passport and ID processing systems for 400+ branches nationwide',
      'Implemented replication and ensured data consistency across distributed database architecture',
      'Created automation scripts reducing manual maintenance time significantly'
    ],
    detailedAchievements: [
      'Troubleshot and debugged complex system issues affecting passport and ID processing systems',
      'Executed diagnostic SQL queries to resolve stuck applications and data integrity issues',
      'Implemented corrective stored procedures across distributed database architecture',
      'Collaborated with Database Systems Engineers and IT infrastructure teams on backup procedures and security protocols',
      'Provided technical support and created documentation for non-technical stakeholders'
    ]
  },
  {
    id: 4,
    company: 'Department of Home Affairs',
    role: 'IT Technical Support: Desktop & Network',
    period: '24 November 2022 – 31 August 2023',
    location: 'Pretoria, South Africa',
    category: 'dha',
    description: [
      'Video conference configuration and troubleshooting using CISCO Unified CM Administration',
      'First and second line support using BCM Remedy IT Service',
      'Creating new network systems using GNS3 and subnetting',
      'Joining new servers and computers to DHA domain',
      'Configuring switches, routers, and network systems using PuTTY',
      'Monitoring network systems using SCOM and Manage Engine'
    ],
    technologies: ['Cisco Unified CM', 'GNS3', 'PuTTY', 'SCOM', 'Manage Engine', 'Active Directory', 'GroupWise', 'Outlook'],
    highlights: [
      'Migrated 500+ users from GroupWise to Outlook',
      'Configured switches, routers, and network systems across department branches'
    ],
    detailedAchievements: [
      'Managed users: allocation of new users, updating existing users, resetting passwords and archiving users',
      'Monitored all network systems ensuring proactive detection of incidents',
      'Supported roll-out and configuration of ICT infrastructure',
      'Troubleshot switch speed and network performance issues using PuTTY'
    ]
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
      'Fault-finding on aircraft wiring looms and avionics bus connections utilizing AWM and CAA-approved procedures',
      'Tested and configured VHF/UHF radio navigation systems including VOR, DME, and ADF',
      'Performed Landing Gear and Anti-Skid System functional testing'
    ],
    technologies: ['RF Communications', 'VOR', 'DME', 'ADF', 'Aircraft Wiring Manuals', 'CAA Procedures', 'Signal Testing'],
    highlights: [
      'Developed practical knowledge of RF communications protocols and frequency management',
      'Validated sensor feedback loops — translatable to industrial control systems and embedded IoT device testing'
    ]
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
      'Performed complete functional testing of cockpit instrument systems'
    ],
    technologies: ['ULB', 'Flight Data Recorder', 'HSI', 'AI', 'ELT', 'Gyro Units', 'Diagnostic Tools'],
    highlights: [
      'Critical data recording and telemetry systems analogous to enterprise data logging and IT audit trail systems',
      'Equivalent to IT systems baseline acceptance testing and hardware commissioning'
    ]
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
      'Conducted ILS signal integrity tests and cockpit instrumentation checks'
    ],
    technologies: ['Pitot-Static Systems', 'Digital Manometers', 'ILS', 'VOR', 'DME', 'ADF', 'RF Communications', 'ICAO Doc 8168'],
    highlights: [
      'Structured troubleshooting methodologies consistent with ICT systems fault isolation',
      'Signal processing verification and localizer/glideslope system testing — relatable to network infrastructure testing',
      'RF signal validation and communications systems commissioning'
    ]
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
      'Completed Soldering & Desoldering training to professional trade standard'
    ],
    technologies: ['Basic Electronics', 'Digital Techniques', 'Syncro & Servos', 'Ohm\'s Law', 'Circuit Analysis', 'Soldering', 'PCB Assembly'],
    highlights: [
      'Certificate No. 10/11/007 issued by Denel Technical Academy',
      'Foundation for hardware repair, server component handling, and electronics-level IT maintenance',
      'Logic gates, digital circuits, binary arithmetic — foundational to embedded systems and hardware diagnostics'
    ]
  }
]

// Core Competencies
const coreCompetencies = [
  'Full-Stack Web Development (React, Next.js)',
  'REST API Design & Development',
  'API Testing & Validation (Postman)',
  'Regression & System Testing',
  'SQL Server, PostgreSQL & Azure SQL Administration',
  'SQL Programming & Query Optimization',
  'Cloud Infrastructure & DNS Configuration',
  'Version Control (GitLab, GitHub)',
  'Docker & CI/CD Pipelines'
]

// Technical Skills
const technicalSkills = {
  languages: ['Python', 'C#', 'JavaScript', 'Java', 'TypeScript', 'HTML5', 'CSS3', 'SQL'],
  frameworks: ['FastAPI', 'ASP.NET Core (.NET 8)', 'React', 'Next.js 16 (App Router)', 'Tailwind CSS v4', 'Framer Motion', 'SQLAlchemy', 'Entity Framework Core'],
  databases: ['PostgreSQL (Neon)', 'Azure SQL Database', 'Microsoft SQL Server'],
  devops: ['Docker', 'CI/CD (GitHub → Vercel / Render)', 'Cloudflare DNS', 'Vercel', 'Render', 'Azure App Service'],
  cloud: ['Cloudinary', 'Neon (serverless PostgreSQL)', 'Azure SQL (serverless)'],
  tools: ['VS Code', 'PyCharm', 'Visual Studio 2022', 'Git', 'GitHub', 'npm']
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
    switch(category) {
      case 'freelance': return 'bg-purple-500/10 text-purple-400 border-purple-500/20'
      case 'dha': return 'bg-blue-500/10 text-blue-400 border-blue-500/20'
      case 'aviation': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20'
    }
  }

  const getCategoryLabel = (category: string) => {
    switch(category) {
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
            Results-driven Application Developer with hands-on experience delivering enterprise-grade 
            software solutions within high-impact environments. Demonstrates deep technical proficiency 
            across the full software development life cycle — from requirements elicitation and systems 
            analysis through architecture design, development, testing, deployment, and production support. 
            Specializes in SQL programming and database performance optimization across Microsoft SQL Server 2019, 
            PostgreSQL, and MySQL, with a proven track record of designing scalable relational schemas, eliminating 
            query bottlenecks, and maintaining data integrity in distributed environments. Complemented by hands-on 
            experience in API testing (Postman), regression testing, and CI/CD deployment pipelines. BSc Honours 
            in Computer Science with a strong foundation in data modelling and systems analysis.
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
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === 'all' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700 hover:border-indigo-500/50'
            }`}
          >
            All Experience
          </button>
          <button
            onClick={() => setFilter('freelance')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === 'freelance' 
                ? 'bg-purple-600 text-white' 
                : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700 hover:border-purple-500/50'
            }`}
          >
            Self-Employed (Freelancer)
          </button>
          <button
            onClick={() => setFilter('dha')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === 'dha' 
                ? 'bg-blue-600 text-white' 
                : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700 hover:border-blue-500/50'
            }`}
          >
            Department of Home Affairs
          </button>
          <button
            onClick={() => setFilter('aviation')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === 'aviation' 
                ? 'bg-emerald-600 text-white' 
                : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700 hover:border-emerald-500/50'
            }`}
          >
            Aviation
          </button>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {filteredExperiences.map((exp) => (
            <div 
              key={exp.id}
              className="bg-slate-800 rounded-xl border border-slate-700 hover:border-indigo-500/30 transition-all duration-300 overflow-hidden"
            >
              {/* Header - Always visible */}
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleExpand(exp.id)}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h2 className="text-xl font-semibold text-white">
                        {exp.role}
                      </h2>
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
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleExpand(exp.id)
                    }}
                  >
                    {expandedId === exp.id ? (
                      <span className="text-sm">−</span>
                    ) : (
                      <span className="text-sm">+</span>
                    )}
                  </button>
                </div>

                {/* Technologies - Always visible */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.slice(0, 6).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 bg-slate-700 text-slate-300 rounded-md text-xs border border-slate-600 hover:border-indigo-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {exp.technologies.length > 6 && (
                    <span className="px-2.5 py-1 text-slate-500 text-xs">
                      +{exp.technologies.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              {/* Expanded Content */}
              {expandedId === exp.id && (
                <div className="px-6 pb-6 pt-4 border-t border-slate-700">
                  {/* Description */}
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-slate-400 mb-2">
                      Key Responsibilities
                    </h3>
                    <ul className="list-disc list-inside space-y-1.5 text-slate-300 text-sm">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights / Achievements */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="mb-4">
                      <h3 className="text-sm font-medium text-slate-400 mb-2">
                        Key Highlights
                      </h3>
                      <ul className="list-disc list-inside space-y-1.5 text-slate-300 text-sm">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="leading-relaxed">{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Detailed Achievements */}
                  {exp.detailedAchievements && exp.detailedAchievements.length > 0 && (
                    <div className="mb-4">
                      <h3 className="text-sm font-medium text-slate-400 mb-2">
                        Detailed Achievements
                      </h3>
                      <ul className="list-disc list-inside space-y-1.5 text-slate-300 text-sm">
                        {exp.detailedAchievements.map((achievement, idx) => (
                          <li key={idx} className="leading-relaxed">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Projects (for self-employed) */}
                  {exp.projects && (
                    <div className="mb-4">
                      <h3 className="text-sm font-medium text-slate-400 mb-2">Projects</h3>
                      <div className="flex flex-wrap gap-3">
                        {exp.projects.map((project) => (
                          <a
                            key={project.name}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 bg-slate-700 text-indigo-400 rounded-lg text-sm hover:bg-slate-600 transition-colors"
                          >
                            {project.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* All Technologies */}
                  <div className="pt-4 border-t border-slate-700">
                    <h3 className="text-sm font-medium text-slate-400 mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-xs border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors"
                        >
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

        {/* Technical Skills Section */}
        <div className="mt-16">
          <h2 className="text-lg font-semibold text-white mb-4">Technical Skills</h2>
          
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 space-y-4">
            <div>
              <h3 className="text-sm font-medium text-slate-400 mb-2">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.languages.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs border border-slate-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-slate-400 mb-2">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.frameworks.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs border border-slate-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-slate-400 mb-2">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.databases.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs border border-slate-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-slate-400 mb-2">DevOps & Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.devops.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs border border-slate-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-slate-400 mb-2">Cloud & Media</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.cloud.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs border border-slate-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-slate-400 mb-2">IDEs & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.tools.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs border border-slate-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Education</h2>
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="space-y-4">
              <div className="border-l-2 border-indigo-500/50 pl-4">
                <h3 className="text-white font-medium">
                  Bachelor of Science (Honours) in Computer Science
                </h3>
                <p className="text-slate-400 text-sm">University of Fort Hare | 2021</p>
              </div>
              <div className="border-l-2 border-indigo-500/50 pl-4">
                <h3 className="text-white font-medium">
                  Bachelor of Science in Computer Science, GIS & Remote Sensing
                </h3>
                <p className="text-slate-400 text-sm">University of Fort Hare | 2020</p>
              </div>
              <div className="border-l-2 border-indigo-500/50 pl-4">
                <h3 className="text-white font-medium">Grade 12 / Matric</h3>
                <p className="text-slate-400 text-sm">Msobomvu Senior Secondary School | 2015</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}