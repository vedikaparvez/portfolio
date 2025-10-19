import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LiaUserGraduateSolid } from "react-icons/lia";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Product Manager",
    location: "Chennai, India",
    locationType: "On-Site",
    companyName: "Rocketlane",
    website: "http://www.rocketlane.com",
    contributions: [
"Developed Migration Agents - Automated SaaS-to-SaaS data migrations with AI-driven mapping, transformation, and validation, cutting migration time from weeks to hours.",
"Introduced Task Agents - that perform implementation work like a human, automating previously manual configuration and delivery tasks at scale.",
"Launched Custom Apps (as part of the larger Marketplace vision) to make Rocketlane  extensible, enabling teams to embed custom processes and integrations. Now evolving toward an AI-first app builder (think v0), where customers can prompt their way into creating apps.",
"Built the Customer portal from the ground up, transforming it into a sleek, customizable, DIY website-like experience. This drove over 50% boost in user engagement, secured SMB deals, and increased end-user adoption, enabling effortless collaboration throughout the pre and post-sales journey.",
"Launched AI-Sheets, an enterprise collaboration layer that simplifies data management and  improves collaboration between teams, ensuring seamless implementation data tracking and efficient workflows.",
"Designed and rolled out the Automations Engine, achieving 75% customer-wide adoption and delivering significant operational efficiencies through governance and workflow automation.",
],
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - Present",
  },
  {
    title: "Founder",
    location: "Chennai, India",
    locationType: "On-Site",
    companyName: "AdEase",
    website: "http://www.adease.ai",
    contributions: [
      "Founded AdEase, an AI platform that automated ad creative generation for SMBs and indie store owners - reducing dependence on agencies and lowering campaign production costs by over 70%.",
      "Led product, GTM, and hiring end-to-end, translating customer pain points into a self-serve experience that generated ad copy and visual variants from simple business inputs.",
      "Built and launched MVP that created AI-generated ad creatives and copy variations tailored for multiple channels, enabling small businesses to run professional campaigns autonomously.",
      "Engaged 50+ early customers, validating product-market fit and helping them scale organic and sponsored campaigns - many achieving viral reach without agency support.",
      "Grew a 5-person cross-functional team, managed product roadmap and releases, and directly shaped go-to-market efforts across positioning, pricing, and distribution.",
      "Key learnings in AI-first product design, GTM velocity, and founder-level execution directly informed later work at Rocketlane in building scalable, user-centric AI platforms.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "January 2021 - April 2023",
  },
  {
    title: "Data Scientist",
    location: "Bangalore, India",
    locationType: "On-Site",
    companyName: "SmartTerra",
    website: "http://www.smartterra.io",
    contributions: [
      "Worked as a data scientist at Smartterra, an AI-powered operational intelligence platform for water utilities",
      "Developed time series prediction models with Long-Short Term Memory (LSTM)-Recurrent Neural Network (RNN) to predict water consumption behavior of residents of Bengaluru City",
      "Developed and optimized Imbalanced Classifier models with Support Vector Machine (SVM) and Local Outlier Factor (LOF) to detect anomalous metering",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "April 2020 - November 2020",
  },
  {
    title: "Research Associate",
    location: "Chennai, India",
    locationType: "Hybrid",
    companyName: "Gemini Associates",
    website: null,
    contributions: [
      "Key member of the Cognitive Computing and Computational Linguistics team at ARA, an end-to-end messaging system to enable behavior change (Patent application no: IN 202041010232)",
      "Collaborated closely with the principal research investigator to conduct an empirical study on digital message optimization. Contributed to formulating the P3 (Personalized-Persuasive-Pragmatic) Messaging Approach which is the thrust to the creation of cognitive messages.",
      "Architected the linguistic framework for the generation of Phrase Structures & Message Frames of Cognitive Messages. This effort resulted in the creation of 20 different cognitive message frames required to create custom-tailored cognitively charged messages that resonate more effectively with their audiences. (Patent application no: IN 201941001564)",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "January 2018 - April 2020",
  },
] as const;

export const skillsData = [
  "Product Management",
  "B2B Software as a Service (SaaS)",
  "Product Strategy",
  "User Experience",
  "Prompt Engineering",
  "Agile Methodologies",
  "Product Marketing",
] as const;
