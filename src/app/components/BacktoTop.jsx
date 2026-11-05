"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BacktoTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          onClick={scrollToTop}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 cursor-pointer"
        >
          <div
            className="text-black px-2 py-1 text-xs mr-20 font-medium tracking-wider rounded-full 
          transform -rotate-90 origin-top-right hover:text-red-600 transition-all duration-300 flex items-center space-x-1"
            title="Scroll to top"
          >
            <span>Go To Top</span>
            <span className="text-xl">→</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
