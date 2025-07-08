"use client";
import React, { useState } from "react";
import ChromaGrid, { ChromaItem } from "./ChromeGrid"; // ChromaGrid 컴포넌트 import 경로를 맞춰주세요

interface PortfolioItem {
  name: string;
  description: string;
  url: string;
  techStack: string[];
  image: string;
  borderColor?: string;
  gradient?: string;
}

interface PortfolioData {
  [key: string]: PortfolioItem[];
}

const portfolioData: PortfolioData = {
  WordPress: [
    {
      name: "Verra",
      description: "Custom WordPress Theme Development",
      url: "https://verra.org",
      techStack: [
        "WordPress, Sage 9, ACF with custom Gutenberg Blocks",
        "Performance optimization and AODA/WCAG 2.1 AA compliance",
      ],
      image: "/images/verra.webp",
      borderColor: "#21759B",
      gradient: "linear-gradient(195deg, #7C3AED, #000)",
    },
    {
      name: "ehsAI",
      description: "Custom WordPress Theme Development",
      url: "https://ehsai.com/",
      techStack: [
        "WordPress, Sage 9, ACF component-based theme development",
        "Collaborative custom block development and organized CSS structure",
      ],
      image: "/images/ehsai.webp",
      borderColor: "#21759B",
      gradient: "linear-gradient(145deg, #21759B, #000)",
    },
    {
      name: "Dejero",
      description: "Custom WordPress Theme Development",
      url: "https://relaxed-roentgen.162-242-201-56.plesk.page/",
      techStack: [
        "WordPress, Sage 10, ACF Pro with modern PHP architecture",
        "Custom Gutenberg Blocks development with Tailwind CSS styling",
      ],
      image: "/images/dejero.webp",
      borderColor: "#464646",
      gradient: "linear-gradient(195deg, #7C3AED, #000)",
    },
    {
      name: "ICE",
      description: "WordPress Development with Page Builder",
      url: "https://indigenouscleanenergy.com/",
      techStack: [
        "WordPress, ACF, Elementor Pro hybrid development",
        "Custom Elementor widgets and responsive design",
      ],
      image: "/images/ice.webp",
      borderColor: "#0073AA",
      gradient: "linear-gradient(210deg, #0073AA, #000)",
    },
    {
      name: "Many Futures",
      description: "WordPress Development with Page Builder",
      url: "https://manyfutures.org",
      techStack: [
        "WordPress, ACF, Elementor Pro hybrid development",
        "Custom Elementor widgets and responsive design",
      ],
      image: "/images/manyfuture.webp",
      borderColor: "#0073AA",
      gradient: "linear-gradient(195deg, #7C3AED, #000)",
    },
    {
      name: "Facoteck",
      description: "WordPress Development with Kadence Theme",
      url: "https://www.facoteck.com/",
      techStack: [
        "WordPress, ACF, Kadence theme customization",
        "Custom styling and theme modification",
      ],
      image: "/images/faco.webp",
      borderColor: "#0073AA",
      gradient: "linear-gradient(210deg, #0073AA, #000)",
    },
  ],
  Laravel: [
    {
      name: "Offer sheet generator",
      description: "Laravel Website Maintenance & Enhancement",
      url: "https://example.com/laravel1",
      techStack: [
        "Laravel, Blade with dynamic PDF generation system",
        "Code optimization and new feature implementation",
      ],
      image: "/images/offersheet.webp",
      borderColor: "#F05340",
      gradient: "linear-gradient(165deg, #F05340, #000)",
    },
    {
      name: "Heavy Equipment Rental",
      description: "Laravel, Blade and MySQL",
      url: "https://example.com/laravel2",
      techStack: [
        "Laravel RESTful API with JWT authentication",
        "Google Maps API and real-time WebSocket tracking",
      ],
      image: "/images/trucon.webp",
      borderColor: "#FF2D20",
      gradient: "linear-gradient(195deg, #FF2D20, #000)",
    },
    {
      name: "Student Management System",
      description: "Laravel Web Application for 200+ Concurrent Users",
      url: "https://example.com/laravel2",
      techStack: [
        "Laravel MVC with complex Eloquent relationships",
        "Multi-user educational platform with real-time data management",
      ],
      image: "/images/star.webp",
      borderColor: "#FF2D20",
      gradient: "linear-gradient(195deg, #FF2D20, #000)",
    },
  ],
  NextJs: [
    {
      name: "SNS App",
      description: "Twitter-like Social Media Platform",
      url: "https://example.com/nextjs2",
      techStack: [
        "Next.js full-stack development with Prisma ORM",
        "Social media features and real-time interactions",
      ],
      image: "/images/sns-carrot.webp",
      borderColor: "#0070F3",
      gradient: "linear-gradient(165deg, #0070F3, #000)",
    },
    {
      name: "MyCafe",
      description: "Cafe Review Platform",
      url: "https://example.com/nextjs3",
      techStack: [
        "Next.js full-stack development with Prisma ORM",
        "User review system and rating functionality",
      ],
      image: "/images/mycafe.webp",
      borderColor: "#7C3AED",
      gradient: "linear-gradient(195deg, #7C3AED, #000)",
    },
  ],
  Vue: [
    {
      name: "Company Website",
      description: "Vue.js Website Maintenance & Enhancement",
      url: "https://digitalchaos.ca",
      techStack: [
        "Vue.js maintenance and feature updates",
        "JavaScript optimization and bug fixes",
      ],
      image: "/images/dc.webp",
      borderColor: "#4FC08D",
      gradient: "linear-gradient(225deg, #4FC08D, #000)",
    },
  ],
};

const PortfolioTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("WordPress");

  const tabs = Object.keys(portfolioData);

  const convertToChromaItems = (items: PortfolioItem[]): ChromaItem[] => {
    return items.map((item) => ({
      image: item.image,
      title: item.name,
      subtitle: item.description,
      handle: item.techStack,
      borderColor: item.borderColor,
      gradient: item.gradient,
      url: item.url,
    }));
  };

  return (
    <section className="my-12 px-10">
      <h2 id="portfolio" className="text-4xl font-bold mb-8 text-center">
        P O R T F O L I O
      </h2>

      <div className="flex justify-center mb-8 flex-wrap gap-2 z-30">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`mx-2 py-3 px-6 rounded-full border-2 border-white z-60 cursor-pointer transition-all duration-300 hover:scale-105 ${
              activeTab === tab
                ? "bg-white shadow-lg text-black light-text-white dark-bg border-2 border-white light-border"
                : "bg-transparent hover:bg-gray-100 hover:text-black light-border hover-dark"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="w-full portfolio-section">
        <ChromaGrid
          items={convertToChromaItems(portfolioData[activeTab])}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>
    </section>
  );
};

export default PortfolioTabs;
