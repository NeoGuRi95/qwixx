import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Lock } from '@material-ui/icons';

// Define the type for each color's score row
type ScoreRow = boolean[];

// Define the type for all the score rows
interface Scores {
  red: ScoreRow;
  yellow: ScoreRow;
  green: ScoreRow;
  blue: ScoreRow;
}

// Initial state for each color row
const initialRow = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const QwixxSheet: React.FC = () => {
  const [scores, setScores] = useState<Scores>({
    red: Array(initialRow.length).fill(false),
    yellow: Array(initialRow.length).fill(false),
    green: Array(initialRow.length).fill(false),
    blue: Array(initialRow.length).fill(false),
  });

  // Toggle the checked state for a specific number in a color row
  const handleCheck = (color: keyof Scores, index: number) => {
    setScores((prevScores) => {
      const newScores = { ...prevScores };
      newScores[color][index] = !newScores[color][index];
      return newScores;
    });
  };

  return (
    <Box sx={{ width: '100%', py: '10px', backgroundColor: '#d3d3d3d3' }}>
      {Object.keys(scores).map((color) => (
        <Box key={color} sx={{ marginBottom: '5px' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '5px',
              backgroundColor: color,
            }}
          >
            {initialRow.map((number, index) => (
              <Box
                key={number}
                onClick={() => handleCheck(color as keyof Scores, index)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '25px',
                  height: '30px',
                  opacity: 0.8,
                  backgroundColor: 'white',
                  color: scores[color as keyof Scores][index] ? '#fff' : '#000',
                  borderColor: 'white',
                  borderRadius: '5px',
                }}
              >
                <Typography>{number}</Typography>
              </Box>
            ))}
            <IconButton>
              <Lock />
            </IconButton>
          </Box>
        </Box>
      ))}
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', gap: '2px' }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '25px',
              height: '20px',
              backgroundColor: 'rgb(255, 0, 0, 0.3)',
              border: '1px solid #ff0000',
              borderRadius: '5px',
            }}
          >
            {/* red score */}66
          </Box>
          +
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '25px',
              height: '20px',
              backgroundColor: 'rgb(255, 215, 0, 0.3)',
              border: '1px solid #ffd700',
              borderRadius: '5px',
            }}
          >
            {/* yellow score */}66
          </Box>
          +
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '25px',
              height: '20px',
              backgroundColor: 'rgb(0, 128, 0, 0.3)',
              border: '1px solid #008000',
              borderRadius: '5px',
            }}
          >
            {/* green score */}66
          </Box>
          +
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '25px',
              height: '20px',
              backgroundColor: 'rgb(0, 0, 255, 0.3)',
              border: '1px solid #0000ff',
              borderRadius: '5px',
            }}
          >
            {/* blue score */}66
          </Box>
          -
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '25px',
              height: '20px',
              backgroundColor: 'rgb(105, 105,105, 0.3)',
              border: '1px solid #696969',
              borderRadius: '5px',
            }}
          >
            66
          </Box>
          =
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '35px',
              height: '20px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #000000',
              borderRadius: '5px',
            }}
          >
            300
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: '2px' }}>
          <Box
            sx={{
              width: '30px',
              height: '30px',
              border: '1px solid #000000',
              borderRadius: '5px',
            }}
          >
            x
          </Box>
          <Box
            sx={{
              width: '30px',
              height: '30px',
              border: '1px solid #000000',
              borderRadius: '5px',
            }}
          >
            x
          </Box>
          <Box
            sx={{
              width: '30px',
              height: '30px',
              border: '1px solid #000000',
              borderRadius: '5px',
            }}
          >
            x
          </Box>
          <Box
            sx={{
              width: '30px',
              height: '30px',
              border: '1px solid #000000',
              borderRadius: '5px',
            }}
          >
            x
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default QwixxSheet;
