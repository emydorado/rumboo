import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ItineraryItem from './ItineraryItem';

interface Activity {
  emoji: string;
  title: string;
}

interface ItineraryDayGroupProps {
  dayNumber: number;
  date: string;
  activities: Activity[];
}

export default function ItineraryDayGroup({
  dayNumber,
  date,
  activities,
}: ItineraryDayGroupProps) {
  return (
    <Box>
      <Typography
        variant="caption"
        sx={{
          display: 'block',
          mb: 1.25,
          pl: 0.5,
          fontWeight: 600,
          color: 'text.secondary',
        }}
      >
        Día {dayNumber} · {date}
      </Typography>
      <Box
        sx={{
          borderLeft: '2px solid #ff5b04',
          pl: 1.75,
          display: 'flex',
          flexDirection: 'column',
          gap: 0.75,
        }}
      >
        {activities.map((a, i) => (
          <ItineraryItem key={i} emoji={a.emoji} title={a.title} />
        ))}
      </Box>
    </Box>
  );
}
