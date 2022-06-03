import Image from "next/image"

import { Typography, Container, useMediaQuery, useTheme } from "@mui/material"
import CampaignIcon from '@mui/icons-material/Campaign';

import ImageSources from "@/props-constants/image-sources"


const HomePageHeroSection: React.FC = ({}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 

  return (
    <Container maxWidth="lg" sx={{textAlign:"center", height: "fit-content"}}>
      <Image src={ImageSources.homePageHero} alt="logo" height="236px" width="280px" />
      <Container>
        <Typography variant="h1"  gutterBottom={isMobile}>
          {"Hi! I'm Vedika."}
          <CampaignIcon sx={{fontSize: "inherit", transform: "rotateY(0deg) rotate(-45deg)"}}/>
        </Typography>
        <Typography variant="h1" sx={{ mb: 5}}> Welcome to my page on the internet!</Typography>
        <Typography variant="h2" gutterBottom>INNOVATOR • EXECUTOR • CHILLER</Typography>
      </Container>
    </Container>
  )
}

export default HomePageHeroSection