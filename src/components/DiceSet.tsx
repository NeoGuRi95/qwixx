import { Soap } from '@mui/icons-material';
import { Box, Button, IconButton } from '@mui/material';
import { useRef } from 'react';
import ReactDice, { ReactDiceRef } from 'react-dice-complete';

const DiceSet = () => {
  const whiteDiceRef = useRef<ReactDiceRef>(null);
  const redDiceRef = useRef<ReactDiceRef>(null);
  const blueDiceRef = useRef<ReactDiceRef>(null);
  const yellowDiceRef = useRef<ReactDiceRef>(null);
  const greenDiceRef = useRef<ReactDiceRef>(null);

  const rollDone = (totalValue: number, values: number[]) => {
    console.log('individual die values array:', values);
    console.log('total dice value:', totalValue);
  };

  const rollAll = () => {
    whiteDiceRef.current?.rollAll();
    redDiceRef.current?.rollAll();
    blueDiceRef.current?.rollAll();
    yellowDiceRef.current?.rollAll();
    greenDiceRef.current?.rollAll();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex' }}>
        {/* white dice */}
        <ReactDice
          disableIndividual
          numDice={2}
          rollTime={1}
          ref={whiteDiceRef}
          rollDone={rollDone}
        />
        {/* red, blue, yellow, green dice */}
        {[redDiceRef, blueDiceRef, yellowDiceRef, greenDiceRef].map(
          (diceRef) => (
            <ReactDice
              disableIndividual
              numDice={1}
              rollTime={1}
              ref={diceRef}
              rollDone={rollDone}
            />
          )
        )}
      </Box>
      <IconButton onClick={rollAll}>
        <Soap fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default DiceSet;
