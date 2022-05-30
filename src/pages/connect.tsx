import Head from "next/head"
import Dynamic from "next/dynamic"

import { Box } from "@mui/material"

import HeroSection from "@/components/common/hero-section"
const ConnectComponent = Dynamic(()=> import('@/components/connect/connect-component'))

export default function ConnectPage() {
  return (
    <>
      <Head>
        <title>Vedika Parvez | Connect</title>
        <meta name="description" content="Vedika Parvez" />
      </Head>
      <Box sx={{mb: 5}}>
        <HeroSection text="Let's talk! <br /><br /><br /> (Don't worry about charges, we'll work something out!)" />
        <ConnectComponent />
      </Box>
    </>
  )
}
