import { FaCss3, FaElementor, FaHtml5, FaJs, FaReact, FaStackExchange, FaWind, FaWordpress } from "react-icons/fa";


const Skills = () => {
  const skills = [
    { name: "HTML", level: 95, icon: <FaHtml5 size={32}/> },
    { name: "CSS", level: 90, icon: <FaCss3 size={32} /> },
    { name: "JavaScript", level: 85, icon: <FaJs size={32} /> },
    { name: "React", level: 80, icon: <FaReact size={32} /> },
    { name: "WordPress", level: 95, icon: <FaWordpress size={32} /> },
    { name: "Elementor", level: 95, icon: <FaElementor size={32} /> },
  ];

  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Technologies I work with regularly
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl backdrop-blur-xl bg-white/30 dark:bg-gray-800/30 border border-white/20 dark:border-gray-600/20 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300 text-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4 text-blue-600 dark:text-blue-400">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                {skill.name}
              </h3>

              {/* Progress % */}
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {skill.level}%
              </p>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-full mt-4 overflow-hidden">
                <div
                  style={{ width: `${skill.level}%` }}
                  className="h-full bg-blue-600 dark:bg-blue-400 transition-all duration-700"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
