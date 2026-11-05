"use client";
import Container from "@/app/components/Container";
import { motion } from "framer-motion";

export default function About() {
  return (
    // <div className="relative min-h-screen bg-white px-4 pt-32 sm:px-6 text-gray-900">
    <div className="container mx-auto sm:px-4 max-w-full">
      <Container className="md:w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-5xl text-shadow-lg font-extrabold text-orange-600 hover:text-gray-700 mb-3"
          >
            About Us
          </motion.h1>

          {/* Divider Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mx-auto h-1 bg-black mb-8"
          />

          {/* Zoom on hover block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-sky-700 hover:bg-gray-700 text-white p-6 sm:p-8 rounded-2xl shadow-xl text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-6 text-base sm:text-lg leading-relaxed tracking-wide"
            >
              At{" "}
              <span className="font-semibold text-amber-500">CloudMerge</span>,
              we are passionate about transforming businesses through innovative
              IT solutions. Established with a mission to empower organizations
              in a rapidly evolving digital landscape, we specialize in
              delivering customized technology consulting services that align
              with your unique goals.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-base sm:text-lg leading-relaxed tracking-wide"
            >
              Our expertise spans a wide range of industries, enabling us to
              design and implement solutions that drive operational efficiency,
              enhance customer engagement, and foster growth. By leveraging
              cutting-edge technologies and deep industry knowledge, we empower
              businesses to navigate the complexities of IT transformation with
              confidence.
            </motion.p>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
