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
      name: "WordPress Site 1",
      description: "Modern corporate website with custom theme",
      url: "https://example.com/wp1",
      techStack: ["WordPress", "PHP", "Elementor"],
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=225&fit=crop",
      borderColor: "#21759B",
      gradient: "linear-gradient(145deg, #21759B, #000)",
    },
    {
      name: "WordPress Site 2",
      description: "E-commerce platform with WooCommerce",
      url: "https://example.com/wp2",
      techStack: ["WordPress", "PHP", "ACF"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop",
      borderColor: "#464646",
      gradient: "linear-gradient(180deg, #464646, #000)",
    },
    {
      name: "WordPress Blog",
      description: "Personal blog with custom post types",
      url: "https://example.com/wp3",
      techStack: ["WordPress", "PHP", "Gutenberg"],
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=225&fit=crop",
      borderColor: "#0073AA",
      gradient: "linear-gradient(210deg, #0073AA, #000)",
    },
  ],
  Laravel: [
    {
      name: "Laravel CRM System",
      description: "Customer relationship management platform",
      url: "https://example.com/laravel1",
      techStack: ["Laravel", "PHP", "MySQL"],
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=225&fit=crop",
      borderColor: "#F05340",
      gradient: "linear-gradient(165deg, #F05340, #000)",
    },
    {
      name: "Laravel API Service",
      description: "RESTful API for mobile applications",
      url: "https://example.com/laravel2",
      techStack: ["Laravel", "PHP", "Redis"],
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=225&fit=crop",
      borderColor: "#FF2D20",
      gradient: "linear-gradient(195deg, #FF2D20, #000)",
    },
    {
      name: "Laravel Dashboard",
      description: "Admin dashboard with analytics",
      url: "https://example.com/laravel3",
      techStack: ["Laravel", "PHP", "Chart.js"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop",
      borderColor: "#FB503B",
      gradient: "linear-gradient(225deg, #FB503B, #000)",
    },
  ],
  React: [
    {
      name: "React Dashboard",
      description: "Real-time analytics dashboard",
      url: "https://example.com/react1",
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop",
      borderColor: "#61DAFB",
      gradient: "linear-gradient(135deg, #61DAFB, #000)",
    },
    {
      name: "React E-commerce",
      description: "Modern shopping cart application",
      url: "https://example.com/react2",
      techStack: ["React", "Redux", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop",
      borderColor: "#20232A",
      gradient: "linear-gradient(145deg, #20232A, #61DAFB)",
    },
    {
      name: "React Chat App",
      description: "Real-time messaging application",
      url: "https://example.com/react3",
      techStack: ["React", "Socket.io", "Node.js"],
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=225&fit=crop",
      borderColor: "#282C34",
      gradient: "linear-gradient(180deg, #282C34, #61DAFB)",
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
      gradient: "linear-gradient(210deg, #000000, #FFFFFF)",
    },
    {
      name: "Next.js Blog",
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
      name: "Vue.js Dashboard",
      description: "Admin panel with Vue composition API",
      url: "https://example.com/vue1",
      techStack: ["Vue.js", "JavaScript", "Vuex"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop",
      borderColor: "#4FC08D",
      gradient: "linear-gradient(225deg, #4FC08D, #000)",
    },
    {
      name: "Vue.js E-commerce",
      description: "Online store with Nuxt.js",
      url: "https://example.com/vue2",
      techStack: ["Vue.js", "Nuxt.js", "Vuetify"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop",
      borderColor: "#00C58E",
      gradient: "linear-gradient(135deg, #00C58E, #000)",
    },
    {
      name: "Vue.js PWA",
      description: "Progressive web application",
      url: "https://example.com/vue3",
      techStack: ["Vue.js", "PWA", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=400&h=225&fit=crop",
      borderColor: "#41B883",
      gradient: "linear-gradient(145deg, #41B883, #000)",
    },
  ],
};

const PortfolioTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("WordPress");

  const tabs = Object.keys(portfolioData);

  // PortfolioItem을 ChromaItem으로 변환하는 함수
  const convertToChromaItems = (items: PortfolioItem[]): ChromaItem[] => {
    return items.map((item) => ({
      image: item.image,
      title: item.name,
      subtitle: item.description,
      handle: item.techStack.join(" • "),
      borderColor: item.borderColor,
      gradient: item.gradient,
      url: item.url,
    }));
  };

  return (
    <section className="my-12 px-10">
      <h2 className="text-4xl font-bold mb-8 text-center text-black dark:text-white">
        P O R T F O L I O
      </h2>

      <div className="flex justify-center mb-8 flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`mx-2 py-3 px-6 rounded-full border-2 border-black dark:border-white cursor-pointer transition-all duration-300 hover:scale-105 ${
              activeTab === tab
                ? "bg-black text-white dark:bg-white dark:text-black shadow-lg"
                : "bg-transparent text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ChromaGrid를 사용한 포트폴리오 아이템들 */}
      <div className="w-full">
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
