"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/app/components/Container";
import BacktoTop from "@/app/components/BacktoTop";
import { publicAssetPath } from "@/app/lib/publicAssetPath";
import { useRef } from "react";
import AtaGlance from "./AtaGlance";
import Whoweare from "./whoWe";

const headingLines = ["Take your", "businesses to", "the next", "level..."];

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Home() {
  const targetRef = useRef(null);

  const scrollDown = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <main className="h-screen flex justify-center relative bg-white text-gray-900 overflow-hidden">
        <div className="container mx-auto sm:px-4 max-w-full">
          <Container className="md:w-full">
            <section className="grid grid-cols-1 md:grid-cols-2 px-10 py-20">
              <div className="flex items-center justify-center md:justify-end text-center md:text-left">
                <div className="space-y-6 max-w-xl">
                  <h1 className="hover:text-yellow-700 text-6xl font-bold leading-tight">
                    {headingLines.map((line, i) => (
                      <motion.div
                        key={i}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                      >
                        {line}
                      </motion.div>
                    ))}
                  </h1>

                  <motion.p
                    className="text-gray-500 text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                  >
                    Providing Manpower to top MNC's in various domains.
                  </motion.p>
                  <motion.p
                    onClick={scrollDown}
                    className="text-black text-lg underline cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                  >
                    Discover More
                  </motion.p>
                </div>
              </div>

              <motion.div
                className="flex justify-center mt-10 md:mt-0 relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              >
                <div className="relative h-[500px] w-full">
                  <Image
                    src={publicAssetPath("/home_img.png")}
                    alt="Home Image"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </section>
            <BacktoTop />
          </Container>
        </div>
      </main>
      <div ref={targetRef}>
        {" "}
        <Whoweare />
      </div>
      <div>
        <AtaGlance />
      </div>
    </>
  );
}
