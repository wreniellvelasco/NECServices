import React from "react";
import { ChevronRight, Phone } from "lucide-react";
import ServiceTabs from "./ServiceTabs";
import ExaminationPackageCard from "./ExaminationPackageCard";
import ServiceDetailsAccordion from "./ServiceDetailsAccordion";
import { Button } from "./ui/button";

const HomePage = () => {
  // Mock data for examination packages
  const examinationPackages = [
    {
      id: 1,
      title: "Standard Eye Examination",
      description:
        "A comprehensive suite of procedures medically curated to ensure a thorough assessment of your eye health.",
      price: 999.0,
      inclusions: [
        "Blood Pressure Test",
        "Visual Acuity Assessment",
        "Eye Motility Assessment",
        "Basic Color Vision Assessment",
        "Physical Eye Examination",
        "Standard Dry Eye Assessment",
        "Cataract Screening",
        "Glaucoma Screening VH Test",
        "Vision Examination & Correction",
      ],
    },
    {
      id: 2,
      title: "Premium Eye Examination",
      description:
        "An advanced examination package with additional specialized tests for comprehensive eye health assessment.",
      price: 1499.0,
      inclusions: [
        "All Standard Eye Examination Tests",
        "Advanced Retinal Imaging",
        "Corneal Topography",
        "Detailed Optic Nerve Analysis",
        "Extended Visual Field Testing",
      ],
    },
    {
      id: 3,
      title: "Pediatric Eye Examination",
      description:
        "Specialized eye examination tailored for children to assess visual development and eye health.",
      price: 899.0,
      inclusions: [
        "Child-Friendly Visual Acuity Tests",
        "Binocular Vision Assessment",
        "Color Vision Testing",
        "Eye Movement Evaluation",
        "Prescription Determination",
      ],
    },
  ];

  // Mock data for other services
  const otherServices = [
    { id: 1, title: "Biometry" },
    { id: 2, title: "Cycloplegic Eyedrops" },
    { id: 3, title: "Foreign Bodies Removal" },
    { id: 4, title: "Fundus Scan With AirDoc" },
    { id: 5, title: "Fundus Scan With Kenghua" },
    { id: 6, title: "Intra Ocular Pressure Assessment" },
    { id: 7, title: "Ishihara Color Vision Test" },
    { id: 8, title: "Ishihara With Farnsworth" },
    { id: 9, title: "Orthokeratology Lens" },
    { id: 10, title: "Orthokeratology Lens Fitting" },
    { id: 11, title: "Perimetry / Visual Field Test" },
    { id: 12, title: "Topography" },
    { id: 13, title: "Vision Therapy" },
    { id: 14, title: "Visual Performance Assessment" },
  ];

  // Mock data for service categories
  const serviceCategories = [
    { id: "eye-examinations", label: "Eye Examinations" },
    { id: "vision-correction", label: "Vision Correction" },
    { id: "eye-conditions", label: "Eye Conditions" },
    { id: "eyewear", label: "Eyewear" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=200&q=80"
              alt="Nakpil Eye Clinic Logo"
              className="h-12 w-12 rounded-full"
            />
            <div>
              <h1 className="text-indigo-900 font-bold text-xl">
                NAKPIL EYE CLINIC
              </h1>
              <p className="text-gray-500 text-xs">& VISION THERAPY CENTER</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-indigo-700">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-700">
              Booking
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-700 font-medium"
            >
              Services
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-700">
              Eye & Vision Care
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-700">
              About Us
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Phone className="h-4 w-4 text-indigo-700" />
              <span className="text-indigo-700 font-medium">
                (046) 501 0296
              </span>
            </div>
            <Button className="bg-indigo-900 hover:bg-indigo-800">
              CONTACT US
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 py-12 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-indigo-900 text-center mb-4">
            Services
          </h1>

          <div className="flex justify-center mb-8">
            <div className="bg-indigo-100 rounded-full px-4 py-2 flex items-center space-x-2 text-sm">
              <a href="#" className="text-indigo-700">
                Home
              </a>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <a href="#" className="text-indigo-700">
                Services
              </a>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="text-gray-500">Standard Eye Examination</span>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,122.7C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Medical cross icon */}
        <div className="absolute top-4 right-4 opacity-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-indigo-500"
          >
            <path d="M12 2v20M2 12h20"></path>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 -mt-6 relative z-10">
        {/* Service Categories Tabs */}
        <ServiceTabs
          categories={serviceCategories}
          activeCategory="eye-examinations"
        />

        {/* Standard Eye Examination Section */}
        <section className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">
                Standard Eye Examination
              </h2>

              <p className="text-gray-700 mb-6">
                Our Standard Eye Examination Package is a comprehensive suite of
                procedures medically curated to ensure a thorough assessment of
                your eye health. This all-encompassing package is designed to
                provide a complete understanding of your visual well-being.
              </p>

              <h3 className="text-xl font-semibold text-indigo-800 mb-4">
                Inclusions of the Standard Eye Examination Package
              </h3>

              <ServiceDetailsAccordion />

              <div className="mt-8 p-6 bg-indigo-50 rounded-lg border border-indigo-100">
                <p className="text-gray-700 mb-4">
                  Embark on a journey to optimal eye health with the Standard
                  Eye Examination Package at Nakpil Eye Clinic. Let us guide you
                  towards clarity, ensuring your eyes receive the meticulous
                  care they deserve.
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-indigo-900">
                      Php 999.00
                    </p>
                    <p className="text-xs text-gray-500">
                      Note: Price is subject to change without prior notice.
                    </p>
                  </div>

                  <Button className="bg-indigo-700 hover:bg-indigo-800">
                    Book Appointment
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-indigo-900 mb-4">
                  Examination Packages
                </h3>

                <div className="space-y-4">
                  {examinationPackages.map((pkg) => (
                    <ExaminationPackageCard key={pkg.id} package={pkg} />
                  ))}
                </div>
              </div>

              <div className="mt-8 bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-indigo-900 mb-4">
                  Other Services
                </h3>

                <div className="grid grid-cols-1 gap-2">
                  {otherServices.map((service) => (
                    <div
                      key={service.id}
                      className="flex items-center justify-between p-3 rounded-md hover:bg-indigo-50 transition-colors"
                    >
                      <span className="text-gray-700">{service.title}</span>
                      <ChevronRight className="h-4 w-4 text-indigo-400" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-indigo-900 mb-4">
                  Download
                </h3>

                <div className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left border-indigo-100 hover:bg-indigo-50 hover:text-indigo-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="12" y1="18" x2="12" y2="12"></line>
                      <line x1="9" y1="15" x2="15" y2="15"></line>
                    </svg>
                    Download our Brochures
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start text-left border-indigo-100 hover:bg-indigo-50 hover:text-indigo-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <line x1="10" y1="9" x2="8" y2="9"></line>
                    </svg>
                    Our Company Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-12 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=200&q=80"
                  alt="Nakpil Eye Clinic Logo"
                  className="h-10 w-10 rounded-full bg-white p-1"
                />
                <div>
                  <h3 className="font-bold text-lg">NAKPIL EYE CLINIC</h3>
                  <p className="text-indigo-200 text-xs">
                    & VISION THERAPY CENTER
                  </p>
                </div>
              </div>

              <p className="text-indigo-200 text-sm mb-4">
                A trusted provider of eye care services. Committed to providing
                premium quality products and services.
              </p>

              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-indigo-200" />
                <span className="text-indigo-200">(046) 501 0926</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-indigo-200 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-indigo-200 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-indigo-200 hover:text-white">
                    Booking
                  </a>
                </li>
                <li>
                  <a href="#" className="text-indigo-200 hover:text-white">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" className="text-indigo-200 hover:text-white">
                    Our Team
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Our Service</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-indigo-200 hover:text-white">
                    Eye Tests
                  </a>
                </li>
                <li>
                  <a href="#" className="text-indigo-200 hover:text-white">
                    Common Eye & Vision Condition
                  </a>
                </li>
                <li>
                  <a href="#" className="text-indigo-200 hover:text-white">
                    Vision Therapy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-indigo-200 hover:text-white">
                    Neuro Optometric Rehabilitation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-indigo-200 hover:text-white">
                    Myopia Management
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
              <div className="flex mb-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-3 py-2 rounded-l-md w-full text-gray-800 focus:outline-none"
                />
                <button className="bg-indigo-700 hover:bg-indigo-600 px-4 py-2 rounded-r-md">
                  Subscribe Now
                </button>
              </div>

              <div className="flex space-x-4">
                <a href="#" className="text-indigo-200 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-indigo-200 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-indigo-200 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-indigo-800 text-center text-indigo-300 text-sm">
            <p>Copyright © 2023 Developed by Nakpil Software Enterprise</p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 opacity-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-indigo-300"
          >
            <path d="M12 2v20M2 12h20"></path>
          </svg>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
