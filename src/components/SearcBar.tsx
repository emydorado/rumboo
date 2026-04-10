import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export default function SearchBar({ placeholder = 'Buscar viajes...', value, onChange }: SearchBarProps) {
  return (
    <Box sx={{
      display: 'flex', alignItems: 'center', gap: 1.25,
      bgcolor: 'background.paper',
      border: '0.5px solid', borderColor: 'var(--color-border)',
      borderRadius: '12px', px: 2, py: 1.5,
    }}>
      <SearchIcon sx={{ color: 'var(--color-text-disabled)', fontSize: 20 }} />
      <InputBase
        fullWidth
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        sx={{ fontSize: '0.9375rem', color: 'text.primary' }}
      />
    </Box>
  );
}