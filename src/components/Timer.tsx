interface TimerProps {
  time: number;
}

const Timer = ({ time }: TimerProps) => {
  return (
    <div className="text-lg sm:text-6xl font-bold text-blue-900 bg-white rounded-xl p-6 shadow-lg sm:min-w-32  text-center">
      {time}
    </div>
  );
};

export default Timer;
