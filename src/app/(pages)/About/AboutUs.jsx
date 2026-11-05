"use client";
import { motion } from "framer-motion";

const sections = [
  {
    title: "About Us",
    description: (
      <>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-3 text-base sm:text-lg leading-relaxed tracking-wide"
        >
          At <span className="font-semibold text-amber-500">CloudMerge</span>,
          we are passionate about transforming businesses through innovative IT
          solutions. Established with a mission to empower organizations in a
          rapidly evolving digital landscape, we specialize in delivering
          customized technology consulting services that align with your unique
          goals.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base sm:text-lg leading-relaxed tracking-wide"
        >
          Our expertise spans a wide range of industries, enabling us to design
          and implement solutions that drive operational efficiency, enhance
          customer engagement, and foster growth. By leveraging cutting-edge
          technologies and deep industry knowledge, we empower businesses to
          navigate the complexities of IT transformation with confidence.
        </motion.p>
      </>
    ),
    image: "/images/Aboutus.jpeg",
  },
  {
    title: "Our Mission",
    description:
      "To be a trusted partner in our client’s journey toward digital excellence by offering strategic, scalable, and sustainable IT solutions that inspire growth and innovation.",
    image: "/images/our_mission.jpg",
  },
  {
    title: "Our Vision",
    description:
      "To redefine how businesses operate in the digital age, making technology an enabler of opportunity, efficiency, and success.",
    image: "/images/OurVision.png",
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

export default function AboutSlides() {
  return (
    <div className="w-full">
      {sections.map((section, index) => (
        <section
          key={index}
          className="w-full min-h-[70vh] flex items-center justify-center text-white p-2 md:px-8 "
        >
          {/* Image + Overlay Wrapper */}
          <div className="relative w-full max-w-6xl rounded-xl overflow-hidden">
            {/* Background Image */}
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-full object-cover"
            />

            {/* Dark Overlay (matches image size) */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10" />

            {/* Text Content */}
            <motion.div
              className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 md:px-12 text-center"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
                {section.title}
              </h2>
              <p className="text-base md:text-lg max-w-4xl text-white leading-relaxed">
                {section.description}
              </p>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
}
