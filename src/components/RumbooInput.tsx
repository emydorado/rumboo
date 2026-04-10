import TextField from '@mui/material/TextField';
import type { TextFieldProps } from '@mui/material/TextField';


export default function RumbooInput(props: TextFieldProps) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      {...props}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '12px',
          bgcolor: 'var(--color-cloud-100)',
          '& fieldset': { borderColor: 'var(--color-border)', borderWidth: '1.5px' },
          '&:hover fieldset': { borderColor: 'var(--color-primary)' },
          '&.Mui-focused fieldset': { borderColor: 'var(--color-primary)', borderWidth: '2px' },
        },
        ...props.sx,
      }}
    />
  );
}