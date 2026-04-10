import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTimeOutlined';

interface ExpenseRowProps {
  title: string;
  date: string;
  paidBy: string;
  amount: string;
  splitCount: number;
}

export default function ExpenseRow({
  title,
  date,
  paidBy,
  amount,
  splitCount,
}: ExpenseRowProps) {
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
        justifyContent: 'space-between',
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography
          sx={{ fontWeight: 500, fontSize: '0.875rem', color: 'text.primary' }}
        >
          {title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <AccessTimeIcon sx={{ fontSize: 12, color: 'text.secondary' }} />
          <Typography variant="caption" color="text.secondary">
            {date} · Pagó {paidBy}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 0.5,
        }}
      >
        <Typography
          sx={{ fontWeight: 600, fontSize: '0.875rem', color: 'text.primary' }}
        >
          {amount}
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: 'var(--color-text-disabled)' }}
        >
          ÷{splitCount}
        </Typography>
      </Box>
    </Box>
  );
}
