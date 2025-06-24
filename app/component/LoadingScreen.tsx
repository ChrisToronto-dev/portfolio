"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img
            src="/images/logo.svg"
            alt="Logo"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-white">Portfolio</h1>
        </motion.div>
        
        <div className="w-64 mx-auto">
          <div className="bg-gray-800 rounded-full h-2 mb-4">
            <motion.div
              className="bg-[#5c54f9] h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-white text-sm">{Math.round(progress)}%</p>
        </div>
        
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="mt-8"
        >
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full mx-auto" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;