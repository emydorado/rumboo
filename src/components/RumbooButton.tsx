import Button from '@mui/material/Button';
import type { ButtonProps } from '@mui/material/Button';

interface RumbooButtonProps extends ButtonProps {
  fullRounded?: boolean;
}

export default function RumbooButton({
  fullRounded = true,
  sx,
  ...props
}: RumbooButtonProps) {
  return (
    <Button
      {...props}
      sx={{
        borderRadius: fullRounded ? '14px' : '12px',
        px: 3.5,
        py: 1.5,
        fontWeight: 600,
        fontSize: '0.9375rem',
        boxShadow: 'none',
        '&:hover': { boxShadow: 'none' },
        ...(props.variant === 'contained' && {
          background: 'linear-gradient(135deg, #ff7c36 0%, #ff5b04 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #ff9157 0%, #ff6a1a 100%)',
            boxShadow: 'none',
          },
        }),
        ...(props.variant === 'text' && {
          color: 'var(--color-text-primary)',
          bgcolor: 'transparent',
          '&:hover': {
            bgcolor: 'transparent',
            opacity: 0.7,
            boxShadow: 'none',
          },
        }),
        ...sx,
      }}
    />
  );
}
