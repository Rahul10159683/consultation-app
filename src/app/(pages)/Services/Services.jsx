"use client";
import { motion } from "framer-motion";

const slides = [
  {
    title: "Management Consulting",
    description:
      "Offering strategic advice and solutions to improve organizational performance, streamline processes, and drive business transformation.",
    image: "/images/management_consultant.jpg",
  },
  {
    title: "Financial Advisory",
    description:
      "Providing financial analysis, budgeting, forecasting, and risk management to help organizations achieve financial stability and growth.",
    image: "/images/financial_advisor.jpg",
  },
  {
    title: "Technology Consulting",
    description:
      "Helping companies leverage cutting-edge technologies, from software solutions to digital transformation strategies.",
    image: "/images/Technology_Consulting.jpg",
  },
  {
    title: "HR Consulting",
    description:
      "Guiding talent management, employee engagement, and workforce optimization for growth.",
    image: "/images/Human_resource.jpg",
  },
  {
    title: "Market Research & Strategy",
    description:
      "In-depth market analysis, competitor benchmarking, and planning to keep businesses ahead.",
    image: "/images/Market.jpeg",
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

export default function ConsultingSlides() {
  return (
    <div className="w-full">
      {slides.map((slide, index) => {
        const isEven = index % 2 === 0;
        return (
          <section
            key={index}
            className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between bg-white"
          >
            <div
              className={`md:w-1/2 w-full flex items-center justify-center h-[400px] md:h-screen ${
                isEven ? "order-1" : "order-2"
              }`}
            >
              <div className="w-11/12 md:w-4/5 h-[90%] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <motion.div
              className={`md:w-1/2 w-full p-8 md:p-20 flex flex-col justify-center ${
                isEven ? "order-2" : "order-1"
              }`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                {slide.description}
              </p>
            </motion.div>
          </section>
        );
      })}
    </div>
  );
}
