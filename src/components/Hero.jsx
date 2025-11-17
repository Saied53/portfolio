import { Github, Linkedin, Facebook, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          <p className="text-blue-600 font-semibold text-lg">Hi, I'm</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-snug mt-2">
            Mohammad Saydur Rahman  
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-semibold mt-3">
            Frontend Developer
          </h2>

          <p className="mt-5 text-gray-600 dark:text-gray-400 leading-relaxed">
            I am a passionate frontend developer specializing in modern,
            responsive UI development using React, Tailwind, and JavaScript.
          </p>

          {/* Buttons + Social Icons */}
          <div className="mt-6 flex items-center gap-4">
            {/* CV Download */}
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              <Download size={18} /> Download CV
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 hover:text-white transition"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 hover:text-white transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 hover:text-white transition"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/src/assets/Saied.jpg"
            alt="Profile"
            className="w-72 md:w-96 rounded-2xl shadow-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
}
