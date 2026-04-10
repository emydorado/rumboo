import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import RumbooButton from '../components/RumbooButton';

export default function Landing() {
  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #233038 0%, #075056 60%, #ff5b04 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      px: 2,
    }}>
      <Container maxWidth="sm" sx={{ textAlign: 'center', color: 'white' }}>
        <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2 }}>
        Rumboo 🧭
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 400, mb: 4, opacity: 0.85, lineHeight: 1.6 }}>
        Organiza viajes grupales sin el caos. Gastos, itinerario y decisiones en un solo lugar.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <RumbooButton variant="contained" size="large" sx={{ bgcolor: '#ff5b04', '&:hover': { bgcolor: '#e85304' } }}>
            Crear mi viaje
          </RumbooButton>
          <RumbooButton variant="outlined" size="large" sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.08)' } }}>
            Iniciar sesión
          </RumbooButton>
        </Box>
      </Container>
    </Box>
  );
}