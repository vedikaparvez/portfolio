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
    website: "http://www.rocketlane.comw",
    contributions: [
"Building AI Agents—an agentic workflow engine for post-sales delivery teams.",
"Leading the Marketplace Vision – A centralized marketplace to deliver seamless integrations and a developer-first experience, enabling custom workflows and powerful enterprise integrations. Alongside building AI-Sheets, an enterprise feature aimed at simplifying data management and improving collaboration between teams, ensuring seamless project tracking and efficient implementation workflows.",
"Latest Launch: Customer Portal 2.0 (https://lnkd.in/gAAc8XkF) – Reimagined the customer portal from the ground up, transforming it into a sleek, customizable, DIY website-like experience. This redesign drove over 50% boost in user engagement, secured enterprise deals, and increased end-user adoption, enabling effortless collaboration throughout the pre and post-sales journey.",
"Led the end-to-end implementation of the Automations feature – Built the automation engine from the ground up, driving a 75% adoption customer-wide. This feature significantly increases operational efficiency, saving team members valuable time for high-impact tasks, while unlocking critical governance workflows that enhance Rocketlane’s overall functionality and performance."
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
      "Ideated the AdEase platform from inception to production",
      "Managed a team of developers to build the product. Formulate and incorporated the business strategy into product strategy",
      "Executed product strategy by developing proprietary creative generation algorithms using image processing and computer vision models.",
      "Collaborated closely with designers and ML enthusiasts to develop proprietary creative generation algorithms using image processing and computer vision models. This effort resulted in creation of ad creatives faster than a human graphic designer",
      "Managed all aspects of in-life products, including customer feedback, requirements, and issues.",
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
