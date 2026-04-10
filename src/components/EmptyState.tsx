import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function EmptyState() {
  return (
    <Box sx={{ textAlign: 'center', py: 6 }}>
      <Typography variant="h6">
        No tienes viajes aún
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Crea tu primer viaje para comenzar
      </Typography>
    </Box>
  );
}