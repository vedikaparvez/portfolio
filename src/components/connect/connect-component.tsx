import { Box, Typography, Container } from "@mui/material"

const ConnectComponent: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{mt: 5}}>
      <Typography variant="h3" gutterBottom>Are you someone who</Typography>
      <ul>
          <li>Doesn&apos;t know where to start your start-up journey or feels stuck in it?</li>
          <li>Wants to integrate Artificial Intelligence and Machine Learning into your product but don&apos;t know how?</li>
          <li>Wants to bounce off ideas that will revolutionize tomorrow?</li>
      </ul>
      <Container maxWidth="md" sx={{mt: 5}}>
        <Typography variant="h3" gutterBottom>If this sounds like you, shoot me an email or let&apos;s chat!</Typography>
        <Typography variant="body1">
          email me at <a href="mailto:ved.parvez2@gmail.com">ved.parvez2@gmail.com</a> (OR)
          You can book some time on my calendar by clicking <a href={"__REPLACE_WITH_CALENDLY_LINK"}>here</a>.
          </Typography>
      </Container>
    </Container>
  )
}

export default ConnectComponent