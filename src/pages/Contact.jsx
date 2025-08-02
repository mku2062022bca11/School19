import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Send,
} from "lucide-react";
import ScrollAnimation from "../components/ScrollAnimation";
import { useTheme } from "../contexts/ThemeContext";

const Contact = () => {
  const { themeClasses } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
      subtitle: "Mon-Fri: 8 AM - 6 PM",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["info@everlight.edu", "admissions@everlight.edu"],
      subtitle: "Response within 24 hours",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["123 Education Street", "Knowledge City, KC 12345"],
      subtitle: "Campus tours available",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 4:00 PM",
      ],
      subtitle: "Closed on Sundays",
    },
  ];

  const departments = [
    {
      name: "Admissions Office",
      phone: "+1 (555) 123-4567",
      email: "admissions@everlight.edu",
    },
    {
      name: "Academic Office",
      phone: "+1 (555) 123-4568",
      email: "academics@everlight.edu",
    },
    {
      name: "Student Services",
      phone: "+1 (555) 123-4569",
      email: "students@everlight.edu",
    },
    {
      name: "Finance Office",
      phone: "+1 (555) 123-4570",
      email: "finance@everlight.edu",
    },
    {
      name: "Principal Office",
      phone: "+1 (555) 123-4571",
      email: "principal@everlight.edu",
    },
    {
      name: "IT Support",
      phone: "+1 (555) 123-4572",
      email: "support@everlight.edu",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(./Reach/ReachImg1.jpeg)",
          }}
        ></div>
        <div className="absolute inset-0 bg-white/85"></div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollAnimation>
            <h1
              className={`text-5xl md:text-6xl font-bold ${themeClasses.primary} mb-6 relative z-10`}
            >
              📞 Reach Our Desk
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto relative z-10">
              We're here to help! Connect with us for admissions, queries,
              campus visits, or any information about OB365 School.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2
              className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}
            >
              Get in Touch
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <ScrollAnimation key={index} delay={index * 0.1}>
                  <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full ${themeClasses.primaryBg} flex items-center justify-center`}
                    >
                      <div className="text-white">{info.icon}</div>
                    </div>

                    <h3
                      className={`text-xl font-bold ${themeClasses.primary} mb-3`}
                    >
                      {info.title}
                    </h3>

                    <div className="space-y-1 mb-2">
                      {info.details.map((detail, detailIndex) => (
                        <p
                          key={detailIndex}
                          className="text-gray-700 font-medium"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>

                    <p className="text-gray-600 text-sm">{info.subtitle}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Google Maps and Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <ScrollAnimation>
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h3
                  className={`text-2xl font-bold ${themeClasses.primary} mb-6`}
                >
                  Find Us on Campus
                </h3>
                <div className="w-full h-96 bg-gray-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin
                      className={`w-12 h-12 ${themeClasses.primary} mx-auto mb-4`}
                    />
                    <p className="text-gray-600">Interactive Google Maps</p>
                    <p className="text-sm text-gray-500 mt-2">
                      123 Education Street, Knowledge City, KC 12345
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-2 h-2 rounded-full ${themeClasses.primaryBg}`}
                    ></div>
                    <span className="text-gray-700">
                      15 minutes from downtown
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-2 h-2 rounded-full ${themeClasses.primaryBg}`}
                    ></div>
                    <span className="text-gray-700">
                      Free parking available
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-2 h-2 rounded-full ${themeClasses.primaryBg}`}
                    ></div>
                    <span className="text-gray-700">
                      Public transport accessible
                    </span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Contact Form */}
            <ScrollAnimation delay={0.2}>
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h3
                  className={`text-2xl font-bold ${themeClasses.primary} mb-6`}
                >
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="academics">Academic Information</option>
                      <option value="fees">Fee Structure</option>
                      <option value="campus-visit">Campus Visit</option>
                      <option value="general">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-3 ${themeClasses.primaryBg} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2`}
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2
              className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}
            >
              Department-wise Contact Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <ScrollAnimation key={index} delay={index * 0.1}>
                  <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <h3
                      className={`text-lg font-bold ${themeClasses.primary} mb-4`}
                    >
                      {dept.name}
                    </h3>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Phone className={`w-4 h-4 ${themeClasses.primary}`} />
                        <span className="text-gray-700">{dept.phone}</span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Mail className={`w-4 h-4 ${themeClasses.primary}`} />
                        <span className="text-gray-700">{dept.email}</span>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* School Working Hours */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollAnimation>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center">
              <div
                className={`w-20 h-20 mx-auto mb-6 rounded-full ${themeClasses.primaryBg} flex items-center justify-center`}
              >
                <Clock className="w-10 h-10 text-white" />
              </div>

              <h2 className={`text-3xl font-bold ${themeClasses.primary} mb-8`}>
                Office Hours & Schedule
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Administrative Office
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    School Hours
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Classes: 8:00 AM - 3:30 PM</p>
                    <p>After-school Activities: 3:30 PM - 5:00 PM</p>
                    <p>Library: 7:30 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-yellow-50 rounded-xl">
                <p className="text-yellow-800">
                  <strong>Note:</strong> During holidays and special events,
                  office hours may vary. Please call ahead to confirm
                  availability.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className={`text-4xl font-bold ${themeClasses.primary} mb-8`}>
              Connect with Us on Social Media
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Follow us for the latest updates, events, and celebrations from
              our school community.
            </p>

            <div className="flex justify-center space-x-6">
              <ScrollAnimation delay={0.1}>
                <a
                  href="#"
                  className={`w-16 h-16 rounded-full ${themeClasses.primaryBg} flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110 group`}
                >
                  <Facebook className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <a
                  href="#"
                  className={`w-16 h-16 rounded-full ${themeClasses.primaryBg} flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110 group`}
                >
                  <Instagram className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <a
                  href="#"
                  className={`w-16 h-16 rounded-full ${themeClasses.primaryBg} flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110 group`}
                >
                  <Youtube className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
              </ScrollAnimation>
            </div>

            <div className="mt-8 space-y-2">
              <p className="text-gray-600">@EverLightKnowledgeGrove</p>
              <p className="text-gray-600">
                #ShineWithKnowledge #EverLightEducation
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Contact;
