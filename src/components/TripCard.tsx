import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

interface TripCardProps {
  title: string;
  destination: string;
  date: string;
  members: { name: string; avatar?: string }[];
  status: 'planning' | 'confirmed' | 'completed';
  imageUrl?: string;
  totalBudget?: string;
}

const statusConfig = {
  planning:  { label: 'Planificando', color: '#ff5b04', bg: '#ffefe6' },
  confirmed: { label: 'Confirmado',   color: '#075056', bg: '#e6eeee' },
  completed: { label: 'Completado',   color: '#4f5960', bg: '#e9eaeb' },
};

export default function TripCard({ title, destination, date, members, status, imageUrl, totalBudget }: TripCardProps) {
  const s = statusConfig[status];
  return (
    <Card sx={{ borderRadius: '16px', overflow: 'hidden', cursor: 'pointer',
      transition: 'transform 0.2s, box-shadow 0.2s',
      '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 8px 32px rgba(7,80,86,0.16)' }
    }}>
      <CardMedia
        component="img"
        height="160"
        image={imageUrl || 'https://source.unsplash.com/400x200/?travel,adventure'}
        alt={destination}
      />
      <CardContent sx={{ p: 2.5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
          <Typography variant="h6" sx={{ fontWeight:700, color: 'var(--color-text-primary)', fontSize: '1rem' }}>
            {title}
          </Typography>
          <Chip label={s.label} size="small" sx={{ color: s.color, bgcolor: s.bg, fontWeight: 600, fontSize: '0.7rem' }} />
        </Box>

        <Typography variant="body2" sx={{ color: 'var(--color-text-secondary)', mb: 2 }}>
          📍 {destination}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 2 }}>
          <CalendarTodayIcon sx={{ fontSize: 14, color: 'var(--color-text-secondary)' }} />
          <Typography variant="caption" sx={{ color: 'var(--color-text-secondary)' }}>{date}</Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <AvatarGroup max={4} sx={{ '& .MuiAvatar-root': { width: 28, height: 28, fontSize: '0.7rem', border: '2px solid white' } }}>
            {members.map((m, i) => (
              <Avatar key={i} src={m.avatar} alt={m.name} sx={{ bgcolor: i % 2 === 0 ? '#ff5b04' : '#075056' }}>
                {m.name[0]}
              </Avatar>
            ))}
          </AvatarGroup>
          {totalBudget && (
            <Typography variant="caption" sx={{ fontWeight: 700, color: 'var(--color-primary)' }}>
              {totalBudget}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}