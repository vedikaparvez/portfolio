import Head from "next/head"
import Dynamic from "next/dynamic"

import { Box } from "@mui/material"

import HeroSection from "@/components/common/hero-section"
const WorkItemsList = Dynamic(()=> import('@/components/work/items-list'))

import workContent from "@/props-constants/work-content"

export default function WorkPage() {
  return (
    <>
      <Head>
        <title>Vedika Parvez | Experiences</title>
        <meta name="description" content="Vedika Parvez" />
      </Head>
      <Box sx={{mb: 5}}>
        <HeroSection text="I was always in love with electronics and equity markets, so" />
        <WorkItemsList items={workContent} />
      </Box>
    </>
  )
}
