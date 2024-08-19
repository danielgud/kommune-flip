interface TimerProps {
  time: number;
}

const Timer = ({ time }: TimerProps) => {
  return (
    <div className="text-lg sm:text-6xl font-bold text-blue-900 bg-white rounded-tl-xl rounded-bl-xl p-6 shadow-lg w-64">
      {time}
    </div>
  );
};

export default Timer;
