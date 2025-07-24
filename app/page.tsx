"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Balatro from "./component/Balatro";
import LoadingScreen from "./component/LoadingScreen";
import MobileMenu from "./component/MobileMenu";
import NextImage from "next/image";

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
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

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

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // 로딩 중이면 실행하지 않음
    if (isLoading) {
      return;
    }

    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerHeight = 140; // 헤더 높이 + 여백
        const elementPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <main>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>
      <motion.header
        className="fixed z-50 w-full top-0"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <motion.div
          className="top-line bg-black light-bg w-full h-2.5"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        ></motion.div>
        <div className="header-container flex justify-start items-center px-4 sm:px-6 lg:px-10 max-w-[1800px] mx-auto overflow-hidden">
          <motion.div
            className="header-logo-box bg-black light-bg relative mr-2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <div className="w-16 sm:w-20 lg:w-[100px] h-full light-hidden relative">
              <NextImage src="/images/logo.svg" alt="" fill />
            </div>

            <div className="w-16 sm:w-20 lg:w-[100px] h-full hidden light-visible relative">
              <NextImage src="/images/logo_black.svg" alt="" fill />
            </div>

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
                  href="#portfolio"
                  className="mx-2.5"
                  onClick={handleAnchorClick}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.1, ease: "easeOut" }}
                >
                  Portfolio
                </motion.a>
                <motion.a
                  href="#experience"
                  className="mx-2.5"
                  onClick={handleAnchorClick}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.2, ease: "easeOut" }}
                >
                  Experience
                </motion.a>
                <motion.a
                  href="#education"
                  className="ml-2.5 mr-4"
                  onClick={handleAnchorClick}
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
              className="lg:hidden p-2 rounded-lg bg-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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
        isAnimationComplete={isAnimationComplete}
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
          onAnimationComplete={() => setIsAnimationComplete(true)}
        >
          <div className="w-full max-w-[1800px] px-4 sm:px-6 lg:px-10 m-auto">
            <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-2.5 min-h-screen lg:min-h-[700px] h-screen lg:h-[95vh]">
              <div className="hero-left relative max-w-full w-full h-1/2 lg:h-full rounded-2xl lg:rounded-4xl flex items-end order-2 lg:order-1">
                <Balatro
                  color={[0.5, 0.7, 1]}
                  mouseReact={true}
                  amplitude={0.1}
                  speed={1.0}
                />
                <div className="content-box absolute pt-4 sm:pt-5 pr-4 sm:pr-5 left-0 max-w-full lg:max-w-1/2 w-full bg-black light-bg h-30 lg:h-60 rounded-tr-2xl sm:rounded-tr-[30px] flex items-center lg:items-start">
                  <h2 className="text-white font-bold text-xl sm:text-xl lg:text-2xl light-text-gray leading-tigh relative top-10 md:top-0">
                    Focused on scalable, pixel-perfect web application builds
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
                    className="svg-corner corner-content-box-two right-0 lg:right-[-30px] bottom-0 absolute -rotate-90"
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
                    className="hidden lg:block scroll-indicator absolute right-0 lg:right-[-60px] top-48 lg:top-[unset] lg:bottom-[10px] lg:left-[unset] border border-white p-2 lg:p-6 rounded-full rotate-90 dark-bg bg-black"
                    href="#skills"
                    onClick={handleAnchorClick}
                  >
                    <NextImage
                      src="data:image/svg+xml,%3csvg%20width='19'%20height='19'%20viewBox='0%200%2019%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.5%209.5H2.5M16.5%209.5L10.5%2015.5M16.5%209.5L10.5%203.5'%20stroke='white'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                      alt="button image"
                      fill
                    />
                  </a>
                </div>
              </div>
              <div className="hero-right flex flex-col justify-center lg:justify-normal gap-6 lg:gap-2.5 items-center h-full flex-grow relative order-1 lg:order-2 py-8 lg:py-0">
                <div className="profile-img relative w-40 sm:w-48 lg:w-64 aspect-square rounded-full border-4 border-white shadow-2xl">
                  <NextImage
                    src="/images/portrait.webp"
                    alt="profile"
                    fill
                    className="rounded-full border-1 border-black"
                  />
                </div>
                <div className="swiper-box w-full max-w-sm lg:w-64 h-full rounded-2xl sm:rounded-[30px]">
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
                    }}
                    modules={[Pagination]}
                    loop={true}
                    className="w-full h-full bg-[#5c54f9] rounded-[20px] sm:rounded-[30px] p-2 sm:p-4"
                  >
                    <SwiperSlide className="flex flex-col items-center justify-center text-center relative">
                      <div className="img-box relative h-[135px]">
                        <NextImage
                          src="/images/web-white.svg"
                          alt=""
                          className="mb-3"
                          fill
                        />
                      </div>

                      <p className="text-sm sm:text-base py-5 lg:py-0">
                        Developed over 30 websites using WordPress, Laravel,
                        Vue.js, and React
                      </p>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col items-center justify-center text-center">
                      <div className="img-box relative h-[135px]">
                        <NextImage
                          src="/images/wordpress.svg"
                          alt=""
                          className="mb-3"
                          fill
                        />
                      </div>
                      <p className="text-sm sm:text-base py-5 lg:py-0">
                        WordPress Specialist with 5+ years of experience in
                        custom themes, plugins, and site optimization.
                      </p>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col items-center justify-center text-center">
                      <div className="img-box relative h-[135px]">
                        <NextImage
                          src="/images/laravel.svg"
                          alt=""
                          className="mb-3"
                          fill
                        />
                      </div>
                      <p className="text-sm sm:text-base py-5 lg:py-0">
                        Laravel Framework Expert with 5+ years of experience
                        building large-scale web applications.
                      </p>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col items-center justify-center text-center">
                      <div className="img-box relative h-[135px]">
                        <NextImage
                          src="/images/react.svg"
                          alt=""
                          className="mb-3"
                          fill
                        />
                      </div>
                      <p className="text-sm sm:text-base py-5 lg:py-0">
                        Proficient in React.js, with solid experience building
                        dynamic frontend interfaces.
                      </p>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col items-center justify-center text-center">
                      <div className="img-box relative h-[135px]">
                        <NextImage
                          src="/images/nextjs.svg"
                          alt=""
                          className="mb-3"
                          fill
                        />
                      </div>
                      <p className="text-sm sm:text-base py-5 lg:py-0">
                        Experienced with Next.js for modern, fast-performing web
                        apps.
                      </p>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="swiper-btn-box absolute right-0 bottom-0 z-10 rounded-tl-[25px] sm:rounded-tl-[35px] bg-black light-bg aspect-square w-[40px] sm:w-[60px] md:flex hidden items-end justify-end">
                  <div className="blog-slider-button cursor-pointer">
                    <span
                      onClick={handleNext}
                      className=" relative w-[30px] sm:w-[50px] aspect-square rounded-full flex items-center justify-center bg-black border-1 sm:border-2 border-white"
                    >
                      <NextImage
                        src="data:image/svg+xml,%3csvg%20width='19'%20height='19'%20viewBox='0%200%2019%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.5%209.5H2.5M16.5%209.5L10.5%2015.5M16.5%209.5L10.5%203.5'%20stroke='white'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                        alt="arrow pointing right"
                        fill
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
            className="py-16 lg:py-24 px-6 lg:px-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: [0.95, 1.02, 1],
              rotateX: [5, 0],
            }}
            transition={{
              duration: 0.6,
              delay: 1.2,
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="max-w-6xl mx-auto">
              <motion.h2
                id="skills"
                className="text-3xl lg:text-5xl font-bold mb-12 text-center tracking-wider"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                SKILLS
              </motion.h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <motion.div
                  className="p-6 lg:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <motion.h3
                    className="text-2xl font-bold mb-6 text-gray-900 dark:text-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    Strong
                  </motion.h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "WordPress",
                      "Laravel",
                      "PHP",
                      "Elementor Pro",
                      "Sage 10",
                      "JavaScript (ES6+)",
                      "HTML5",
                      "SASS",
                      "MySQL",
                      "RESTful API",
                    ].map((skill) => (
                      <div
                        key={skill}
                        className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  className="p-6 lg:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <motion.h3
                    className="text-2xl font-bold mb-6 text-gray-900 dark:text-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    Experienced
                  </motion.h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "MVC",
                      "GraphQL",
                      "React.js",
                      "Next.js",
                      "Node.js",
                      "TypeScript",
                      "Git",
                      "Gulp",
                    ].map((skill) => (
                      <div
                        key={skill}
                        className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium hover:bg-green-200 dark:hover:bg-green-800 transition-colors duration-200"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Portfolio Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: [0.9, 1.05, 1],
              rotateY: [10, 0],
            }}
            transition={{
              duration: 0.6,
              delay: 1.4,
            }}
            viewport={{ once: true, margin: "-30px" }}
          >
            <PortfolioTabs />
          </motion.div>

          {/* Experience Section */}
          <motion.section
            className="py-16 lg:py-24 px-6 lg:px-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: [0.92, 1.03, 1],
              x: [-20, 0],
            }}
            transition={{
              duration: 0.6,
              delay: 1.6,
            }}
            viewport={{ once: true, margin: "-40px" }}
          >
            <motion.h2
              id="experience"
              className="text-3xl lg:text-5xl font-bold mb-12 text-center tracking-wider"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              EXPERIENCE
            </motion.h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden lg:block"></div>

              <div className="space-y-8">
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-2 top-8 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 hidden lg:block"></div>
                  <div className="lg:ml-12 p-6 lg:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">D</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          Digital Chaos INC.
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-1">
                          Elora, Ontario N0B 1S0, Canada
                        </p>
                        <p className="font-semibold text-blue-600 dark:text-blue-400 mb-4">
                          Web Developer • Jun 2021 - Current
                        </p>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      <li>
                        Develop and maintain custom WordPress sites and custom
                        themes to deliver tailored website solutions
                      </li>
                      <li>
                        Implement dynamic frontend interfaces using Laravel
                        Blade templating engine for enhanced user interactions
                      </li>
                      <li>
                        Build custom WordPress themes using Sage 10 starter
                        theme with modern development workflows and build tools
                      </li>
                      <li>
                        Create custom Gutenberg blocks using ACF (Advanced
                        Custom Fields) to provide intuitive content management
                        experiences
                      </li>
                      <li>
                        Develop efficient UI/UX design systems and reusable
                        components utilizing Tailwind CSS framework
                      </li>
                    </ul>
                  </div>
                </div>

                {/* The Coding Bull */}
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-2 top-8 w-4 h-4 bg-purple-500 rounded-full border-4 border-white dark:border-gray-900 hidden lg:block"></div>
                  <div className="lg:ml-12 p-6 lg:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">T</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          The Coding Bull
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-1">
                          Burnaby, BC, CA
                        </p>
                        <p className="font-semibold text-blue-600 dark:text-blue-400 mb-4">
                          Web Developer • Feb 2019 - Jun 2021
                        </p>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      <li>
                        Developed the frontend of web applications using PHP,
                        WordPress, JavaScript, HTML5/CSS3, and SASS.
                      </li>
                      <li>
                        Built WooCommerce-based e-commerce sites and seamlessly
                        integrated them with various payment APIs like PayPal
                        campaigns and Authorize.net, providing robust payment
                        solutions.
                      </li>
                      <li>
                        Developed WordPress Themes and back-end user controls
                        from scratch to add new functionality that is portable
                      </li>
                    </ul>
                  </div>
                </div>

                {/* The Coding Bull */}
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-2 top-8 w-4 h-4 bg-purple-500 rounded-full border-4 border-white dark:border-gray-900 hidden lg:block"></div>
                  <div className="lg:ml-12 p-6 lg:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">A</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          ABB Canada
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-1">
                          Burlington, ON, CA
                        </p>
                        <p className="font-semibold text-blue-600 dark:text-blue-400 mb-4">
                          IS Support(Co-Op) • Jan 2018 - Aug 2018
                        </p>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      <li>
                        Developed and maintained the program made of Visual
                        Basic and Excel
                      </li>
                      <li>
                        Successfully provided IT Support and Troubleshooting to
                        the general school systems
                      </li>
                      <li>
                        Assisted with SAP CoE Support Functions and reported
                        data from ERP SAP system
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Education Section */}
          <motion.section
            className="py-16 lg:py-24 px-6 lg:px-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: [0.88, 1.08, 1],
              rotateZ: [3, 0],
            }}
            transition={{
              duration: 0.6,
              delay: 1.8,
            }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="max-w-6xl mx-auto">
              <motion.h2
                id="education"
                className="text-3xl lg:text-5xl font-bold mb-12 text-center tracking-wider"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                EDUCATION
              </motion.h2>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-blue-600 hidden lg:block"></div>

                <div className="space-y-8">
                  {/* Example Education Entry */}
                  <div className="relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-2 top-8 w-4 h-4 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 hidden lg:block"></div>
                    <div className="lg:ml-12 p-6 lg:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-lg">
                            🎓
                          </span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            Centennial College
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-1">
                            Toronto, Ontario
                          </p>
                          <p className="font-semibold text-green-600 dark:text-green-400 mb-2">
                            2 Years Diploma – Software Engineering Technician
                          </p>
                          <p className="font-semibold text-small">
                            2017 - 2018
                          </p>
                        </div>
                      </div>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                        <li>
                          Relevant coursework: C#, Web Development, Data
                          Structures and Algorithms, Database Systems
                        </li>
                        <li>GPA: 4.0</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
