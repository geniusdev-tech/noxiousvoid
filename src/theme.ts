// Definição da paleta de cores profissional para body piercer
// Baseada nas referências coletadas

const paletteProfessional = {
  // Cores principais
  primary: {
    main: '#212121',     // Preto suave para fundo e elementos principais
    light: '#484848',    // Cinza escuro para elementos secundários
    dark: '#000000',     // Preto puro para detalhes
    contrastText: '#ffffff'
  },
  // Cores de destaque
  secondary: {
    main: '#757575',     // Cinza metálico para elementos de destaque
    light: '#a4a4a4',    // Cinza claro para hover e elementos interativos
    dark: '#494949',     // Cinza escuro para detalhes
    contrastText: '#ffffff'
  },
  // Cor de destaque para elementos importantes (botões, links)
  accent: {
    main: '#9e9e9e',     // Cinza prateado para acentos
    light: '#cfcfcf',    // Cinza claro para hover
    dark: '#707070',     // Cinza escuro para detalhes
    contrastText: '#ffffff'
  },
  // Cores para textos
  text: {
    primary: '#f5f5f5',  // Branco suave para texto principal
    secondary: '#bdbdbd', // Cinza claro para texto secundário
    disabled: '#757575',  // Cinza médio para texto desabilitado
    hint: '#9e9e9e'       // Cinza para dicas e placeholders
  },
  // Cores de fundo
  background: {
    default: '#121212',   // Preto suave para fundo principal
    paper: '#1e1e1e',     // Preto com tom cinza para cards e elementos
    contrast: '#2d2d2d'   // Cinza escuro para contraste
  },
  // Cores para status e feedback
  status: {
    success: '#81c784',   // Verde suave
    warning: '#ffb74d',   // Laranja suave
    error: '#e57373',     // Vermelho suave
    info: '#64b5f6'       // Azul suave
  }
};

// Tipografia profissional para body piercer
const typographyProfessional = {
  fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 700,
    fontSize: '2.5rem',
    letterSpacing: '0.02em',
    textTransform: 'uppercase'
  },
  h2: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 600,
    fontSize: '2rem',
    letterSpacing: '0.01em'
  },
  h3: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 500,
    fontSize: '1.75rem'
  },
  h4: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 500,
    fontSize: '1.5rem'
  },
  h5: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 500,
    fontSize: '1.25rem'
  },
  h6: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 500,
    fontSize: '1rem'
  },
  body1: {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: 1.5
  },
  body2: {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: 1.43
  },
  button: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 500,
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    letterSpacing: '0.02em'
  },
  caption: {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 1.66
  },
  overline: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 400,
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em'
  }
};

// Estilos de componentes para o tema profissional
const componentsProfessional = {
  MuiCssBaseline: {
    styleOverrides: `
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap');
      
      body {
        background-color: #121212;
        background-image: linear-gradient(to bottom, rgba(30, 30, 30, 0.4) 0%, rgba(10, 10, 10, 0.8) 100%);
        background-attachment: fixed;
      }
      
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: #1e1e1e;
      }
      
      ::-webkit-scrollbar-thumb {
        background: #757575;
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: #9e9e9e;
      }
    `,
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 2,
        textTransform: 'none',
        padding: '8px 16px',
        boxShadow: 'none',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
          transform: 'translateY(-2px)'
        }
      },
      contained: {
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
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
        borderRadius: 4,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
        }
      }
    }
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(18, 18, 18, 0.8)'
      }
    }
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        margin: '24px 0',
        backgroundColor: 'rgba(255, 255, 255, 0.08)'
      }
    }
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.23)',
            borderRadius: 4,
            transition: 'border-color 0.3s ease'
          },
          '&:hover fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.5)'
          },
          '&.Mui-focused fieldset': {
            borderColor: '#9e9e9e'
          }
        }
      }
    }
  }
};

export { paletteProfessional, typographyProfessional, componentsProfessional };
