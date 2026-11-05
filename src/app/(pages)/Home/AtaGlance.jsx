"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/app/components/Container";
import BacktoTop from "@/app/components/BacktoTop";
import { useRouter } from "next/navigation";

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

export default function AtaGlance() {
  const router = useRouter();
  return (
    <main className="h-screen flex justify-center relative bg-white text-gray-900 overflow-hidden">
      <div className="container mx-auto sm:px-4 max-w-full">
        <Container className="md:w-full">
          <section className="grid grid-cols-1 md:grid-cols-2 px-10 py-20">
            <div className="flex items-center justify-center text-center md:text-left">
              <div className="space-y-6 max-w-xl">
                <motion.div
                  className="text-gray-500 text-lg"
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                >
                  CLOUD MERGE AT GLANCE
                </motion.div>
                <h1 className="hover:text-yellow-700 text-4xl font-bold leading-tight">
                  At CloudMerge, we are passionate about transforming businesses
                  through innovative IT solutions
                </h1>

                <button
                  className="p-4 size-xs bg-blue-500 hover:bg-black border border-red rounded-2xl text-white"
                  onClick={() => router.push("/About")}
                >
                  About us
                </button>
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
                  src="/home_image.png"
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
  );
}
