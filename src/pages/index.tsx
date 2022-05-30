import Head from "next/head"

import HomePageHeroSection from "@/components/home-page/hero-section"

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Vedika Parvez</title>
        <meta name="description" content="Vedika Parvez" />
      </Head>
      <HomePageHeroSection />
    </>
  )
}
