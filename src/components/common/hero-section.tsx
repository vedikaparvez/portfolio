import {Container, Typography, Box, useTheme, useMediaQuery} from "@mui/material"

const HeroSection: React.FC<{text: string}> = ({text}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <Box
      sx={{display: "flex", alignItems: "center", height: "85vh", borderBottom: "1px solid grey"}}>
      <Container maxWidth="md" sx={{textAlign: "center"}}>
        <Typography variant={isMobile ? "h6" : "h1"}>
          <div dangerouslySetInnerHTML={{__html: text}}></div>
        </Typography>
      </Container>
    </Box>
  )
}

export default HeroSection
