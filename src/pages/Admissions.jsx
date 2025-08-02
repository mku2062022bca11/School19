import React from "react";
import {
  Download,
  CheckCircle,
  Users,
  Calculator,
  FileText,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import ScrollAnimation from "../components/ScrollAnimation";
import { useTheme } from "../contexts/ThemeContext";

const Admissions = () => {
  const { themeClasses } = useTheme();

  const admissionSteps = [
    {
      step: 1,
      title: "Application Form",
      description: "Download and fill the admission form completely",
      icon: <FileText className="w-8 h-8" />,
    },
    {
      step: 2,
      title: "Document Submission",
      description: "Submit required documents and photographs",
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      step: 3,
      title: "Interaction Session",
      description: "Student and parent interaction with faculty",
      icon: <Users className="w-8 h-8" />,
    },
    {
      step: 4,
      title: "Assessment",
      description: "Age-appropriate assessment for grade placement",
      icon: <Calculator className="w-8 h-8" />,
    },
    {
      step: 5,
      title: "Admission Confirmation",
      description: "Fee payment and admission confirmation",
      icon: <CheckCircle className="w-8 h-8" />,
    },
  ];

  const eligibilityCriteria = [
    {
      grade: "Pre-KG",
      age: "3 years completed",
      requirements: "Birth certificate, immunization record",
    },
    {
      grade: "KG",
      age: "4 years completed",
      requirements: "Birth certificate, previous school certificate",
    },
    {
      grade: "Grade 1",
      age: "5 years completed",
      requirements: "Birth certificate, KG completion certificate",
    },
    {
      grade: "Grade 2-5",
      age: "6-10 years",
      requirements: "Transfer certificate, report cards, birth certificate",
    },
    {
      grade: "Grade 6-8",
      age: "10-13 years",
      requirements: "Transfer certificate, report cards, character certificate",
    },
    {
      grade: "Grade 9-10",
      age: "13-15 years",
      requirements:
        "Transfer certificate, board certificates, character certificate",
    },
    {
      grade: "Grade 11-12",
      age: "15-17 years",
      requirements:
        "Class 10 marksheet, transfer certificate, character certificate",
    },
  ];

  const requiredDocuments = [
    {
      document: "Birth Certificate",
      icon: <FileText className="w-5 h-5" />,
      downloadable: false,
    },
    {
      document: "Transfer Certificate",
      icon: <FileText className="w-5 h-5" />,
      downloadable: false,
    },
    {
      document: "Previous Report Cards",
      icon: <FileText className="w-5 h-5" />,
      downloadable: false,
    },
    {
      document: "Passport Size Photos (4 copies)",
      icon: <FileText className="w-5 h-5" />,
      downloadable: false,
    },
    {
      document: "Address Proof",
      icon: <FileText className="w-5 h-5" />,
      downloadable: false,
    },
    {
      document: "Income Certificate",
      icon: <FileText className="w-5 h-5" />,
      downloadable: false,
    },
    {
      document: "Admission Form",
      icon: <Download className="w-5 h-5" />,
      downloadable: true,
    },
    {
      document: "Medical Form",
      icon: <Download className="w-5 h-5" />,
      downloadable: true,
    },
  ];

  const feeStructure = [
    {
      plan: "Standard Plan",
      description: "Complete academic program with basic facilities",
      grades: "Pre-KG to Grade 5",
      admission: "₹15,000",
      tuition: "₹8,000/month",
      features: [
        "Regular curriculum",
        "Library access",
        "Sports activities",
        "Basic lab facilities",
      ],
    },
    {
      plan: "Premium Plan",
      description: "Enhanced learning with additional facilities",
      grades: "Grade 6 to Grade 10",
      admission: "₹25,000",
      tuition: "₹12,000/month",
      features: [
        "Advanced curriculum",
        "Smart classrooms",
        "All lab access",
        "Extra-curricular activities",
        "Career guidance",
      ],
    },
    {
      plan: "Excellence Plan",
      description: "Comprehensive program with college preparation",
      grades: "Grade 11 to Grade 12",
      admission: "₹35,000",
      tuition: "₹15,000/month",
      features: [
        "Specialized streams",
        "College counseling",
        "Research projects",
        "Industry mentorship",
        "Scholarship opportunities",
      ],
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
              "url(./JoinUs/JoinImg1.jpeg)",
          }}
        ></div>
        <div className="absolute inset-0 bg-white/85"></div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollAnimation>
            <h1
              className={`text-5xl md:text-6xl font-bold ${themeClasses.primary} mb-6 relative z-10`}
            >
              📝 Join Our Learning Family
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto relative z-10">
              Begin your child's journey of discovery, growth, and excellence at
              OB365 School. Where every student's potential is nurtured and
              celebrated.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2
              className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}
            >
              Simple Admission Process
            </h2>

            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200"></div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {admissionSteps.map((step, index) => (
                  <ScrollAnimation key={index} delay={index * 0.1}>
                    <div className="text-center relative">
                      <div
                        className={`w-20 h-20 mx-auto mb-4 rounded-full ${themeClasses.primaryBg} flex items-center justify-center shadow-lg relative z-10`}
                      >
                        <div className="text-white">{step.icon}</div>
                      </div>

                      <div
                        className={`absolute -top-2 -left-2 w-6 h-6 rounded-full ${themeClasses.primaryBg} text-white text-sm font-bold flex items-center justify-center`}
                      >
                        {step.step}
                      </div>

                      <h3
                        className={`text-lg font-bold ${themeClasses.primary} mb-2`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2
              className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}
            >
              Age & Grade Eligibility Chart
            </h2>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className={`${themeClasses.primaryBg} text-white p-6`}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-semibold text-center">
                  <div>Grade Level</div>
                  <div>Age Requirement</div>
                  <div>Required Documents</div>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {eligibilityCriteria.map((criteria, index) => (
                  <ScrollAnimation key={index} delay={index * 0.05}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 hover:bg-gray-50 transition-colors">
                      <div
                        className={`font-semibold ${themeClasses.primary} text-center md:text-left`}
                      >
                        {criteria.grade}
                      </div>
                      <div className="text-gray-700 text-center md:text-left">
                        {criteria.age}
                      </div>
                      <div className="text-gray-600 text-sm text-center md:text-left">
                        {criteria.requirements}
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Document Checklist */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2
              className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}
            >
              Document Checklist
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {requiredDocuments.map((doc, index) => (
                <ScrollAnimation key={index} delay={index * 0.1}>
                  <div className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-2 rounded-full ${themeClasses.primaryBg} text-white`}
                      >
                        {doc.icon}
                      </div>
                      <span className="font-medium text-gray-800">
                        {doc.document}
                      </span>
                    </div>

                    {doc.downloadable && (
                      <button
                        className={`px-4 py-2 ${themeClasses.primaryBg} text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105`}
                      >
                        Download
                      </button>
                    )}
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2
              className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}
            >
              Transparent Fee Structure
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {feeStructure.map((plan, index) => (
                <ScrollAnimation key={index} delay={index * 0.1}>
                  <div
                    className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                      index === 1 ? `ring-4 ${themeClasses.primaryBorder}` : ""
                    }`}
                  >
                    {index === 1 && (
                      <div
                        className={`${themeClasses.primaryBg} text-white text-center py-2 px-4 rounded-full text-sm font-medium mb-4`}
                      >
                        Most Popular
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3
                        className={`text-2xl font-bold ${themeClasses.primary} mb-2`}
                      >
                        {plan.plan}
                      </h3>
                      <p className="text-gray-600 mb-4">{plan.description}</p>
                      <div className="text-sm text-gray-500 mb-4">
                        {plan.grades}
                      </div>

                      <div className="space-y-2">
                        <div>
                          <span className="text-3xl font-bold text-gray-800">
                            {plan.admission}
                          </span>
                          <span className="text-gray-600 ml-2">
                            admission fee
                          </span>
                        </div>
                        <div>
                          <span className="text-2xl font-bold text-gray-800">
                            {plan.tuition}
                          </span>
                          <span className="text-gray-600 ml-2">
                            tuition fee
                          </span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-700"
                        >
                          <CheckCircle
                            className={`w-5 h-5 ${themeClasses.primary} mr-3`}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`w-full py-3 ${themeClasses.primaryBg} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
                    >
                      Choose This Plan
                    </button>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Download Form CTA */}
      <section className={`py-16 ${themeClasses.primaryBg} text-white`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollAnimation>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Begin the Journey?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Download our admission form and take the first step towards your
                child's bright future.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-4 bg-white text-gray-800 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                  <Download className="w-6 h-6" />
                  <span>Download Admission Form</span>
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300 hover:scale-105">
                  Schedule Campus Visit
                </button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Admission Helpdesk */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2
              className={`text-4xl font-bold ${themeClasses.primary} text-center mb-12`}
            >
              Admission Helpdesk
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <ScrollAnimation delay={0.1}>
                <div className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full ${themeClasses.primaryBg} flex items-center justify-center`}
                  >
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className={`text-xl font-bold ${themeClasses.primary} mb-2`}
                  >
                    Call Us
                  </h3>
                  <p className="text-gray-700">+1 (555) 123-4567</p>
                  <p className="text-gray-600 text-sm">Mon-Fri: 9 AM - 5 PM</p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <div className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full ${themeClasses.primaryBg} flex items-center justify-center`}
                  >
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className={`text-xl font-bold ${themeClasses.primary} mb-2`}
                  >
                    Email Us
                  </h3>
                  <p className="text-gray-700">admissions@everlight.edu</p>
                  <p className="text-gray-600 text-sm">
                    Response within 24 hours
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <div className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full ${themeClasses.primaryBg} flex items-center justify-center`}
                  >
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className={`text-xl font-bold ${themeClasses.primary} mb-2`}
                  >
                    Visit Us
                  </h3>
                  <p className="text-gray-700">123 Education Street</p>
                  <p className="text-gray-600 text-sm">Knowledge City</p>
                </div>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
