import Button from '@mui/material/Button';
import type { ButtonProps } from '@mui/material/Button';

interface RumbooButtonProps extends ButtonProps {
  fullRounded?: boolean;
}

export default function RumbooButton({ fullRounded = true, sx, ...props }: RumbooButtonProps) {
  return (
    <Button
      {...props}
      sx={{
        borderRadius: fullRounded ? '9999px' : '12px',
        px: 3.5,
        py: 1.5,
        fontWeight: 600,
        fontSize: '0.9375rem',
        ...sx,
      }}
    />
  );
}