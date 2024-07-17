import { useEffect } from "react";

interface TimerProps {
  timeLeft: number;
  setTimeleft: (time: number) => void;
  handleTimerExpired: () => void;
}

const Timer = ({ timeLeft, setTimeleft, handleTimerExpired }: TimerProps) => {
  const percentageLeft = (timeLeft / 10) * 100;
  useEffect(() => {
    if (timeLeft > 0) {
      const interval = setInterval(() => setTimeleft(timeLeft - 1), 1000);
      return () => clearInterval(interval);
    }
    if (timeLeft === 0) {
      handleTimerExpired();
    }
  }, [timeLeft, setTimeleft, handleTimerExpired]);

  return (
    <div
      className="transition-all ease-in-out duration-200 fixed top-0 left-0 flex flex-col justify-center overflow-hidden bg-green-600"
      style={{ width: `${percentageLeft}%` }}
    >
      &nbsp;
    </div>
  );
};

export default Timer;
