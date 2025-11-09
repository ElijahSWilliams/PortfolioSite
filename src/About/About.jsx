import React from "react";

function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Section Heading */}
      <h1 className="text-3xl font-bold text-center border-b-2 border-gray-400 pb-4 mb-12">
        About Me
      </h1>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
        {/* About Me */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 ">Get to Know Me</h2>
          <p className="text-gray-300 mb-4">
            I’m Elijah, a software engineer passionate about building clean and
            efficient apps with React, Node.js, and good UI/UX.
          </p>
          <p className="text-gray-300 mb-4 ">
            I thrive at the intersection of creativity and logic — where layout
            decisions meet clean, maintainable code, and every pixel has a
            purpose.
          </p>
          <p className="text-gray-300">
            My focus is on JavaScript, React, and modern web practices that
            prioritize performance, usability, and accessibility.
          </p>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-white">
            <li className="bg-gray-700 px-3 py-2 rounded-md hover:bg-blue-700">
              HTML5
            </li>
            <li className="bg-gray-700 px-3 py-2 rounded-md hover:bg-blue-700">
              CSS
            </li>
            <li className="bg-gray-700 px-3 py-2 rounded-md hover:bg-blue-700">
              JavaScript
            </li>
            <li className="bg-gray-700 px-3 py-2 rounded-md hover:bg-blue-700">
              MongoDB
            </li>
            <li className="bg-gray-700 px-3 py-2 rounded-md hover:bg-blue-700">
              Express
            </li>
            <li className="bg-gray-700 px-3 py-2 rounded-md hover:bg-blue-700">
              React
            </li>
            <li className="bg-gray-700 px-3 py-2 rounded-md hover:bg-blue-700">
              Node.js
            </li>
            <li className="bg-gray-700 px-3 py-2 rounded-md hover:bg-blue-700">
              TailwindCSS
            </li>
            <li className="bg-gray-700 px-3 py-2 rounded-md hover:bg-blue-700">
              Responsive Design
            </li>
            <li className="bg-gray-700 px-3 py-2 rounded-md hover:bg-blue-700">
              Git
            </li>
            <li className="bg-gray-700 px-3 py-2 rounded-md hover:bg-blue-700">
              Github
            </li>
            <li className="bg-gray-700 px-3 py-2 rounded-md hover:bg-blue-700">
              Terminal
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;

/*  
<p className="w-150 ">
        I’m Elijah, a developer passionate about crafting accessible,
        user-friendly interfaces that blend thoughtful design with solid
        engineering. I thrive at the intersection of creativity and logic —
        where layout decisions meet clean, maintainable code, and every pixel
        has a purpose. My focus is on JavaScript, React, and modern web
        development practices that prioritize performance, usability, and
        accessibility.
      </p>
      <p className="w-150 ">
        Whether I’m building dynamic UIs, integrating APIs, or refining the
        details that make an interface feel just right, I aim to create
        experiences that are both functional and delightful.
      </p>
      <p className="w-150">
        I’ve worked on a variety of projects — from landing pages and
        interactive components to full web apps — using the MERN stack (MongoDB,
        Express, React, and Node.js). Each project has sharpened my ability to
        think like a full-stack developer and solve problems across the stack.
      </p> */
