import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface ItineraryItemProps {
  emoji: string;
  title: string;
}

export default function ItineraryItem({ emoji, title }: ItineraryItemProps) {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        border: '0.5px solid var(--color-border)',
        borderRadius: '12px',
        px: 2,
        py: 1.625,
        display: 'flex',
        alignItems: 'center',
        gap: 1.25,
      }}
    >
      <span style={{ fontSize: 16 }}>{emoji}</span>
      <Typography sx={{ fontSize: '0.875rem', color: 'text.primary' }}>
        {title}
      </Typography>
    </Box>
  );
}
