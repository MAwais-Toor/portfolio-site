import React from "react";

const Resume = () => {
  return (
    <main className="bg-[#0d1b2a] text-gray-300 py-20">
      {/* Resume Section */}
      <section id="resume" className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-sky-400">
            Resume
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit. Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium totam rem aperiam.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-sky-300 mb-6">
                Education
              </h3>
              <div className="space-y-8">
                <div className="border-l-4 border-sky-400 pl-6">
                  <h4 className="text-lg font-bold">Master of Computer Science</h4>
                  <span className="block text-sm text-sky-400">2019 - 2021</span>
                  <p className="italic text-gray-400 mt-1">
                    Stanford University, California
                  </p>
                  <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                    Qui deserunt veniam. Et sed aliquam labore tempore sed
                    quisquam iusto autem sit. Ea vero voluptatum qui ut
                    dignissimos deleniti nerada porti sand markend.
                  </p>
                </div>

                <div className="border-l-4 border-sky-400 pl-6">
                  <h4 className="text-lg font-bold">
                    Bachelor of Computer Science
                  </h4>
                  <span className="block text-sm text-sky-400">2015 - 2019</span>
                  <p className="italic text-gray-400 mt-1">
                    Massachusetts Institute of Technology
                  </p>
                  <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                    Quia nobis sequi est occaecati aut. Repudiandae et iusto quae
                    reiciendis et quis delectus nihil temporibus sapiente.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-sky-300 mb-6">
                Professional Skills
              </h3>
              <div className="space-y-6">
                {[
                  { skill: "Frontend Development", level: 95 },
                  { skill: "Backend Development", level: 85 },
                  { skill: "UI/UX Design", level: 90 },
                  { skill: "Project Management", level: 80 },
                ].map(({ skill, level }) => (
                  <div key={skill}>
                    <div className="flex justify-between text-sm mb-2">
                      <span>{skill}</span>
                      <span className="text-sky-400">{level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-sky-400 h-2 rounded-full"
                        style={{ width: `${level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold text-sky-300 mb-6">
                Professional Experience
              </h3>
              <div className="space-y-8">
                <div className="border-l-4 border-sky-400 pl-6">
                  <h4 className="text-lg font-bold">Senior Software Engineer</h4>
                  <span className="block text-sm text-sky-400">
                    2021 - Present
                  </span>
                  <p className="italic text-gray-400 mt-1">
                    Google, Mountain View, CA
                  </p>
                  <ul className="mt-2 list-disc list-inside text-sm space-y-2">
                    <li>
                      Lead in the development, implementation, and optimization
                      of web applications using modern technologies.
                    </li>
                    <li>
                      Delegate tasks to 7 team members and provide counsel on all
                      aspects of the project.
                    </li>
                    <li>
                      Supervise assessment of all applications for quality and
                      efficiency.
                    </li>
                    <li>
                      Oversaw project budgets ranging from $2,000 - $25,000.
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-sky-400 pl-6">
                  <h4 className="text-lg font-bold">Software Engineer</h4>
                  <span className="block text-sm text-sky-400">2019 - 2021</span>
                  <p className="italic text-gray-400 mt-1">
                    Microsoft, Redmond, WA
                  </p>
                  <ul className="mt-2 list-disc list-inside text-sm space-y-2">
                    <li>
                      Developed numerous marketing programs (logos, brochures,
                      infographics, presentations, advertisements).
                    </li>
                    <li>
                      Managed up to 5 projects under pressure.
                    </li>
                    <li>
                      Recommended appropriate platforms for clients.
                    </li>
                    <li>
                      Created 4+ design proposals monthly for clients and managers.
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-sky-400 pl-6">
                  <h4 className="text-lg font-bold">Junior Software Developer</h4>
                  <span className="block text-sm text-sky-400">2017 - 2019</span>
                  <p className="italic text-gray-400 mt-1">
                    Apple Inc., Cupertino, CA
                  </p>
                  <ul className="mt-2 list-disc list-inside text-sm space-y-2">
                    <li>
                      Implemented responsive websites and applications using
                      modern JavaScript frameworks.
                    </li>
                    <li>
                      Collaborated with senior developers to optimize apps.
                    </li>
                    <li>
                      Participated in code reviews and documentation.
                    </li>
                    <li>
                      Assisted in RESTful API and microservice development.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resume;
