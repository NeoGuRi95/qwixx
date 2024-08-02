import { Container } from '@mui/material';
import GameRoomPage from './RoomPage';

const Layout = () => {
  return (
    <Container id="layout-container" sx={{ height: '100vh', px: '8px' }}>
      <GameRoomPage />
    </Container>
  );
};

export default Layout;
