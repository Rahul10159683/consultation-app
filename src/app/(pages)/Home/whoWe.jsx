"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "IT Strategy & Consulting",
    image: "/images/It_Str.jpeg",
    points: [
      {
        label: "IT Consulting",
        description:
          "Providing strategic guidance to align IT initiatives with business objectives.",
      },
      {
        label: "Staff Augmentation Service",
        description:
          "Expand your team's capabilities with skilled IT professionals, on-demand.",
      },
    ],
  },
  {
    title: "Technology Infrastructure & Solutions",
    image: "/images/tgy_infra.png",
    points: [
      {
        label: "Cloud Solutions",
        description:
          "Designing and implementing cloud strategies to enhance scalability and resilience.",
      },
      {
        label: "Cybersecurity",
        description:
          "Ensuring robust protection against evolving digital threats.",
      },
    ],
  },
  {
    title: "Application Development",
    image: "/images/app_dev.jpg",
    points: [
      {
        label: "Data Analytics",
        description:
          "Transforming data into actionable insights for informed decision-making.",
      },
      {
        label: "Enterprise Applications",
        description:
          "Building tailored software solutions to streamline operations.",
      },
      {
        label: "Web & Application Development",
        description:
          "Build innovative, user-friendly web and mobile applications tailored to your business needs.",
      },
    ],
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Whoweare() {
  return (
    <div className="w-full bg-gray-100">
      {services.map((service, index) => {
        const isEven = index % 2 === 0;
        return (
          <section
            key={index}
            className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between bg-white"
          >
            {/* Image Section */}
            <div
              className={`md:w-1/2 w-full flex items-center justify-center h-[400px] md:h-screen ${
                isEven ? "order-1" : "order-2"
              }`}
            >
              <div className="w-[80%] md:w-[70%] h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Section */}
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
                {service.title}
              </h2>
              <div className="space-y-4">
                {service.points.map((point, idx) => (
                  <p key={idx} className="text-lg text-gray-600">
                    <strong className="text-gray-700">{point.label}:</strong>{" "}
                    {point.description}
                  </p>
                ))}
              </div>
            </motion.div>
          </section>
        );
      })}
    </div>
  );
}
