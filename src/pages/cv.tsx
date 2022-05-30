import Head from "next/head"

import Resume from "@/components/cv/resume"

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Vedika Parvez | Resume</title>
        <meta name="description" content="Vedika Parvez" />
      </Head>
      <Resume />
    </>
  )
}
