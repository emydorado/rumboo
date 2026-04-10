import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

import RumbooButton from '../components/RumbooButton';
import RumbooInput from '../components/RumbooInput';
import TripCard from '../components/TripCard';
import EmptyState from '../components/EmptyState';
import SectionHeader from '../components/SectionHeader';
import CreateTripButton from '../components/CreateTripButton';
import TripCardNoImg from '../components/TripCardNoImg';
import SearcBar from '../components/SearcBar';
import InfoCard from '../components/InfoCard';
import StepCard from '../components/StepCard';
import ExpenseRow from '../components/ExpenseRow';
import BalanceRow from '../components/BalanceRow';
import ItineraryItem from '../components/ItineraryItem';
import ItineraryDayGroup from '../components/ItineraryDayGroup';

export default function DesignSystem() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" sx={{ mb: 4 }}>
        Design System
      </Typography>
      {/* BUTTONS */}

      <Typography variant="h5" sx={{ mb: 2 }}>
        Buttons
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
        <RumbooButton variant="contained">Crear viaje</RumbooButton>
        <RumbooButton variant="text">Ver cómo funciona</RumbooButton>
      </Stack>

      {/* INPUTS */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        Inputs
      </Typography>
      <Stack spacing={2} sx={{ maxWidth: 400, mb: 4 }}>
        <RumbooInput label="Email" />
        <RumbooInput label="Error" error helperText="Campo requerido" />
      </Stack>
      {/* CARD */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        Trip Card
      </Typography>
      <Box sx={{ maxWidth: 350, mb: 4 }}>
        <TripCard
          title="Viaje a Cartagena"
          destination="Cartagena"
          date="12 - 18 Junio"
          status="planning"
          members={[{ name: 'E' }, { name: 'A' }]}
        />
      </Box>
      {/* SEARCH BAR */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        Search Bar
      </Typography>
      <Box sx={{ maxWidth: 500, mb: 4 }}>
        <SearcBar placeholder="Buscar viajes..." />
      </Box>
      {/* CARD NO IMG */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        Trip Card
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 2,
          maxWidth: 700,
          mb: 4,
        }}
      >
        <TripCardNoImg
          title="Barcelona con amigos"
          destination="Barcelona, España"
          dateRange="15 – 20 Jun 2026"
          members={[{ name: 'Ana' }, { name: 'Carlos' }, { name: 'Laura' }]}
          balance="owes"
          owesAmount="€35"
        />
        <TripCardNoImg
          title="Fin de semana Roma"
          destination="Roma, Italia"
          dateRange="3 – 5 Jul 2026"
          members={[{ name: 'Miguel' }, { name: 'Diana' }]}
          balance="ok"
        />
      </Box>
      {/* EMPTY */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        Empty State
      </Typography>
      <EmptyState />
      {/* HEADER */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        Section Header
      </Typography>
      <SectionHeader title="Mis viajes" action={<CreateTripButton />} />

      {/* info cards */}
      <Box
        sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}
      >
        <InfoCard
          icon={PlaceOutlinedIcon}
          title="Barcelona Trip"
          subtitle="4 personas · Jun 15–20"
        />
        <InfoCard
          icon={CreditCardOutlinedIcon}
          title="Budget"
          subtitle="€1,240 total"
        />
        <InfoCard
          icon={CalendarTodayOutlinedIcon}
          title="Actividades"
          subtitle="12 planeadas"
        />
      </Box>

      {/* step cards */}
      <Box
        sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}
      >
        <StepCard
          step="01"
          title="Crea un viaje"
          description="Ponle nombre, fechas e invita a tu grupo."
        />
        <StepCard
          step="02"
          title="Planifica juntos"
          description="Agrega actividades, itinerarios y notas compartidas."
        />
        <StepCard
          step="03"
          title="Divide gastos"
          description="Registra gastos y ve quién debe qué al instante."
        />
      </Box>

      {/* EXPENSE ROW */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        Expense Row
      </Typography>
      <Stack spacing={1.5} sx={{ maxWidth: 600, mb: 4 }}>
        <ExpenseRow
          title="Hotel 3 noches"
          date="15 Jun"
          paidBy="Ana"
          amount="€480"
          splitCount={4}
        />
        <ExpenseRow
          title="Cena restaurante"
          date="16 Jun"
          paidBy="Carlos"
          amount="€120"
          splitCount={4}
        />
      </Stack>

      {/* BALANCE ROW */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        Balance Row
      </Typography>
      <Stack spacing={1.5} sx={{ maxWidth: 600, mb: 4 }}>
        <BalanceRow
          name="Ana"
          paid="€480"
          owes="€187.25"
          balance="+€292.75"
          isPositive={true}
        />
        <BalanceRow
          name="Carlos"
          paid="€120"
          owes="€230.00"
          balance="-€110.00"
          isPositive={false}
          avatarColor="#075056"
        />
      </Stack>

      {/* ITINERARY ITEM */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        Itinerary Item
      </Typography>
      <Stack spacing={1} sx={{ maxWidth: 500, mb: 4 }}>
        <ItineraryItem emoji="✈️" title="Llegada a Barcelona" />
        <ItineraryItem emoji="🏨" title="Check-in Hotel Arts" />
      </Stack>

      {/* ITINERARY DAY GROUP */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        Itinerary Day Group
      </Typography>
      <Stack spacing={3} sx={{ maxWidth: 500, mb: 4 }}>
        <ItineraryDayGroup
          dayNumber={1}
          date="15 Jun"
          activities={[
            { emoji: '✈️', title: 'Llegada a Barcelona' },
            { emoji: '🏨', title: 'Check-in Hotel Arts' },
            { emoji: '🍽️', title: 'Cena en Barceloneta' },
          ]}
        />
        <ItineraryDayGroup
          dayNumber={2}
          date="16 Jun"
          activities={[
            { emoji: '🎨', title: 'Visita al Picasso Museum' },
            { emoji: '🚶', title: 'Paseo por el Born' },
          ]}
        />
      </Stack>
    </Box>
  );
}
