import { useEffect } from "react";

interface TimerProps {
  timeLeft: number;
  setTimeleft: (time: number) => void;
  isGameFinished: boolean;
}

const Timer = ({
  timeLeft,
  setTimeleft,
  isGameFinished,
}: TimerProps) => {
  const secondsLeft = timeLeft;
  const percentageLeft = (secondsLeft / 20) * 100;
  useEffect(() => {
    if (isGameFinished) return;
    const interval = setInterval(() => setTimeleft(timeLeft - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft, setTimeleft, isGameFinished]);

  return (
    <div
      className="transition-all ease-in-out duration-1000 fixed top-0 left-0 flex flex-col justify-center overflow-hidden bg-green-600"
      style={{ width: `${percentageLeft}%` }}
    >&nbsp;</div>
  );
};

export default Timer;
