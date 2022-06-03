import ImageSources from '@/props-constants/image-sources'
import { Container } from "@mui/system"

const ResumeComponent: React.FC = () => {
  return (
    <Container maxWidth="md">
     <img src={ImageSources.resume} alt="resume" />
  </Container>
  )
}

export default ResumeComponent
