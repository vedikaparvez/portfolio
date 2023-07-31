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
      <iframe id="softr-8f54cdd5-557e-4402-891f-cdaf6b4de64f-hero3" src="https://www.vedikaparvez.com/embed/pages/8f54cdd5-557e-4402-891f-cdaf6b4de64f/blocks/hero3" width="100%" height="1000" scrolling="no" frameborder="0" style="border:none;"></iframe>    <script src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.2.11/iframeResizer.min.js"></script>    <script> iFrameResize({ checkOrigin: false, log: true }, '#softr-8f54cdd5-557e-4402-891f-cdaf6b4de64f-hero3');</script>
    </>
  )
}
