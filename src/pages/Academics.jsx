import React from 'react';
import { BookOpen, Microscope, Palette, Music, Globe, Calculator, Atom, Code } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import { useTheme } from '../contexts/ThemeContext';

const Academics = () => {
  const { themeClasses } = useTheme();

  const teachingMethods = [
    {
      title: 'Inquiry-Based Learning',
      description: 'Students explore concepts through questioning, investigation, and discovery',
      icon: <BookOpen className="w-8 h-8" />,
      features: ['Critical thinking development', 'Research skills', 'Problem-solving approach']
    },
    {
      title: 'Project-Based Learning',
      description: 'Real-world projects that integrate multiple subjects and skills',
      icon: <Code className="w-8 h-8" />,
      features: ['Collaborative work', 'Practical application', 'Presentation skills']
    },
    {
      title: 'STEAM Education',
      description: 'Science, Technology, Engineering, Arts, and Mathematics integration',
      icon: <Atom className="w-8 h-8" />,
      features: ['Innovation mindset', 'Creative problem-solving', 'Future-ready skills']
    }
  ];

  const curriculum = [
    { grade: 'Pre-KG', age: '3-4 years', focus: 'Play-based learning, sensory development, basic social skills' },
    { grade: 'KG', age: '4-5 years', focus: 'Phonics, numbers, creative expression, motor skills' },
    { grade: 'Grade 1-2', age: '5-7 years', focus: 'Foundation literacy, numeracy, science exploration' },
    { grade: 'Grade 3-5', age: '7-10 years', focus: 'Core subjects, critical thinking, project work' },
    { grade: 'Grade 6-8', age: '10-13 years', focus: 'Advanced concepts, research skills, leadership' },
    { grade: 'Grade 9-10', age: '13-15 years', focus: 'Board preparation, career exploration, specialization' },
    { grade: 'Grade 11-12', age: '15-17 years', focus: 'College preparation, advanced subjects, internships' }
  ];

  const subjects = [
    { name: 'English Language & Literature', icon: <BookOpen className="w-6 h-6" />, color: 'bg-blue-500' },
    { name: 'Mathematics', icon: <Calculator className="w-6 h-6" />, color: 'bg-green-500' },
    { name: 'Science (Physics, Chemistry, Biology)', icon: <Microscope className="w-6 h-6" />, color: 'bg-purple-500' },
    { name: 'Social Studies & History', icon: <Globe className="w-6 h-6" />, color: 'bg-orange-500' },
    { name: 'Visual & Performing Arts', icon: <Palette className="w-6 h-6" />, color: 'bg-pink-500' },
    { name: 'Music & Dance', icon: <Music className="w-6 h-6" />, color: 'bg-indigo-500' },
    { name: 'Computer Science & Technology', icon: <Code className="w-6 h-6" />, color: 'bg-gray-600' },
    { name: 'Physical Education & Sports', icon: <Globe className="w-6 h-6" />, color: 'bg-red-500' }
  ];

  const calendar = [
    { month: 'April', events: ['New Academic Year Begins', 'Orientation Week'], icon: '🌸' },
    { month: 'May', events: ['Summer Projects', 'Sports Camp'], icon: '☀️' },
    { month: 'June', events: ['First Term Exams', 'Parent-Teacher Meetings'], icon: '📚' },
    { month: 'July', events: ['Science Fair', 'Arts Festival'], icon: '🔬' },
    { month: 'August', events: ['Independence Day Celebrations', 'Debate Competition'], icon: '🇮🇳' },
    { month: 'September', events: ['Second Term Begins', 'Teachers Day'], icon: '🍂' },
    { month: 'October', events: ['Mid-term Exams', 'Cultural Week'], icon: '🎭' },
    { month: 'November', events: ['Annual Day Preparations', 'Inter-school Competitions'], icon: '🏆' },
    { month: 'December', events: ['Annual Day', 'Winter Break Begins'], icon: '🎉' },
    { month: 'January', events: ['Final Term Begins', 'Republic Day'], icon: '❄️' },
    { month: 'February', events: ['Board Exam Preparation', 'Career Guidance'], icon: '📖' },
    { month: 'March', events: ['Final Examinations', 'Graduation Ceremony'], icon: '🎓' }
  ];

  const faculty = [
    { name: 'Dr. Sarah Johnson', subject: 'English Literature', experience: '15 years', specialization: 'Creative Writing' },
    { name: 'Prof. Michael Chen', subject: 'Mathematics', experience: '18 years', specialization: 'Advanced Calculus' },
    { name: 'Ms. Priya Sharma', subject: 'Physics', experience: '12 years', specialization: 'Quantum Mechanics' },
    { name: 'Dr. James Wilson', subject: 'Chemistry', experience: '20 years', specialization: 'Organic Chemistry' },
    { name: 'Ms. Lisa Rodriguez', subject: 'Biology', experience: '14 years', specialization: 'Genetics' },
    { name: 'Mr. David Kumar', subject: 'Computer Science', experience: '10 years', specialization: 'AI & Machine Learning' }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(./BrainBloom/BrainImg1.jpeg)'
          }}
        ></div>
        <div className="absolute inset-0 bg-white/85"></div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollAnimation>
            <h1 className={`text-5xl md:text-6xl font-bold ${themeClasses.primary} mb-6 relative z-10`}>
              📚 Brain Bloom Academy
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto relative z-10">
              Where minds flourish through innovative teaching methods, comprehensive curriculum, 
              and dedicated faculty committed to academic excellence.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Teaching Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2 className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}>
              Our Teaching Philosophy
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teachingMethods.map((method, index) => (
                <ScrollAnimation key={index} delay={index * 0.1}>
                  <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-2 right-2 opacity-10">
                      <img 
                        src="./BrainBloom/BrainImg2.jpeg" 
                        alt="Learning" 
                        className="w-20 h-16 rounded-lg object-cover"
                      />
                    </div>
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full ${themeClasses.primaryBg} flex items-center justify-center`}>
                      <div className="text-white">{method.icon}</div>
                    </div>
                    <h3 className={`text-2xl font-bold ${themeClasses.primary} text-center mb-4`}>
                      {method.title}
                    </h3>
                    <p className="text-gray-700 text-center mb-6">{method.description}</p>
                    <ul className="space-y-2">
                      {method.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className={`w-2 h-2 rounded-full ${themeClasses.primaryBg} mr-3`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Curriculum Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2 className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}>
              Class-wise Curriculum Structure
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {curriculum.map((level, index) => (
                <ScrollAnimation key={index} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className={`text-xl font-bold ${themeClasses.primary}`}>{level.grade}</h3>
                      <span className="text-gray-600 font-medium">{level.age}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{level.focus}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Subjects Offered */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2 className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}>
              Comprehensive Subject Portfolio
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {subjects.map((subject, index) => (
                <ScrollAnimation key={index} delay={index * 0.1}>
                  <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                    <div className={`w-12 h-12 rounded-full ${subject.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">{subject.icon}</div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 leading-tight">{subject.name}</h3>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2 className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}>
              Academic Calendar 2024-25
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {calendar.map((month, index) => (
                <ScrollAnimation key={index} delay={index * 0.05}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">{month.icon}</div>
                      <h3 className={`text-xl font-bold ${themeClasses.primary}`}>{month.month}</h3>
                    </div>
                    <ul className="space-y-2">
                      {month.events.map((event, eventIndex) => (
                        <li key={eventIndex} className="text-gray-700 text-sm flex items-start">
                          <div className={`w-2 h-2 rounded-full ${themeClasses.primaryBg} mt-2 mr-2 flex-shrink-0`}></div>
                          {event}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Faculty Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2 className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}>
              Meet Our Expert Faculty
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {faculty.map((teacher, index) => (
                <ScrollAnimation key={index} delay={index * 0.1}>
                  <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <BookOpen className={`w-10 h-10 ${themeClasses.primary}`} />
                      </div>
                      
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{teacher.name}</h3>
                        <p className={`font-semibold ${themeClasses.primary} mb-1`}>{teacher.subject}</p>
                        <p className="text-gray-600 text-sm mb-2">{teacher.experience}</p>
                        
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white rounded-lg p-3 mt-3 shadow-md">
                            <p className="text-sm text-gray-700">
                              <span className="font-medium">Specialization:</span> {teacher.specialization}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Smart Classrooms */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2 className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}>
              Modern Learning Infrastructure
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollAnimation delay={0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full ${themeClasses.primaryBg} flex items-center justify-center`}>
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold ${themeClasses.primary} text-center mb-4`}>Smart Classrooms</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Interactive whiteboards</li>
                    <li>• High-speed internet connectivity</li>
                    <li>• Audio-visual learning systems</li>
                    <li>• Digital content library</li>
                  </ul>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={0.2}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full ${themeClasses.primaryBg} flex items-center justify-center`}>
                    <Microscope className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold ${themeClasses.primary} text-center mb-4`}>Science Labs</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Physics laboratory</li>
                    <li>• Chemistry laboratory</li>
                    <li>• Biology laboratory</li>
                    <li>• Research facilities</li>
                  </ul>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={0.3}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full ${themeClasses.primaryBg} flex items-center justify-center`}>
                    <Atom className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold ${themeClasses.primary} text-center mb-4`}>Innovation Labs</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Robotics workshop</li>
                    <li>• 3D printing facility</li>
                    <li>• Coding laboratory</li>
                    <li>• Maker space</li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Academics;