import {Box, Container} from "@mui/material"

import Header from "@/components/layout/header"

import HeaderLinks from "@/props-constants/header-links"

const Layout: React.FC = ({children}) => {
  return (
    <Box>
      <Header headerLinks={HeaderLinks} />
      <Box sx={{display: "flex", flexDirection: "column", flexGrow: 1}}>
        <Box sx={{minHeight: "100%"}}>
          <Container maxWidth="xl"> {children}</Container>
        </Box>
      </Box>
    </Box>
  )
}

export default Layout
