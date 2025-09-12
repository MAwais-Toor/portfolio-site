import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just simulate success
    setStatus("loading");

    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  return (
    <main className="bg-gray-900 text-white py-16">
      <section id="contact" className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit. Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium totam rem aperiam
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
              <p className="text-gray-400 mb-6">
                Praesent sapien massa, convallis a pellentesque nec, egestas non
                nisi. Vestibulum ante ipsum primis.
              </p>

              {/* Location */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-sky-500 text-2xl">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Our Location</h4>
                  <p>A108 Adam Street</p>
                  <p>New York, NY 535022</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-sky-500 text-2xl">
                  <i className="bi bi-telephone"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Phone Number</h4>
                  <p>+1 5589 55488 55</p>
                  <p>+1 6678 254445 41</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="text-sky-500 text-2xl">
                  <i className="bi bi-envelope"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Email Address</h4>
                  <p>info@example.com</p>
                  <p>contact@example.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Get In Touch</h3>
              <p className="text-gray-400 mb-6">
                Praesent sapien massa, convallis a pellentesque nec, egestas non
                nisi. Vestibulum ante ipsum primis.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-sky-500 outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-sky-500 outline-none"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-sky-500 outline-none"
                />
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-sky-500 outline-none"
                ></textarea>

                <div className="text-center">
                  {status === "loading" && (
                    <p className="text-yellow-400">Sending...</p>
                  )}
                  {status === "sent" && (
                    <p className="text-green-400">
                      Your message has been sent. Thank you!
                    </p>
                  )}
                  <button
                    type="submit"
                    className="mt-4 px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-600 transition font-medium"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
