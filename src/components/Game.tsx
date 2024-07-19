import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import { Kommune, kommuner } from "../assets/kommuner";
import { shuffleArray } from "../utils/utils";
import Card from "./Card";
import { NamePrompt } from "./NamePrompt";
import { TopList } from "./TopList";

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
  const [time] = useState(secondsToCompletion);
  const [isGameFinished, setIsGameFinished] = useState(true);
  const [liveRegionContent, setLiveRegionContent] = useState("");
  const [playerName, setPlayername] = useState("");

  useEffect(() => {
    shuffleArray(cards);
    setCards(cards);
  }, [cards]);

  const isCardsEqual = (firstCard: Kommune, secondCard: Kommune) => {
    return firstCard.image === secondCard.image;
  };

  const handleMatch = (firstIndex: number, secondIndex: number) => {
    setMatchedIndices([...matchedIndices, firstIndex, secondIndex]);
    setLiveRegionContent(`Du fant et et par! ` + cards[firstIndex].navn);
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    setFlippedIndices([]);
  };

  const handleNonMatch = () => {
    setLiveRegionContent("Det var ikke et par.");
    setTimeout(() => setFlippedIndices([]), cardFlipDuration * 2);
  };

  const handleCardClick = (index: number) => {
    if (flippedIndices.length === 2 || flippedIndices.includes(index)) return;

    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);

    if (newFlippedIndices.length === 2) {
      const [firstIndex, secondIndex] = newFlippedIndices;
      if (isCardsEqual(cards[firstIndex], cards[secondIndex])) {
        handleMatch(firstIndex, secondIndex);
      } else {
        handleNonMatch();
      }
    }
  };

  const handleSubmitName = (name: string) => {
    setPlayername(name);
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
      <div aria-live="polite" aria-atomic={true} className="sr-only">
        {liveRegionContent}
      </div>
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
      {isGameFinished && !playerName && <NamePrompt time={time} onTypedName={(name) => handleSubmitName(name)}/>}
      {playerName && <TopList name={playerName} time={time} />}
    </>
  );
};

export default Game;
