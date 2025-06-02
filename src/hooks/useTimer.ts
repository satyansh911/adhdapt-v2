import { useState, useEffect } from 'react';

export function useTimer(initialTime: number) {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && time > 0) {
      interval = setInterval(() => setTime((t) => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = () => setTime(initialTime);

  return { time, isRunning, start, pause, reset };
}
