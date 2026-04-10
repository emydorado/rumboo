import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

interface BalanceRowProps {
  name: string;
  paid: string;
  owes: string;
  balance: string;
  isPositive: boolean;
  avatarColor?: string;
}

export default function BalanceRow({
  name,
  paid,
  owes,
  balance,
  isPositive,
  avatarColor = '#ff5b04',
}: BalanceRowProps) {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        border: '0.5px solid var(--color-border)',
        borderRadius: '14px',
        px: 2.25,
        py: 1.75,
        display: 'flex',
        alignItems: 'center',
        gap: 1.75,
      }}
    >
      <Avatar
        sx={{
          width: 36,
          height: 36,
          bgcolor: avatarColor,
          fontSize: '0.8125rem',
          fontWeight: 700,
        }}
      >
        {name[0].toUpperCase()}
      </Avatar>
      <Box sx={{ flex: 1 }}>
        <Typography
          sx={{ fontWeight: 600, fontSize: '0.875rem', color: 'text.primary' }}
        >
          {name}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Pagó {paid} · Debe {owes}
        </Typography>
      </Box>
      <Chip
        label={balance}
        size="small"
        sx={{
          fontWeight: 600,
          fontSize: '0.8125rem',
          borderRadius: '99px',
          bgcolor: isPositive ? '#e6eeee' : '#ffefe6',
          color: isPositive ? '#075056' : '#b54103',
        }}
      />
    </Box>
  );
}
