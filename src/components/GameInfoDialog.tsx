import { Box, Typography } from '@mui/material';

// score info array
const scoreInfo = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78];

const GameInfoDialog = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {scoreInfo.map((score, index) => (
        <Box
          key={score}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '25px',
            height: 'fit-content',
            border: '1px solid #696969',
            borderRadius: '5px',
          }}
        >
          <Typography sx={{ fontSize: '14px' }}>{index + 1}x</Typography>
          <Typography sx={{ fontSize: '14px' }}>{score}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default GameInfoDialog;
