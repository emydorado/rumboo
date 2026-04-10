import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import RumbooButton from '../components/RumbooButton';
import RumbooInput from '../components/RumbooInput';

export default function Login() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'var(--color-surface)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Box
        sx={{
          bgcolor: 'background.paper',
          border: '0.5px solid var(--color-border)',
          borderRadius: '20px',
          p: { xs: 3, sm: 4 },
          width: '100%',
          maxWidth: 420,
          display: 'flex',
          flexDirection: 'column',
          gap: 2.5,
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 0.75 }}>
            Bienvenido de vuelta
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Inicia sesión para continuar
          </Typography>
        </Box>

        {/* Google */}
        <Button
          fullWidth
          variant="outlined"
          startIcon={
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          }
          sx={{
            borderRadius: '12px',
            py: 1.625,
            borderColor: 'var(--color-border)',
            color: 'text.primary',
            fontWeight: 500,
            '&:hover': {
              borderColor: 'var(--color-border)',
              bgcolor: 'var(--color-surface)',
            },
          }}
        >
          Continuar con Google
        </Button>

        {/* Divider */}
        <Divider sx={{ color: 'text.disabled', fontSize: '0.8125rem' }}>
          o
        </Divider>

        {/* Fields */}
        <RumbooInput label="Email" type="email" placeholder="tu@email.com" />
        <RumbooInput
          label="Contraseña"
          type="password"
          placeholder="••••••••"
        />

        {/* Submit */}
        <RumbooButton
          variant="contained"
          fullWidth
          sx={{ py: 1.75, fontSize: '0.9375rem', borderRadius: '12px' }}
        >
          Iniciar sesión
        </RumbooButton>

        {/* Footer */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: 'center' }}
        >
          ¿No tienes cuenta?{' '}
          <Box
            component="span"
            sx={{ color: '#ff5b04', fontWeight: 600, cursor: 'pointer' }}
          >
            Regístrate
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}
