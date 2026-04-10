import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface StepCardProps {
  step: string;
  title: string;
  description: string;
}

export default function StepCard({ step, title, description }: StepCardProps) {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        border: '0.5px solid var(--color-border)',
        borderRadius: '16px',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 1.75,
      }}
    >
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: '14px',
          background: 'linear-gradient(135deg, #ff7c36, #ff5b04)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontWeight: 700,
          fontSize: '0.9375rem',
        }}
      >
        {step}
      </Box>
      <Typography
        sx={{ fontWeight: 600, fontSize: '0.9375rem', color: 'text.primary' }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ lineHeight: 1.6 }}
      >
        {description}
      </Typography>
    </Box>
  );
}
