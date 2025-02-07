"use client";

import DashedLine from "@/components/DashedLine";
import { easeOut, motion } from "framer-motion";
import Marquee from "react-fast-marquee";

export default function HobbiesHero() {
  return (
    <section className="bg-[url('/swirl.png')] min-h-[600px] lg:min-h-[723px] flex flex-col justify-center">
      <div className="max-w-[750px] w-full mx-auto">
        <motion.h3 initial={{ width: 0 }} animate={{ width: "auto" }} transition={{ duration: 3, ease: "easeInOut" }} className="text-xl overflow-hidden -mt-12 px-4 lg:px-0 lg:text-3xl font-medium whitespace-nowrap">
          Checkout my
        </motion.h3>
      </div>
      <motion.div
        className="m-0 p-0 -mt-4 lg:mt-0 relative font-bold"

      >
        <motion.h1
          className="text-center text-[7rem] md:text-[10rem] lg:text-[15rem] bg-clip-text leading-[.72] origin-center"
          initial={{
            opacity:0
          }}
          animate={{
            opacity:1,
            
          }}
          transition={{
            duration: 3,
            ease: "easeOut",
          }}

        >
          Hobby
        </motion.h1>

        <DashedLine position="top-0" />
        <DashedLine position="top-[1.2rem] lg:top-11" />
        <DashedLine position="bottom-[1.2rem] lg:bottom-11" />
        <DashedLine position="bottom-0" />
      </motion.div>
    </section>
  );
}
