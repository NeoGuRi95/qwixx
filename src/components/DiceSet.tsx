import { Box } from '@mui/material';
import { useRef } from 'react';
import ReactDice, { ReactDiceRef } from 'react-dice-complete';

// 공통 props 객체
const commonDiceProps = {
  disableIndividual: true,
  rollTime: 1,
  numDice: 1,
  outline: true,
  outlineColor: '#d3d3d3',
};

const DiceSet = () => {
  const whiteDiceRef1 = useRef<ReactDiceRef>(null);
  const whiteDiceRef2 = useRef<ReactDiceRef>(null);
  const redDiceRef = useRef<ReactDiceRef>(null);
  const blueDiceRef = useRef<ReactDiceRef>(null);
  const yellowDiceRef = useRef<ReactDiceRef>(null);
  const greenDiceRef = useRef<ReactDiceRef>(null);

  const rollDone = (totalValue: number, values: number[]) => {
    console.log('individual die values array:', values);
    console.log('total dice value:', totalValue);
  };

  const rollAll = () => {
    whiteDiceRef1.current?.rollAll();
    whiteDiceRef2.current?.rollAll();
    redDiceRef.current?.rollAll();
    blueDiceRef.current?.rollAll();
    yellowDiceRef.current?.rollAll();
    greenDiceRef.current?.rollAll();
  };

  return (
    <Box onClick={rollAll} sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {/* white dice 1 */}
        <ReactDice
          {...commonDiceProps}
          faceColor="#f5f5f5"
          dotColor="#000000"
          ref={whiteDiceRef1}
          rollDone={rollDone}
        />
        {/* red dice */}
        <ReactDice
          {...commonDiceProps}
          faceColor="#ff0000"
          dotColor="#ffffff"
          ref={redDiceRef}
          rollDone={rollDone}
        />
        {/* blue dice */}
        <ReactDice
          {...commonDiceProps}
          faceColor="#0000ff"
          dotColor="#ffffff"
          ref={blueDiceRef}
          rollDone={rollDone}
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {/* white dice 2 */}
        <ReactDice
          {...commonDiceProps}
          faceColor="#f5f5f5"
          dotColor="#000000"
          ref={whiteDiceRef2}
          rollDone={rollDone}
        />

        {/* yellow dice */}
        <ReactDice
          {...commonDiceProps}
          faceColor="#ffd700"
          dotColor="#ffffff"
          ref={yellowDiceRef}
          rollDone={rollDone}
        />
        {/* green dice */}
        <ReactDice
          {...commonDiceProps}
          faceColor="#008000"
          dotColor="#ffffff"
          ref={greenDiceRef}
          rollDone={rollDone}
        />
      </Box>
    </Box>
  );
};

export default DiceSet;
