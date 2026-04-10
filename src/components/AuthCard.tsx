import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

export default function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <Card sx={{
      p: 4,
      borderRadius: '16px',
      maxWidth: 420,
      mx: 'auto',
      boxShadow: 'var(--shadow-lg)'
    }}>
      <Box>{children}</Box>
    </Card>
  );
}