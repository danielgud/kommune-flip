import { useState } from "react";
import Game from "./components/Game";
import SplashScreen from "./components/SplashScreen";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <main className="h-screen mx-auto bg-[url('/bg.png')] bg-no-repeat bg-cover">
      {!gameStarted ? (
        <SplashScreen onStartGame={handleStartGame} />
      ) : (
        <Game numberOfCards={16} cardFlipDuration={400} />
      )}
      <Analytics />
    </main>
  );
};

export default App;
