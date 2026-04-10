import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import RumbooButton from '../components/RumbooButton';
import RumbooInput from '../components/RumbooInput';
import TripCard from '../components/TripCard';
import EmptyState from '../components/EmptyState';
import SectionHeader from '../components/SectionHeader';
import CreateTripButton from '../components/CreateTripButton';

export default function DesignSystem() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" sx={{ mb: 4 }}>
        Design System
      </Typography>

      {/* BUTTONS */}
      <Typography variant="h5" sx={{ mb: 2 }}>Buttons</Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
        <RumbooButton variant="contained">Primary</RumbooButton>
        <RumbooButton variant="outlined">Secondary</RumbooButton>
      </Stack>

      {/* INPUTS */}
      <Typography variant="h5" sx={{ mb: 2 }}>Inputs</Typography>
      <Stack spacing={2} sx={{ maxWidth: 400, mb: 4 }}>
        <RumbooInput label="Email" />
        <RumbooInput label="Error" error helperText="Campo requerido" />
      </Stack>

      {/* CARD */}
      <Typography variant="h5" sx={{ mb: 2 }}>Trip Card</Typography>
      <Box sx={{ maxWidth: 350, mb: 4 }}>
        <TripCard
          title="Viaje a Cartagena"
          destination="Cartagena"
          date="12 - 18 Junio"
          status="planning"
          members={[{ name: 'E' }, { name: 'A' }]}
        />
      </Box>

      {/* EMPTY */}
      <Typography variant="h5" sx={{ mb: 2 }}>Empty State</Typography>
      <EmptyState />

      {/* HEADER */}
      <Typography variant="h5" sx={{ mb: 2 }}>Section Header</Typography>
      <SectionHeader
        title="Mis viajes"
        action={<CreateTripButton />}
      />
    </Box>
  );
}