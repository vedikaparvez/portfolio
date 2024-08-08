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
      "Currently in release: Customer Portal 2.0! A Client Portal product extending capabilities of a website-like interface that significantly enhances user experience, making it intuitive and engaging for all users",
      "Presently working on Rocketlane 'Sheets' - aimed at transforming how teams juggle data and elevate their experience of the same.",
      "Led the end-to-end implementation of the Automations feature from ideation to successful adoption. Uncovered a successful adoption curve with 75% adoption company-wide",
      "Key player in developing and launching specialized annotations and proofing feature for the marketing agency domain, setting Rocketlane up as a contender in this niche market.",
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
    website: "https://adease.ai",
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
