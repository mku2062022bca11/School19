import React, { useState } from "react";
import { ChevronDown, ChevronUp, Send, HelpCircle } from "lucide-react";
import ScrollAnimation from "../components/ScrollAnimation";
import { useTheme } from "../contexts/ThemeContext";

const FAQ = () => {
  const { themeClasses } = useTheme();
  const [openFAQ, setOpenFAQ] = useState(null);
  const [questionForm, setQuestionForm] = useState({
    name: "",
    email: "",
    question: "",
  });

  const faqs = [
    {
      question: "What are the school timings?",
      answer:
        "Our school operates from 8:00 AM to 3:30 PM for regular classes. Pre-school (Pre-KG and KG) timings are from 8:30 AM to 12:30 PM. After-school activities and extended care are available until 5:00 PM.",
    },
    {
      question: "Is transportation available?",
      answer:
        "Yes, we provide comprehensive school bus transportation covering all major areas of the city. Our buses are equipped with GPS tracking, CCTV cameras, and trained attendants. Routes and schedules are updated annually based on student enrollment.",
    },
    {
      question: "How can parents track student performance?",
      answer:
        "We use a comprehensive parent portal where you can access real-time updates on your child's academic progress, attendance, assignments, and test scores. Regular parent-teacher meetings are scheduled, and teachers are available for individual consultations.",
    },
    {
      question: "What's the dress code policy?",
      answer:
        "Students must wear the prescribed school uniform daily. We have different uniforms for regular days, PE classes, and special events. Uniform guidelines include specific colors, styles, and accessories. Detailed dress code information is provided during admission.",
    },
    {
      question: "How do I apply for admission online?",
      answer:
        "Visit our website's admission section, download the application form, fill it completely, and submit it along with required documents. You can also apply online through our student portal. After submission, we'll schedule an interaction session and assessment.",
    },
    {
      question: "Is there a hostel facility available?",
      answer:
        "Currently, we don't have on-campus hostel facilities. However, we maintain a list of verified, safe accommodation options near the school for out-of-town students. Our student services team can assist in finding suitable housing.",
    },
    {
      question: "What extracurricular activities are offered?",
      answer:
        "We offer a wide range of activities including sports (cricket, basketball, swimming, tennis), arts (music, dance, drama, painting), clubs (debate, science, robotics, environmental), and leadership programs. Students can choose based on their interests and schedule.",
    },
    {
      question: "Are scholarships available for students?",
      answer:
        "Yes, we offer merit-based scholarships for academically excellent students and need-based financial assistance for deserving candidates. Scholarships cover tuition fees partially or fully based on criteria. Applications are reviewed annually.",
    },
    {
      question: "What is the student-teacher ratio?",
      answer:
        "We maintain an optimal student-teacher ratio of 15:1 to ensure personalized attention. For younger grades (Pre-KG to Grade 2), the ratio is even lower at 12:1. This allows teachers to focus on individual student needs and learning styles.",
    },
    {
      question: "How is student safety ensured on campus?",
      answer:
        "Student safety is our top priority. We have 24/7 security personnel, CCTV surveillance, controlled access points, regular safety drills, trained first-aid staff, and a comprehensive emergency response system. All staff undergo background verification.",
    },
    {
      question: "What technology resources are available?",
      answer:
        "Our campus features smart classrooms with interactive whiteboards, high-speed internet, computer labs with latest software, tablets for digital learning, coding labs, science simulation software, and a comprehensive digital library with e-books and research resources.",
    },
    {
      question: "Are there opportunities for parent involvement?",
      answer:
        "Absolutely! We encourage parent participation through regular PTMs, volunteer opportunities, school events, parent committees, workshops on child development, and family engagement activities. We believe education is a collaborative effort between school and home.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleInputChange = (e) => {
    setQuestionForm({
      ...questionForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Question submitted:", questionForm);
    setQuestionForm({
      name: "",
      email: "",
      question: "",
    });
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/159775/library-harvard-university-university-library-reading-159775.jpeg)",
          }}
        ></div>
        <div className="absolute inset-0 bg-white/85"></div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollAnimation>
            <h1
              className={`text-5xl md:text-6xl font-bold ${themeClasses.primary} mb-6 relative z-10`}
            >
              ❓ Know More
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto relative z-10">
              Find answers to commonly asked questions about admission,
              academics, facilities, and student life at OB365 School.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollAnimation>
            <h2
              className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}
            >
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <ScrollAnimation key={index} delay={index * 0.05}>
                  <div className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 rounded-2xl transition-colors duration-300"
                    >
                      <h3
                        className={`text-lg font-semibold ${themeClasses.primary} pr-4`}
                      >
                        {faq.question}
                      </h3>
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full ${themeClasses.primaryBg} flex items-center justify-center`}
                      >
                        {openFAQ === index ? (
                          <ChevronUp className="w-5 h-5 text-white" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-white" />
                        )}
                      </div>
                    </button>

                    {openFAQ === index && (
                      <div className="px-6 pb-6">
                        <hr className="border-gray-200 mb-4" />
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2
              className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}
            >
              Quick Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ScrollAnimation delay={0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full ${themeClasses.primaryBg} flex items-center justify-center`}
                  >
                    <HelpCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className={`text-lg font-bold ${themeClasses.primary} mb-2`}
                  >
                    Admission Process
                  </h3>
                  <p className="text-gray-600 text-sm">
                    5-step simple process from application to enrollment
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full ${themeClasses.primaryBg} flex items-center justify-center`}
                  >
                    <span className="text-white font-bold text-xl">15:1</span>
                  </div>
                  <h3
                    className={`text-lg font-bold ${themeClasses.primary} mb-2`}
                  >
                    Student-Teacher Ratio
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Personalized attention for every student
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full ${themeClasses.primaryBg} flex items-center justify-center`}
                  >
                    <span className="text-white font-bold text-xl">100%</span>
                  </div>
                  <h3
                    className={`text-lg font-bold ${themeClasses.primary} mb-2`}
                  >
                    Digital Classrooms
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Smart boards and modern technology in every class
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.4}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full ${themeClasses.primaryBg} flex items-center justify-center`}
                  >
                    <span className="text-white font-bold text-xl">24/7</span>
                  </div>
                  <h3
                    className={`text-lg font-bold ${themeClasses.primary} mb-2`}
                  >
                    Campus Security
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Round-the-clock safety and surveillance system
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Submit Question Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollAnimation>
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="text-center mb-8">
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-full ${themeClasses.primaryBg} flex items-center justify-center`}
                >
                  <Send className="w-10 h-10 text-white" />
                </div>
                <h2
                  className={`text-3xl font-bold ${themeClasses.primary} mb-4`}
                >
                  Still Have Questions?
                </h2>
                <p className="text-gray-600">
                  Didn't find the answer you were looking for? Send us your
                  question and we'll get back to you within 24 hours.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={questionForm.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your name"
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
                      value={questionForm.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="question"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Question *
                  </label>
                  <textarea
                    id="question"
                    name="question"
                    value={questionForm.question}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Ask us anything about admissions, academics, facilities, or student life..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className={`px-8 py-3 ${themeClasses.primaryBg} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 mx-auto`}
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit Question</span>
                  </button>
                </div>
              </form>

              <div className="mt-8 text-center">
                <p className="text-gray-600 text-sm">
                  Or call us directly at{" "}
                  <span className={`font-semibold ${themeClasses.primary}`}>
                    +1 (555) 123-4567
                  </span>{" "}
                  for immediate assistance.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2
              className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}
            >
              Additional Support
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation delay={0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <h3
                    className={`text-xl font-bold ${themeClasses.primary} mb-4`}
                  >
                    Admissions Office
                  </h3>
                  <p className="text-gray-600 mb-4">
                    For all admission-related queries
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-700">📞 +1 (555) 123-4567</p>
                    <p className="text-gray-700">📧 admissions@everlight.edu</p>
                    <p className="text-gray-700">⏰ Mon-Fri: 9 AM - 5 PM</p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <h3
                    className={`text-xl font-bold ${themeClasses.primary} mb-4`}
                  >
                    Academic Office
                  </h3>
                  <p className="text-gray-600 mb-4">
                    For curriculum and academic queries
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-700">📞 +1 (555) 123-4568</p>
                    <p className="text-gray-700">📧 academics@everlight.edu</p>
                    <p className="text-gray-700">⏰ Mon-Fri: 8 AM - 4 PM</p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <h3
                    className={`text-xl font-bold ${themeClasses.primary} mb-4`}
                  >
                    Student Services
                  </h3>
                  <p className="text-gray-600 mb-4">
                    For student support and activities
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-700">📞 +1 (555) 123-4569</p>
                    <p className="text-gray-700">📧 students@everlight.edu</p>
                    <p className="text-gray-700">⏰ Mon-Fri: 8 AM - 6 PM</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
