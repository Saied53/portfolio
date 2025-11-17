import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Apply theme class to HTML root
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 dark:text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            MyBrand
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `font-medium hover:text-blue-600 dark:hover:text-blue-400 ${
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

          {/* Controls (theme toggle + menu button) */}
          <div className="flex items-center gap-4">

            {/* Dark/Light Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden focus:outline-none"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 dark:text-white shadow-md">
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
