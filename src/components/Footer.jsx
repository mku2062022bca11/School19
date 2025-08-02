import React from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Footer = () => {
  const { theme, setTheme, themeClasses } = useTheme();

  const themeColors = [
    { name: "blue", color: "bg-blue-500", emoji: "🔵" },
    { name: "green", color: "bg-green-500", emoji: "🟢" },
    { name: "orange", color: "bg-red-500", emoji: "🔴" },
    { name: "purple", color: "bg-purple-500", emoji: "🟣" },
  ];

  const quickLinks = [
    { name: "Welcome Hub", href: "/" },
    { name: "Our Roots", href: "/about" },
    { name: "Brain Bloom", href: "/academics" },
    { name: "Join Us", href: "/admissions" },
  ];

  const studentLinks = [
    { name: "Student Nest", href: "/student-zone" },
    { name: "Moments", href: "/gallery" },
    { name: "Reach Desk", href: "/contact" },
    { name: "Know More", href: "/faq" },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-full ${themeClasses.primaryBg}`}>
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className={`text-lg font-bold ${themeClasses.primary}`}>
                  OB365 School
                </h3>
                <p className="text-sm text-gray-600">Shine with Knowledge</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Nurturing young minds since 1995, we are committed to providing
              world-class education that prepares students for a bright future.
            </p>
            <div className="flex space-x-3">
              <Facebook
                className={`w-5 h-5 ${themeClasses.primary} cursor-pointer hover:scale-110 transition-transform`}
              />
              <Instagram
                className={`w-5 h-5 ${themeClasses.primary} cursor-pointer hover:scale-110 transition-transform`}
              />
              <Youtube
                className={`w-5 h-5 ${themeClasses.primary} cursor-pointer hover:scale-110 transition-transform`}
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className={`text-lg font-semibold ${themeClasses.primary} mb-4`}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors hover:translate-x-1 transform duration-200 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Links */}
          <div>
            <h4
              className={`text-lg font-semibold ${themeClasses.primary} mb-4`}
            >
              Student Zone
            </h4>
            <ul className="space-y-2">
              {studentLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors hover:translate-x-1 transform duration-200 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className={`text-lg font-semibold ${themeClasses.primary} mb-4`}
            >
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className={`w-4 h-4 ${themeClasses.primary}`} />
                <span className="text-gray-600 text-sm">
                  123 Education Street, Knowledge City
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className={`w-4 h-4 ${themeClasses.primary}`} />
                <span className="text-gray-600 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className={`w-4 h-4 ${themeClasses.primary}`} />
                <span className="text-gray-600 text-sm">
                  info@everlight.edu
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Theme Switcher Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-600 text-sm">
                © 2024 OB365 School. All rights reserved.
              </p>
            </div>

            {/* Theme Color Switcher */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">
                Choose Theme:
              </span>
              <div className="flex space-x-2">
                {themeColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setTheme(color.name)}
                    className={`w-10 h-10 rounded-full border-2 transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                      theme === color.name
                        ? "border-gray-800 shadow-lg transform scale-110"
                        : "border-gray-300 hover:border-gray-500"
                    } ${color.color}`}
                    title={`Switch to ${color.name} theme`}
                  >
                    <span className="text-lg filter drop-shadow-sm">
                      {color.emoji}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
