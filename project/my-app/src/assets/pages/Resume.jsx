import React, { useState } from "react";

const Resume = () => {
  const [showModal, setShowModal] = useState(false);

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
                  <h4 className="text-lg font-bold">
                    WEB DEVELOPMENT COURSE
                  </h4>
                  <span className="block text-sm text-sky-400">2024 - 2025</span>
                  <p className="italic text-gray-400 mt-1">
                    Pearson Education Inc, London
                  </p>
                  <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                    Quia nobis sequi est occaecati aut. Repudiandae et iusto quae
                    reiciendis et quis delectus nihil temporibus sapiente.
                  </p>
                  <img
                    className="w-20 rounded-lg hover:scale-105 transition-transform duration-200"
                    src="https://cappsonline.org/wp-content/uploads/2017/01/pearson-logo.png"
                    alt=""
                  />
                </div>

                <div className="border-l-4 border-sky-400 pl-6">
                  <h4 className="text-lg font-bold">Intermediate</h4>
                  <span className="block text-sm text-sky-400">2022 - 2024</span>
                  <p className="italic text-gray-400 mt-1">
                    Concordia College For Boys (A Project of Beaconhouse),
                    Faisalabad
                  </p>
                  <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                    Qui deserunt veniam. Et sed aliquam labore tempore sed
                    quisquam iusto autem sit. Ea vero voluptatum qui ut
                    dignissimos deleniti nerada porti sand markend.
                  </p>
                  <img
                    className="w-16 rounded-lg hover:scale-105 transition-transform duration-200"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNmyUzEVm75o2Fkl0K7oGKzsJJFy-rhsvH_kBVk2tuSkC39WVFp1yr7XCENfbD97I35xw&usqp=CAU"
                    alt=""
                  />
                </div>

                <div className="border-l-4 border-sky-400 pl-6">
                  <h4 className="text-lg font-bold">Matric</h4>
                  <span className="block text-sm text-sky-400">2020 - 2022</span>
                  <p className="italic text-gray-400 mt-1">
                    Government A.V Modern High School, Faisalabad
                  </p>
                  <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                    Quia nobis sequi est occaecati aut. Repudiandae et iusto quae
                    reiciendis et quis delectus nihil temporibus sapiente.
                  </p>
                  <img
                    className="w-20 rounded-lg hover:scale-105 transition-transform duration-200"
                    src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4npOOvwFT5jyPdTp7D3Ky7aKuTXuUVj90It4yfOGcdex-krC_5QDz_q3ba5S52refcHRdHW9w9NDLsACsxPkuS-RlvbwhoxUUTTjTzlML69vfvHDeUV3202hb3K7jd6tsNSIs24T=s680-w680-h510-rw"
                    alt=""
                  />
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
                  { skill: "Web Development", level: 90 },
                  { skill: "WordPress", level: 85 },
                  { skill: "Shopify", level: 70 },
                  { skill: "Graphic Design (Canva, Photopea)", level: 95 },
                  { skill: "Affiliate Marketing", level: 80 },
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
                {/* Jr Web Developer */}
                <div className="group border-l-4 border-sky-400 pl-6 pb-6 transition-all duration-500">
                  <h4 className="text-lg font-bold">Jr Web Developer</h4>
                  <span className="block text-sm text-sky-400">
                    2025 - Present
                  </span>

                  <div className="flex items-center mt-2">
                    <img
                      className="w-7 rounded-md mr-2 hover:scale-105 transition-transform duration-200"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkCOYPTHCcFwUf_u2avugHJu9OPryJmxWXtA&s"
                      alt=""
                    />
                    <p className="italic text-gray-400 mt-1">
                      TECH-HUB FAISALABAD
                    </p>
                  </div>

                  <ul className="mt-2 list-disc list-inside text-sm space-y-2">
                    <li>
                      Lead in the development, implementation, and optimization
                      of web applications using modern technologies.
                    </li>
                    <li>
                      Delegate tasks to 7 team members and provide counsel on
                      all aspects of the project.
                    </li>
                    <li>
                      Supervise assessment of all applications for quality and
                      efficiency.
                    </li>
                    <li>
                      Oversaw project budgets ranging from $2,000 - $25,000.
                    </li>
                  </ul>

                  {/* Expandable Certificate */}
                  <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-in-out">
                    <div className="mt-4 flex justify-start">
                      <img
                        src="https://imgv2-2-f.scribdassets.com/img/document/522712645/original/db208280f2/1?v=1"
                        alt="Certificate"
                        className="w-32 rounded-md border border-gray-300 shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() => setShowModal(true)}
                      />
                    </div>
                  </div>
                </div>

                {/* Modal for Big Screen Certificate */}
                {showModal && (
                  <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    onClick={() => setShowModal(false)} // close when clicking outside
                  >
                    <div
                      className="relative"
                      onClick={(e) => e.stopPropagation()} // prevent close on image click
                    >
                      <button
                        className="absolute -top-6 -right-6 text-white text-3xl font-bold hover:text-red-400"
                        onClick={() => setShowModal(false)}
                      >
                        &times;
                      </button>
                      <img
                        src="https://imgv2-2-f.scribdassets.com/img/document/522712645/original/db208280f2/1?v=1"
                        alt="Certificate Large"
                        className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                )}

                {/* Other Experience */}
                <div className="border-l-4 border-sky-400 pl-6">
                  <h4 className="text-lg font-bold">Front End Developer</h4>
                  <span className="block text-sm text-sky-400">2023 - 2024</span>
                  <div className="flex items-center mt-2">
                    <img
                      className="w-7 rounded-md mr-2 hover:scale-105 transition-transform duration-200"
                      src="https://media.licdn.com/dms/image/v2/D4D0BAQHlD32mFKFAFA/company-logo_200_200/company-logo_200_200/0/1666870180353?e=1760572800&v=beta&t=P8aUWZi9eGJ4jsXDU_9ylnvIBt8LsdHCEG9NhjUj7t8"
                      alt=""
                    />
                    <p className="italic text-gray-400 mt-1">
                      The DevTech Professionals
                    </p>
                  </div>
                  <ul className="mt-2 list-disc list-inside text-sm space-y-2">
                    <li>
                      Developed numerous marketing programs (logos, brochures,
                      infographics, presentations, advertisements).
                    </li>
                    <li>Managed up to 5 projects under pressure.</li>
                    <li>Recommended appropriate platforms for clients.</li>
                    <li>
                      Created 4+ design proposals monthly for clients and
                      managers.
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-sky-400 pl-6">
                  <h4 className="text-lg font-bold">ASSOCIATE PROGRAM</h4>
                  <span className="block text-sm text-sky-400">2023 - 2025</span>
                  <div className="flex items-center mt-2">
                    <img
                      className="w-7 rounded-md mr-2 hover:scale-105 transition-transform duration-200"
                      src="https://theaffiliatemonkey.com/wp-content/uploads/2024/07/fiverr-logo.jpeg"
                      alt=""
                    />
                    <p className="italic text-gray-400 mt-1">Fiverr.com</p>
                  </div>
                  <ul className="mt-2 list-disc list-inside text-sm space-y-2">
                    <li>
                      Implemented responsive websites and applications using
                      modern JavaScript frameworks.
                    </li>
                    <li>
                      Collaborated with senior developers to optimize apps.
                    </li>
                    <li>Participated in code reviews and documentation.</li>
                    <li>
                      Assisted in RESTful API and microservice development.
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-sky-400 pl-6">
                  <h4 className="text-lg font-bold">AMAZON ASSOCIATE PROGRAM</h4>
                  <span className="block text-sm text-sky-400">2021 - 2023</span>
                  <div className="flex items-center mt-2">
                    <img
                      className="w-7 rounded-md mr-2 hover:scale-105 transition-transform duration-200"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                      alt=""
                    />
                    <p className="italic text-gray-400 mt-1">Amazon.com</p>
                  </div>
                  <ul className="mt-2 list-disc list-inside text-sm space-y-2">
                    <li>
                      Implemented responsive websites and applications using
                      modern JavaScript frameworks.
                    </li>
                    <li>
                      Collaborated with senior developers to optimize apps.
                    </li>
                    <li>Participated in code reviews and documentation.</li>
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
