import DashedLine from "@/components/DashedLine";
import Hero from "@/components/Hero";
import Introduction from "@/components/introduction";
import Orgs from "@/components/Orgs";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Skills />
      <Projects />
      <Orgs />
    </>
  );
}
