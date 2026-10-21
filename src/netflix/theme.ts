import { createTheme } from '@mui/material/styles'
import { DARK_BACKGROUND, GOLD, NETFLIX_RED, PANEL_BACKGROUND } from './constants'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: NETFLIX_RED, contrastText: '#ffffff' },
    secondary: { main: GOLD, contrastText: '#000000' },
    success: { main: '#46d369' },
    background: { default: DARK_BACKGROUND, paper: PANEL_BACKGROUND },
    text: { primary: '#ffffff', secondary: '#b3b3b3' },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica Neue', Arial, sans-serif",
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: { borderRadius: 4 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: DARK_BACKGROUND,
          color: '#ffffff',
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
    },
    MuiTooltip: {
      defaultProps: { arrow: true },
    },
  },
})

export default theme
