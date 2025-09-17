import React from 'react'
import { NavLink } from 'react-router'
import DownloadResume from './DownloadResume'

const About = () => {
  return (
    <main className="bg-[#0d1b2a] text-gray-300">
      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-sky-400">About</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              
            </p>
          </div>
          {/* Intro + Photo */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                <div>
                  <span className="uppercase tracking-wide text-sky-300 font-semibold">Hello there</span>
                  <h2 className="text-3xl sm:text-4xl font-md mt-3 text-white">
                  Hi, I'm Muhammad Awais – a calm-minded creative developer crafting serene digital journeys
                  </h2>
                  <p className="mt-4 text-gray-400">
                  Motivated Web Developer with 2 years of experience in creating responsive and user-friendly websites. Skilled in front-end and back-end development, with additional expertise in Affiliate Marketing and basic Graphic Design. Passionate about delivering innovative digital solutions, enhancing online presence, and supporting business growth through technology and creativity.
                  </p>
                  <div className="mt-6 flex items-center gap-6">
                  <NavLink to="/portfolio" className="px-5 py-3 border border-sky-400 text-sky-400 rounded-lg hover:bg-sky-400 hover:text-[#0d1b2a] transition">
                    View My Work →
                  </NavLink>
                  <DownloadResume />
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <img
                  src="./about.png"
                  alt="Portrait"
                  className="w-70 h-70 rounded-xl shadow-lg object-cover"
                  style={{ transform: "scaleX(-1)" }}
                  />
                </div>
                </div>
                {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="bg-[#1b263b] p-6 rounded-xl text-center hover:-translate-y-1 transition">
              <i className="bi bi-layout-text-window text-sky-400 text-3xl" />
              <h3 className="mt-3 text-lg font-bold text-white">UI/UX</h3>
              <p className="text-gray-400 text-sm">Vivamus sagittis lacus molestie placerat.</p>
            </div>
            <div className="bg-[#1b263b] p-6 rounded-xl text-center hover:-translate-y-1 transition">
              <i className="bi bi-code-slash text-sky-400 text-3xl" />
              <h3 className="mt-3 text-lg font-bold text-white">React.js</h3>
              <p className="text-gray-400 text-sm">Maecenas pharetra magna sit amet risus.</p>
            </div>
            <div className="bg-[#1b263b] p-6 rounded-xl text-center hover:-translate-y-1 transition">
              <i className="bi bi-phone text-sky-400 text-3xl" />
              <h3 className="mt-3 text-lg font-bold text-white">Mobile-first</h3>
              <p className="text-gray-400 text-sm">Donec id elit non mi porta gravida.</p>
            </div>
            <div className="bg-[#1b263b] p-6 rounded-xl text-center hover:-translate-y-1 transition">
              <i className="bi bi-camera text-sky-400 text-3xl" />
              <h3 className="mt-3 text-lg font-bold text-white">Photography</h3>
              <p className="text-gray-400 text-sm">Aliquam euismod nunc at augue cursus.</p>
            </div>
          </div>
          {/* Timeline */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="bg-[#1b263b] p-6 rounded-xl">
              <time className="text-sky-400 font-semibold">2018</time>
              <h4 className="mt-2 text-lg font-bold text-white">B.A. in Design</h4>
              <p className="text-gray-400 text-sm mt-2">Quisque euismod turpis ut sapien luctus bibendum.</p>
            </div>
            <div className="bg-[#1b263b] p-6 rounded-xl">
              <time className="text-sky-400 font-semibold">2020</time>
              <h4 className="mt-2 text-lg font-bold text-white">Freelance Start</h4>
              <p className="text-gray-400 text-sm mt-2">Mauris non arcu non urna convallis vulputate.</p>
            </div>
            <div className="bg-[#1b263b] p-6 rounded-xl">
              <time className="text-sky-400 font-semibold">2022</time>
              <h4 className="mt-2 text-lg font-bold text-white">Joined Creative Studio</h4>
              <p className="text-gray-400 text-sm mt-2">Nunc sed nibh et libero fermentum posuere.</p>
            </div>
            <div className="bg-[#1b263b] p-6 rounded-xl">
              <time className="text-sky-400 font-semibold">2024</time>
              <h4 className="mt-2 text-lg font-bold text-white">Lead Frontend</h4>
              <p className="text-gray-400 text-sm mt-2">Proin commodo massa sit amet urna pretium.</p>
            </div>
          </div>
          {/* Quote */}
          <blockquote className="text-center italic text-xl text-gray-300 mb-20">
            "Building clean and meaningful experiences through thoughtful code and quiet design."
          </blockquote>
          {/* Fun Facts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center">
            <div className="bg-[#1b263b] p-4 rounded-full text-center">
              <i className="bi bi-magic text-sky-400 text-2xl" />
              <p className="mt-2 text-sm">Minimalism</p>
            </div>
            <div className="bg-[#1b263b] p-4 rounded-full text-center">
              <i className="bi bi-headphones text-sky-400 text-2xl" />
              <p className="mt-2 text-sm">Lo-fi Beats</p>
            </div>
            <div className="bg-[#1b263b] p-4 rounded-full text-center">
              <i className="bi bi-geo-alt text-sky-400 text-2xl" />
              <p className="mt-2 text-sm">City Walks</p>
            </div>
            <div className="bg-[#1b263b] p-4 rounded-full text-center">
              <i className="bi bi-brush text-sky-400 text-2xl" />
              <p className="mt-2 text-sm">Sketching</p>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-20 bg-[#1b263b]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-sky-400">Skills</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#0d1b2a] p-6 rounded-xl">
              <h3 className="text-lg font-bold text-white">HTML</h3>
              <p className="text-gray-400 text-sm mt-2">Sed ut perspiciatis unde omnis iste natus.</p>
              <div className="mt-3 text-right text-sky-400">90%</div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-2 bg-sky-400 rounded-full w-[90%]" />
              </div>
            </div>
            <div className="bg-[#0d1b2a] p-6 rounded-xl">
              <h3 className="text-lg font-bold text-white">CSS</h3>
              <p className="text-gray-400 text-sm mt-2">Nemo enim ipsam voluptatem quia voluptas.</p>
              <div className="mt-3 text-right text-sky-400">95%</div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-2 bg-sky-400 rounded-full w-[95%]" />
              </div>
            </div>
            <div className="bg-[#0d1b2a] p-6 rounded-xl">
              <h3 className="text-lg font-bold text-white">JavaScript</h3>
              <p className="text-gray-400 text-sm mt-2">Neque porro quisquam est qui dolorem ipsum.</p>
              <div className="mt-3 text-right text-sky-400">80%</div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-2 bg-sky-400 rounded-full w-[80%]" />
              </div>
            </div>
            <div className="bg-[#0d1b2a] p-6 rounded-xl">
              <h3 className="text-lg font-bold text-white">Photoshop</h3>
              <p className="text-gray-400 text-sm mt-2">Quis autem vel eum iure reprehenderit.</p>
              <div className="mt-3 text-right text-sky-400">55%</div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-2 bg-sky-400 rounded-full w-[55%]" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section id="stats" className="py-20 bg-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex -space-x-4">
              <img src="assets/img/person/person-m-2.webp" className="w-16 h-16 rounded-full border-2 border-white" alt />
              <img src="assets/img/person/person-m-3.webp" className="w-16 h-16 rounded-full border-2 border-white" alt />
              <img src="assets/img/person/person-f-5.webp" className="w-16 h-16 rounded-full border-2 border-white" alt />
              <img src="assets/img/person/person-m-5.webp" className="w-16 h-16 rounded-full border-2 border-white" alt />
            </div>
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <h2 className="text-4xl font-bold text-white">185+</h2>
                <p className="text-gray-400">Nemo enim ipsam</p>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white">32K</h2>
                <p className="text-gray-400">Voluptatem sequi</p>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white">128+</h2>
                <p className="text-gray-400">Dolor sit consectetur</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-[#1b263b]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-sky-400">Testimonials</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit.</p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#0d1b2a] p-6 rounded-xl shadow-lg">
              <p className="italic text-gray-300">“Proin iaculis purus consequat sem cure digni ssim donec porttitora.”</p>
              <h3 className="mt-4 font-bold text-white">Saul Goodman</h3>
              <p className="text-sm text-gray-400">CEO &amp; Founder</p>
            </div>
            <div className="bg-[#0d1b2a] p-6 rounded-xl shadow-lg">
              <p className="italic text-gray-300">“Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid.”</p>
              <h3 className="mt-4 font-bold text-white">Sara Wilsson</h3>
              <p className="text-sm text-gray-400">Designer</p>
            </div>
            <div className="bg-[#0d1b2a] p-6 rounded-xl shadow-lg">
              <p className="italic text-gray-300">“Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla.”</p>
              <h3 className="mt-4 font-bold text-white">Jena Karlis</h3>
              <p className="text-sm text-gray-400">Store Owner</p>
            </div>
          </div>
        </div>
      </section>
    </main>




  )
}

export default About
