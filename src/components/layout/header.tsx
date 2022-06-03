import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {useRouter} from "next/router"

import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Menu,
  Container,
  MenuItem,
  Typography,
  Button,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

import ImageSources from "@/props-constants/image-sources"
import PageRoutes from "@/props-constants/page-routes"

interface IHeader {
  headerLinks?: any[]
}
const Header: React.FC<IHeader> = ({headerLinks}) => {
  const router = useRouter()

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget)
  const handleCloseNavMenu = () => setAnchorElNav(null)

  return (
    <AppBar sx={{backgroundColor: "white"}} position="relative">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{display: "flex", justifyContent: "space-between"}}>
          {headerLinks && headerLinks.length > 0 && (
            <Box sx={{flexGrow: 1, display: {xs: "flex", sm: "none"}, alignItems: "center", mr: 1}}>
              <IconButton size="large" onClick={handleOpenNavMenu} color="default" edge="start">
                <MenuIcon />
              </IconButton>
              <Box>
                <Link href={PageRoutes.HOME}>
                  <a>
                    <Image src={ImageSources.navBarLogo} width={30} height={30} alt="logo"/>
                  </a>
                </Link>
              </Box>
              <Menu
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: {xs: "block", sm: "none"},
                }}>
                {headerLinks.map((page: any) => (
                  <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                    <Link href={page.link}>
                      <a color="default">{page.label}</a>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
          <Box sx={{display: {xs: "none", sm: "block"}}}>
            <Link href={PageRoutes.HOME}>
              <a>
                <Image src={ImageSources.navBarLogo} width={50} height={50} alt="logo"/>
              </a>
            </Link>
          </Box>
          {headerLinks && headerLinks.length > 0 && (
            <Box
              sx={{
                flexGrow: 1,
                display: {xs: "none", sm: "flex"},
                justifyContent: "center",
                "&>:nth-of-type(n)": {mx: 2},
              }}>
              {headerLinks.map((page: any) => (
                <Link href={page.link} key={page.label}>
                  <a>
                    <Typography
                      variant="body1"
                      color={router.pathname.includes(page.link) ? "primary" : "textPrimary"}>
                      {page.label}
                    </Typography>
                  </a>
                </Link>
              ))}
            </Box>
          )}<Button href="https://www.linkedin.com/in/vedika-parvez/" color="primary" variant="contained">{"Let's Connect!"}</Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
