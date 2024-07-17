import { useEffect, useState } from "react";
import { images } from "../assets/images";
import { shuffleArray } from "../utils/utils";
import Card from "./Card";
import Modal from "./Modal";
import Timer from "./Timer";

type GameProps = {
  numberOfCards: number;
  cardFlipDuration: number;
  secondsToCompletion: number;
};

const Game = ({ numberOfCards, cardFlipDuration, secondsToCompletion }: GameProps) => {
  const pickedImages = images(numberOfCards / 2);
  const [cards, setCards] = useState<string[]>([
    ...pickedImages,
    ...pickedImages,
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
        setFlippedIndices([]);
      } else {
        setTimeout(() => setFlippedIndices([]), cardFlipDuration * 2);
      }
    }
  };

  const handleTimerExpired = () => {
    setIsGameFinished(true);
  }

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
      <Timer
        timeLeft={time}
        setTimeleft={setTimeleft}
        handleTimerExpired={handleTimerExpired}
      />
      <div className="grid gap-4 grid-cols-4 w-full h-full p-4 pt-8">
        {cards.map((card, index) => (
          <Card
            key={index}
            index={index}
            image={card}
            isFlipped={
              flippedIndices.includes(index) || matchedIndices.includes(index)
            }
            cardFlipDuration={cardFlipDuration}
            handleClick={handleCardClick}
          />
        ))}
      </div>
      {isGameFinished && <Modal score={score} time={time} />}
    </>
  );
};

export default Game;
