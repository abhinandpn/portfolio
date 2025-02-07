"use client"
import { motion } from "framer-motion";

interface props {
  position: string;
}

const DashedLine: React.FC<props> = ({ position }) => {
  return (
    <>
      <div className={`absolute w-full h-[1px]  ${position}`}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-full hidden md:block bg-gradient-to-r from-transparent via-white to-transparent"
          style={{
            maskImage: "linear-gradient(to right, black 5px, transparent 5px)",
            WebkitMaskImage:
              "linear-gradient(to right, black 5px, transparent 5px)",
            maskSize: "15px 1px",
            WebkitMaskSize: "15px 1px",
            maskRepeat: "repeat",
            WebkitMaskRepeat: "repeat",
          }}
        ></motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-full block bg-white md:hidden bg-gradient-to-r from-transparent via-white to-transparent"
          style={{
            maskImage: "linear-gradient(to right, black 5px, transparent 5px)",
            WebkitMaskImage:
              "linear-gradient(to right, black 5px, transparent 5px)",
            maskSize: "15px 1px",
            WebkitMaskSize: "15px 1px",
            maskRepeat: "repeat",
            WebkitMaskRepeat: "repeat",
          }}
        ></motion.div>
      </div>
    </>
  );
};

export default DashedLine;
