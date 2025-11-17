const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS.",
    github: "https://github.com/username/portfolio",
    image: "https://via.placeholder.com/400x250", // replace with project image
  },
  {
    title: "Todo App",
    description: "A simple todo app with CRUD functionality.",
    github: "https://github.com/username/todo-app",
    image: "https://via.placeholder.com/400x250",
  },
  {
    title: "E-commerce Store",
    description: "An online store built with React and Node.js.",
    github: "https://github.com/username/ecommerce-store",
    image: "https://via.placeholder.com/400x250",
  },
];

const Projects = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Some of the projects I have worked on recently
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-3xl backdrop-blur-xl bg-white/30 dark:bg-gray-800/30 border border-white/20 dark:border-gray-600/20 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-3xl"
              />

              {/* Project Info */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
