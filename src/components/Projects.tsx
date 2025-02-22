import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform built with React and Node.js",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
    technologies: ["React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/Shubham32142/Ecommerce_website",
    liveLink: "https://example.com",
  },
  {
    title: "Youtube Clone",
    description:
      "A collaborative task management application with real-time updates",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    technologies: ["React", "Cloudinary", "Tailwind CSS", "Nodejs", "Mongodb"],
    githubLink: "https://github.com/Shubham32142/Youtube-clone",
    liveLink: "https://youtube-frontend-ssms.onrender.com/",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather application with detailed forecasts and interactive maps",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80",
    technologies: ["HTML5", "CSS3", "OpenWeather API", "Javascript"],
    githubLink: "https://github.com/Shubham32142/weather_app",
    liveLink: "https://weatherforecasteapp.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          <div className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Some of my recent work
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex space-x-4">
                  <a
                    href={project.githubLink}
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveLink}
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
