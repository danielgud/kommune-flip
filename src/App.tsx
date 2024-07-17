import { useState } from "react";
import Game from "./components/Game";
import SplashScreen from "./components/SplashScreen";

const App = () => {
  const [gameStarted, setGameStarted] = useState(true);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="h-screen mx-auto">
        {!gameStarted ? (
          <SplashScreen onStartGame={handleStartGame} />
        ) : (
          <Game numberOfCards={8} cardFlipDuration={400} secondsToCompletion={20} />
        )}
    </div>
  );
};

export default App;
