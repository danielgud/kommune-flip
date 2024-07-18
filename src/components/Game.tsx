import { useEffect, useState } from "react";
import { kommuner } from "../assets/kommuner";
import { shuffleArray } from "../utils/utils";
import Card from "./Card";
import Modal from "./Modal";
import Timer from "./Timer";
import { Kommune } from "../assets/kommuner";
import confetti from "canvas-confetti";

type GameProps = {
  numberOfCards: number;
  cardFlipDuration: number;
  secondsToCompletion: number;
};

const Game = ({
  numberOfCards,
  cardFlipDuration,
  secondsToCompletion,
}: GameProps) => {
  const pickedKommuner = kommuner(numberOfCards / 2);
  const [cards, setCards] = useState<Kommune[]>([
    ...pickedKommuner,
    ...pickedKommuner,
  ]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [matchedIndices, setMatchedIndices] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [time, setTimeleft] = useState(secondsToCompletion);
  const [isGameFinished, setIsGameFinished] = useState(false);

  useEffect(() => {
    shuffleArray(cards);
    setCards(cards);
  }, [cards]);

  const handleCardClick = (index: number) => {
    if (flippedIndices.length === 2 || flippedIndices.includes(index)) return;

    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);

    if (newFlippedIndices.length === 2) {
      const [firstIndex, secondIndex] = newFlippedIndices;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedIndices([...matchedIndices, firstIndex, secondIndex]);
        setScore(score + 1);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
        setFlippedIndices([]);
      } else {
        setTimeout(() => setFlippedIndices([]), cardFlipDuration * 2);
      }
    }
  };

  const handleTimerExpired = () => {
    setIsGameFinished(true);
  };

  useEffect(() => {
    if (
      matchedIndices.length > 0 &&
      cards.length > 0 &&
      matchedIndices.length === cards.length
    ) {
      setIsGameFinished(true);
    }
  }, [matchedIndices, cards]);

  return (
    <>
      {/* <Timer
        timeLeft={time}
        setTimeleft={setTimeleft}
        handleTimerExpired={handleTimerExpired}
      /> */}
      <ul className="grid gap-4 grid-cols-4 w-full h-full p-4 pt-8">
        {cards.map((card, index) => (
          <li key={index}>
            <Card
              index={index}
              kommune={card}
              isFlipped={
                flippedIndices.includes(index) || matchedIndices.includes(index)
              }
              cardFlipDuration={cardFlipDuration}
              handleClick={handleCardClick}
            />
          </li>
        ))}
      </ul>
      {isGameFinished && <Modal score={score} time={time} />}
    </>
  );
};

export default Game;
