import React from "react";
import { Code, Database, Palette, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    skills: ["HTML5", "CSS3", "React", "Tailwind CSS", "Redux"],
  },
  {
    title: "Backend Development",
    icon: <Terminal className="w-6 h-6 text-green-600 dark:text-green-400" />,
    skills: ["Node.js", "Express", "AWS", "REST APIs"],
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    skills: ["MongoDB", "Firebase", "MongoDB Atlas"],
  },
  {
    title: "Design",
    icon: <Palette className="w-6 h-6 text-pink-600 dark:text-pink-400" />,
    skills: ["UI/UX", "Responsive Design"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Skills & Expertise
          </h2>
          <div className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Technologies I work with
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-150"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="ml-3 text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
                        style={{ width: `${Math.random() * 30 + 70}%` }}
                      ></div>
                    </div>
                    <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
