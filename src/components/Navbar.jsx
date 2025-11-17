import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [scrolled, setScrolled] = useState(false);

  // Scroll shrink
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Apply theme class
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        backdrop-blur-xl bg-white/30 dark:bg-gray-900/30 shadow-lg
        ${scrolled ? "py-2 shadow-xl" : "py-4"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">

        {/* Logo */}
        <h1
          className={`
            font-bold transition-all duration-300
            ${scrolled ? "text-xl" : "text-2xl"}
            text-blue-600 dark:text-blue-400
          `}
        >
          MyBrand
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition font-medium hover:text-blue-600 dark:hover:text-blue-400 ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-gray-700 dark:text-gray-300"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-4">
          {/* Dark/Light Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden transition hover:scale-110"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden backdrop-blur-xl bg-white/30 dark:bg-gray-900/30 shadow-lg">
          <ul className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block font-medium hover:text-blue-600 dark:hover:text-blue-400 ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400 font-semibold"
                        : "text-gray-700 dark:text-gray-300"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
