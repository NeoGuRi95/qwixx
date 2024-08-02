import { Grid } from '@mui/material';
import UserList from './UserList';
import DiceSet from './DiceSet';
import Sheet from './Sheet';

const RoomPage = () => {
  return (
    <Grid container direction="column" sx={{ height: '100%' }}>
      <Grid item xs={2}>
        <UserList />
      </Grid>
      <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
        <DiceSet />
      </Grid>
      <Grid item xs={7}>
        <Sheet />
      </Grid>
    </Grid>
  );
};

export default RoomPage;
