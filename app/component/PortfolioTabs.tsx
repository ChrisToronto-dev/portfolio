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
      description: "WordPress, Sage 9, ACF with custom Gutenberg Blocks",
      url: "https://verra.org",
      techStack: [
        "WordPress Custom Website",
        "Performance optimization and AODA/WCAG 2.1 AA compliance",
      ],
      image: "/images/verra.webp",
      borderColor: "#21759B",
      gradient: "linear-gradient(195deg, #7C3AED, #000)",
    },
    {
      name: "ehsAI",
      description: "WordPress, Sage 9, ACF, SCSS and Custom Gutenberg Blocks",
      url: "https://ehsai.com/",
      techStack: ["Contributed as a core developer"],
      image: "/images/ehsai.webp",
      borderColor: "#21759B",
      gradient: "linear-gradient(145deg, #21759B, #000)",
    },
    {
      name: "Dejero",
      description: "WordPress, Sage 10, ACF, SCSS and Custom Gutenberg Blocks",
      url: "https://relaxed-roentgen.162-242-201-56.plesk.page/",
      techStack: ["Contributed as a core developer"],
      image: "/images/dejero.webp",
      borderColor: "#464646",
      gradient: "linear-gradient(195deg, #7C3AED, #000)",
    },
    {
      name: "ICE",
      description: "WordPress, ACF and Elementor Pro",
      url: "https://indigenouscleanenergy.com/",
      techStack: ["Developed from the scratch"],
      image: "/images/ice.webp",
      borderColor: "#0073AA",
      gradient: "linear-gradient(210deg, #0073AA, #000)",
    },
    {
      name: "Many Futures",
      description: "WordPress, ACF and Elementor Pro",
      url: "https://manyfutures.org",
      techStack: ["Developed from the scratch"],
      image: "/images/manyfuture.webp",
      borderColor: "#0073AA",
      gradient: "linear-gradient(195deg, #7C3AED, #000)",
    },
    {
      name: "Facoteck",
      description: "WordPress, ACF and Kadence",
      url: "https://www.facoteck.com/",
      techStack: ["Developed from the scratch"],
      image: "/images/faco.webp",
      borderColor: "#0073AA",
      gradient: "linear-gradient(210deg, #0073AA, #000)",
    },
  ],
  Laravel: [
    {
      name: "Offer sheet generator",
      description: "Laravel, Blade and MySQL",
      url: "https://example.com/laravel1",
      techStack: ["Contributed as a core developer"],
      image: "/images/offersheet.webp",
      borderColor: "#F05340",
      gradient: "linear-gradient(165deg, #F05340, #000)",
    },
    {
      name: "Heavy Equipment Rental",
      description: "Laravel, Blade and MySQL",
      url: "https://example.com/laravel2",
      techStack: ["Contributed as a core developer"],
      image: "/images/trucon.webp",
      borderColor: "#FF2D20",
      gradient: "linear-gradient(195deg, #FF2D20, #000)",
    },
    {
      name: "Student Management System",
      description: "Laravel, Blade and MySQL",
      url: "https://example.com/laravel2",
      techStack: ["Contributed as a core developer"],
      image: "/images/star.webp",
      borderColor: "#FF2D20",
      gradient: "linear-gradient(195deg, #FF2D20, #000)",
    },
  ],
  NextJs: [
    {
      name: "Next.js Portfolio",
      description: "Server-side rendered portfolio site",
      url: "https://example.com/nextjs1",
      techStack: ["Next.js", "React", "TypeScript"],
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=225&fit=crop",
      borderColor: "#000000",
      gradient: "linear-gradient(195deg, #7C3AED, #000)",
    },
    {
      name: "SNS App",
      description: "Static blog with MDX support",
      url: "https://example.com/nextjs2",
      techStack: ["Next.js", "MDX", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=225&fit=crop",
      borderColor: "#0070F3",
      gradient: "linear-gradient(165deg, #0070F3, #000)",
    },
    {
      name: "Next.js SaaS",
      description: "Full-stack SaaS application",
      url: "https://example.com/nextjs3",
      techStack: ["Next.js", "Prisma", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=225&fit=crop",
      borderColor: "#7C3AED",
      gradient: "linear-gradient(195deg, #7C3AED, #000)",
    },
  ],
  Vue: [
    {
      name: "Company Website",
      description: "Admin panel with Vue composition API",
      url: "https://example.com/vue1",
      techStack: ["Vue.js", "JavaScript", "Vuex"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop",
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
