import Head from "next/head"
import Dynamic from "next/dynamic"

import { Box } from "@mui/material"

import HeroSection from "@/components/common/hero-section"
const ReadingItemsList = Dynamic(()=> import('@/components/reading/items-list'))

import readingContent from "@/props-constants/reading-content"

export default function WorkPage() {
  return (
    <>
      <Head>
        <title>Vedika Parvez | Reading</title>
        <meta name="description" content="Vedika Parvez" />
      </Head>
      <Box sx={{mb: 5}}>
        <HeroSection text="I thoroughly enjoy reading books in my free time." />
        <ReadingItemsList items={readingContent} />
      </Box>
    </>
  )
}
