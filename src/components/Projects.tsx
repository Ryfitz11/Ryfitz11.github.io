import { useState } from 'react';
import { project } from '../data/projectData';
import { Github, ExternalLink, Youtube } from 'lucide-react';

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Featured Project
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing my work in blockchain technology and decentralized applications.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div
            className="bg-gray-900 rounded-xl overflow-hidden shadow-xl transition-all duration-500 transform hover:shadow-indigo-500/20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="md:flex">
              <div
                className={`md:w-1/2 h-64 md:h-auto bg-cover bg-center transition-transform duration-700 ${
                  isHovered ? 'scale-105' : ''
                }`}
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-3">
                  <span className="text-xs font-medium bg-indigo-900/70 text-indigo-300 py-1 px-3 rounded-full mr-2">
                    {project.type}
                  </span>
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-800 text-gray-300 py-1 px-2 rounded-full mr-2">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>

                <ul className="mb-6 text-sm text-gray-400 space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <Youtube className="h-4 w-4 mr-2" />
                    Demo Video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;