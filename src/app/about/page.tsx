import Link from 'next/link';

export default function About() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Passionate Application Developer with expertise in full-stack development, 
            transforming complex problems into elegant digital solutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Profile Summary with Picture */}
          <div className="lg:col-span-2">
            {/* My Journey Section with Picture */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-600 opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
                  {/* Your second picture */}
                <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500 overflow-hidden shadow-lg">
                    <img 
                    src="/images/AbuleleMaqungo.jpg" 
                    alt="Abulele Maqungo"
                    className="w-full h-full object-cover object-top" // Changed to object-top
                    style={{ objectPosition: 'center top' }} // Ensures head is fully visible
                    />
                </div>
                </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-white mb-4">My Journey</h2>
                    <p className="text-slate-300">
                      From aircraft avionics to cutting-edge software development
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    I'm an experienced Application Developer with a unique background that spans both 
                    aviation technology and software development. My journey began in aircraft avionics, 
                    where I developed a deep understanding of complex systems and precision engineering.
                  </p>
                  
                  <p className="text-slate-300 leading-relaxed">
                    Transitioning into software development, I've brought this same attention to detail 
                    and problem-solving mindset to creating digital solutions. I specialize in full-stack 
                    development with expertise across both frontend and backend technologies.
                  </p>

                  <p className="text-slate-300 leading-relaxed">
                    What drives me is the ability to transform complex challenges into simple, beautiful, 
                    and intuitive applications that make a real difference for users.
                  </p>
                </div>
                </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-slate-700">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">4+</div>
                  <div className="text-slate-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">20+</div>
                  <div className="text-slate-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                  <div className="text-slate-400">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">2</div>
                  <div className="text-slate-400">Industries</div>
                </div>
              </div>
            </div>

            {/* Philosophy Section */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">Development Philosophy</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">⚡</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">Performance</h3>
                  <p className="text-slate-300 text-sm">Building fast, efficient applications that scale gracefully</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">🎨</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">Design</h3>
                  <p className="text-slate-300 text-sm">Creating intuitive, beautiful user experiences</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">🔧</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">Quality</h3>
                  <p className="text-slate-300 text-sm">Writing clean, maintainable, and tested code</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">🚀</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">Innovation</h3>
                  <p className="text-slate-300 text-sm">Leveraging cutting-edge technologies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Side Info */}
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-400">BSC (Hons) in Computer Science</h4>
                  <p className="text-slate-400">University of Fort Hare • 2021</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400">BSc Computer Science, GIS & Remote Sensing</h4>
                  <p className="text-slate-400">University of Fort Hare • 2020</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400">Aircraft Avionician</h4>
                  <p className="text-slate-400">Quality Council for Trades & Occupations</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">Certifications</h3>
              <div className="space-y-3">
                <div className="text-slate-300">• Aircraft Avionician (Denel Technical Academy)</div>
                <div className="text-slate-300">• Full-Stack Development</div>
                <div className="text-slate-300">• Database Administration</div>
                <div className="text-slate-300">• Agile Scrum Methodology</div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Let's Work Together</h3>
              <p className="text-slate-200 mb-4">Ready to bring your ideas to life?</p>
              <Link 
                href="/contact" 
                className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors inline-block"
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