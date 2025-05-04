"use client";
import { motion } from "motion/react";
export default function About() {
  return (
    <div className="relative w-screen h-screen flex flex-col justify-center gap-10 items-end pr-20">
      <motion.p
        initial={{ y: -100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
        className="absolute text-[200px] -rotate-90 -left-50 top-50 opacity-25 font-bold"
      >
        ABOUT
      </motion.p>
      <motion.div
        initial={{
          y: 0,
        }}
        whileHover={{
          y: -5,
        }}
        className="w-2/3 h-3/7 rounded-xl p-10 flex flex-col justify-around cursor-pointer"
      >
        <p className="text-4xl">Who We Are</p>
        <p className="text-amber-50 opacity-50 text-3xl">
          0xLabs is an independent innovation lab and micro startup studio
          focused on building smart, scalable, and secure tools for the future.
        </p>
      </motion.div>
      <motion.div
        initial={{
          y: 0,
        }}
        whileHover={{
          y: -5,
        }}
        className="w-2/3 h-3/7 rounded-xl p-10 flex flex-col justify-around cursor-pointer"
      >
        <p className="text-4xl">What We Do</p>
        <p className="text-amber-50 opacity-50 text-3xl">
          From DeFi platforms and blockchain infrastructure to AI assistants and
          productivity tools — we create meaningful digital products that people
          love.
        </p>
      </motion.div>
    </div>
  );
}
