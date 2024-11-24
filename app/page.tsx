"use client";
import React, { useState, useEffect } from "react";
import { Mail, ExternalLink } from "lucide-react";
import Image from "next/image";
import { experiences } from "./data";

const TypewriterText = ({ text = "", speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return (
    <span>
      {displayedText}
      {currentIndex < text.length && (
        <span className="inline-block w-0.5 h-5 ml-1 bg-blue-600 animate-pulse" />
      )}
    </span>
  );
};

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("experience");
  const intro = "Hey there! I'm Robert. Welcome to my portfolio website.";

  const projects = [
    {
      title: "AI Task Manager",
      description:
        "Personal productivity app using machine learning to prioritize tasks.",
      technologies: ["React", "TensorFlow.js", "Node.js"],
      link: "https://github.com/username/ai-task-manager",
    },
    {
      title: "Blockchain Explorer",
      description:
        "Web application to visualize and track cryptocurrency transactions.",
      technologies: ["Vue.js", "Web3.js", "Express"],
      link: "https://github.com/username/blockchain-explorer",
    },
  ];

  const skills = {
    Frontend: ["React", "Next", "Redux", "TypeScript", "Tailwind CSS", "Swift", "HTML"],
    Backend: ["Node.js", "Python", "C++", "Java", "Spring", "MongoDb", "SQL", "PostgreSQL", "Flask"],
    DevOps: ["AWS S3", "Redis", "Elasticsearch", "Google Cloud Run", "Docker", "Kubernetes", "CI/CD"],
    Tools: ["Git", "Splunk", "Grafana", "Argus", "VS Code", "Jira", "Figma"],
  };

  const philosophyContent = {
    title: "Invictus",
    author: "William Ernest Henley",
    poem: `Out of the night that covers me,
          Black as the pit from pole to pole,
          I thank whatever gods may be
          For my unconquerable soul.

          In the fell clutch of circumstance
          I have not winced nor cried aloud.
          Under the bludgeonings of change
          My head is bloody, but unbowed.

          Beyond this place of wrath and tears
          Looms but the Horror of the shade,
          And yet the menace of the years
          Finds and shall find me unafraid.

          It matters not how strait the gate,
          How charged with punishments the scroll,
          I am the master of my fate,
          I am the captain of my soul.`,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header with Profile */}
      <header className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex flex-col items-center text-center mb-8">
            {/* Profile Image */}
            <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src="/profilepic.jpeg"
                alt="profile image of Robert"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Robert Aung Hein Oo
            </h1>
            <p className="text-xl text-gray-600 mb-6">Software Engineer</p>

            {/* Social Links */}
            <div className="flex space-x-6 mb-8">
              <a
                href="https://github.com/aunghoo"
                target="_blank"
                className="text-gray-500 hover:text-gray-700 transform hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src="/github.svg"
                  alt="Github profile link"
                  width={28}
                  height={28}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/robert-aung-hein-oo-387277143/"
                target="_blank"
                className="text-gray-500 hover:text-gray-700 transform hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn profile link"
                  width={28}
                  height={28}
                />
              </a>
              <a
                href="mailto:aunghnoo99@gmail.com"
                target="_blank"
                className="text-gray-500 hover:text-gray-700 transform hover:scale-110 transition-transform duration-300"
              >
                <Mail size={28} />
              </a>
            </div>

            {/* Overview with Typewriter Effect */}
            <div className="max-w-2xl text-gray-700 text-xl leading-relaxed">
              <TypewriterText text={intro} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-0 md:px-4 py-8">
        {/* Navigation */}
        <nav className="flex justify-center space-x-8 mb-12 rounded-lg p-2">
          {["experience", "skills", "philosophy"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                selectedTab === tab
                  ? "text-blue-600 bg-blue-50 font-semibold shadow-sm"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>

        {/* Content Container - Fixed height with scroll */}
        <div className="min-h-[600px] rounded-xl p-0 md:p-8">
          {/* Experience Timeline Section */}
          {selectedTab === "experience" && (
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-100" />
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-12 transform transition-all duration-300 hover:scale-[1.01]"
                  >
                    <div className="absolute left-4 w-4 h-4 -translate-x-1/2 rounded-full bg-blue-600 ring-4 ring-blue-100" />
                    <div className="bg-white rounded-none mr-4 md:rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {exp.company}
                          </h3>
                          <p className="text-blue-600 font-medium">
                            {exp.role}
                          </p>
                        </div>
                        <span className="text-sm text-gray-500 mt-2 md:mt-0 bg-gray-100 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      {exp.description.map((description, index) => (
                        <p
                          key={index}
                          className="mt-3 text-gray-700 leading-relaxed"
                        >
                          {description}
                        </p>
                      ))}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-4 py-1.5 bg-blue-50 border border-blue-100 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Section */}
          {selectedTab === "projects" && (
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.01]"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <a
                      href={project.link}
                      className="text-blue-600 hover:text-blue-700 p-2 hover:bg-blue-50 rounded-full transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-1.5 bg-blue-50 border border-blue-100 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Skills Section */}
          {selectedTab === "skills" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <div
                  key={category}
                  className="bg-white rounded-lg p-6 mx-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.01]"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-1.5 bg-blue-50 border border-blue-100 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Philosophy Section */}
          {selectedTab === "philosophy" && (
            <div className="bg-white rounded-lg p-8 mx-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.01]">
              <h3 className="text-2xl font-semibold text-gray-900 text-center">
                {philosophyContent.title}
              </h3>
              <h3 className="leading-relaxed text-gray-600 mb-6 text-center">
                {philosophyContent.author}
              </h3>
              <div className="max-w-2xl mx-auto">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line font-serif text-lg text-center italic">
                  {philosophyContent.poem}
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
