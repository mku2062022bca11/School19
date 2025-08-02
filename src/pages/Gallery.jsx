import React, { useState } from "react";
import {
  Play,
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
  Users,
  Trophy,
  Heart,
} from "lucide-react";
import ScrollAnimation from "../components/ScrollAnimation";
import { useTheme } from "../contexts/ThemeContext";

const Gallery = () => {
  const { themeClasses } = useTheme();
  const [activeTab, setActiveTab] = useState("events");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentCarouselSlide, setCurrentCarouselSlide] = useState(0);

  const carouselEvents = [
    {
      title: "Annual Day 2024",
      description:
        "A spectacular celebration of talent, creativity, and achievement",
      image: "./Moments/MomentsImg1.jpeg",
      date: "March 15, 2024",
    },
    {
      title: "Science Fair Excellence",
      description:
        "Students showcase innovative projects and groundbreaking research",
      image: "./Moments/MomentsImg2.jpeg",
      date: "February 28, 2024",
    },
    {
      title: "Sports Day Championship",
      description: "Athletic excellence and team spirit on full display",
      image: "./Moments/MomentsImg3.jpeg",
      date: "January 20, 2024",
    },
    {
      title: "Cultural Festival",
      description: "Celebrating diversity through music, dance, and art",
      image: "./Moments/MomentsImg4.jpeg",
      date: "December 10, 2023",
    },
  ];

  const galleryTabs = [
    {
      id: "events",
      name: "School Events",
      icon: <Calendar className="w-5 h-5" />,
    },
    { id: "campus", name: "Campus Life", icon: <Users className="w-5 h-5" /> },
    { id: "sports", name: "Sports", icon: <Trophy className="w-5 h-5" /> },
    {
      id: "celebrations",
      name: "Celebrations",
      icon: <Heart className="w-5 h-5" />,
    },
  ];

  const galleryImages = {
    events: [
      "./Moments/MomentsImg5.jpeg",
      "./Moments/MomentsImg6.jpeg",
      "./Moments/MomentsImg7.jpeg",
      "./Moments/MomentsImg8.jpeg",
      "./Moments/MomentsImg9.jpeg",
      "./Moments/MomentsImg10.jpeg",
      "./Moments/MomentsImg11.jpeg",
      "./Moments/MomentsImg12.jpeg",
      "./Moments/MomentsImg13.jpeg",
      "./Moments/MomentsImg14.jpeg",
    ],
    campus: [
      "./Moments/MomentsImg15.jpeg",
      "./Moments/MomentsImg16.jpeg",
      "./Moments/MomentsImg17.jpeg",
      "./Moments/MomentsImg18.jpeg",
      "./Moments/MomentsImg19.jpeg",
      "./Moments/MomentsImg20.jpeg",
      "./Moments/MomentsImg21.jpeg",
      "./Moments/MomentsImg22.jpeg",
    ],
    sports: [
      "./Moments/MomentsImg23.jpeg",
      "./Moments/MomentsImg24.jpeg",
      "./Moments/MomentsImg25.jpeg",
      "./Moments/MomentsImg26.jpeg",
      "./Moments/MomentsImg27.jpeg",
      "./Moments/MomentsImg28.jpg",
      "./Moments/MomentsImg29.jpg",
    ],
    celebrations: [
      "./Moments/MomentsImg30.jpeg",
      "./Moments/MomentsImg31.jpeg",
      "./Moments/MomentsImg32.jpeg",
      "./Moments/MomentsImg33.jpeg",
      "./Moments/MomentsImg34.jpeg",
      "./Moments/MomentsImg35.jpeg",
    ],
  };

  const videos = [
    {
      title: "Annual Day Highlights 2024",
      thumbnail:
        "./Moments/MomentsImg36.jpeg",
      duration: "5:32",
    },
    {
      title: "Science Fair Innovations",
      thumbnail:
        "./Moments/MomentsImg37.jpeg",
      duration: "3:45",
    },
    {
      title: "Sports Day Champions",
      thumbnail:
        "./Moments/MomentsImg38.jpeg",
      duration: "4:18",
    },
    {
      title: "Campus Tour 2024",
      thumbnail:
        "./Moments/MomentsImg39.jpeg",
      duration: "6:22",
    },
  ];

  const studentOfMonth = [
    {
      name: "Emma Johnson",
      grade: "Grade 10",
      achievement: "Outstanding Academic Performance",
      image:
        "./Moments/MomentsImg40.jpeg",
    },
    {
      name: "Alex Chen",
      grade: "Grade 8",
      achievement: "Science Fair Winner",
      image:
        "./Moments/MomentsImg41.jpeg",
    },
    {
      name: "Sophia Rodriguez",
      grade: "Grade 12",
      achievement: "Leadership Excellence",
      image:
        "./Moments/MomentsImg42.jpeg",
    },
  ];

  const nextCarouselSlide = () => {
    setCurrentCarouselSlide((prev) => (prev + 1) % carouselEvents.length);
  };

  const prevCarouselSlide = () => {
    setCurrentCarouselSlide(
      (prev) => (prev - 1 + carouselEvents.length) % carouselEvents.length
    );
  };

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(./Moments/MomentsImg43.jpeg)",
          }}
        ></div>
        <div className="absolute inset-0 bg-white/85"></div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollAnimation>
            <h1
              className={`text-5xl md:text-6xl font-bold ${themeClasses.primary} mb-6 relative z-10`}
            >
              🎉 Precious Moments
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto relative z-10">
              Capturing the joy, achievements, and memories that make our school
              community special. Explore our vibrant gallery of events,
              celebrations, and daily life.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Events Carousel */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2
              className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}
            >
              Featured Events Highlights
            </h2>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentCarouselSlide * 100}%)`,
                  }}
                >
                  {carouselEvents.map((event, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-96 md:h-[500px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <div className="max-w-4xl mx-auto">
                          <p className="text-sm opacity-90 mb-2">
                            {event.date}
                          </p>
                          <h3 className="text-3xl md:text-4xl font-bold mb-4">
                            {event.title}
                          </h3>
                          <p className="text-lg md:text-xl opacity-90">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={prevCarouselSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextCarouselSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselEvents.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCarouselSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentCarouselSlide
                        ? "bg-white"
                        : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Photo Gallery Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2
              className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}
            >
              Photo Gallery Collection
            </h2>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {galleryTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? `${themeClasses.primaryBg} text-white shadow-lg scale-105`
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {galleryImages[activeTab].map((image, index) => (
                <ScrollAnimation key={index} delay={index * 0.1}>
                  <div
                    className="break-inside-avoid cursor-pointer group"
                    onClick={() => openImageModal(image)}
                  >
                    <img
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2
              className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}
            >
              Video Highlights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {videos.map((video, index) => (
                <ScrollAnimation key={index} delay={index * 0.1}>
                  <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className={`w-16 h-16 rounded-full ${themeClasses.primaryBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-800 text-center">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Student of the Month */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2
              className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}
            >
              Students of the Month
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {studentOfMonth.map((student, index) => (
                <ScrollAnimation key={index} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                      <img
                        src={student.image}
                        alt={student.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h3
                      className={`text-xl font-bold ${themeClasses.primary} mb-1`}
                    >
                      {student.name}
                    </h3>
                    <p className="text-gray-600 mb-2">{student.grade}</p>
                    <p className="text-gray-700 font-medium">
                      {student.achievement}
                    </p>

                    <div className="mt-4">
                      <div
                        className={`inline-flex items-center space-x-1 px-4 py-2 ${themeClasses.primaryBg} text-white rounded-full text-sm`}
                      >
                        <Trophy className="w-4 h-4" />
                        <span>Winner</span>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeImageModal}
              className="absolute -top-4 -right-4 bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery modal"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
