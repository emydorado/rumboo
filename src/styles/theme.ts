import { createTheme } from '@mui/material/styles';
import type { Shadows } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light:   '#ff9157',
      main:    '#ff5b04',
      dark:    '#b54103',
      contrastText: '#ffffff',
    },
    secondary: {
      light:   '#598a8e',
      main:    '#075056',
      dark:    '#042c2f',
      contrastText: '#ffffff',
    },
    background: {
      default: '#fbfcfc',
      paper:   '#ffffff',
    },
    text: {
      primary:   '#233038',
      secondary: '#4f5960',
      disabled:  '#969d9e',
    },
    divider: '#dce4e5',
    error:   { main: '#d32f2f' },
    success: { main: '#2e7d32' },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    h1: { fontSize: '2.25rem', fontWeight: 700, lineHeight: 1.2 },
    h2: { fontSize: '1.875rem', fontWeight: 700, lineHeight: 1.25 },
    h3: { fontSize: '1.5rem',   fontWeight: 600, lineHeight: 1.3 },
    h4: { fontSize: '1.25rem',  fontWeight: 600, lineHeight: 1.35 },
    h5: { fontSize: '1.125rem', fontWeight: 600, lineHeight: 1.4 },
    h6: { fontSize: '1rem',     fontWeight: 600, lineHeight: 1.4 },
    body1: { fontSize: '1rem',     fontWeight: 400, lineHeight: 1.6 },
    body2: { fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.6 },
    caption: { fontSize: '0.75rem', fontWeight: 400 },
    button: { fontWeight: 600, textTransform: 'none', letterSpacing: '0.01em' },
  },
  shape: { borderRadius: 12 },
  shadows: [
    'none',
    '0 1px 3px rgba(7,80,86,0.08)',
    '0 2px 12px rgba(35,48,56,0.10)',
    '0 4px 16px rgba(7,80,86,0.12)',
    '0 8px 32px rgba(7,80,86,0.16)',
    ...Array(20).fill('none'),
  ] as Shadows,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '9999px',
          padding: '12px 28px',
          fontSize: '0.9375rem',
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' },
        },
        outlined: {
          borderWidth: '1.5px',
          '&:hover': { borderWidth: '1.5px' },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 2px 12px rgba(35,48,56,0.10)',
          border: '1px solid #dce4e5',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            '& fieldset': { borderColor: '#dce4e5', borderWidth: '1.5px' },
            '&:hover fieldset': { borderColor: '#ff5b04' },
            '&.Mui-focused fieldset': { borderColor: '#ff5b04', borderWidth: '2px' },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 8, fontWeight: 500 },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#ffffff',
          color: '#233038',
          boxShadow: '0 1px 3px rgba(7,80,86,0.08)',
        },
      },
    },
  },
});

export default theme;