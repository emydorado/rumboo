import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Chip from '@mui/material/Chip';
import PlaceIcon from '@mui/icons-material/PlaceOutlined';
import CalendarIcon from '@mui/icons-material/CalendarTodayOutlined';

interface Member {
  name: string;
  avatar?: string;
  color?: string;
}

interface TripCardNoImgProps {
  title: string;
  destination: string;
  dateRange: string;
  members: Member[];
  balance: 'owes' | 'ok';
  owesAmount?: string;
}

const AVATAR_COLORS = ['#ff5b04', '#075056', '#598a8e', '#4f5960'];

export default function TripCardNoImg({
  title,
  destination,
  dateRange,
  members,
  balance,
  owesAmount,
}: TripCardNoImgProps) {
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
        cursor: 'pointer',
        transition: 'transform 0.18s, box-shadow 0.18s',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: 'var(--shadow-md)',
        },
      }}
    >
      {/* Accent bar */}
      <Box
        sx={{ width: 36, height: 3, borderRadius: '99px', bgcolor: '#ff5b04' }}
      />

      <Typography
        sx={{
          fontSize: '1rem',
          fontWeight: 600,
          color: 'text.primary',
          lineHeight: 1.3,
        }}
      >
        {title}
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
          <PlaceIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
          <Typography variant="body2" color="text.secondary">
            {destination}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
          <CalendarIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
          <Typography variant="body2" color="text.secondary">
            {dateRange}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mt: 0.5,
        }}
      >
        <AvatarGroup
          max={4}
          sx={{
            '& .MuiAvatar-root': {
              width: 28,
              height: 28,
              fontSize: '0.7rem',
              border: '2px solid white',
            },
          }}
        >
          {members.map((m, i) => (
            <Avatar
              key={i}
              src={m.avatar}
              sx={{ bgcolor: AVATAR_COLORS[i % AVATAR_COLORS.length] }}
            >
              {m.name[0].toUpperCase()}
            </Avatar>
          ))}
        </AvatarGroup>

        {balance === 'owes' ? (
          <Chip
            label={`Debes ${owesAmount}`}
            size="small"
            sx={{
              bgcolor: '#ffefe6',
              color: '#b54103',
              fontWeight: 600,
              fontSize: '0.7rem',
              borderRadius: '99px',
            }}
          />
        ) : (
          <Chip
            label="Al día ✓"
            size="small"
            sx={{
              bgcolor: '#e6eeee',
              color: '#075056',
              fontWeight: 600,
              fontSize: '0.7rem',
              borderRadius: '99px',
            }}
          />
        )}
      </Box>
    </Box>
  );
}
