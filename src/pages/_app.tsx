import React from "react"
import Head from "next/head"
import {AppProps} from "next/app"
import {useRouter} from "next/router"
import {SnackbarProvider} from "notistack"

import {CacheProvider, EmotionCache} from "@emotion/react"
import {IconButton, CssBaseline, ThemeProvider} from "@mui/material"
import {Delete as DeleteIcon} from "@mui/icons-material"

import Layout from "@/components/layout"

import theme from "@/props-constants/theme"
import createEmotionCache from "@/utils/create-emoticon-cache"

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}


export default function MyApp(props: MyAppProps) {
  const router = useRouter()

  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props

  // Add dismiss action to all snackbar notifications
  const notistackRef: any = React.createRef()
  const onClickDismiss = (key: string) => () => {
    notistackRef.current.closeSnackbar(key)
  }

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Vedika Parvez</title>
      </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <SnackbarProvider
            maxSnack={5}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            ref={notistackRef}
            action={(key: string) => (
              <IconButton onClick={onClickDismiss(key)} disableFocusRipple disableTouchRipple>
                <DeleteIcon sx={{color: "common.white"}} />
              </IconButton>
            )}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SnackbarProvider>
        </ThemeProvider>
    </CacheProvider>
  )
}
