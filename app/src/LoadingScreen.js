
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import logo from './LMBALogo.png';


export default function LoadingScreen() {
  return (
    <Stack spacing={2} direction="column" alignItems="center" className="loading-background" >
       <img src={logo} className="centered-image" />
      <CircularProgress size="4rem" sx={{ color: '#14295C' }} />
    </Stack>
  );
}