import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme, themeClasses } = useTheme();

  const navigation = [
    { name: "Welcome Hub", href: "/", id: "home" },
    { name: "Our Roots", href: "/about", id: "about" },
    { name: "Brain Bloom", href: "/academics", id: "academics" },
    { name: "Join Us", href: "/admissions", id: "admissions" },
    { name: "Student Nest", href: "/student-zone", id: "student" },
    { name: "Moments", href: "/gallery", id: "gallery" },
    { name: "Reach Desk", href: "/contact", id: "contact" },
    { name: "Know More", href: "/faq", id: "faq" },
  ];

  const themeColors = [
    { name: "blue", color: "bg-blue-500", emoji: "🔵" },
    { name: "green", color: "bg-green-500", emoji: "🟢" },
    { name: "orange", color: "bg-red-500", emoji: "🔴" },
    { name: "purple", color: "bg-purple-500", emoji: "🟣" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div
              className={`p-1.5 rounded-full ${themeClasses.primaryBg} transition-transform group-hover:scale-110`}
            >
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1
                className={`text-lg font-bold ${themeClasses.primary} transition-colors`}
              >
                OB365 School
              </h1>
              <p className="text-xs text-gray-600">
                Igniting Minds, Shaping Futures
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.href
                    ? `${themeClasses.primaryBg} text-white`
                    : `text-gray-700 hover:${themeClasses.primaryBg} hover:text-white`
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-1.5 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-3 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === item.href
                      ? `${themeClasses.primaryBg} text-white`
                      : `text-gray-700 hover:${themeClasses.primaryBg} hover:text-white`
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
