import React from "react";
import { User, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <div className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Passionate Developer & Creative Problem Solver
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Hi! I'm a full-stack developer with a passion for creating
              beautiful and functional web applications. I specialize in modern
              web technologies and love turning complex problems into simple,
              elegant solutions.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <User className="text-blue-600 dark:text-blue-400" size={20} />
                <span className="text-gray-700 dark:text-gray-200">
                  Full Stack Developer
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin
                  className="text-blue-600 dark:text-blue-400"
                  size={20}
                />
                <span className="text-gray-700 dark:text-gray-200">
                  Agra, IN
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar
                  className="text-blue-600 dark:text-blue-400"
                  size={20}
                />
                <span className="text-gray-700 dark:text-gray-200">
                  Fresher
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
              alt="Developer workspace"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
