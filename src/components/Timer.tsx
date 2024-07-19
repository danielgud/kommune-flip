interface TimerProps {
  time: number;
}

const Timer = ({ time }: TimerProps) => {
  return (
    <div className="text-6xl font-bold text-blue-900 bg-white rounded-xl p-6 shadow-lg min-w-32 text-center">
      {time}
    </div>
  );
};

export default Timer;
