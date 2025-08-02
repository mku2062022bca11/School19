import React from 'react';
import { LogIn, Calendar, BookOpen, Upload, BarChart3, MessageCircle, Clock, User } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import { useTheme } from '../contexts/ThemeContext';

const StudentZone = () => {
  const { themeClasses } = useTheme();

  const timetable = [
    { time: '8:00 AM', monday: 'Mathematics', tuesday: 'English', wednesday: 'Science', thursday: 'Social Studies', friday: 'Arts' },
    { time: '9:00 AM', monday: 'English', tuesday: 'Mathematics', wednesday: 'Physical Ed', thursday: 'Science', friday: 'Music' },
    { time: '10:00 AM', monday: 'Science', tuesday: 'Social Studies', wednesday: 'Mathematics', thursday: 'English', friday: 'Computer' },
    { time: '11:00 AM', monday: 'Break', tuesday: 'Break', wednesday: 'Break', thursday: 'Break', friday: 'Break' },
    { time: '11:30 AM', monday: 'Social Studies', tuesday: 'Science', wednesday: 'English', thursday: 'Mathematics', friday: 'Library' },
    { time: '12:30 PM', monday: 'Physical Ed', tuesday: 'Arts', wednesday: 'Computer', thursday: 'Music', friday: 'Science' }
  ];

  const elearningTools = [
    {
      name: 'Google Classroom',
      description: 'Access assignments, submit work, and collaborate with teachers',
      icon: <BookOpen className="w-8 h-8" />,
      link: '#'
    },
    {
      name: 'Khan Academy',
      description: 'Personalized learning dashboard with practice exercises',
      icon: <BarChart3 className="w-8 h-8" />,
      link: '#'
    },
    {
      name: 'Virtual Labs',
      description: 'Interactive science experiments and simulations',
      icon: <Upload className="w-8 h-8" />,
      link: '#'
    },
    {
      name: 'Digital Library',
      description: 'Access thousands of e-books and research materials',
      icon: <BookOpen className="w-8 h-8" />,
      link: '#'
    }
  ];

  const subjects = ['Mathematics', 'English', 'Science', 'Social Studies', 'Computer'];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(./student/StudentImg1.jpeg)'
          }}
        ></div>
        <div className="absolute inset-0 bg-white/85"></div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollAnimation>
            <h1 className={`text-5xl md:text-6xl font-bold ${themeClasses.primary} mb-6 relative z-10`}>
              🎒 Student Learning Hub
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto relative z-10">
              Your gateway to academic resources, schedules, assignments, and personalized learning tools. 
              Everything you need for educational success in one place.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Daily Timetable */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2 className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}>
              Weekly Timetable Preview
            </h2>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className={`${themeClasses.primaryBg} text-white p-6`}>
                <div className="grid grid-cols-6 gap-4 font-semibold text-center">
                  <div>Time</div>
                  <div>Monday</div>
                  <div>Tuesday</div>
                  <div>Wednesday</div>
                  <div>Thursday</div>
                  <div>Friday</div>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {timetable.map((slot, index) => (
                  <ScrollAnimation key={index} delay={index * 0.05}>
                    <div className="grid grid-cols-6 gap-4 p-4 hover:bg-gray-50 transition-colors">
                      <div className={`font-semibold ${themeClasses.primary} text-center flex items-center justify-center`}>
                        <Clock className="w-4 h-4 mr-2" />
                        {slot.time}
                      </div>
                      <div className="text-gray-700 text-center p-2 bg-gray-50 rounded-lg">{slot.monday}</div>
                      <div className="text-gray-700 text-center p-2 bg-gray-50 rounded-lg">{slot.tuesday}</div>
                      <div className="text-gray-700 text-center p-2 bg-gray-50 rounded-lg">{slot.wednesday}</div>
                      <div className="text-gray-700 text-center p-2 bg-gray-50 rounded-lg">{slot.thursday}</div>
                      <div className="text-gray-700 text-center p-2 bg-gray-50 rounded-lg">{slot.friday}</div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* E-Learning Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2 className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}>
              Digital Learning Platforms
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {elearningTools.map((tool, index) => (
                <ScrollAnimation key={index} delay={index * 0.1}>
                  <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${themeClasses.primaryBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">{tool.icon}</div>
                    </div>
                    <h3 className={`text-xl font-bold ${themeClasses.primary} text-center mb-3`}>{tool.name}</h3>
                    <p className="text-gray-600 text-center text-sm mb-4">{tool.description}</p>
                    <button className={`w-full py-2 ${themeClasses.primaryBg} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                      Access Platform
                    </button>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Homework Portal */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2 className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}>
              Homework & Assignment Portal
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${themeClasses.primaryBg} flex items-center justify-center`}>
                  <Upload className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${themeClasses.primary} mb-2`}>Submit Your Homework</h3>
                <p className="text-gray-600">Upload assignments and track submission status</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Submit</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Select Subject</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Choose subject...</option>
                        {subjects.map((subject, index) => (
                          <option key={index} value={subject}>{subject}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Assignment Title</label>
                      <input
                        type="text"
                        placeholder="Enter assignment title"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Upload File</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600">Drag & drop or click to upload</p>
                      </div>
                    </div>
                    <button className={`w-full py-3 ${themeClasses.primaryBg} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}>
                      Submit Assignment
                    </button>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Recent Submissions</h4>
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-800">Math Assignment #5</span>
                        <span className="text-green-600 text-sm font-medium">Submitted</span>
                      </div>
                      <p className="text-gray-600 text-sm">Submitted 2 days ago</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-800">Science Project</span>
                        <span className="text-blue-600 text-sm font-medium">Graded</span>
                      </div>
                      <p className="text-gray-600 text-sm">Grade: A+ | Excellent work!</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-800">English Essay</span>
                        <span className="text-yellow-600 text-sm font-medium">Due Tomorrow</span>
                      </div>
                      <p className="text-gray-600 text-sm">Submit before 11:59 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Online Results */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2 className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}>
              Academic Results & Progress
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <ScrollAnimation delay={0.1}>
                <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full ${themeClasses.primaryBg} flex items-center justify-center`}>
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold ${themeClasses.primary} text-center mb-4`}>View Results</h3>
                  <p className="text-gray-600 text-center mb-6">Access your exam results, report cards, and academic progress</p>
                  
                  <div className="space-y-3">
                    <button className={`w-full py-3 ${themeClasses.primaryBg} text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300`}>
                      Latest Report Card
                    </button>
                    <button className="w-full py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:border-gray-400 transition-all duration-300">
                      Mid-term Results
                    </button>
                    <button className="w-full py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:border-gray-400 transition-all duration-300">
                      Progress Tracker
                    </button>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={0.2}>
                <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full ${themeClasses.primaryBg} flex items-center justify-center`}>
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold ${themeClasses.primary} text-center mb-4`}>Access Instructions</h3>
                  <p className="text-gray-600 text-center mb-6">Follow these steps to access your academic results</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className={`w-6 h-6 rounded-full ${themeClasses.primaryBg} flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5`}>
                        1
                      </div>
                      <p className="text-gray-700">Login with your student ID and password</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className={`w-6 h-6 rounded-full ${themeClasses.primaryBg} flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5`}>
                        2
                      </div>
                      <p className="text-gray-700">Navigate to the "Results" section</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className={`w-6 h-6 rounded-full ${themeClasses.primaryBg} flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5`}>
                        3
                      </div>
                      <p className="text-gray-700">Select the desired exam or assessment</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className={`w-6 h-6 rounded-full ${themeClasses.primaryBg} flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5`}>
                        4
                      </div>
                      <p className="text-gray-700">Download or view your results online</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Class Teacher Support */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollAnimation>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center">
              <div className={`w-20 h-20 mx-auto mb-6 rounded-full ${themeClasses.primaryBg} flex items-center justify-center`}>
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className={`text-3xl font-bold ${themeClasses.primary} mb-4`}>Class Teacher Support Chat</h2>
              <p className="text-gray-600 mb-8">
                Need help with your studies? Connect with your class teacher for personalized guidance and support.
              </p>
              
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Ms. Sarah Johnson</p>
                      <p className="text-sm text-gray-600">Class Teacher - Grade 8A</p>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="text-left space-y-3">
                  <div className="bg-white rounded-xl p-3 text-sm text-gray-700">
                    "Hi! I'm here to help you with any academic questions or concerns. Feel free to reach out anytime during school hours."
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button className={`flex-1 py-3 ${themeClasses.primaryBg} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}>
                  Start Chat
                </button>
                <button className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 transition-all duration-300">
                  Schedule Call
                </button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default StudentZone;