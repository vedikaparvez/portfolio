import Image from "next/image"

import {Typography, Container, useMediaQuery, useTheme, IconButton} from "@mui/material"
import CampaignIcon from "@mui/icons-material/Campaign"

import ImageSources from "@/props-constants/image-sources"

const HomePageHeroSection: React.FC = ({}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const onClickPlay = () => {
    // const audio = document.getElementById("audio")
    // audio && audio.play && audio.play()
  }

  return (
    <Container maxWidth="lg" sx={{textAlign: "center", height: "fit-content", pt: 10}}>
      <Image src={ImageSources.homePageHero} alt="logo" height="236px" width="280px" />
      <Container>
        <Typography variant="h6" gutterBottom={isMobile}>
          {"Hi! I'm Vedika."}
          <IconButton
            onClick={onClickPlay}
            sx={{fontSize: "40px", p: 0, ml: 1, color: "black", mb: 1}}>
            <CampaignIcon sx={{fontSize: "inherit", transform: "rotateY(0deg) rotate(-45deg)"}} />
          </IconButton>
          <audio id="audio" src="/assets/shared/name-phonetics.mp3"></audio>
        </Typography>
        <Typography variant="h6" sx={{mb: 3}}>
          Welcome to my page on the internet!
        </Typography>
        <Typography variant="h2" gutterBottom>
          INNOVATOR • EXECUTOR • CHILLER
        </Typography>
      </Container>
    </Container>
  )
}

export default HomePageHeroSection
