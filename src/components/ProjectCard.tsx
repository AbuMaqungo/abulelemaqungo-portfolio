import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map(tech => (
          <span key={tech} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      <Link 
        href={project.link} 
        className="text-blue-600 hover:text-blue-800 font-medium"
      >
        View Project →
      </Link>
    </div>
  );
}