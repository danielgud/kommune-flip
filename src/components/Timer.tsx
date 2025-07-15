interface TimerProps {
  time: number;
}

const Timer = ({ time }: TimerProps) => {
  return (
    <div
      className="
        font-bold text-blue-900 bg-white shadow-lg
        rounded-tl-xl rounded-bl-xl
        p-3 sm:p-6
        w-auto sm:w-64
        text-2xl sm:text-5xl
        flex justify-center items-center
      "
    >
      {time.toFixed(2)}
    </div>
  );
};

export default Timer;
