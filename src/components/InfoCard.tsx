import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { SvgIconComponent } from '@mui/icons-material';

interface InfoCardProps {
  icon: SvgIconComponent;
  title: string;
  subtitle: string;
}

export default function InfoCard({
  icon: Icon,
  title,
  subtitle,
}: InfoCardProps) {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        border: '0.5px solid var(--color-border)',
        borderRadius: '16px',
        p: 2.5,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
      }}
    >
      <Icon sx={{ fontSize: 32, color: '#ff5b04' }} />
      <Box>
        <Typography
          sx={{ fontWeight: 600, fontSize: '0.9375rem', color: 'text.primary' }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
}
