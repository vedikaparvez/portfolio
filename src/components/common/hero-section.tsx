import { Container, Typography, Box } from "@mui/material"

const HeroSection: React.FC<{text: string}> = ({text}) => {
  return (
   <Box sx={{display: "flex", alignItems: "center", height: "90vh", borderBottom: "1px solid grey"}}>
      <Container maxWidth="md" sx={{textAlign:"center"}}>
        <Typography variant="h1">
          <div dangerouslySetInnerHTML={{__html: text}}></div>
        </Typography>
      </Container>
   </Box>
  )
}

export default HeroSection
