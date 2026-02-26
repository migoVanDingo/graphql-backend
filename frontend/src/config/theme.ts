import { createTheme, type ThemeOptions } from '@mui/material/styles'
import { deepmerge } from '@mui/utils'

// Import all Material palettes
import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey,
} from '@mui/material/colors'

// Type extensions for custom theme properties
declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      radii: {
        xs: number
        sm: number
        md: number
        lg: number
        xl: number
        xxl: number
      }
      spacing: {
        min: number
        xs: number
        sm: number
        md: number
        lg: number
        xl: number
        xxl: number
        xxxl: number
      }
      component: {
        header: { height: number }
        sidebar: { width: number; collapsedWidth: number }
        footer: { height: number }
      }
      font: {
        weight: { light: number; regular: number; medium: number; semibold: number; bold: number }
        size: {
          xxs: string
          xs: string
          sm: string
          md: string
          lg: string
          xl: string
          xxl: string
        }
      }
      transitions: {
        fast: string
        normal: string
        slow: string
      }
      zIndex: {
        drawer: number
        modal: number
        snackbar: number
        tooltip: number
      }
    }
  }

  interface ThemeOptions {
    custom?: Partial<Theme['custom']>
  }

  interface Palette {
    accent1: { dim: string; main: string; vibrant: string; contrastText: string }
    accent2: { dim: string; main: string; vibrant: string; contrastText: string }
    boxShadow: { light: string; medium: string; dark: string; hover: string }
    colors: typeof baseColors
  }

  interface PaletteOptions {
    accent1?: { dim: string; main: string; vibrant: string; contrastText: string }
    accent2?: { dim: string; main: string; vibrant: string; contrastText: string }
    boxShadow?: { light: string; medium: string; dark: string; hover: string }
    colors?: typeof baseColors
  }
}

// All Material palettes
const baseColors = {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey,
}

// Common base theme (shared between light and dark)
const commonTheme: ThemeOptions = {
  spacing: 8,
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.43,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  custom: {
    radii: {
      xs: 2,
      sm: 4,
      md: 8,
      lg: 12,
      xl: 16,
      xxl: 24,
    },
    spacing: {
      min: 2,
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
      xxl: 48,
      xxxl: 64,
    },
    component: {
      header: { height: 64 },
      sidebar: { width: 280, collapsedWidth: 64 },
      footer: { height: 48 },
    },
    font: {
      weight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      size: {
        xxs: '0.625rem',
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        xxl: '1.5rem',
      },
    },
    transitions: {
      fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
      normal: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
      slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    zIndex: {
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontSize: '0.9375rem',
          fontWeight: 600,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        elevation1: {
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
        },
        elevation2: {
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
        },
        elevation3: {
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)',
        },
      },
    },
  },
}

// Light theme palette
const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      light: '#f5f5f5',
      main: '#e0e0e0',
      dark: '#919191',
      contrastText: '#212121',
    },
    secondary: {
      light: '#757575',
      main: '#424242',
      dark: '#212121',
      contrastText: '#ffffff',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#616161',
      disabled: '#9e9e9e',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    accent1: {
      dim: '#c0e4ff',
      main: '#64b5f6',
      vibrant: '#2196f3',
      contrastText: '#ffffff',
    },
    accent2: {
      dim: '#ffc0e4',
      main: '#f48fb1',
      vibrant: '#f32196',
      contrastText: '#ffffff',
    },
    boxShadow: {
      light: '0px 1px 3px rgba(0, 0, 0, 0.12)',
      medium: '0px 4px 8px rgba(0, 0, 0, 0.15)',
      dark: '0px 8px 16px rgba(0, 0, 0, 0.2)',
      hover: '0px 6px 12px rgba(0, 0, 0, 0.15)',
    },
    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
    },
    warning: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
    },
    info: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2',
    },
  },
}

// Dark theme palette
const darkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      light: '#424242',
      main: '#1e1e1e',
      dark: '#121212',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#e0e0e0',
      main: '#bdbdbd',
      dark: '#9e9e9e',
      contrastText: '#212121',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
      disabled: '#757575',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    accent1: {
      dim: '#1e3a4c',
      main: '#42a5f5',
      vibrant: '#2196f3',
      contrastText: '#ffffff',
    },
    accent2: {
      dim: '#4c1e38',
      main: '#f48fb1',
      vibrant: '#f32196',
      contrastText: '#ffffff',
    },
    boxShadow: {
      light: '0px 2px 4px rgba(0, 0, 0, 0.5)',
      medium: '0px 4px 8px rgba(0, 0, 0, 0.6)',
      dark: '0px 8px 16px rgba(0, 0, 0, 0.7)',
      hover: '0px 6px 12px rgba(0, 0, 0, 0.6)',
    },
    success: {
      light: '#66bb6a',
      main: '#4caf50',
      dark: '#2e7d32',
    },
    error: {
      light: '#ef5350',
      main: '#f44336',
      dark: '#c62828',
    },
    warning: {
      light: '#ffa726',
      main: '#ff9800',
      dark: '#e65100',
    },
    info: {
      light: '#42a5f5',
      main: '#2196f3',
      dark: '#1565c0',
    },
  },
}

// Theme factory function
export const getTheme = (mode: 'light' | 'dark') => {
  const paletteConfig = mode === 'light' ? lightTheme : darkTheme

  return createTheme(
    deepmerge(commonTheme, {
      ...paletteConfig,
      palette: {
        ...paletteConfig.palette,
        colors: baseColors,
      },
    })
  )
}
