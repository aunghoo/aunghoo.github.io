"use client";

import React, { useState, useEffect } from 'react';
import { Mail, ExternalLink } from 'lucide-react';
import Image from "next/image";
import { experiences } from './data';

const TypewriterText = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return (
    <span>{displayedText}
      {currentIndex < text.length && 
        <span className="inline-block w-0.5 h-5 ml-1 bg-blue-600 animate-pulse" />
      }
    </span>
  );
};

export default function Home() {

  const [selectedTab, setSelectedTab] = useState('experience');
  const intro = "Hey there! I'm Robert. Welcome to my portfolio website.";
  const overview = "I am a Software Engineer at Salesforce, working on Flows and\
          Orchestrations—low-code tools that enable Salesforce customers to automate business processes. I have worked\
          extensively with the core application code in Java Spring Framework and SQL that powers the backend engine for\
          Flows and Orchestrations, as well as front-end code in Lightning Web Components to develop various user\
          interface components in Salesforce. Beyond my full-time role, I co-founded and served as CTO for BridgeBurma, an organization that provides an\
          online mentorship and social networking platform for Burmese professionals and students worldwide. I left the\
          position in 2023 to pursue other interests. I am passionate about software engineering because I enjoy solving problems and building meaningful solutions.\
          In my free time, I enjoy playing the piano and guitar, and have recently taken up tennis and swimming to stay\
          fit.";

  const projects = [
    {
      title: "AI Task Manager",
      description: "Personal productivity app using machine learning to prioritize tasks.",
      technologies: ["React", "TensorFlow.js", "Node.js"],
      link: "https://github.com/username/ai-task-manager"
    },
    {
      title: "Blockchain Explorer",
      description: "Web application to visualize and track cryptocurrency transactions.",
      technologies: ["Vue.js", "Web3.js", "Express"],
      link: "https://github.com/username/blockchain-explorer"
    }
  ];

  const skills = {
    "Frontend": ["React", "Vue.js", "TypeScript", "Tailwind CSS"],
    "Backend": ["Node.js", "Python", "Java", "PostgreSQL"],
    "DevOps": ["Docker", "Kubernetes", "AWS", "CI/CD"],
    "Tools": ["Git", "VS Code", "Jira", "Figma"]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Profile */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex flex-col items-center text-center mb-8">
            {/* Profile Image */}
            <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-2 border-gray-200">
              <img
                src="/profilepic.jpeg"
                alt="profile image of Robert"
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Robert Aung Hein Oo</h1>
            <p className="text-lg text-gray-600 mb-6">Software Engineer</p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-8">
              <a href="https://github.com/aunghoo" target="_blank" className="text-gray-500 hover:text-gray-700">
                <Image src="/github.svg" alt="Github profile link" width={24} height={24} />
              </a>
              <a href="https://www.linkedin.com/in/robert-aung-hein-oo-387277143/" target="_blank" className="text-gray-500 hover:text-gray-700">
                <Image src="/linkedin.svg" alt="LinkedIn profile link" width={24} height={24} />
              </a>
              <a href="mailto:aunghnoo99@gmail.com" target="_blank" className="text-gray-500 hover:text-gray-700">
                <Mail size={24} />
              </a>
            </div>

            {/* Overview with Typewriter Effect */}
            <div className="max-w-2xl text-gray-700 text-lg leading-relaxed">
              <TypewriterText text={intro} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="flex space-x-4 mb-12">
          {['experience', 'projects', 'skills'].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 ${
                selectedTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>

        {/* Experience Timeline Section */}
        {selectedTab === 'experience' && (
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-px bg-gray-200" />
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 w-3 h-3 -translate-x-1/2 rounded-full bg-blue-600" />
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{exp.company}</h3>
                      <p className="text-gray-600">{exp.role}</p>
                    </div>
                    <span className="text-sm text-gray-500 mt-1 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="mt-2 text-gray-700">{exp.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 border border-blue-200 text-blue-600 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Section */}
        {selectedTab === 'projects' && (
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="border-b border-gray-200 pb-8 last:border-0">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                  <a href={project.link} className="text-blue-600 hover:text-blue-700">
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p className="mt-2 text-gray-700">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 border border-blue-200 text-blue-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills Section */}
        {selectedTab === 'skills' && (
          <div className="space-y-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="border-b border-gray-200 pb-8 last:border-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <span key={index} className="px-3 py-1 border border-blue-200 text-blue-600 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
