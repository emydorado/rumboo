import RumbooButton from './RumbooButton';
import AddIcon from '@mui/icons-material/Add';

export default function CreateTripButton() {
  return (
    <RumbooButton
      variant="contained"
      startIcon={<AddIcon />}
    >
      Nuevo viaje
    </RumbooButton>
  );
}