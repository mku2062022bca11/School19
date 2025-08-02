import React from "react";
import { Calendar, Heart, Target, Eye, Award, Users } from "lucide-react";
import ScrollAnimation from "../components/ScrollAnimation";
import { useTheme } from "../contexts/ThemeContext";

const About = () => {
  const { themeClasses } = useTheme();

  const timeline = [
    {
      year: "1995",
      event: "Foundation of OB365 School",
      description:
        "Started with 50 students and a vision to transform education",
    },
    {
      year: "2000",
      event: "First Graduation Ceremony",
      description:
        "Celebrated our first batch of graduates who went on to top universities",
    },
    {
      year: "2005",
      event: "Technology Integration",
      description: "Introduced smart classrooms and digital learning platforms",
    },
    {
      year: "2010",
      event: "STEAM Lab Establishment",
      description:
        "Launched state-of-the-art Science, Technology, Engineering, Arts & Math facilities",
    },
    {
      year: "2015",
      event: "International Recognition",
      description: "Received Global Excellence in Education Award",
    },
    {
      year: "2020",
      event: "Digital Transformation",
      description:
        "Successfully transitioned to hybrid learning during pandemic",
    },
    {
      year: "2024",
      event: "Sustainable Campus Initiative",
      description:
        "Achieved carbon-neutral status with solar panels and green practices",
    },
  ];

  const management = [
    {
      name: "Dr. Margaret Williams",
      role: "Principal & CEO",
      experience: "25 years in educational leadership",
    },
    {
      name: "Prof. James Mitchell",
      role: "Academic Director",
      experience: "20 years in curriculum development",
    },
    {
      name: "Ms. Sarah Chen",
      role: "Student Affairs Head",
      experience: "15 years in student counseling",
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Innovation Director",
      experience: "18 years in educational technology",
    },
    {
      name: "Ms. Emily Rodriguez",
      role: "Community Relations",
      experience: "12 years in stakeholder engagement",
    },
    {
      name: "Mr. David Thompson",
      role: "Operations Manager",
      experience: "16 years in educational administration",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(./About/AboutImg1.jpeg)",
          }}
        ></div>
        <div className="absolute inset-0 bg-white/85"></div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollAnimation>
            <h1
              className={`text-5xl md:text-6xl font-bold ${themeClasses.primary} mb-6 relative z-10`}
            >
              🌱 Our Roots Run Deep
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto relative z-10">
              Discover the foundation, values, and passionate people who make
              OB365 School a beacon of educational excellence.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* School Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2
              className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}
            >
              Our Journey Through Time
            </h2>

            <div className="relative">
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${themeClasses.primaryBg} opacity-30`}
              ></div>

              <div className="space-y-12">
                {timeline.map((item, index) => (
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
                        <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                          <div
                            className={`flex items-center gap-3 ${
                              index % 2 === 0 ? "justify-end" : "justify-start"
                            } mb-3`}
                          >
                            <Calendar
                              className={`w-6 h-6 ${themeClasses.primary}`}
                            />
                            <h3
                              className={`text-2xl font-bold ${themeClasses.primary}`}
                            >
                              {item.year}
                            </h3>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-800 mb-2">
                            {item.event}
                          </h4>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>

                      <div
                        className={`w-6 h-6 rounded-full ${themeClasses.primaryBg} relative z-10 shadow-lg`}
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

      {/* Principal's Message */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-10">
                  <img
                    src="./About/AboutImg2.jpeg"
                    alt="Library"
                    className="w-40 h-32 rounded-lg object-cover"
                  />
                </div>
                <div className="text-center mb-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                    <img
                      src="./About/AboutImg3.jpeg"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2
                    className={`text-3xl font-bold ${themeClasses.primary} mb-2`}
                  >
                    Principal's Message
                  </h2>
                  <p className="text-gray-600">Dr. Margaret Williams</p>
                </div>

                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="text-xl italic mb-6">
                    "Education is not the filling of a pail, but the lighting of
                    a fire."
                  </p>

                  <p className="mb-4">
                    Welcome to OB365 School, where we believe that every child
                    carries within them infinite potential waiting to be
                    discovered and nurtured. For nearly three decades, our
                    school has been a sanctuary of learning, growth, and
                    transformation.
                  </p>

                  <p className="mb-4">
                    Our approach to education goes beyond traditional teaching
                    methods. We foster critical thinking, creativity, and
                    character development alongside academic excellence. Our
                    dedicated faculty members are not just educators; they are
                    mentors, guides, and inspirers who understand that each
                    student is unique and deserves personalized attention.
                  </p>

                  <p className="mb-6">
                    As we look toward the future, we remain committed to
                    preparing our students not just for exams, but for life
                    itself. We nurture global citizens who are compassionate,
                    innovative, and ready to make a positive impact on the
                    world.
                  </p>

                  <div className="text-center">
                    <p
                      className={`font-semibold ${themeClasses.primary} text-lg`}
                    >
                      Together, let's continue to light the fire of learning!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2
              className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}
            >
              Our Foundation Pillars
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation delay={0.1}>
                <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full ${themeClasses.primaryBg} flex items-center justify-center`}
                  >
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className={`text-2xl font-bold ${themeClasses.primary} text-center mb-4`}
                  >
                    Our Vision
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    To be a globally recognized institution that nurtures
                    lifelong learners, critical thinkers, and compassionate
                    leaders who contribute meaningfully to society and create a
                    better world for future generations.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full ${themeClasses.primaryBg} flex items-center justify-center`}
                  >
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className={`text-2xl font-bold ${themeClasses.primary} text-center mb-4`}
                  >
                    Our Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    To provide holistic education that combines academic
                    excellence with character development, fostering creativity,
                    critical thinking, and emotional intelligence while
                    preparing students for the challenges of tomorrow.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full ${themeClasses.primaryBg} flex items-center justify-center`}
                  >
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className={`text-2xl font-bold ${themeClasses.primary} text-center mb-4`}
                  >
                    Core Values
                  </h3>
                  <ul className="text-gray-700 leading-relaxed text-center space-y-2">
                    <li>• Integrity & Honesty</li>
                    <li>• Excellence & Innovation</li>
                    <li>• Respect & Inclusivity</li>
                    <li>• Curiosity & Growth</li>
                    <li>• Compassion & Service</li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* School Motto */}
      <section className={`py-16 ${themeClasses.primaryBg} text-white`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              ✨ Shine with Knowledge ✨
            </h2>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Our motto embodies the belief that knowledge illuminates the path
              to success, wisdom, and meaningful contribution to society.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2
              className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}
            >
              Meet Our Leadership Team
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {management.map((member, index) => (
                <ScrollAnimation key={index} delay={index * 0.1}>
                  <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className={`w-12 h-12 ${themeClasses.primary}`} />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {member.name}
                      </h3>
                      <p
                        className={`font-semibold ${themeClasses.primary} mb-2`}
                      >
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {member.experience}
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollAnimation>
            <div className="bg-white rounded-3xl p-12 shadow-xl">
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-full ${themeClasses.primaryBg} flex items-center justify-center`}
              >
                <Award className="w-8 h-8 text-white" />
              </div>
              <blockquote className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-relaxed">
                "Education is the most powerful light that can illuminate the
                darkest corners of ignorance and guide humanity toward a
                brighter future."
              </blockquote>
              <p className={`text-lg font-semibold ${themeClasses.primary}`}>
                OB365 School Philosophy
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default About;
