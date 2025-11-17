import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate email service or backend API
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-xl bg-white/30 dark:bg-gray-800/30 border border-white/20 dark:border-gray-600/20 rounded-3xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-1 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="6"
              required
              className="w-full p-4 rounded-xl bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-500 text-white font-semibold py-4 rounded-xl shadow-lg transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
