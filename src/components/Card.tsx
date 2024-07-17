import classNames from "classnames";
import { createRef, useEffect, useState } from "react";

interface CardProps {
  index: number;
  image: string;
  isFlipped: boolean;
  cardFlipDuration: number;
  handleClick: (index: number) => void;
}

const Card = ({
  index,
  image,
  isFlipped,
  handleClick,
  cardFlipDuration,
}: CardProps) => {
  const cardRef = createRef<HTMLDivElement>();
  const glowRef = createRef<HTMLDivElement>();
  const [bounds, setBounds] = useState<DOMRect>();

  useEffect(() => {
    const currentCard = cardRef.current!;
    const currentGlowRef = glowRef.current!;
    const rotateToMouse = (event: MouseEvent) => {
      if (!bounds) return;

      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2,
      };
      currentGlowRef.style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          #ffffff55,
          #0000000f
        )
      `;
    };

    currentCard.addEventListener("mouseenter", () => {
      const cardBounds = currentCard.getBoundingClientRect();
      setBounds(cardBounds);
      currentCard.addEventListener("mousemove", rotateToMouse);
    });
    currentCard.addEventListener("mouseleave", () => {
      currentCard.style.transform = "none";
      currentCard.style.background = "none";
      currentGlowRef.style.backgroundImage = "";
      currentCard.removeEventListener("mousemove", rotateToMouse);
    });
  }, [bounds, cardRef, glowRef]);

  const handleCardClick = () => {
    handleClick(index);
  };

  return (
    <div
      ref={cardRef}
      className={classNames(
        "relative cursor-pointer select-none duration-[150ms] shadow-card hover:shadow-card-hover transition-transform-shadow rounded-lg",
        {
          "pointer-events-none": isFlipped,
        }
      )}
      onClick={handleCardClick}
    >
      {/* Card content */}
      <div
        style={{ transformStyle: "preserve-3d" }}
        className={classNames(
          `absolute inset-0 transition-transform duration-${cardFlipDuration}`,
          {
            "transform rotate-y-180": isFlipped,
          }
        )}
      >
        {/* Back of card */}
        <div
          className={classNames(
            "absolute w-full h-full flex justify-center content-center bg-gray-600 rounded-lg"
          )}
        >
          <img
            src={image}
            alt=""
            className="w-50 h-50 p-10 mx-auto my-0 backface-hidden"
          />
        </div>

        {/* Front of card */}
        <div
          className={classNames(
            "absolute inset-0 bg-gray-800 backface-hidden flex items-center justify-center rounded-lg"
          )}
        >
          <div
            ref={glowRef}
            className="absolute w-full h-full left-0 top-0 bg-custom-radial"
          ></div>
          <img
            src="/ks-logo-negative.png"
            alt="ks-logo"
            className="w-20 h-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
