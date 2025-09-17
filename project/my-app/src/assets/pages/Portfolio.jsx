import React, { useState } from "react";
import { Plus, Link2 } from "lucide-react"; // ✅ lucide icons

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      category: "strategy",
      title: "Business Growth Strategy",
      subtitle: "Strategic Planning",
      tags: ["Strategy", "Consulting"],
      img: "/projects/project (1).png", // ✅ put this in public/projects
    },
    {
      id: 2,
      category: "finance",
      title: "Financial Restructuring",
      subtitle: "Financial Advisory",
      tags: ["Finance", "Investment"],
      img: "/projects/project-2.webp",
    },
    {
      id: 3,
      category: "operations",
      title: "Supply Chain Optimization",
      subtitle: "Operations Management",
      tags: ["Operations", "Logistics"],
      img: "/projects/project-3.webp",
    },
    {
      id: 4,
      category: "technology",
      title: "Digital Transformation",
      subtitle: "Technology Consulting",
      tags: ["Technology", "Innovation"],
      img: "/projects/project-4.webp",
    },
    {
      id: 5,
      category: "strategy",
      title: "Market Expansion",
      subtitle: "Strategic Planning",
      tags: ["Strategy", "Growth"],
      img: "/projects/project-5.webp",
    },
    {
      id: 6,
      category: "finance",
      title: "Investment Strategy",
      subtitle: "Financial Advisory",
      tags: ["Finance", "Investment"],
      img: "/projects/project-6.webp",
    },
  ];

  const filters = ["all", "strategy", "finance", "operations", "technology"];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <main className="bg-gray-900 text-white py-16">
      <section id="portfolio" className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore some of my featured projects showcasing creativity,
            innovation, and real-world problem solving.
          </p>
        </div>

        {/* Filters */}
        <ul className="flex flex-wrap justify-center gap-4 mb-10">
          {filters.map((f) => (
            <li
              key={f}
              className={`px-4 py-2 rounded-lg cursor-pointer transition ${
                filter === f
                  ? "bg-sky-500 text-white"
                  : "bg-gray-800 hover:bg-sky-500 hover:text-white"
              }`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </li>
          ))}
        </ul>

        {/* Portfolio Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg group transition transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-100 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href={project.img}
                    className="z-10 text-white hover:text-sky-400 transition"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Plus size={28} />
                  </a>
                  <a
                    href="#"
                    className="z-10 text-white hover:text-sky-400 transition"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Link2 size={28} />
                  </a>
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-semibold text-lg">{project.title}</h4>
                <p className="text-gray-400 text-sm">{project.subtitle}</p>
                <div className="mt-3 flex gap-2 text-xs text-sky-400">
                  {project.tags.map((tag, index) => (
                    <span key={index}>#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="px-6 py-3 bg-sky-500 hover:bg-sky-600 rounded-xl text-white font-medium transition"
          >
            View All Case Studies
          </a>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
