import { useState } from "react";
import Game from "./components/Game";
import SplashScreen from "./components/SplashScreen";
import { TwoPlayerPrompt } from "./components/TwoPlayerPrompt";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  const [numberOfCards, setNumberOfCards] = useState<number | null>(null);
  const [isTwoPlayer, setIsTwoPlayer] = useState<boolean | null>(null);
  const [player1, setPlayer1] = useState<string | null>(null);
  const [player2, setPlayer2] = useState<string | null>(null);

  const handleStartGame = (cardCount: number, twoPlayer: boolean) => {
    setNumberOfCards(cardCount);
    setIsTwoPlayer(twoPlayer);
  };

  const handleTwoPlayerNames = (p1: string, p2: string) => {
    setPlayer1(p1);
    setPlayer2(p2);
  };

  const readyToStart =
    numberOfCards !== null &&
    isTwoPlayer !== null &&
    (isTwoPlayer ? player1 && player2 : true);

  return (
    <main className="h-screen mx-auto bg-[url('/bg.png')] bg-no-repeat bg-cover">
      {!numberOfCards || isTwoPlayer === null ? (
        <SplashScreen onStartGame={handleStartGame} />
      ) : isTwoPlayer && (!player1 || !player2) ? (
        <TwoPlayerPrompt onSubmit={handleTwoPlayerNames} />
      ) : readyToStart ? (
        <Game
          numberOfCards={numberOfCards!}
          cardFlipDuration={400}
          isTwoPlayer={isTwoPlayer!}
          player1={player1 || ""}
          player2={player2 || ""}
        />
      ) : null}
      <Analytics />
    </main>
  );
};

export default App;