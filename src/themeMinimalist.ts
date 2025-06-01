import { PaletteOptions, ThemeOptions } from '@mui/material/styles';
import { CSSProperties } from 'react'; // Import CSSProperties for explicit typing

// Definição da paleta de cores minimalista preto, cinza e branco
const paletteMinimalist: PaletteOptions = { // Add PaletteOptions type
  // Cores principais
  primary: {
    main: '#000000',
    light: '#212121',
    dark: '#000000',
    contrastText: '#ffffff'
  },
  // Cores de destaque
  secondary: {
    main: '#ffffff',
    light: '#ffffff',
    dark: '#e0e0e0',
    contrastText: '#000000'
  },
  // Cores para textos
  text: {
    primary: '#ffffff',
    secondary: '#bdbdbd',
    disabled: '#757575',
  },
  // Cores de fundo
  background: {
    default: '#000000',
    paper: '#121212',
  },
  // Cores para status e feedback (mapped directly)
  success: { main: '#81c784' },
  warning: { main: '#ffb74d' },
  error: { main: '#e57373' },
  info: { main: '#64b5f6' }
};

// Tipografia minimalista
const typographyMinimalist = {
  fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
  h1: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 700,
    fontSize: '3rem',
    letterSpacing: '0.02em',
    textTransform: 'uppercase' as CSSProperties['textTransform'] // Explicit cast
  },
  h2: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 600,
    fontSize: '2.5rem',
    letterSpacing: '0.01em'
  },
  h3: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 500,
    fontSize: '2rem'
  },
  h4: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 500,
    fontSize: '1.75rem'
  },
  h5: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 500,
    fontSize: '1.5rem'
  },
  h6: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 500,
    fontSize: '1.25rem'
  },
  body1: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: 1.5
  },
  body2: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: 1.43
  },
  button: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 500,
    fontSize: '0.875rem',
    textTransform: 'uppercase' as CSSProperties['textTransform'], // Explicit cast
    letterSpacing: '0.1em'
  },
  caption: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 1.66
  },
  overline: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 400,
    fontSize: '0.75rem',
    textTransform: 'uppercase' as CSSProperties['textTransform'], // Explicit cast
    letterSpacing: '0.1em'
  }
};

// Estilos de componentes para o tema minimalista
// Corrected direct palette access with literal values
const componentsMinimalist = {
  MuiCssBaseline: {
    styleOverrides: `
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
      
      body {
        background-color: #000000; /* Literal value */
        background-image: none;
        background-attachment: fixed;
      }
      
      ::-webkit-scrollbar {
        width: 6px;
      }
      
      ::-webkit-scrollbar-track {
        background: #121212; /* Literal value */
      }
      
      ::-webkit-scrollbar-thumb {
        background: #424242;
        border-radius: 3px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: #757575;
      }
    `,
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 0,
        textTransform: 'uppercase' as CSSProperties['textTransform'],
        padding: '10px 24px',
        boxShadow: 'none',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: 'none',
          transform: 'translateY(-2px)'
        }
      },
      containedPrimary: {
         boxShadow: 'none',
         '&:hover': {
           boxShadow: 'none',
           backgroundColor: '#212121', // Literal value for primary.light
         }
      },
      containedSecondary: {
         boxShadow: 'none',
         color: '#000000', // Literal value for primary.main (contrast for secondary button)
         '&:hover': {
           boxShadow: 'none',
           backgroundColor: '#e0e0e0', // Literal value for secondary.dark
         }
      },
      outlined: {
        borderWidth: '1px',
        '&:hover': {
          borderWidth: '1px'
        }
      }
    }
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 0,
        boxShadow: 'none',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        border: '1px solid #757575', // Literal value for text.disabled
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)'
        }
      }
    }
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        borderBottom: '1px solid #757575' // Literal value for text.disabled
      }
    }
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        margin: '24px 0',
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
      }
    }
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: 0,
            transition: 'border-color 0.3s ease'
          },
          '&:hover fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.5)'
          },
          '&.Mui-focused fieldset': {
            borderColor: '#ffffff' // Literal value for secondary.main
          }
        }
      }
    }
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        color: '#ffffff', // Literal value for text.primary
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)'
        }
      }
    }
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        backgroundColor: '#000000', // Literal value for background.default
        borderRight: '1px solid #757575' // Literal value for text.disabled
      }
    }
  }
};

// Export with ThemeOptions type hint for createTheme
const themeOptions: ThemeOptions = {
  palette: paletteMinimalist,
  typography: typographyMinimalist as ThemeOptions['typography'], // Cast typography
  components: componentsMinimalist as ThemeOptions['components'], // Cast components
};


export { themeOptions }; // Only export themeOptions as it contains everything

