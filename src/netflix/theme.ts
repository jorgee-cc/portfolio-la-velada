import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#e50914', contrastText: '#ffffff' },
    secondary: { main: '#f6c343', contrastText: '#000000' },
    success: { main: '#46d369' },
    background: { default: '#141414', paper: '#181818' },
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
          backgroundColor: '#141414',
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
