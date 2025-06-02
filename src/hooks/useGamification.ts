import { useEffect, useState } from 'react';

export function useGamification(score: number) {
  const [level, setLevel] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const levelUpThreshold = 100;
    const newLevel = Math.floor(score / levelUpThreshold) + 1;
    const newProgress = (score % levelUpThreshold) / levelUpThreshold * 100;
    setLevel(newLevel);
    setProgress(newProgress);
  }, [score]);

  return { level, progress };
}