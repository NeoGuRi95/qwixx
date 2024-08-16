import React, { useEffect, useMemo, useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Clear, Lock, LockOpen } from '@material-ui/icons';

interface Scores {
  red: boolean[];
  yellow: boolean[];
  green: boolean[];
  blue: boolean[];
}

interface ScoresSum {
  red: number;
  yellow: number;
  green: number;
  blue: number;
}

interface ScoresLock {
  red: boolean;
  yellow: boolean;
  green: boolean;
  blue: boolean;
}

// 빨강, 노랑 점수 배열
const ascScoreRow = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// 초록, 파랑 점수 배열
const descScoreRow = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

// 점수 배열
const scoreInfo = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78];

const scoresSumCommonStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '25px',
  height: '20px',
  borderRadius: '5px',
  backgroundColor: '#FFFFFF',
  border: '1px solid #696969',
};

// 점수 합계 칸 정보
const scoresSumColorStyle: Record<keyof ScoresSum, object> = {
  red: {
    backgroundColor: 'rgb(255, 0, 0, 0.3)',
    border: '1px solid #ff0000',
  },
  yellow: {
    backgroundColor: 'rgb(255, 215, 0, 0.3)',
    border: '1px solid #ffd700',
  },
  green: {
    backgroundColor: 'rgb(0, 128, 0, 0.3)',
    border: '1px solid #008000',
  },
  blue: {
    backgroundColor: 'rgb(0, 0, 255, 0.3)',
    border: '1px solid #0000ff',
  },
};

const Sheet: React.FC = () => {
  // 색상 점수 선택 상태
  const [scores, setScores] = useState<Scores>({
    red: Array(ascScoreRow.length).fill(false),
    yellow: Array(ascScoreRow.length).fill(false),
    green: Array(descScoreRow.length).fill(false),
    blue: Array(descScoreRow.length).fill(false),
  });
  // 색상 잠금 상태
  const [locks, setLocks] = useState<ScoresLock>({
    red: false,
    yellow: false,
    green: false,
    blue: false,
  });
  // 실패 선택 상태
  const [penalties, setPenalties] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  // 색상 점수 합계 배열
  const [scoresSum, setScoresSum] = useState<ScoresSum>({
    red: 0,
    yellow: 0,
    green: 0,
    blue: 0,
  });

  // 점수 선택 배열을 확인하여 함계 점수 계산
  const calculateScore = (scores: boolean[]): number => {
    return (
      scoreInfo[
        scores.reduce((sum, currentValue) => {
          return currentValue ? sum + 1 : sum;
        }, -1)
      ] ?? 0
    );
  };

  // 점수 선택
  const handleCheckScore = (color: keyof Scores, index: number) => {
    // 점수 선택 상태 업데이트
    const newScores = { ...scores };
    newScores[color][index] = !scores[color][index];
    setScores(newScores);
    // 점수 합계 상태 업데이트
    const newScoresSum = { ...scoresSum };
    newScoresSum[color] = calculateScore(newScores[color]);
    setScoresSum(newScoresSum);
  };

  const handleCheckLock = (color: keyof ScoresLock) => {
    const newLocks = { ...locks };
    newLocks[color] = !locks[color];
    setLocks(newLocks);
  };

  // 실패 칸 선택
  const handleCheckPenalty = (index: number) => {
    const newPenalties = [...penalties];
    newPenalties[index] = !penalties[index];
    setPenalties(newPenalties);
  };

  // 색상 점수 합계 계산
  const totalScoresSum = useMemo(() => {
    return Object.values(scoresSum).reduce((total, score) => total + score, 0);
  }, [scoresSum]);

  // 실패 점수 합계 계산
  const totalPenaltySum = useMemo(() => {
    return (
      penalties.reduce((count, currentValue) => {
        return currentValue ? count + 1 : count;
      }, 0) * 5
    );
  }, [penalties]);

  return (
    <Box
      sx={{
        width: '100%',
        py: '10px',
        px: '5px',
        // backgroundColor: '#d3d3d3d3',
        backgroundImage:
          'url(https://img.freepik.com/free-photo/white-paper-texture_1194-5998.jpg)',
      }}
    >
      {/* 색상 행 (빨강, 노랑, 초록, 파랑) */}
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
            {(color === 'red' || color === 'yellow'
              ? ascScoreRow
              : descScoreRow
            ).map((number, index) => (
              <Box
                key={number}
                onClick={() => handleCheckScore(color as keyof Scores, index)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '25px',
                  height: '30px',
                  opacity: 0.8,
                  backgroundColor: 'white',
                  color: scores[color as keyof Scores][index]
                    ? '#696969'
                    : '#000',
                  borderColor: 'white',
                  borderRadius: '5px',
                }}
              >
                <Typography>{number}</Typography>
              </Box>
            ))}
            <IconButton
              onClick={() => handleCheckLock(color as keyof ScoresLock)}
            >
              {locks[color as keyof ScoresLock] ? <Lock /> : <LockOpen />}
            </IconButton>
          </Box>
        </Box>
      ))}
      {/* 점수 합계 & 실패 칸 */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2px',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          {/* 색상 점수 합계 칸 */}
          {Object.keys(scores).map((color, index) => (
            <>
              <Box
                key={color}
                sx={{
                  ...scoresSumCommonStyle,
                  ...scoresSumColorStyle[color as keyof ScoresSum],
                }}
              >
                <Typography>{scoresSum[color as keyof ScoresSum]}</Typography>
              </Box>
              <Typography>{index !== 3 ? '+' : undefined}</Typography>
            </>
          ))}
          {/* 실패 점수 합계 칸 */}
          <>
            <Typography>-</Typography>
            <Box
              sx={{
                ...scoresSumCommonStyle,
              }}
            >
              <Typography>{totalPenaltySum}</Typography>
            </Box>
          </>
          {/* 총 점수 합계 칸 */}
          <>
            <Typography>=</Typography>
            <Box
              sx={{
                ...scoresSumCommonStyle,
              }}
            >
              <Typography>{totalScoresSum - totalPenaltySum}</Typography>
            </Box>
          </>
        </Box>
        {/* 실패 칸 */}
        <Box sx={{ display: 'flex', gap: '2px' }}>
          {penalties.map((penalty, index) => (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '30px',
                height: '30px',
                border: '1px solid #000000',
                borderRadius: '5px',
              }}
              onClick={() => handleCheckPenalty(index)}
            >
              {penalty ? <Clear /> : undefined}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sheet;
