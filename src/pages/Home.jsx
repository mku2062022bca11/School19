import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  Star,
  Trophy,
  Calendar,
} from "lucide-react";
import ScrollAnimation from "../components/ScrollAnimation";
import { useTheme } from "../contexts/ThemeContext";

const Home = () => {
  const { themeClasses } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typewriterText, setTypewriterText] = useState("");

  const fullText = "Igniting Minds at Everlight Knowledge Grove";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const announcements = [
    "🎉 Admissions Open for Academic Year 2024-25",
    "🏆 Our students won the State Science Fair!",
    "📚 New STEAM Lab inaugurated this month",
    "🎭 Annual Cultural Fest - December 15-17, 2024",
  ];

  const testimonials = [
    {
      quote:
        "Everlight Knowledge Grove shaped my daughter into a confident and curious learner. The teachers truly care about each student's growth.",
      name: "Sarah Johnson",
      role: "Parent of Emma (Grade 8)",
    },
    {
      quote:
        "The innovative teaching methods and supportive environment helped me discover my passion for science. Now I'm pursuing engineering!",
      name: "Alex Chen",
      role: "Alumni, Class of 2020",
    },
    {
      quote:
        "The school's focus on holistic development prepared me not just academically but also as a responsible citizen.",
      name: "Priya Sharma",
      role: "Alumni, Class of 2019",
    },
  ];

  const awards = [
    {
      year: "2024",
      title: "Best STEAM Education Award",
      icon: <Trophy className="w-6 h-6" />,
    },
    {
      year: "2023",
      title: "Excellence in Student Care",
      icon: <Award className="w-6 h-6" />,
    },
    {
      year: "2022",
      title: "Green School Certification",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      year: "2021",
      title: "Digital Learning Pioneer",
      icon: <Star className="w-6 h-6" />,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % announcements.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + announcements.length) % announcements.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(./Home/HomeImg1.jpeg)",
          }}
        ></div>
        <div className="absolute inset-0 bg-white/85"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <ScrollAnimation direction="scale">
            <div className="space-y-6">
              <motion.h1
                className={`text-5xl md:text-7xl font-bold ${themeClasses.primary} leading-tight`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {typewriterText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className={themeClasses.primary}
                >
                  |
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Where Knowledge Meets Innovation, Dreams Take Flight
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
              >
                <button
                  className={`px-8 py-4 ${themeClasses.primaryBg} text-white rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  Explore Our World
                </button>
                <button
                  className={`px-8 py-4 border-2 ${themeClasses.primaryBorder} ${themeClasses.primary} rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  Schedule a Visit
                </button>
              </motion.div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Additional decorative images */}
        <div className="absolute bottom-10 left-10 opacity-20 hidden lg:block">
          <img
            src=" ./Home/HomeImg2.jpeg"
            alt="Books"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        <div className="absolute top-20 right-20 opacity-20 hidden lg:block">
          <img
            src="./Home/HomeImg2.jpeg"
            alt="Science"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>
      </section>

      {/* Announcement Banner */}
      <section className={`py-4 ${themeClasses.primaryBg} text-white`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <button
            onClick={prevSlide}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex-1 text-center">
            <motion.p
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="text-lg font-medium"
            >
              {announcements[currentSlide]}
            </motion.p>
          </div>

          <button
            onClick={nextSlide}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Welcome Note */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className={`text-4xl font-bold ${themeClasses.primary} mb-6`}>
                Welcome from Our Principal
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gray-50 rounded-2xl p-8 shadow-lg relative overflow-hidden">
                  <div className="absolute top-4 right-4 opacity-10">
                    <img
                      src="./Home/HomeImg5.jpeg"
                      alt="School building"
                      className="w-32 h-32 rounded-lg object-cover"
                    />
                  </div>
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg relative z-10">
                    <img
                      src="./Home/HomeImg4.jpeg"
                      alt="Principal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-4">
                    "At Everlight Knowledge Grove, we believe every child is a
                    unique constellation of potential waiting to shine. Our
                    dedicated faculty and innovative curriculum create an
                    environment where curiosity flourishes, creativity blooms,
                    and character develops alongside academic excellence."
                  </blockquote>
                  <p
                    className={`font-semibold ${themeClasses.primary} text-lg`}
                  >
                    Dr. Margaret Williams
                  </p>
                  <p className="text-gray-600">
                    Principal & Educational Leader
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2
              className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}
            >
              Excellence in Numbers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation delay={0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                  <div className="absolute top-2 right-2 opacity-10">
                    <img
                      src="./Home/HomeImg6.jpeg"
                      alt="Students"
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  </div>
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full ${themeClasses.primaryBg} flex items-center justify-center`}
                  >
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-800 mb-2">29+</h3>
                  <p
                    className={`text-lg font-semibold ${themeClasses.primary} mb-2`}
                  >
                    Years of Excellence
                  </p>
                  <p className="text-gray-600">Nurturing minds since 1995</p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                  <div className="absolute top-2 right-2 opacity-10">
                    <img
                      src="./Home/HomeImg7.jpeg"
                      alt="Graduation"
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  </div>
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full ${themeClasses.primaryBg} flex items-center justify-center`}
                  >
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-800 mb-2">
                    5000+
                  </h3>
                  <p
                    className={`text-lg font-semibold ${themeClasses.primary} mb-2`}
                  >
                    Global Alumni
                  </p>
                  <p className="text-gray-600">Making impact worldwide</p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                  <div className="absolute top-2 right-2 opacity-10">
                    <img
                      src="./Home/HomeImg8.jpeg"
                      alt="Lab"
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  </div>
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full ${themeClasses.primaryBg} flex items-center justify-center`}
                  >
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-800 mb-2">12</h3>
                  <p
                    className={`text-lg font-semibold ${themeClasses.primary} mb-2`}
                  >
                    Innovation Labs
                  </p>
                  <p className="text-gray-600">State-of-the-art facilities</p>
                </div>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2
              className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}
            >
              Voices from Our Community
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <ScrollAnimation key={index} delay={index * 0.1}>
                  <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${themeClasses.primary} fill-current`}
                        />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 mb-4 italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className={`font-semibold ${themeClasses.primary}`}>
                        {testimonial.name}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Awards Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2
              className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}
            >
              Our Journey of Recognition
            </h2>

            <div className="relative">
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${themeClasses.primaryBg} opacity-20`}
              ></div>

              <div className="space-y-8">
                {awards.map((award, index) => (
                  <ScrollAnimation key={index} delay={index * 0.1}>
                    <div
                      className={`flex items-center ${
                        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      <div
                        className={`w-1/2 ${
                          index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                        }`}
                      >
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                          <div
                            className={`flex items-center gap-3 ${
                              index % 2 === 0 ? "justify-end" : "justify-start"
                            }`}
                          >
                            <div
                              className={`p-2 rounded-full ${themeClasses.primaryBg} text-white`}
                            >
                              {award.icon}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-800">
                                {award.title}
                              </h3>
                              <p
                                className={`text-lg font-semibold ${themeClasses.primary}`}
                              >
                                {award.year}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`w-4 h-4 rounded-full ${themeClasses.primaryBg} relative z-10`}
                      ></div>

                      <div className="w-1/2"></div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className={`text-4xl font-bold ${themeClasses.primary} mb-6`}>
              Stay Connected with Our Journey
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get the latest updates on school events, achievements, and
              educational insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                className={`px-8 py-4 ${themeClasses.primaryBg} text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
              >
                Subscribe
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Home;
