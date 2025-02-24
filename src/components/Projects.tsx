import React from "react";
import { ExternalLink, Github } from "lucide-react";
import SchoolManagementSystem from "../Public/School Management system.jpeg";
import Ecommerce from "../Public/Ecommerce.avif";
import youtubeClone from "../Public/YoutubeClone.avif";
import weatherApp from "../Public/weatherApp.avif";
import registrationApi from "../Public/registration api.jpeg";
import libraryManager from "../Public/library smanagement.jpeg";
import memoryGame from "../Public/memorygame.png";
import studentRegistration from "../Public/studentRegistration.png";
const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform built with React and Node.js",
    image: Ecommerce,
    technologies: ["React", "Node.js", "MongoDB", "CSS3", "Express"],
    githubLink: "https://github.com/Shubham32142/Ecommerce_website",
    liveLink: "https://ecommerce-website-frontend-3k1v.onrender.com/",
  },
  {
    title: "Youtube Clone",
    description: "A Youtube clone from scratch including backend and frontend",
    image: youtubeClone,
    technologies: [
      "React",
      "Cloudinary",
      "Tailwind CSS",
      "Nodejs",
      "Mongodb",
      "Express",
    ],
    githubLink: "https://github.com/Shubham32142/Youtube-clone",
    liveLink: "https://youtube-frontend-ssms.onrender.com/",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather application with detailed forecasts and interactive maps",
    image: weatherApp,
    technologies: ["HTML5", "CSS3", "OpenWeather API", "Javascript"],
    githubLink: "https://github.com/Shubham32142/weather_app",
    liveLink: "https://weatherforecasteapp.netlify.app/",
  },
  {
    title: "School Management System",
    description:
      "An intermediate school management system API with CRUD operation and Authentication ",
    image: SchoolManagementSystem,
    technologies: ["Node.js", "Express", "Mongodb", "Cloudinary"],
    githubLink: "https://github.com/Shubham32142/School-management-system",
  },
  {
    title: "Student Registration Page",
    description: "An application to show basic knowledge of javascript",
    image: studentRegistration,
    technologies: ["HTML5", "CSS3", "Javascript"],
    githubLink: "https://github.com/Shubham32142/student_registration_form",
    liveLink: "https://studentregistrationsys.netlify.app/",
  },
  {
    title: "Basic Registration API",
    description: "An API for Register and login user",
    image: registrationApi,
    technologies: ["Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com/Shubham32142/student_registration_form",
    liveLink: "https://registration-api-l9qx.onrender.com",
  },
  {
    title: "Memory Game",
    description: "Memory game to check your memory to remember things",
    image: memoryGame,
    technologies: ["React", "Tailwind CSS"],
    githubLink: "https://github.com/Shubham32142/memory-game",
    liveLink: "https://memory-game-yqm0.onrender.com",
  },
  {
    title: "Online Library system",
    description: "A library system to add new books",
    image: libraryManager,
    technologies: ["React", "CSS3"],
    githubLink: "https://github.com/Shubham32142/Online_Library",
    liveLink: "https://online-library-csag.onrender.com/",
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
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-3"
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
