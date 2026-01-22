import { createTheme } from '@mui/material/styles';

// Create a custom theme based on Material Design principles
const theme = createTheme({
  palette: {
    primary: {
      main: '#0609FD',
      light: '#70A2FF',
      dark: '#0505A0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#70A2FF',
      light: '#a3c4ff',
      dark: '#4a7fd9',
      contrastText: '#fff',
    },
    error: {
      main: '#FD0701',
      light: '#ff4a47',
      dark: '#c40500',
    },
    warning: {
      main: '#FFC000',
      light: '#ffd147',
      dark: '#e69c00',
    },
    info: {
      main: '#0288d1',
      light: '#03a9f4',
      dark: '#01579b',
    },
    success: {
      main: '#8DC909',
      light: '#a8d944',
      dark: '#6b9a07',
    },
    action: {
      disabled: '#BDBDBD',
      disabledBackground: '#E0E0E0',
    },
  },
  spacing: 8,
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    button: {
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: false,
      },
      styleOverrides: {
        root: {
          maxWidth: '100% !important',
          paddingLeft: 32,
          paddingRight: 32,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          '& .MuiToolbar-root': {
            maxWidth: 'none !important',
            width: '100%',
            paddingLeft: '32px',
            paddingRight: '32px',
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          maxWidth: 'none !important',
          minWidth: 'unset !important',
          width: '100%',
          paddingLeft: '32px !important',
          paddingRight: '32px !important',
          '@media (min-width: 600px)': {
            minWidth: 'unset !important',
            maxWidth: 'none !important',
          },
        },
      },
    },
  },
});

export default theme;
