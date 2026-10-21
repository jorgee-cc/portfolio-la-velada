import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './styles.css'

import theme from './theme'
import { DARK_BACKGROUND } from './constants'
import { catalogRows } from './data/catalog'
import DetailModalProvider from './providers/DetailModalProvider'
import PreviewProvider from './providers/PreviewProvider'
import Header from './components/Header'
import Hero from './components/Hero'
import Row from './components/Row'
import Footer from './components/Footer'
import DetailModal from './components/DetailModal'
import PreviewPortal from './components/PreviewPortal'

export default function NetflixApp() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DetailModalProvider>
        <PreviewProvider>
          <Box className="netflix-app" sx={{ minHeight: '100vh', bgcolor: DARK_BACKGROUND }}>
            <Header />
            <Box component="main">
              <Hero />
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 2,
                  mt: { xs: -5, md: -10 },
                  pb: { xs: 4, md: 6 },
                }}
              >
                {catalogRows.map((row) => (
                  <Row key={row.id} row={row} />
                ))}
              </Box>
            </Box>
            <Footer />
          </Box>
          <PreviewPortal />
          <DetailModal />
        </PreviewProvider>
      </DetailModalProvider>
    </ThemeProvider>
  )
}
