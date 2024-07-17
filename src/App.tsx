import { useState } from "react";
import GameBoard from "./components/GameBoard";
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
          <GameBoard />
        )}
    </div>
  );
};

export default App;
