interface SplashScreenProps {
  onStartGame: () => void;
}

const SplashScreen = ({ onStartGame }: SplashScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold mb-8">Kommuneflip</h1>
      <button
        onClick={onStartGame}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Start
      </button>
    </div>
  );
};

export default SplashScreen;
