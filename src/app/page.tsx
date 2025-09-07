import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Profile Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Abulele Maqungo
            </h1>
            
            <h2 className="text-xl md:text-2xl text-blue-400 mb-6 font-mono">
              Application Developer
            </h2>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              I create innovative digital solutions that transform complex problems into 
              simple, beautiful, and intuitive applications. Specializing in modern web 
              technologies and cloud-native development.
            </p>

            {/* Qualifications Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Qualifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-slate-300">BSC (Hons) Computer Science</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-slate-300">BSc Computer Science</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-slate-300">Aircraft Avionician</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-slate-300">Full-Stack Development</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                href="/projects" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
              >
                View Projects
              </Link>
              <Link 
                href="/contact" 
                className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition-colors font-medium"
              >
                Contact Me
              </Link>
            </div>
          </div>
          
          {/* Profile Picture - Now clickable */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative group">
              <Link href="/about">
                <div className="relative cursor-pointer transform group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/images/abulele.jpg" 
                    alt="Abulele Maqungo"
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-500 shadow-2xl object-cover group-hover:border-blue-400 transition-colors"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
                  {/* Click hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-semibold bg-blue-600 px-4 py-2 rounded-lg">
                      View About →
                    </span>
                  </div>
                </div>
              </Link>
              {/* Status indicator */}
              <div className="absolute bottom-4 right-4 bg-green-500 rounded-full p-2 border-2 border-slate-900">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}