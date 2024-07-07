import { useEffect, useState } from "react";

const Timer = () => {
  const [timerInterval, setTimerInterval] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerInterval;
    if (isRunning) {
      timerInterval = setInterval(() => {
        setTimerInterval((prevCounter) => prevCounter + 1);
      }, 100); // Run every second (100 milliseconds)
    } else {
      clearInterval(timerInterval);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTimerInterval(0);
  };

  return (
    <div>
      <p id="counter">Time is: {timerInterval}</p>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
      <button onClick={resetTimer}>Reset Timer</button>
    </div>
  );
};

export default Timer;
