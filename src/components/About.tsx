"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-screen h-screen flex flex-col justify-center items-center gap-10 px-4 sm:px-8 md:px-16 py-10"
    >
      <motion.p
        initial={{ y: -200 }}
        whileInView={{ y: -150 }}
        transition={{ duration: 1 }}
        className="absolute text-[60px] sm:text-[80px] md:text-[120px] lg:text-[200px] -rotate-90 lg:-left-10 lg:top-1/3 sm:left-2 sm:top-0 left-1 top-0 opacity-20 font-bold"
      >
        ABOUT
      </motion.p>

      <motion.div
        initial={{ y: 0 }}
        whileHover={{ y: -5 }}
        className="w-full sm:w-11/12 md:w-4/5 lg:w-2/3 h-3/7 rounded-xl p-6 sm:p-8 md:p-10 flex flex-col gap-4 cursor-pointer shadow-md"
      >
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Who We Are
        </p>
        <p className="text-amber-50 opacity-70 text-base sm:text-lg md:text-xl leading-relaxed">
          0xLabs is an independent innovation lab and micro startup studio
          focused on building smart, scalable, and secure tools for the future.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 0 }}
        whileHover={{ y: -5 }}
        className="w-full sm:w-11/12 md:w-4/5 lg:w-2/3  rounded-xl p-6 sm:p-8 md:p-10 flex flex-col gap-4 cursor-pointer shadow-md"
      >
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          What We Do
        </p>
        <p className="text-amber-50 opacity-70 text-base sm:text-lg md:text-xl leading-relaxed">
          From DeFi platforms and blockchain infrastructure to AI assistants and
          productivity tools — we create meaningful digital products that people
          love.
        </p>
      </motion.div>
    </section>
  );
}
