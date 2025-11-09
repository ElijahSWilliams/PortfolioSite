import React from "react";

const projects = [
  {
    Title: "Spotify Web Quiz",
    Description:
      "A Quiz Game App that fetches the user's Spotify data to showcase the songs.",
    Tech: ["React", "CSS"],
    Link: "N/A",
    Repo: ["N/A"],
  },
  {
    Title: "What's the Weather (Frontend)",
    Description:
      "A frontend app that fetches weather data and displays it dynamically.",
    Tech: ["React", "CSS"],
    Link: "N/A",
    Repo: ["N/A"],
  },
  {
    Title: "What's the Weather (Backend)",
    Description:
      "Backend service to serve weather data using an API and Node.js.",
    Tech: ["Node.js", "Express", "MongoDB"],
    Link: "N/A",
    Repo: ["N/A"],
  },
];

function Project() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 mt-10">
      <h1 className="text-3xl font-bold text-center mb-10 border-b-2 border-gray-400 mt-10">
        Projects
      </h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg p-6 hover:scale-105 transform transition duration-300"
          >
            <h2 className="text-2xl font-semibold mb-3">{project.Title}</h2>
            <p className="mb-3 text-gray-300">{project.Description}</p>
            <p className="mb-3">
              <span className="font-semibold">Tech:</span>{" "}
              {project.Tech.join(", ")}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Link:</span> {project.Link}
            </p>
            <p>
              <span className="font-semibold">Repo:</span>{" "}
              {project.Repo.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
