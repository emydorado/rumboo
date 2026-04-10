import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { ReactNode } from 'react';

type SectionHeaderProps = {
  title: string;
  action?: ReactNode;
};

export default function SectionHeader({ title, action }: SectionHeaderProps) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
      <Typography variant="h5">{title}</Typography>
      {action}
    </Box>
  );
}