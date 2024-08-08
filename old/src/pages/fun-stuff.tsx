import Head from "next/head"

import Dynamic from "next/dynamic"

import { Box } from "@mui/material"

import HeroSection from "@/components/common/hero-section"
const FunStuffItemsList = Dynamic(()=> import('@/components/fun-stuff/items-list'))

import FunStuffContent from "@/props-constants/fun-stuff-content"

export default function FunStuffPage() {
  return (
    <>
      <Head>
        <title>Vedika Parvez | About Me</title>
        <meta name="description" content="Vedika Parvez" />
      </Head>
      <Box sx={{mb: 5}}>
        <HeroSection text="If you don't find me at my desk, I'm probably either" />
        <FunStuffItemsList items={FunStuffContent} />
      </Box>
    </>
  )
}
