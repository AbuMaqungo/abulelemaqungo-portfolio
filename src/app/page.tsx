import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Profile Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Abulele Maqungo
            </h1>

            <h2 className="text-xl md:text-2xl text-indigo-400 mb-6 font-mono">
              Application Developer
            </h2>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Results-driven Application Developer with hands-on experience delivering enterprise-grade
              software solutions within high-impact environments. Specializing in full-stack development,
              SQL programming, database performance optimization and cloud-native deployment across
              modern infrastructure.
            </p>

            {/* Qualifications */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Qualifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "BSc (Hons) Computer Science",
                  "BSc Computer Science, GIS & Remote Sensing",
                  "Aircraft Avionician — Denel Technical Academy",
                ].map((q) => (
                  <div key={q} className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-slate-300">{q}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/projects"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="border border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-lg transition-colors font-medium"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative group">
              <Link href="/about">
                <div className="relative cursor-pointer transform group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/images/abulele.jpg"
                    alt="Abulele Maqungo"
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-indigo-500 shadow-2xl object-cover group-hover:border-indigo-400 transition-colors"
                  />
                  <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-semibold bg-indigo-600 px-4 py-2 rounded-lg">
                      View About →
                    </span>
                  </div>
                </div>
              </Link>
              <div className="absolute bottom-4 right-4 bg-indigo-500 rounded-full p-2 border-2 border-slate-900">
                <div className="w-3 h-3 bg-indigo-300 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}