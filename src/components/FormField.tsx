import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RumbooInput from './RumbooInput';
import type { TextFieldProps } from '@mui/material/TextField';

type FormFieldProps = TextFieldProps & {
  label: string;
};

export default function FormField({
  label,
  error,
  helperText,
  ...props
}: FormFieldProps) {
  return (
    <Box>
      <Typography variant="body2" sx={{ mb: 0.5 }}>
        {label}
      </Typography>
      <RumbooInput
        error={error}
        helperText={helperText}
        {...props}
      />
    </Box>
  );
}