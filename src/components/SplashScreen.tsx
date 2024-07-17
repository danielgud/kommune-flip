import { Clouds } from "./Clouds";
import { Sun } from "./sun";

interface SplashScreenProps {
  onStartGame: () => void;
}

const SplashScreen = ({ onStartGame }: SplashScreenProps) => {
  return (
    <div className="flex flex-col items-center  h-full">
      {/* <div>
        <Clouds />
      </div> */}
      <div className="ml-auto pt-72 pr-96">
        <Sun />
      </div>
      <h1 className="text-4xl font-bold mb-8 sr-only">Kommune Flip</h1>
      <img
        src="/logo.svg"
        alt="Logo"
        className="w-1/4 mx-auto animate-wiggle pt-20"
      />
      <button
        onClick={onStartGame}
        className="bg-blue-900 text-white text-3xl text-bold px-10 py-4 mt-8 rounded-xl hover:scale-110 transition-all shadow-white-500/70 shadow-sm hover:shadow-lg hover:shadow-white-500/70 focus:ring-2 ring-offset-4 ring-offset-yellow-400"
      >
        Start flippingen
      </button>
    </div>
  );
};

export default SplashScreen;
