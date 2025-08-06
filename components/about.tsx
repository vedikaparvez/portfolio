"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        👋🏻 Hey there! I’m Vedika, your go-to gal for all things B2B SaaS product management, with a background in linguistic AI research. Over the last 6 years, I’ve journeyed through the tech world, leading the charge from ideation to execution, it’s been quite the ride!
      </p>
      <p className="mb-3">
        🚀 I'm building product at Rocketlane today, where I'm driving the vision for our AI Agents engine. I'm also working on exciting features like Rocketlane Marketplace and AI Sheets. Previously, I led the launch of Customer Portal 2.0—a major milestone that’s transforming client collaboration. Check it out here: https://lnkd.in/gAAc8XkF
      </p>
<p className="mb-3">
  🔥 What drives me? It’s the thrill in mastering 'systems thinking', the joy of seeing a product come to life, and the satisfaction of knowing it makes a difference. Looking ahead, I’m all in on pushing the boundaries of what’s possible, exploring new markets, and maybe, just maybe, revolutionizing a few industries along the way.
</p>
      <p className="mb-3">
        💬 Wanna chat about the future of tech, swap product stories, or discuss
        the latest in AI? Hit me up. Let's make something awesome together!
      </p>
    </motion.section>
  );
}
