import { Clouds } from "./Clouds";
import { Sun } from "./Sun";

interface SplashScreenProps {
  onStartGame: () => void;
}

const SplashScreen = ({ onStartGame }: SplashScreenProps) => {
  return (
    <div className="flex flex-col items-center h-full overflow-hidden">
      <div className="mr-auto fixed w-full z-10">
        <Clouds />
      </div>
      <div className="fixed ml-auto top-60 right-1/4 -translate-y-1/4 -translate-x-1/3 z-0">
        <Sun />
      </div>
      <h1 className="text-4xl font-bold mb-8 sr-only">Kommune Flip</h1>
      <img
        src="/logo.svg"
        alt="Kommuneflip logo"
        className="z-20 w-[600px] mx-auto animate-wiggle p-8 pb-0 pt-56"
      />
      <button
        onClick={onStartGame}
        className="z-20 bg-blue-900 text-white text-3xl text-bold px-10 py-4 mt-8 rounded-xl hover:scale-110 transition-all shadow-white-500/70 shadow-sm hover:shadow-lg hover:shadow-white-500/70 outline-none focus-visible:ring-4 ring-offset-4 ring-offset-focus select-none"
      >
        Start flippingen!
      </button>
      <div
        className="absolute bottom-5 left-10 w-40 h-auto animate-bounce group"
        aria-hidden="true"
      >
        <img src="sheep.svg" />
        <p className="text-white text-right hidden group-hover:block animate-ping">
          Zup
        </p>
      </div>
      <img
        src="ksd.svg"
        alt="KS Digital logo"
        className="absolute bottom-5 right-5 w-20 h-auto opacity-60"
      />
    </div>
  );
};

export default SplashScreen;
