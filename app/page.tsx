"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Balatro from "./component/Balatro";
import LoadingScreen from "./component/LoadingScreen";
import MobileMenu from "./component/MobileMenu";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import PortfolioTabs from "./component/PortfolioTabs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const swiperRef = useRef<SwiperType | null>(null);

  const handleNext = () => {
    console.log("next");
    swiperRef.current?.slideNext();
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <main>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>
      <motion.header
        className="fixed z-99 w-full top-0"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <motion.div
          className="top-line bg-black light-bg w-vw h-2.5"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        ></motion.div>
        <div className="header-container flex justify-start items-center px-4 sm:px-6 lg:px-10 max-w-[1800px] mx-auto">
          <motion.div
            className="header-logo-box bg-black light-bg"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <img
              className="w-16 sm:w-20 lg:w-[100px] h-auto light-hidden"
              src="/images/logo.svg"
              alt=""
            />
            <img
              className="w-16 sm:w-20 lg:w-[100px] h-auto hidden light-visible"
              src="/images/logo_black.svg"
              alt=""
            />
            <svg
              className="svg-corner absolute left-0 bottom-[-30px]"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_310_2)">
                <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#000"></path>
              </g>
              <defs>
                <clipPath id="clip0_310_2">
                  <rect width="30" height="30" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <svg
              className="svg-corner absolute right-[-30px] top-0"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_310_2)">
                <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#000"></path>
              </g>
              <defs>
                <clipPath id="clip0_310_2">
                  <rect width="30" height="30" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </motion.div>
          <div className="flex items-center gap-4 ml-auto lg:ml-0">
            {/* Desktop Navigation */}
            <motion.div
              className="hidden lg:block"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
            >
              <nav className="navigation flex items-center">
                <motion.a
                  href="#project"
                  className="mx-2.5"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.1, ease: "easeOut" }}
                >
                  Profject
                </motion.a>
                <motion.a
                  href="#project"
                  className="mx-2.5"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.2, ease: "easeOut" }}
                >
                  About
                </motion.a>
                <motion.a
                  href="#project"
                  className="ml-2.5 mr-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.3, ease: "easeOut" }}
                >
                  Education
                </motion.a>
                <motion.button
                  onClick={toggleDarkMode}
                  className="border-black rounded-full border-1 p-2 cursor-pointer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.4, ease: "easeOut" }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className={` ${
                      isDarkMode
                        ? "lightmode text-white"
                        : "darkmode text-black"
                    }`}
                  ></div>
                </motion.button>
              </nav>
            </motion.div>

            {/* Mobile Hamburger Button */}
            <motion.button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.2, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      <div
        className={`min-h-screen mt-2.5 pb-28 light-bg ${
          isDarkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <motion.div
          className="hero-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full max-w-[1800px] px-4 sm:px-6 lg:px-10 m-auto">
            <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-2.5 min-h-[600px] sm:min-h-[700px] h-[95vh] lg:h-[95vh]">
              <div className="hero-left relative max-w-full w-full h-full lg:h-full rounded-4xl flex items-end order-2 lg:order-1">
                <Balatro
                  color={[0.5, 0.7, 1]}
                  mouseReact={true}
                  amplitude={0.1}
                  speed={1.0}
                />
                <div className="content-box absolute pt-3 sm:pt-5 pr-3 sm:pr-5 left-0 max-w-full lg:max-w-1/2 w-full bg-black light-bg h-48 sm:h-60 rounded-tr-[20px] sm:rounded-tr-[30px]">
                  <h2 className="text-white font-semibold text-lg sm:text-xl lg:text-2xl">
                    Experienced Web Developer
                  </h2>
                  <svg
                    className="svg-corner corner-content-box-two top-[-30px] absolute -rotate-90"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_310_2)">
                      <path
                        d="M30 0H0V30C0 13.431 13.431 0 30 0Z"
                        fill="#000"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_310_2">
                        <rect width="30" height="30" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    className="svg-corner corner-content-box-two right-[-30px] bottom-0 absolute -rotate-90"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_310_2)">
                      <path
                        d="M30 0H0V30C0 13.431 13.431 0 30 0Z"
                        fill="#000"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_310_2">
                        <rect width="30" height="30" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <a
                    className="scroll-indicator absolute bottom-0 left-0 border border-white p-4 rounded-full rotate-90 dark-bg"
                    href="#about"
                  >
                    <img src="data:image/svg+xml,%3csvg%20width='19'%20height='19'%20viewBox='0%200%2019%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.5%209.5H2.5M16.5%209.5L10.5%2015.5M16.5%209.5L10.5%203.5'%20stroke='white'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" />
                  </a>
                </div>
              </div>
              <div className="hero-right flex flex-col lg:flex-col justify-center lg:justify-normal gap-4 lg:gap-2.5 items-center h-80 sm:h-96 lg:h-full flex-grow relative order-1 lg:order-2">
                <div className="profile-img w-32 sm:w-48 lg:w-64 rounded-full border-2 sm:border-4 border-white">
                  <img
                    src="/images/IMG_2283.jpeg"
                    alt="profile"
                    className="rounded-full border-1 border-black"
                  />
                </div>
                <div className="swiper-box w-full sm:w-48 lg:w-64 h-48 sm:h-64 lg:h-full rounded-[20px] sm:rounded-[30px]">
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => {
                      console.log(swiper);
                      swiperRef.current = swiper;
                    }}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                      dynamicBullets: false,
                      // type: 'fraction', // 숫자 형태 (예: 1/4)
                      //type: "progressbar", // 프로그레스바 형태
                    }}
                    modules={[Pagination]}
                    loop={true}
                    className="w-full h-full bg-[#5c54f9] rounded-[20px] sm:rounded-[30px] p-2 sm:p-4"
                  >
                    <SwiperSlide className="flex flex-col items-center justify-center text-center">
                      <img
                        src="/images/web-white.svg"
                        alt=""
                        className="w-12 h-12 sm:w-16 sm:h-16 mb-3"
                      />
                      <p className="text-sm sm:text-base">
                        Developed over 30 websites
                      </p>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col items-center justify-center text-center">
                      <img
                        src="/images/laravel.svg"
                        alt=""
                        className="w-12 h-12 sm:w-16 sm:h-16 mb-3"
                      />
                      <p className="text-sm sm:text-base">
                        Laravel Framework Expert
                      </p>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col items-center justify-center text-center">
                      <img
                        src="/images/react.svg"
                        alt=""
                        className="w-12 h-12 sm:w-16 sm:h-16 mb-3"
                      />
                      <p className="text-sm sm:text-base">React.js Developer</p>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col items-center justify-center text-center">
                      <img
                        src="/images/nextjs.svg"
                        alt=""
                        className="w-12 h-12 sm:w-16 sm:h-16 mb-3"
                      />
                      <p className="text-sm sm:text-base">Next.js Specialist</p>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col items-center justify-center text-center">
                      <img
                        src="/images/wordpress.svg"
                        alt=""
                        className="w-12 h-12 sm:w-16 sm:h-16 mb-3"
                      />
                      <p className="text-sm sm:text-base">WordPress Expert</p>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="swiper-btn-box absolute right-0 bottom-0 z-10 rounded-tl-[25px] sm:rounded-tl-[35px] bg-black light-bg aspect-square w-[40px] sm:w-[60px] flex items-end justify-end">
                  <div className="blog-slider-button cursor-pointer">
                    <span
                      onClick={handleNext}
                      className="w-[30px] sm:w-[50px] aspect-square rounded-full flex items-center justify-center bg-black border-1 sm:border-2 border-white"
                    >
                      <img
                        src="data:image/svg+xml,%3csvg%20width='19'%20height='19'%20viewBox='0%200%2019%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.5%209.5H2.5M16.5%209.5L10.5%2015.5M16.5%209.5L10.5%203.5'%20stroke='white'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                        alt="arrow pointing right"
                      />
                    </span>
                    <svg
                      className="svg-corner corner-slider-button-one absolute top-[-30px] rotate-180 right-0"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_310_2)">
                        <path
                          d="M30 0H0V30C0 13.431 13.431 0 30 0Z"
                          fill="#000"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_310_2">
                          <rect width="30" height="30" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      className="svg-corner corner-slider-button-two absolute bottom-0 rotate-180 left-[-30px]"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_310_2)">
                        <path
                          d="M30 0H0V30C0 13.431 13.431 0 30 0Z"
                          fill="#000"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_310_2">
                          <rect width="30" height="30" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="container mx-auto">
          {/* Dark Mode Toggle */}
          <div className="flex justify-end mb-4"></div>

          {/* Header/Hero Section - Simplified */}
          <section className="text-center my-16 sm:my-20 lg:my-28 px-4 sm:px-6 lg:px-10">
            <p className="text-lg sm:text-xl text-gray-400"></p>
          </section>

          {/* Skills Section */}
          <motion.section
            className="my-16 sm:my-20 lg:my-28 px-4 sm:px-6 lg:px-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center">
              S K I L L S
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              <div className="p-4 sm:p-6 rounded-lg bg-gray-700 light-bg light-gray shadow-xl">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                  Strong
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "WordPress",
                    "PHP",
                    "Elementor Pro",
                    "JavaScript (ES6+)/jQuery",
                    "HTML5",
                    "SASS",
                    "Express.js",
                    "RESTful API",
                    "MongoDB",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center bg-[#5c54f9] text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-white hover:text-[#5c54f9] transition-colors duration-200 shadow-md"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 sm:p-6 rounded-lg bg-gray-700 light-gray shadow-xl">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                  Experienced
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {[
                    "MVC",
                    "GraphQL",
                    "MySQL",
                    "Authentication",
                    "React.js",
                    "Next.js",
                    "TypeScript",
                    "Git",
                    "Gulp",
                    "Node.js",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center bg-gray-800 text-gray-200 px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm hover:bg-gray-700 transition-colors duration-200 shadow-md"
                    >
                      {/* Placeholder Icon */}
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Portfolio Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <PortfolioTabs />
          </motion.div>

          {/* Experience Section */}
          <motion.section
            className="my-16 sm:my-20 lg:my-28 px-4 sm:px-6 lg:px-10 mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center">
              E X P E R I E N C E
            </h2>
            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
              {/* White Canvas Design */}
              <div className="p-4 sm:p-6 rounded-lg bg-gray-700 light-gray light-text-gray shadow-xl">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  White Canvas Design
                </h3>
                <p className="text-sm sm:text-base text-gray-400">
                  Langley Twp, BC, CA
                </p>
                <p className="font-medium text-sm sm:text-base text-gray-400">
                  Wordpress Developer • Oct 2021 - Dec 2024
                </p>
                <ul className="list-disc list-inside mt-3 sm:mt-4 space-y-1 sm:space-y-2 text-xs sm:text-sm lg:text-base text-gray-300">
                  <li>
                    Developed and maintained in-house and customer-facing
                    web-applications using WordPress(PHP), Shopify(Liquid) ,
                    Elementor, JavaScript/jQuery, HTML&CSS, Ajax , React.js,
                    Node.js, and other programming languages upon needed
                  </li>
                  <li>
                    Created responsive custom WordPress themes from scratch
                    primarily using PHP, MAMP, JavaScript, JQuery, Advanced
                    Custom Fields (ACF Pro or CPT UI plugins), custom post
                    types, HTML5, SASS, CSS framework like Bulma , and Gulp for
                    compiling/compressing
                  </li>
                  <li>
                    Monitored website performance(SEO, page speed etc.),
                    identified issues, and implemented necessary fixes or
                    improvements and conducted version control using Github
                  </li>
                  <li>
                    Troubleshoot issues related to website, plugins, and theme
                    investigating through the hosting platforms(WPEngine, Danory
                    or cPanel) and File Manager, PHP Admin
                  </li>
                  <li>
                    Collaborated with the marketer, content creator, and
                    designers to deliver consistent and optimizing them for the
                    Website’s user experience utilizing a variety of graphics,
                    database, animation and other software(Adobe, Figma)
                  </li>
                  <li>
                    Worked with stakeholders to define requirements and
                    collaborated with marketer and designers to identify and
                    solve complex technical problems
                  </li>
                </ul>
              </div>

              {/* The Coding Bull */}
              <div className="p-4 sm:p-6 rounded-lg bg-gray-700 light-gray light-text-gray shadow-xl">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  The Coding Bull
                </h3>
                <p className="text-sm sm:text-base text-gray-400">
                  Burnaby, BC, CA
                </p>
                <p className="font-medium text-sm sm:text-base text-gray-400">
                  Wordpress Developer • Feb 2021 - Aug 2021
                </p>
                <ul className="list-disc list-inside mt-3 sm:mt-4 space-y-1 sm:space-y-2 text-xs sm:text-sm lg:text-base text-gray-300">
                  <li>
                    Wrote clean, modular, and well-documented code using
                    appropriate programming languages such as WordPress(PHP),
                    Elementor, JavaScript, React.js, Node.js, HTML&CSS and
                    frameworks
                  </li>
                  <li>
                    Used staging environments to thoroughly test new features,
                    functionalities, and design changes before pushing them to
                    live websites.
                  </li>
                  <li>
                    Optimized application performance and ensure seamless user
                    experience across different devices and browsers
                  </li>
                  <li>
                    Conducted version-control and collaborations within dev-team
                    using Github
                  </li>
                  <li>
                    Utilized knowledges in WordPress to create custom themes,
                    templates, and plugins that align with design mockups and
                    functional requirements.
                  </li>
                  <li>
                    Implemented accessibility, mobile responsive, and site speed
                    optimizations and cross-browser testing before & after new
                    project launch
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Education Section */}
          <motion.section
            className="my-16 sm:my-20 lg:my-28 px-4 sm:px-6 lg:px-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center">
              E D U C A T I O N
            </h2>
            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
              {/* Example Education Entry */}
              <div className="p-4 sm:p-6 rounded-lg bg-gray-700 light-gray light-text-gray shadow-xl">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  University of Example
                </h3>
                <p className="text-sm sm:text-base text-gray-400">
                  City, State
                </p>
                <p className="font-medium text-sm sm:text-base text-gray-400">
                  Bachelor of Science in Computer Science • 2018 - 2022
                </p>
                <ul className="list-disc list-inside mt-3 sm:mt-4 space-y-1 sm:space-y-2 text-xs sm:text-sm lg:text-base text-gray-300">
                  <li>
                    Relevant coursework: Data Structures and Algorithms,
                    Database Systems, Software Engineering
                  </li>
                  <li>GPA: 3.8</li>
                  <li>
                    Dean&apos;s List: Fall 2020, Spring 2021, Fall 2021, Spring
                    2022
                  </li>
                </ul>
              </div>
              {/* Example Education Entry 2 */}
              <div className="p-4 sm:p-6 rounded-lg bg-gray-700 light-gray light-text-gray shadow-xl">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Example High School
                </h3>
                <p className="text-sm sm:text-base text-gray-400">
                  City, State
                </p>
                <p className="font-medium text-sm sm:text-base text-gray-400">
                  High School Diploma • 2014 - 2018
                </p>
                <ul className="list-disc list-inside mt-3 sm:mt-4 space-y-1 sm:space-y-2 text-xs sm:text-sm lg:text-base text-gray-300">
                  <li>Relevant coursework: Math, Science, English</li>
                  <li>GPA: 4.0</li>
                  <li>Valedictorian</li>
                </ul>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
